import { Page } from "@/components";
import { PackageList } from '@/containers';
import { getContent } from './action';
import styles from './style.module.scss';
import { getParams } from "@/utils";

const Contributions = async ({ params }: { params: { locale: string } }) => {
  const { locale } = await getParams(params);
  const texts = await getContent({ locale });
  return (
    <Page.Layout>
      <Page.Heading>{texts.TITLE}</Page.Heading>
      <Page.Quote by={texts.QUOTE.AUTHOR}>{texts.QUOTE.CONTENT}</Page.Quote>
      <Page.Paragraph className={styles.description}>{texts.DESCRIPTION}</Page.Paragraph>
      <Page.Section>
        <PackageList {...{ contributions: texts.contributions }} />
      </Page.Section>
      <Page.Paragraph className={styles.description}>{texts.CONNECT}</Page.Paragraph>
    </Page.Layout>
  );
};

export default Contributions;

