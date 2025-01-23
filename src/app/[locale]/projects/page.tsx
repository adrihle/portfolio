import { Page } from '@/components';
import { Playground, UnderMaintenance } from '@/containers';
//import { getParams } from '@/utils';

const Projects = async ({ params }: any) => {
  //const { locale } = await getParams(params);
  return (
    <Page.Layout>
      <Playground />
    </Page.Layout>
    //<UnderMaintenance locale={locale}/>
  );
};

export default Projects;

