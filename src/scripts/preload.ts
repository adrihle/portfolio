import { LOCALES } from '@/common';
import { Locale } from '@/interfaces';
import { updateContent as updateHome } from '@/app/[locale]/action';
import { updateContent as updateAbout } from '@/app/[locale]/about/action';
import { updateContent as updateExperience } from '@/app/[locale]/experience/action';
import { updateContent as updateCertificate } from '@/app/[locale]/certificate/action';
import { updateContent as updateContributions } from '@/app/[locale]/contributions/action';
import { updateContent as updateProjects } from '@/app/[locale]/projects/action';
import { ProviderLog } from '@/providers/log';

const logger = new ProviderLog('SCRIPT PRELOAD');

const proccesses = {
  updateHome,
  updateAbout,
  updateExperience,
  updateCertificate,
  updateContributions,
  updateProjects,
};

const preload = async () => {
  logger.info('Preloading setting files');
  const promises = Object.values(proccesses)
    .map((p) => Object.keys(LOCALES).map(l => p(l as Locale)))
    .flat();
  await Promise.all(promises);
  logger.info('Successfull finished preloading');
  process.exit(0);
}

preload().catch((err) => {
  logger.error('An error ocurred preloading data', { err });
  process.exit(1);
})
