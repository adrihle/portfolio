import { Text, Page } from "@/components";
import { ExperienceTimeline } from "@/containers";
import { getContent } from "./action";

const Experience = async ({ params }: any) => {
  const locale = (await params).locale;
  const texts = await getContent({ locale });
  return (
    <Page.Layout>
      <Text.Title>{texts.title}</Text.Title>
      <Text>{texts.description}</Text>
      <ExperienceTimeline experiences={texts.experiences} />
      <Text>{texts.footer}</Text>
    </Page.Layout>
  );
};

export default Experience;
