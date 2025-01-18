import { Text } from "@/components";
import { ExperienceTimeline, Page } from "@/containers";
import { ServiceContent } from "@/services";
import { ExperiencePage, TEXT } from './text';

const Experience = async ({ params }: any) => {
  const locale = (await params).locale;
  const texts = await ServiceContent.getTexts<ExperiencePage>({ text: TEXT, locale, page: 'home' })
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
