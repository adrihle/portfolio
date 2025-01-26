import { List, Page } from '@/components';

const TESTING = [
  {
    name: 'hola',
  },
  {
    name: 'hola0',
  },
  {
    name: 'hola1',
  },
  {
    name: 'hola2',
  },
  {
    name: 'hola3',
  },
];

const Comp = (props: (typeof TESTING)[number]) => {
  return (
    <div>{props.name}</div>
  );
};

const Projects = async () => {
  return (
    <Page.Layout>
      <List
        list={TESTING}
        renderElement={Comp}
        delay={0.5}
      />
    </Page.Layout>
  );
};

export default Projects;

