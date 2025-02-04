import { List, Page } from '@/components';
import { ProjectCard } from '@/containers';
import { getContent } from './action';
import { LocalePageProps } from '@/interfaces';
import { getParams } from '@/utils/getParams';

const Projects = async ({ params }: LocalePageProps) => {
  const { locale } = await getParams(params);
  const { title, description, projects, footer } = await getContent(locale);
  return (
    <Page.Layout>
      <Page.Heading>{title}</Page.Heading>
      <Page.Paragraph bionic>{description}</Page.Paragraph>
      <Page.Section>
        <List
          list={Object.values(projects)}
          renderElement={ProjectCard}
        />
      </Page.Section>
      <Page.Paragraph bionic>{footer}</Page.Paragraph>
    </Page.Layout>
  );
};

export default Projects;

