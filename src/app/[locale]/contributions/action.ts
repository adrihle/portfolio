/* eslint-disable @typescript-eslint/no-unused-vars */
import { ServiceContent } from '@/services';
import { CONTRIBUTION_PAGE, ContributionPage } from './settings';
import { Locale } from '@/interfaces';

const getContent = async (locale: Locale): Promise<ContributionPage> => {
  const { PACKAGES, ...rest } = CONTRIBUTION_PAGE;

  const translation = await ServiceContent.generatePageTexts({
    text: rest,
    locale,
    page: 'contributions',
  });

  return { ...translation, PACKAGES };
};

const updateContent = async (locale: Locale) => {
  const filePath = './src/app/[locale]/contributions/settings.ts';
  const { PACKAGES, ...rest } = CONTRIBUTION_PAGE;

  await ServiceContent.updatePageTexts({ page: 'contributions', locale, text: rest, filePath });
};

export { getContent, updateContent };
