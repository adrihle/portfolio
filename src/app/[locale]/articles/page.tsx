import { UnderMaintenance } from '@/containers';
import { LocalePageProps } from '@/interfaces';
import { getParams } from '@/utils/getParams';

const Articles = async ({ params }: LocalePageProps) => {
  const { locale } = await getParams(params);
  return (
    <UnderMaintenance locale={locale} />
  );
};

export default Articles;

