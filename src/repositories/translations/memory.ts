import { ProviderMemory } from "@/providers/memory";
import { CreateTranslation, SearchParams } from "./interfaces";

const getKey = ({ page, locale }: SearchParams) => {
  return `${page}#${locale}`;
};

const get = ({ page, locale }: SearchParams) => {
  return ProviderMemory.get({ key: getKey({ page, locale }) });
};

const set = ({ page, locale, translations }: CreateTranslation) => {
  const storedLocales = ProviderMemory.keys().map(key => key.split('#')[1]);

  if (!storedLocales.includes(locale)) {
    ProviderMemory.clear()
  };

  ProviderMemory.set({ key: getKey({ page, locale }), value: translations });
};

const translateMemory = { get, set };

export { translateMemory };
