import { Locale } from "@/interfaces";
import { CERTIFICATION_PAGE, CertificationPage } from "./settings";
import { ProviderLog } from "@/providers/log";

const logger = new ProviderLog('[PAGE:CERTIFICATIONS]');

const getContent = async (locale: Locale): Promise<CertificationPage> => {
  logger.debug(`Provisioning content for ${locale}`);
  return CERTIFICATION_PAGE;
};

export { getContent };
