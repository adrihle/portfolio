'only server'
import { Locale } from "@/interfaces";
import { ProviderAI } from '@/providers/ai';
import { ProviderLog } from '@/providers/log';
import { APP_SETTINGS } from "@/settings";
import * as helpers from './helpers';
import { RepositoryTranslates } from "@/repositories";

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

const ServiceContent = {
  generatePageTexts,
  ...helpers,
};

export { ServiceContent };
