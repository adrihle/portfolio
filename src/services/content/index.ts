import { Locale } from "@/interfaces";
import { RepositoryTranslation } from '@/repositories';
import { ProviderIA } from '@/providers';
import { PageTextsProvider, usePageTexts } from './context';

type TextPage<T> = {
  page: string;
  locale: Locale;
  text: T;
  translate?: boolean;
};

const getTexts = async <T>({ page, locale, text, translate = false }: TextPage<T>) => {
  if (!translate) return text;
  const texts = await RepositoryTranslation.get({ page, locale });

  if (texts) return texts as T;

  const translations = await ProviderIA.translateText({ locale, text });

  if (translations) {
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
