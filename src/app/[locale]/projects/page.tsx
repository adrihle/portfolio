import { UnderMaintenance } from '@/containers';
import { getParams } from '@/utils';

const Projects = async ({ params }: any) => {
  const { locale } = await getParams(params);
  return (
    <UnderMaintenance locale={locale}/>
  );
};

export default Projects;

