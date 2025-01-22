import { UnderMaintenance } from '@/containers';
import { Locale } from '@/interfaces';
import { getParams } from '@/utils';

const Articles = async ({ params }: { params: { locale: Locale } }) => {
  const { locale } = await getParams(params);
  return (
    <UnderMaintenance locale={locale} />
  );
};

export default Articles;

