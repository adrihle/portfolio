import { updateContent as updateHome } from '@/app/[locale]/action';
import { updateContent as updateAbout } from '@/app/[locale]/about/action';
import { updateContent as updateExperience } from '@/app/[locale]/experience/action';
import { updateContent as updateCertificate } from '@/app/[locale]/certificate/action';
import { updateContent as updateContributions } from '@/app/[locale]/contributions/action';
import { updateContent as updateProjects } from '@/app/[locale]/projects/action';

const proccesses = {
  updateHome,
  updateAbout,
  updateExperience,
  updateCertificate,
  updateContributions,
  updateProjects,
};

const preload = async () => {
  const promises = Object.values(proccesses).map((p) => p('es-ES'));
  await Promise.all(promises);
  console.log('done')
  process.exit(0);
}

preload().catch((err) => {
  console.error(err);
  process.exit(1);
})
