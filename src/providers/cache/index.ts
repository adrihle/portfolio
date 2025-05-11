import { createClient } from 'redis';
import { ProviderLog } from "../log";

const logger = new ProviderLog('PROVIDER CACHE');
const DEFAULT_EXPIRE_SECONDS = 60 * 60 * 1;

declare global {
  // eslint-disable-next-line no-var
  var redis: Redis | undefined;
}

type Redis = ReturnType<typeof createClient>;

let redis: Redis;

if (!global.redis) {
  // const url = process.env.REDIS_URI;
  //
  // redis = createClient({ url });
  //
  // redis.on('error', (err) => logger.error('Redis client error', { err }))
  //
  // redis.connect()
  //   .then(() => logger.debug('Successfull connected to redis'))
  //   .catch((err) => logger.error('Redis connection error: ', { err }))
  //
  // global.redis = redis;
} else {
  redis = global.redis;
}

type CacheMethodParams<T> = {
  key: string;
  value: T;
  expire?: number;
};

const get = async <T>({ key }: Pick<CacheMethodParams<T>, 'key'>): Promise<T | null> => {
  logger.debug(`Fetching value of ${key}`);
  const result = await redis.get(key);
  if (!result) return null;
  
  try {
    const value = JSON.parse(result);
    logger.debug(`Successfull parsed value for ${key}`);
    return value;
  } catch(err) {
    logger.error(`Failed parsing value for ${key}`, { err });
    return null;
  }
};

const set = async <T>({ key, value, expire = DEFAULT_EXPIRE_SECONDS }: CacheMethodParams<T>): Promise<void> => {
  logger.debug(`Setting value for ${key}`)

  try {
    await redis.set(key, JSON.stringify(value), { EX: expire });
    logger.debug(`Successfull setted value for ${key}`);
  } catch(err) {
    logger.error(`Failed setting value for ${key}`, { err });
  }
};

const ProviderCache = { get, set };

export { ProviderCache };
