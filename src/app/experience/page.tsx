import { Layout, Text } from "@/components";
import { ExperienceTimeline } from "@/containers";
import { TEXT } from './text';

const Page = () => {
  return (
    <Layout>
      <Text.Title>{TEXT.title}</Text.Title>
      <Text>{TEXT.description}</Text>
      <ExperienceTimeline experiences={TEXT.experiences}/>
      <Text>{TEXT.footer}</Text>
    </Layout>
  );
};

export default Page;

