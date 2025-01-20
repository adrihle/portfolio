/* eslint-disable @typescript-eslint/no-explicit-any */
import { PackageInfo } from '@/containers/package-list';
import { exec } from 'child_process';
import cache from 'memory-cache';
import util from 'util';

const execPromise = util.promisify(exec);
const KEY = 'root#packages';
const TTL = 1000 * 10;

const getContributions = async (): Promise<PackageInfo[]> => {
  try {
    const cached = cache.get(KEY);
    if (cached) return cached;
    const { stdout } = await execPromise('npm search @adrihfly --json');
    const result = JSON.parse(stdout) as any[];
    cache.put(KEY, result, TTL);
    return result.map(({ name, links, date, license, version, description }) => ({
      name,
      href: links.npm,
      homepage: links.homepage,
      date,
      license,
      version,
      description,
    }));
  } catch (error) {
    console.error(`Error fetching collaborations: ${JSON.stringify(error)}`);
    return [];
  }
} 

export { getContributions };
