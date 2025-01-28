import { Locale } from "@/interfaces";
import { CERTIFICATION_PAGE } from "./settings";
import { ServiceContent } from "@/services";

const getContent = async (locale: Locale) => {
  const { certifications, ...rest } = CERTIFICATION_PAGE;

  const { aws } = certifications;

  const sanitized = ServiceContent.sanitizedTranslations({
    text: aws,
    fields: ['title', 'description'] as never[],
  })

  const text2Translate = { ...rest, certifications: { aws: sanitized } };

  const result = await ServiceContent.generatePageTexts({ page: 'certifications', locale, text: text2Translate });

  const merged = ServiceContent.mergeTranslations({
    text: aws,
    translations: (result.certifications as { aws: typeof aws }).aws,
    fields: ['title', 'description'] as never[],
  })

  return { ...result, certifications: { aws: merged }} as typeof CERTIFICATION_PAGE;
};

export { getContent };
