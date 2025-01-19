import { Locale } from "@/interfaces";
import { RepositoryTranslation } from '@/repositories';
import { ProviderAI, ProviderLog } from '@/providers';
import { PageTextsProvider, usePageTexts } from './context';

const logger = new ProviderLog('SERVICE CONTENT');

type TextPage<T> = {
  page: string;
  locale: Locale;
  text: T;
  translate?: boolean;
};

const getTexts = async <T>({ page, locale, text, translate = true }: TextPage<T>) => {
  if (!translate) return text;
  logger.debug(`Fetching content for ${locale} of page: ${page}`);
  const texts = await RepositoryTranslation.get({ page, locale });

  if (texts) {
    logger.debug(`Found in database content for ${locale} of page: ${page}`);
    return texts as T;
  }

  const translations = await ProviderAI.translateText({ locale, text });

  if (translations) {
    logger.debug(`Translate successfull content for ${locale} of page: ${page}`);
    await RepositoryTranslation.create({ locale, page, translations });
  }

  return (translations as T) || text;
};

const ServiceContent = {
  getTexts,
  PageTextsProvider,
  usePageTexts,
};

export { ServiceContent };
