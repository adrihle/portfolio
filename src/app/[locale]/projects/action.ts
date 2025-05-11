import { Locale } from "@/interfaces";
import { PROJECT_PAGE, ProjectPage } from "./settings";
import { ProviderLog } from "@/providers/log";

const logger = new ProviderLog('[PAGE:PROJECTS]');

const getContent = async (locale: Locale): Promise<ProjectPage> => {
  logger.debug(`Provisioning content for ${locale}`);
  return PROJECT_PAGE;
};

export { getContent };
