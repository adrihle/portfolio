import { Text } from "@/components";
import { ExperienceTimeline, Page } from "@/containers";
import { TEXT } from './text';

const Experience = () => {
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

