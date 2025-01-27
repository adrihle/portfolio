import { Locale } from "@/interfaces";
import { ServiceContent } from "@/services";
import { PROJECT_PAGE } from "./settings";

const getContent = async ({ locale }: { locale: Locale }) => {
  const { projects, ...rest } = PROJECT_PAGE;

  const sanitized = ServiceContent.sanitizedTranslations({
    text: projects,
    fields: ['name', 'short', 'description'],
  });

  const text = { ...rest, projects: sanitized };

  const translation = await ServiceContent.generatePageTexts({ page: 'projects', locale, text });

  const merged = ServiceContent.mergeTranslations({
    text: projects,
    translations: translation.projects as (typeof PROJECT_PAGE)['projects'],
    fields: ['name', 'short', 'description' ],
  })

  return { ...translation, projects: merged } as typeof PROJECT_PAGE;
};

export { getContent };
