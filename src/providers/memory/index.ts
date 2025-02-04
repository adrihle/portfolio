import { ProviderLog } from "../log";

const logger = new ProviderLog('PROVIDER MEMORY');

const memory = new Map();

const get = ({ key }: { key: string }) => {
  logger.debug(`Fetching ${key}`);
  const value =  memory.get(key);
  if (value) return value;
  logger.info(`Not found ${key}`);
};

const set = ({ key, value }: { key: string, value: unknown }) => {
  logger.debug(`Writing ${key}`);
  memory.set(key, value);
  logger.debug(`Successfull written ${key}`);
};

const clear = () => {
  logger.warn('Cleanning memory');
  memory.clear();
};

const exists = ({ key }: { key: string }) => {
  return memory.has(key);
};

const keys = () => {
  return [...memory.keys()] as string[];
}

const ProviderMemory = { get, set, clear, exists, keys };

export { ProviderMemory };
