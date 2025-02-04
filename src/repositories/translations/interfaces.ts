import { Locale } from "@/interfaces";

type CreateTranslation = {
  page: string;
  locale: Locale;
  translations: Record<string, string | object | Array<object>>;
};

type Translation = CreateTranslation & {
  updatedAt: Date;
  createdAt: Date;
};

type SearchParams = Pick<CreateTranslation, 'locale' | 'page'>;


export type { CreateTranslation, Translation, SearchParams };
