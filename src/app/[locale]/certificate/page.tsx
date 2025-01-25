import { Page } from '@/components';
import { Locale } from '@/interfaces';
import { getParams } from '@/utils';
import { getContent } from './action';
import { CertificationList } from '@/containers';

const Certifications = async ({ params }: { params: { locale: Locale } }) => {
  const { locale } = await getParams(params);
  const texts = await getContent(locale);
  return (
    <Page.Layout>
      <Page.Heading>{texts.title}</Page.Heading>
      <Page.Paragraph bionic>{texts.description}</Page.Paragraph>
      <Page.Section>
        <CertificationList {...texts.certifications} />
      </Page.Section>
      <Page.Section>
        <Page.Paragraph bionic>{texts.footer}</Page.Paragraph>
      </Page.Section>
    </Page.Layout>
  );
};

export default Certifications;

