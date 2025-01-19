import { Text, Page } from "@/components";
import { PackageList } from '@/containers';
import { getContributions } from './action';
import { TEXT } from './text';
import styles from './style.module.scss';
import { ServiceContent } from "@/services";

const Contributions = async ({ params }: any) => {
  const contributions = await getContributions();
  const locale = (await params).locale;
  const texts = await ServiceContent.generatePageTexts<typeof TEXT>({ text: TEXT, locale, page: 'contributions' })
  return (
    <Page.Layout>
      <Page.Section>
        <Text.Title>{texts.TITLE}</Text.Title>
        <Text.Quote by={texts.QUOTE.AUTHOR}>{texts.QUOTE.CONTENT}</Text.Quote>
        <Text className={styles.description}>{texts.DESCRIPTION}</Text>
      </Page.Section>
      <PackageList {...{ contributions }} />
      <Page.Section className={styles.footer}>
        <Text className={styles.description}>{texts.CONNECT}</Text>
      </Page.Section>
    </Page.Layout>
  );
};

export default Contributions;

