const memory = new Map();

const get = ({ key }: { key: string }) => {
  return memory.get(key);
};

const set = ({ key, value }: { key: string, value: unknown }) => {
  memory.set(key, value);
};

const clear = () => {
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
