import { Page } from "@/components";
import { ExperienceTimeline } from "@/containers";
import { getContent } from "./action";
import { LocalePageProps } from "@/interfaces";
import { getParams } from "@/utils/getParams";

const Experience = async ({ params }: LocalePageProps) => {
  const { locale } = await getParams(params);
  const texts = await getContent({ locale });
  return (
    <Page.Layout>
      <Page.Heading>{texts.title}</Page.Heading>
      <Page.Paragraph bionic>{texts.description}</Page.Paragraph>
      <Page.Section>
        <ExperienceTimeline experiences={texts.experiences} />
      </Page.Section>
      <Page.Paragraph bionic>{texts.footer}</Page.Paragraph>
    </Page.Layout>
  );
};

export default Experience;
