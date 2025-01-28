import { Image, Page } from '@/components';
import { LocalePageProps } from '@/interfaces';
import { getParams } from '@/utils/getParams';
import { getContent } from './action';
import { ASSETS } from '@/common';

const About = async ({ params }: LocalePageProps) => {
  const { locale } = await getParams(params);
  const texts = await getContent({ locale });
  return (
    <Page.Layout>
      <Page.Heading>{texts.title}</Page.Heading>
      <Page.Paragraph bionic>{texts.intro}</Page.Paragraph>
      <Page.Section>
        <Page.Paragraph bionic highlight>{texts.points.title}</Page.Paragraph>
        <Page.Item bionic>{texts.points.e1}</Page.Item>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
          <Image src={ASSETS.IMAGES.shortcut} width={100} height={100} alt='' style={{ borderRadius: '50%' }}/>
        </div>
        <Page.Item bionic>{texts.points.e2}</Page.Item>
        <Page.Item bionic>{texts.points.e3}</Page.Item>
        <Page.Item bionic>{texts.points.e4}</Page.Item>
      </Page.Section>
      <Page.Paragraph bionic>{texts.f1}</Page.Paragraph>
      <Page.Paragraph bionic>{texts.f2}</Page.Paragraph>
    </Page.Layout>
  );
}

export default About;

