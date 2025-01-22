import { Page } from "@/components";
import { ExperienceTimeline } from "@/containers";
import { getContent } from "./action";

const Experience = async ({ params }: any) => {
  const locale = (await params).locale;
  const texts = await getContent({ locale });
  return (
    <Page.Layout>
      <Page.Heading>{texts.title}</Page.Heading>
      <Page.Paragraph>{texts.description}</Page.Paragraph>
      <ExperienceTimeline experiences={texts.experiences} />
      <Page.Paragraph>{texts.footer}</Page.Paragraph>
    </Page.Layout>
  );
};

export default Experience;
