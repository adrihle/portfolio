'only server'
import { Locale } from "@/interfaces";
import { ProviderAI } from '@/providers/ai';
import { ProviderLog } from '@/providers/log';
import { APP_SETTINGS } from "@/settings";
import * as helpers from './helpers';
import { RepositoryTranslates } from "@/repositories";
import { getLastFileUpdate } from "@/utils/getLastFileUpdate";
import { ProviderDate } from "@/providers/date";

const logger = new ProviderLog('SERVICE CONTENT');

type TextPage<T> = {
  page: string;
  locale: Locale;
  text: T;
  cache?: boolean;
};

const generatePageTexts = async <T>({ page, locale, text }: TextPage<T>) => {
  if (locale === APP_SETTINGS.DEFAULT_LOCALE) return text;

  logger.debug(`Fetching content for ${locale} of page: ${page}`);
  const translation = await RepositoryTranslates.get({ page, locale });
  if (translation) return translation;

  const generated = await ProviderAI.translateText({ locale, text });
  if (!generated) return text;

  logger.debug(`Translate successfull content for ${locale} of page: ${page}`);
  await RepositoryTranslates.write({ page, locale, translations: generated });
  return generated;
};

const updatePageTexts = async <T>({ page, locale, text, filePath }: TextPage<T> & { filePath: string }) => {
  logger.debug(`Updating translations ${page} | ${locale}`);
  if (locale === APP_SETTINGS.DEFAULT_LOCALE) return text;

  const lastUpdate = await getLastFileUpdate({ filePath });
  if (!lastUpdate) return;

  const formattedLastFileUpdate = ProviderDate.format({ date: lastUpdate, format: 'yyyy-MM-dd' })
  const lastTranslationUpdate = await RepositoryTranslates.getLastUpdate({ page, locale });

  if (!lastTranslationUpdate) return;

  const isUpdated = ProviderDate.isBefore(formattedLastFileUpdate, lastTranslationUpdate);

  if (isUpdated) {
    logger.debug(`Translates ${page} | ${locale} is up to date`);
    return;
  };

  logger.info(`Updating ${page} | ${locale}`);

  const generated = await ProviderAI.translateText({ locale, text });
  if (!generated) return text;

  logger.debug(`Translate successfull content for ${locale} of page: ${page}`);
  await RepositoryTranslates.update({ page, locale, translations: generated });
  logger.debug(`Successfull stored ${page} | ${locale}`);
};

const ServiceContent = {
  generatePageTexts,
  updatePageTexts,
  ...helpers,
};

export { ServiceContent };
