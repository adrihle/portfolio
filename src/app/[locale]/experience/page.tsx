import { Page } from "@/components";
import { ExperienceTimeline } from "@/containers";
import { getContent } from "./action";
import { LocalePageProps } from "@/interfaces";
import { getParams } from "@/utils/getParams";

const Experience = async ({ params }: LocalePageProps) => {
  const { locale } = await getParams(params);
  const content = await getContent({ locale });
  return (
    <Page.Layout>
      <Page.Heading>{content.title}</Page.Heading>

      <Page.Paragraph bionic>{content.description}</Page.Paragraph>

      <Page.Section>
        <ExperienceTimeline experiences={content.experiences} />
      </Page.Section>

      <Page.Paragraph bionic>{content.footer}</Page.Paragraph>
    </Page.Layout>
  );
};

export default Experience;
