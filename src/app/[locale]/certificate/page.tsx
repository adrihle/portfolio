import { Page } from '@/components';
import { Locale } from '@/interfaces';
import { getParams } from '@/utils';
import { getContent } from './action';

const Certifications = async ({ params }: { params: { locale: Locale } }) => {
  const { locale } = await getParams(params);
  const texts = await getContent(locale);
  return (
    <Page.Layout>

    </Page.Layout>
  );
};

export default Certifications;

