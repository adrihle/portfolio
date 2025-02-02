import { PackageInfo } from '@/containers';
import { ServiceContent } from '@/services';
import { exec } from 'child_process';
import util from 'util';
import { CONTRIBUTION_PAGE, ContributionPage } from './settings';
import { Locale } from '@/interfaces';
import { ProviderCache } from '@/providers/cache';
import { ProviderLog } from '@/providers/log';

const logger = new ProviderLog('NPM');
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
    logger.error(`Error fetching npm contributions`, { error });
    return [];
  }
}

const getContent = async ({ locale }: { locale: Locale }) => {
  const { PACKAGES, ...rest } = CONTRIBUTION_PAGE;

  const translation = await ServiceContent.generatePageTexts({
    text: rest,
    locale,
    page: 'contributions',
  });

  return {
    ...translation,
    PACKAGES,
  } as ContributionPage;
};

export { getContributions, getContent };
