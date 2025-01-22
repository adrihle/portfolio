import { Image, Page } from '@/components';
import { Locale } from '@/interfaces';
import { getParams } from '@/utils';
import { getContent } from './action';

const Home = async ({ params }: { params: { locale: Locale } }) => {
  const { locale } = await getParams(params);
  const { INTRO, INSPIRATION, ROADMAP } = await getContent({ locale });
  return (
    <Page.Layout>
      <Page.Heading type='h1'>{INTRO.title}</Page.Heading>
      <Page.Paragraph>{INTRO.content.p1}</Page.Paragraph>
      <Page.Paragraph  style={{ marginBottom: '20px' }}>{INTRO.content.p2}</Page.Paragraph>
      <Page.Paragraph highlight>{INTRO.content.highlight}</Page.Paragraph>
      <Page.Paragraph>{INTRO.content.p3}</Page.Paragraph>
      <Page.Paragraph>{INTRO.content.p4}</Page.Paragraph>
      <Image.Fill src={'/nomad.avif'} />
      <Page.Heading type='h3'>{INSPIRATION.title}</Page.Heading>
    </Page.Layout>
  );
};

export default Home;

