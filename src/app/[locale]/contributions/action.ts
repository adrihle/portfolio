import { PackageInfo } from '@/containers';
import { ServiceContent } from '@/services';
import { exec } from 'child_process';
import util from 'util';
import { TEXT } from './text';
import { Locale } from '@/interfaces';
import { ProviderCache } from '@/providers/cache';

const execPromise = util.promisify(exec);
const KEY = 'root#packages';
const TTL = 60 * 60 * 24 * 1;

type NPMPackage = {
  name: string;
  links: { npm: string, homepage: string };
  date: string;
  license: string;
  version: string;
  description: string;
};

const getContributions = async (): Promise<PackageInfo[]> => {
  try {
    const cached = await ProviderCache.get<PackageInfo[]>({ key: KEY });
    if (cached) return cached;
    const { stdout } = await execPromise('npm search @adrihfly --json');
    const result = JSON.parse(stdout) as NPMPackage[];
    const packages = result.map(({ name, links, date, license, version, description }) => ({
      name,
      href: links.npm,
      homepage: links.homepage,
      date,
      license,
      version,
      description,
    }));
    await ProviderCache.set({ key: KEY, value: packages, expire: TTL });
    return packages;
  } catch (error) {
    console.error(`Error fetching collaborations: ${JSON.stringify(error)}`);
    return [];
  }
}

const getContent = async ({ locale }: { locale: Locale }) => {
  const texts = await ServiceContent.generatePageTexts<typeof TEXT>({ text: TEXT, locale, page: 'contributions' })
  return {
    ...texts,
    contributions: await getContributions(),
  } as typeof TEXT & { contributions: PackageInfo[] };
};

export { getContributions, getContent };
