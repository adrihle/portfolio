import { List, Page } from '@/components';
import { Locale, LocalePageProps } from '@/interfaces';
import { getParams } from '@/utils/getParams';
import { getContent } from './action';
import { CertificationCard } from '@/containers';

const Certifications = async ({ params }: LocalePageProps) => {
  const { locale } = await getParams(params);
  const texts = await getContent(locale as Locale);
  return (
    <Page.Layout>
      <Page.Heading>{texts.title}</Page.Heading>
      <Page.Paragraph bionic>{texts.description}</Page.Paragraph>
      <Page.Section>
        <List 
          list={Object.values(texts.certifications.aws)}
          renderElement={CertificationCard({ source: 'aws' })}
        />
      </Page.Section>
      <Page.Section>
        <Page.Paragraph bionic>{texts.footer}</Page.Paragraph>
      </Page.Section>
    </Page.Layout>
  );
};

export default Certifications;

