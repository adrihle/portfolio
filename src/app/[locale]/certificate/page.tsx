import { List, Page } from '@/components';
import { LocalePageProps } from '@/interfaces';
import { getParams } from '@/utils/getParams';
import { getContent } from './action';
import { CertificationCard } from '@/containers';

const Certifications = async ({ params }: LocalePageProps) => {
  const { locale } = await getParams(params);
  const content = await getContent(locale);
  return (
    <Page.Layout>
      <Page.Heading>{content.title}</Page.Heading>

      <Page.Paragraph bionic>{content.description}</Page.Paragraph>

      <Page.Section>
        <List 
          list={Object.values(content.certifications.aws)}
          renderElement={CertificationCard({ source: 'aws' })}
        />
      </Page.Section>

      <Page.Section>
        <Page.Paragraph bionic>{content.footer}</Page.Paragraph>
      </Page.Section>
    </Page.Layout>
  );
};

export default Certifications;

