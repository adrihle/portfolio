import { List, Page } from '@/components';
import { ProjectCard } from '@/containers';
import { getContent } from './action';

const Projects = async () => {
  const { title, description, projects, footer } = await getContent();
  return (
    <Page.Layout>
      <Page.Heading>{title}</Page.Heading>
      <Page.Paragraph bionic>{description}</Page.Paragraph>
      <Page.Section>
        <List
          list={projects}
          renderElement={ProjectCard}
        />
      </Page.Section>
      <Page.Paragraph bionic>{footer}</Page.Paragraph>
    </Page.Layout>
  );
};

export default Projects;

