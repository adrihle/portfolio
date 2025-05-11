import { CONTRIBUTION_PAGE, ContributionPage } from './settings';
import { Locale } from '@/interfaces';
import { ProviderLog } from '@/providers/log';

const logger = new ProviderLog('[PAGE:CONTRIBUTIONS]');

const getContent = async (locale: Locale): Promise<ContributionPage> => {
  logger.debug(`Provisioning content for ${locale}`);
  return CONTRIBUTION_PAGE;
};

export { getContent };
