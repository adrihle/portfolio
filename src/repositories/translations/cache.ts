import { ProviderLog } from "@/providers/log";
import { CreateTranslation, SearchParams, Translation } from "./interfaces";
import { ProviderCache } from "@/providers/cache";

const logger = new ProviderLog('REPOSITORY TRANSLATES | CACHE')

const getCacheKey = ({ page, locale }: SearchParams) => {
  return `${page}#${locale || 'home'}`;
};

const get = async ({ page, locale }: SearchParams) => {
  const cached = await ProviderCache.get<Translation>({ key: getCacheKey({ page, locale }) });
  if (cached) return cached;
};

const set = async ({ page, locale, ttl, translations }: CreateTranslation & { ttl: number }) => {
  try {
    await ProviderCache.set({
      key: getCacheKey({ page, locale }),
      value: translations,
      expire: ttl,
    });
  } catch (err) {
    logger.error(`Error storing ${page} | ${locale}`, { err });
  }
};

const translateCache = { get, set };

export { translateCache };
