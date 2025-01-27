'only server'
import { exec } from "child_process";
import path from "path";
import util from 'util';
import { Locale } from "@/interfaces";
import { RepositoryTranslation } from '@/repositories';
import { ProviderAI, ProviderDate, ProviderLog } from '@/providers';
import { ProviderCache } from "@/providers/cache";
import { APP_SETTINGS } from "@/settings";

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

const getIsUpdated = async ({ page, lastUpdate }: { page: string, lastUpdate: Date }) => {
  const lastUpdateFileDate = await getTextFileLastUpdate(page);
  if (!lastUpdateFileDate) return true;
  const formated = ProviderDate.format({ date: lastUpdateFileDate, format: 'yyyy-MM-dd' })

  return !ProviderDate.isBefore(lastUpdate, formated);
};

type TextPage<T> = {
  page: string;
  locale: Locale;
  text: T;
  cache?: boolean;
};

const generatePageTexts = async <T>({ page, locale, text, cache = true }: TextPage<T>) => {
  const key = `${page}#${locale}`;

  if (cache) {
    const cached = await ProviderCache.get({ key });
    if (cached) return cached;
  }

  logger.debug(`Fetching content for ${locale} of page: ${page}`);
  const texts = await RepositoryTranslation.get({ page, locale });

  if (texts) {
    logger.debug(`Found in database content for ${locale} of page: ${page}`);

    const isUpdated = await getIsUpdated({ page, lastUpdate: texts.updatedAt });

    if (isUpdated) {
      await ProviderCache.set({ key, value: texts.translations, expire: APP_SETTINGS.CACHE.PAGES.TTL });
      return texts.translations;
    };

    const translations = await ProviderAI.translateText({ locale, text });

    if (!translations) return texts.translations as T;

    await RepositoryTranslation.update({ id: texts._id, payload: { page, locale, translations } })
    await ProviderCache.set({ key, value: translations, expire: APP_SETTINGS.CACHE.PAGES.TTL });
    return translations;
  }

  const translations = await ProviderAI.translateText({ locale, text });

  if (!translations) return text;

  logger.debug(`Translate successfull content for ${locale} of page: ${page}`);
  await RepositoryTranslation.create({ locale, page, translations });
  await ProviderCache.set({ key, value: translations, expire: APP_SETTINGS.CACHE.PAGES.TTL });
  return translations;
};

const ServiceContent = {
  generatePageTexts,
};

export { ServiceContent };
