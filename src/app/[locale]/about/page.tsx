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
  const content = await getContent({ locale });
  return (
    <Page.Layout>
      <Page.Heading>{content.title}</Page.Heading>

      <Page.Paragraph bionic>{content.intro}</Page.Paragraph>

      <Page.Section>
        <Text bionic size='medium' color='secondary' style={{ padding: '20px 5px' }}>{content.points.title}</Text>

        <Page.Section style={itemStyle}>
          <Image src={ASSETS.IMAGES.shortcut} width={70} height={70} alt='' style={imageStyle} />
          <Text bionic size='medium' italic>{content.points.e1}</Text>
        </Page.Section>

        <Page.Section style={itemStyle}>
          <Text size="medium" italic bionic>{content.points.e5}</Text>
        </Page.Section>

        <Page.Section style={itemStyle}>
          <Text size="medium" italic bionic>{content.points.e2}</Text>
          <Image src={ASSETS.IMAGES.npm_tip} width={90} height={90} alt='' style={imageStyle} />
        </Page.Section>

        <Page.Section style={itemStyle}>
          <Image src={ASSETS.IMAGES.translatio_tip} width={100} height={100} alt='' style={imageStyle} />
          <Text size="medium" italic bionic>{content.points.e3}</Text>
        </Page.Section>

        <Page.Section style={itemStyle}>
          <Text size="medium" italic bionic>{content.points.e4}</Text>
        </Page.Section>
      </Page.Section>

      <Page.Paragraph bionic>{content.f1}</Page.Paragraph>

      <Page.Paragraph bionic>{content.f2}</Page.Paragraph>
    </Page.Layout>
  );
}

export default About;

