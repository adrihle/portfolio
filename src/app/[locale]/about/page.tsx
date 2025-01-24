import { Image, Page } from '@/components';
import { Locale } from '@/interfaces';
import { getParams } from '@/utils';
import { getContent } from './action';
import { ASSETS } from '@/common';

const About = async ({ params }: { params: { locale: Locale } }) => {
  const { locale } = await getParams(params);
  const texts = await getContent({ locale });
  return (
    <Page.Layout>
      <Page.Heading>{texts.title}</Page.Heading>
      <Page.Paragraph>{texts.intro}</Page.Paragraph>
      <Page.Section>
        <Page.Paragraph highlight>{texts.points.title}</Page.Paragraph>
        <Page.Item>{texts.points.e1}</Page.Item>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
          <Image src={ASSETS.IMAGES.shortcut} width={100} height={100} alt='' style={{ borderRadius: '50%' }}/>
        </div>
        <Page.Item>{texts.points.e2}</Page.Item>
        <Page.Item>{texts.points.e3}</Page.Item>
        <Page.Item>{texts.points.e4}</Page.Item>
      </Page.Section>
      <Page.Paragraph>{texts.f1}</Page.Paragraph>
      <Page.Paragraph>{texts.f2}</Page.Paragraph>
    </Page.Layout>
  );
}

export default About;

