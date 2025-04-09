'only server'
import { Locale } from "@/interfaces";
import { ProviderLog } from '@/providers/log';
import { APP_SETTINGS } from "@/settings";
import * as helpers from './helpers';

const logger = new ProviderLog('SERVICE CONTENT');

type TextPage<T> = {
  page: string;
  locale: Locale;
  text: T;
  cache?: boolean;
};

const generatePageTexts = async <T>({ locale, text }: TextPage<T>) => {
  if (locale === APP_SETTINGS.DEFAULT_LOCALE) return text;
};

const updatePageTexts = async <T>({ page, locale, text }: TextPage<T> & { filePath: string }) => {
  logger.debug(`Updating translations ${page} | ${locale}`);
  if (locale === APP_SETTINGS.DEFAULT_LOCALE) return text;
};

const ServiceContent = {
  generatePageTexts,
  updatePageTexts,
  ...helpers,
};

export { ServiceContent };
