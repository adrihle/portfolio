import { Image, List, Page } from '@/components';
import { LocalePageProps } from '@/interfaces';
import { getParams } from '@/utils/getParams';
import { getContent } from './action';
import { FeatureCard } from '@/containers';
import { ASSETS } from '@/common';

const About = async ({ params }: LocalePageProps) => {
  const { locale } = await getParams(params);
  const content = await getContent(locale);
  return (
    <Page.Layout>
      <Page.Heading>{content.title}</Page.Heading>

      <Page.Paragraph bionic>{content.intro}</Page.Paragraph>

      <Page.Section>
        <Image.Fill
          src={ASSETS.PROJECTS.portfolio_banner}
          aspectRatio='20 / 4'
          style={{ margin: '20px 0' }}
        />

        <List
          list={Object.values(content.features)}
          renderElement={FeatureCard}
        />
      </Page.Section>

      <Page.Paragraph bionic>{content.f1}</Page.Paragraph>

      <Page.Paragraph bionic>{content.f2}</Page.Paragraph>
    </Page.Layout>
  );
}

export default About;

