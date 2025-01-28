import { Image, Page, Text } from '@/components';
import { LocalePageProps } from '@/interfaces';
import { getParams } from '@/utils/getParams';
import { getContent } from './action';
import { ASSETS } from '@/common';

const itemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  padding: '20px',
};

const imageStyle: React.CSSProperties = {
  borderRadius: '50%',
};

const About = async ({ params }: LocalePageProps) => {
  const { locale } = await getParams(params);
  const texts = await getContent({ locale });
  return (
    <Page.Layout>
      <Page.Heading>{texts.title}</Page.Heading>
      <Page.Paragraph bionic>{texts.intro}</Page.Paragraph>
      <Page.Section>
        <Text bionic size='medium' color='secondary' style={{ padding: '20px 5px' }}>{texts.points.title}</Text>
        <Page.Section style={itemStyle}>
          <Image src={ASSETS.IMAGES.shortcut} width={70} height={70} alt='' style={imageStyle} />
          <Text bionic size='medium' italic>{texts.points.e1}</Text>
        </Page.Section>
        <Page.Section style={itemStyle}>
          <Text size="medium" italic bionic>{texts.points.e5}</Text>
        </Page.Section>
        <Page.Section style={itemStyle}>
          <Text size="medium" italic bionic>{texts.points.e2}</Text>
          <Image src={ASSETS.IMAGES.npm_tip} width={90} height={90} alt='' style={imageStyle} />
        </Page.Section>
        <Page.Section style={itemStyle}>
          <Image src={ASSETS.IMAGES.translatio_tip} width={100} height={100} alt='' style={imageStyle} />
          <Text size="medium" italic bionic>{texts.points.e3}</Text>
        </Page.Section>
        <Page.Section style={itemStyle}>
          <Text size="medium" italic bionic>{texts.points.e4}</Text>
        </Page.Section>

      </Page.Section>
      <Page.Paragraph bionic>{texts.f1}</Page.Paragraph>
      <Page.Paragraph bionic>{texts.f2}</Page.Paragraph>
    </Page.Layout>
  );
}

export default About;

