import { Locale } from "@/interfaces";
import { ProviderLog } from "@/providers/log";
import { HOME_PAGE, HomePage } from "./settings";

const logger = new ProviderLog('[PAGE:HOME]');

const getContent = async (locale: Locale): Promise<HomePage> => {
  logger.debug(`Provisioning content for ${locale}`)
  return HOME_PAGE
};

export { getContent };
