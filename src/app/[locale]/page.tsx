import { Image, Page, Text } from '@/components';
import { Locale } from '@/interfaces';
import { getParams } from '@/utils';
import { getContent } from './action';

const Home = async ({ params }: { params: { locale: Locale } }) => {
  const { locale } = await getParams(params);
  const { INTRO, INSPIRATION, ROADMAP } = await getContent({ locale });
  return (
    <Page.Layout>
      <Text.Title type='h1'>{INTRO.title}</Text.Title>
      <Text>{INTRO.description}</Text>
      <Text>{INTRO.description}</Text>
      <Image.Fill src={'/nomad.avif'} />
    </Page.Layout>
  );
};

export default Home;

