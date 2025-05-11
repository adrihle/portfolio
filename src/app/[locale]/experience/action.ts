import { EXPERIENCE_PAGE, ExperiencePage } from './settings';
import { Locale } from '@/interfaces';
import { ProviderLog } from '@/providers/log';

const logger = new ProviderLog('[PAGE:EXPERIENCE]');

const getContent = async (locale: Locale): Promise<ExperiencePage> => {
  logger.debug(`Provisioning content for ${locale}`);
  return EXPERIENCE_PAGE;
};

export { getContent };
