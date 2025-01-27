import { Locale } from "@/interfaces";
import { PROJECT_PAGE } from "./text";
import { ServiceContent } from "@/services";

const getContent = async ({ locale }: { locale: Locale }) => {
  const { projects, ...rest } = PROJECT_PAGE;

  const projects2Translate = Object.entries(projects).reduce((acc, [projectName, project]) => {
    const { name, short, description } = project;
    return { ...acc, [projectName]: { name, short, description } };
  }, {});

  const text = { ...rest, projects: projects2Translate };

  const translation = await ServiceContent.generatePageTexts({ page: 'projects', locale, text });

  const projectsMerged = Object.entries(projects).reduce((acc, [projectName, projectValue]) => {
    const { name, short, description } = translation.projects[projectName as keyof typeof translation.projects];
    return { ...acc, [projectName]: { ...projectValue, name, short, description } };
  }, {});

  return { ...translation, projects: projectsMerged } as typeof PROJECT_PAGE;
};

export { getContent };
