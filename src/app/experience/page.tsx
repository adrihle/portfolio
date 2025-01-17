import { Text } from "@/components";
import { ExperienceTimeline, Page } from "@/containers";
import { TEXT } from './text';
import { translate } from "./action";

const Experience = async () => {
  const texts = await translate<typeof TEXT>(TEXT, 'hi-IN');
  console.log('testlog>', { texts });
  return (
    <Page.Layout>
      <Text.Title>{TEXT.title}</Text.Title>
      <Text>{TEXT.description}</Text>
      <ExperienceTimeline experiences={TEXT.experiences}/>
      <Text>{TEXT.footer}</Text>
    </Page.Layout>
  );
};

export default Experience;

