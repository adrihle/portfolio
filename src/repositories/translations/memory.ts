import { ProviderMemory } from "@/providers/memory";
import { CreateTranslation, SearchParams } from "./interfaces";
import { ProviderLog } from "@/providers/log";

const logger = new ProviderLog('REPOSITORY TRANSLATES | MEMORY')

const getKey = ({ page, locale }: SearchParams) => {
  return `${page}#${locale}`;
};

const get = ({ page, locale }: SearchParams) => {
  logger.debug(`Fetching ${page} | ${locale}`);
  const memoized = ProviderMemory.get({ key: getKey({ page, locale }) });
  if (memoized) return memoized;
  logger.info(`Translate not found for ${page} | ${locale}`)
};

const set = ({ page, locale, translations }: CreateTranslation) => {
  logger.debug(`Writing ${page} | ${locale}`);
  const storedLocales = ProviderMemory.keys().map(key => key.split('#')[1]);

  if (!storedLocales.includes(locale)) {
    logger.warn(`Cleanning previous ${storedLocales} to ${locale}`);
    ProviderMemory.clear()
  };

  logger.info(`Writing ${page} | ${locale}`)
  ProviderMemory.set({ key: getKey({ page, locale }), value: translations });
};

const translateMemory = { get, set };

export { translateMemory };
