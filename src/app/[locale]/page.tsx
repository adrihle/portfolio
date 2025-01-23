import { Image, Page } from '@/components';
import { Locale } from '@/interfaces';
import { getParams } from '@/utils';
import { getContent } from './action';
import { ASSETS } from '@/common';

const Home = async ({ params }: { params: { locale: Locale } }) => {
  const { locale } = await getParams(params);
  const { INTRO, INSPIRATION, ROADMAP } = await getContent({ locale });
  return (
    <Page.Layout>
      <Page.Heading type='h1'>{INTRO.title}</Page.Heading>
      <Page.Paragraph>{INTRO.content.p1}</Page.Paragraph>
      <Page.Paragraph>{INTRO.content.p2}</Page.Paragraph>
      <Page.Section>
        <Page.Paragraph highlight>{INTRO.content.highlight}</Page.Paragraph>
        <Page.Paragraph>{INTRO.content.p3}</Page.Paragraph>
        <Page.Paragraph>{INTRO.content.p4}</Page.Paragraph>
      </Page.Section>
      <Image.Fill src={ASSETS.IMAGES.countryside} style={{ marginTop: '20px' }}/>
      <Page.Section>
        <Page.Heading type='h2'>{INSPIRATION.title}</Page.Heading>
        <Page.Paragraph>{INSPIRATION.content.p1}</Page.Paragraph>
        <Page.Paragraph>{INSPIRATION.content.p2}</Page.Paragraph>
      </Page.Section>
      <Page.Section>
        <Page.Heading type='h2'>{ROADMAP.title}</Page.Heading>
        <Page.Paragraph>{ROADMAP.content.p1}</Page.Paragraph>
        <Page.Paragraph>{ROADMAP.content.p2}</Page.Paragraph>
      </Page.Section>
    </Page.Layout>
  );
};

export default Home;

