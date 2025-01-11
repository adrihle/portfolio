import { exec } from 'child_process';
import cache from 'memory-cache';
import util from 'util';

const execPromise = util.promisify(exec);
const KEY = 'root#packages';
const TTL = 1000 * 10;

const getColaborations = async (): Promise<string[]> => {
  try {
    const cached = cache.get(KEY);
    if (cached) return cached;
    const { stdout } = await execPromise('npm search @adrihfly --json');
    const result = JSON.parse(stdout);
    cache.put(KEY, result, TTL);
    return result;
  } catch (error) {
    console.error(`Error fetching collaborations: ${JSON.stringify(error)}`);
    return [];
  }
} 

export { getColaborations };
