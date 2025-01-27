'only server'
import { exec } from "child_process";
import path from "path";
import util from 'util';
import { Locale } from "@/interfaces";
import { RepositoryTranslation } from '@/repositories';
import { ProviderAI, ProviderDate, ProviderLog } from '@/providers';

const logger = new ProviderLog('SERVICE CONTENT');
const execPromise = util.promisify(exec);

const getTextFileLastUpdate = async (page: string): Promise<string | null> => {
  const filePath = page === 'home' ? './src/app/[locale]/text.ts' : `./src/app/[locale]/${page}/text.ts`;
  const absolutePath = path.resolve(filePath);
  const relativePath = path.relative(process.cwd(), absolutePath);
  try {
    const { stdout } = await execPromise(`git log -1 --format=%ci -- "${relativePath}"`);
    return stdout.trim();
  } catch (err) {
    logger.error('Error obtaining last update of file', { err });
    return null;
  }
};

type TextPage<T> = {
  page: string;
  locale: Locale;
  text: T;
  translate?: boolean;
  cache?: boolean;
};

const generatePageTexts = async <T>({ page, locale, text, translate = true, cache = true }: TextPage<T>) => {
  if (!translate) return text;

  logger.debug(`Fetching content for ${locale} of page: ${page}`);
  const texts = await RepositoryTranslation.get({ page, locale });

  if (texts) {
    logger.debug(`Found in database content for ${locale} of page: ${page}`);
    const lastUpdateFileDate = await getTextFileLastUpdate(page);

    if (!lastUpdateFileDate) return texts.translations as T;

    const formated = ProviderDate.format({ date: lastUpdateFileDate, format: 'yyyy-MM-dd' })

    const shouldBeUpdate = ProviderDate.isBefore(texts.updatedAt, formated);

    if (!shouldBeUpdate) return texts.translations as T;

    const translations = await ProviderAI.translateText({ locale, text });

    if (translations) {
      await RepositoryTranslation.update({ id: texts._id, payload: { page, locale, translations } })
      return translations;
    }

    return texts.translations as T;
  }

  const translations = await ProviderAI.translateText({ locale, text });

  if (translations) {
    logger.debug(`Translate successfull content for ${locale} of page: ${page}`);
    await RepositoryTranslation.create({ locale, page, translations });
  }

  return (translations as T) || text;
};

const ServiceContent = {
  generatePageTexts,
};

export { ServiceContent };
