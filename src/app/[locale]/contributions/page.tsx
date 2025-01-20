import { Text, Page } from "@/components";
import { PackageList } from '@/containers';
import { getContent } from './action';
import styles from './style.module.scss';
import { getParams } from "@/utils";

const Contributions = async ({ params }: { params: { locale: string } }) => {
  const { locale } = await getParams(params);
  const texts = await getContent({ locale });
  return (
    <Page.Layout>
      <Page.Section>
        <Text.Title>{texts.TITLE}</Text.Title>
        <Text.Quote by={texts.QUOTE.AUTHOR}>{texts.QUOTE.CONTENT}</Text.Quote>
        <Text className={styles.description}>{texts.DESCRIPTION}</Text>
      </Page.Section>
      <PackageList {...{ contributions: texts.contributions }} />
      <Page.Section className={styles.footer}>
        <Text className={styles.description}>{texts.CONNECT}</Text>
      </Page.Section>
    </Page.Layout>
  );
};

export default Contributions;

