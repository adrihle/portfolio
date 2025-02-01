import { ProviderLog } from "@/providers/log";
import { CreateTranslation, SearchParams, Translation } from "./interfaces";
import { ProviderCache } from "@/providers/cache";

const logger = new ProviderLog('REPOSITORY TRANSLATES | CACHE')

const getCacheKey = ({ page, locale }: SearchParams) => {
  return `${page}#${locale || 'home'}`;
};

const get = async ({ page, locale }: SearchParams) => {
  logger.debug(`Fetching ${page} | ${locale}`);
  const cached = await ProviderCache.get<Translation>({ key: getCacheKey({ page, locale }) });
  if (cached) return cached;
  logger.info(`Translate not found for ${page} | ${locale}`);
};

const set = async ({ page, locale, ttl, translations }: CreateTranslation & { ttl: number }) => {
  logger.debug(`Writing ${page} | ${locale}`);
  try {
    await ProviderCache.set({
      key: getCacheKey({ page, locale }),
      value: translations,
      expire: ttl,
    });
    logger.debug(`Successfull written ${page} | ${locale}`);
  } catch (err) {
    logger.error(`Error storing ${page} | ${locale}`, { err });
  }
};

const translateCache = { get, set };

export { translateCache };
