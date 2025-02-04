import { Locale } from "@/interfaces";
import { CERTIFICATION_PAGE, CertificationPage } from "./settings";
import { ServiceContent } from "@/services";

const getContent = async (locale: Locale): Promise<CertificationPage> => {
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

  return { ...result, certifications: { aws: merged }};
};

const updateContent = async (locale: Locale) => {
  const filePath = './src/app/[locale]/certificate/settings.ts';
  const { certifications, ...rest } = CERTIFICATION_PAGE;

  const { aws } = certifications;

  const sanitized = ServiceContent.sanitizedTranslations({
    text: aws,
    fields: ['title', 'description'] as never[],
  })

  const text2Translate = { ...rest, certifications: { aws: sanitized } };
  await ServiceContent.updatePageTexts({ page: 'certifications', locale, text: text2Translate, filePath });
};

export { getContent, updateContent };
