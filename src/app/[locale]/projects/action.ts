import { Locale } from "@/interfaces";
import { ServiceContent } from "@/services";
import { PROJECT_PAGE, ProjectPage } from "./settings";

const getContent = async (locale: Locale): Promise<ProjectPage> => {
  const { projects, ...rest } = PROJECT_PAGE;

  const sanitized = ServiceContent.sanitizedTranslations({
    text: projects,
    fields: ['name', 'short', 'description'],
  });

  const text = { ...rest, projects: sanitized };

  const translation = await ServiceContent.generatePageTexts({ page: 'projects', locale, text });

  const merged = ServiceContent.mergeTranslations({
    text: projects,
    translations: translation.projects,
    fields: ['name', 'short', 'description' ],
  })

  return { ...translation, projects: merged };
};

const updateContent = async (locale: Locale) => {
  const filePath = './src/app/[locale]/projects/settings.ts';
  const { projects, ...rest } = PROJECT_PAGE;

  const sanitized = ServiceContent.sanitizedTranslations({
    text: projects,
    fields: ['name', 'short', 'description'],
  });

  const text = { ...rest, projects: sanitized };

  await ServiceContent.updatePageTexts({ page: 'projects', locale, text, filePath });
};

export { getContent, updateContent };
