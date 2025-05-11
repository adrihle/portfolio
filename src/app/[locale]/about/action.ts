import { ProviderLog } from "@/providers/log";
import { ABOUT_PAGE, AboutPage } from "./settings";
import { Locale } from "@/interfaces";

const logger = new ProviderLog('[PAGE:ABOUT]');

const getContent = async (locale: Locale): Promise<AboutPage> => {
  logger.debug(`Provisioning content for ${locale}`);
  return ABOUT_PAGE
};

export { getContent };
