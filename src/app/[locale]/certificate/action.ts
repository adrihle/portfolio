import { Locale } from "@/interfaces";
import { CERTIFICATION_TEXT } from "./text";
import { ServiceContent } from "@/services";

const getContent = async (locale: Locale) => {
  const { certifications, ...rest } = CERTIFICATION_TEXT;

  const { aws } = certifications;

  const certifications2Translate = Object.entries(aws).reduce((acc, [key, value]) => {
    const { title, description } = value;
    return { ...acc, [key]: { title, description } };
  }, {});

  const text2Translate = { ...rest, certifications: { aws: certifications2Translate } };

  const result = await ServiceContent.generatePageTexts({ page: 'certifications', locale, text: text2Translate });

  const certiticationsMerged = Object.entries(aws).reduce((acc, [key, value]) => {
    const { title, description } = result.certifications.aws[key as keyof typeof result.certifications.aws];
    return { ...acc, [key]: { ...value, title, description } };
  }, {});

  return { ...result, certifications: { aws: certiticationsMerged }} as typeof CERTIFICATION_TEXT;
};

export { getContent };
