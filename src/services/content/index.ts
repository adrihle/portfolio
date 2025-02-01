'only server'
import { exec } from "child_process";
import path from "path";
import util from 'util';
import { Locale } from "@/interfaces";
import { RepositoryTranslation } from '@/repositories';
import { ProviderAI } from '@/providers/ai';
import { ProviderDate } from '@/providers/date';
import { ProviderLog } from '@/providers/log';
import { ProviderCache } from "@/providers/cache";
import { APP_SETTINGS } from "@/settings";
import * as helpers from './helpers';
import { RepositoryTranslates } from "@/repositories/translations/translates";

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
  if (locale === APP_SETTINGS.DEFAULT_LOCALE) return text;

  const cachekey = `${page}#${locale}`;
  //
  // if (cache) {
  //   const cachedTranslations = await ProviderCache.get<T>({ key: cachekey });
  //   if (cachedTranslations) return cachedTranslations as T;
  // }

  logger.debug(`Fetching content for ${locale} of page: ${page}`);
  const texts = await RepositoryTranslates.get({ page, locale });

  if (texts) {
    logger.debug(`Found in database content for ${locale} of page: ${page}`);

    const isUpdated = await getIsUpdated({ page, lastUpdate: texts.updatedAt });

    if (isUpdated) {
      await ProviderCache.set({ key: cachekey, value: texts.translations, expire: APP_SETTINGS.CACHE.PAGES.TTL });
      return texts.translations;
    };

    const translations = await ProviderAI.translateText({ locale, text });

    if (!translations) return texts.translations as T;

    await RepositoryTranslation.update({ id: texts._id, payload: { page, locale, translations } })
    await ProviderCache.set({ key: cachekey, value: translations, expire: APP_SETTINGS.CACHE.PAGES.TTL });
    return translations;
  }

  const translations = await ProviderAI.translateText({ locale, text });

  if (!translations) return text;

  logger.debug(`Translate successfull content for ${locale} of page: ${page}`);
  await RepositoryTranslation.create({ locale, page, translations });
  await ProviderCache.set({ key: cachekey, value: translations, expire: APP_SETTINGS.CACHE.PAGES.TTL });
  return translations;
};

const ServiceContent = {
  generatePageTexts,
  ...helpers,
};

export { ServiceContent };
