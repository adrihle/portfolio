import { Image, Page } from '@/components';
import { LocalePageProps } from '@/interfaces';
import { getParams } from '@/utils/getParams';
import { getContent } from './action';
import { ASSETS } from '@/common';

const Home = async ({ params }: LocalePageProps) => {
  const { locale } = await getParams(params);
  const { INTRO, INSPIRATION, ROADMAP } = await getContent({ locale });
  return (
    <Page.Layout>
      <Page.Heading type='h1'>{INTRO.title}</Page.Heading>

      <Page.Paragraph bionic>{INTRO.content.p1}</Page.Paragraph>

      <Page.Paragraph bionic>{INTRO.content.p2}</Page.Paragraph>

      <Page.Section>
        <Page.Paragraph bionic highlight>{INTRO.content.highlight}</Page.Paragraph>
        <Page.Paragraph bionic>{INTRO.content.p3}</Page.Paragraph>
        <Page.Paragraph bionic>{INTRO.content.p4}</Page.Paragraph>
      </Page.Section>

      <Image.Fill src={ASSETS.IMAGES.countryside} style={{ marginTop: '20px' }}/>

      <Page.Section>
        <Page.Heading type='h2'>{INSPIRATION.title}</Page.Heading>
        <Page.Paragraph bionic>{INSPIRATION.content.p1}</Page.Paragraph>
        <Page.Paragraph bionic>{INSPIRATION.content.p2}</Page.Paragraph>
      </Page.Section>

      <Page.Section>
        <Page.Heading type='h2'>{ROADMAP.title}</Page.Heading>
        <Page.Paragraph bionic>{ROADMAP.content.p1}</Page.Paragraph>
        <Page.Paragraph bionic>{ROADMAP.content.p2}</Page.Paragraph>
      </Page.Section>
    </Page.Layout>
  );
};

export default Home;

