import { Text, Page } from "@/components";
import { PackageList } from '@/containers';
import { getContributions } from './action';
import { TEXT } from './text';
import styles from './style.module.scss';

const Contributions = async () => {
  const contributions = await getContributions();
  return (
    <Page.Layout>
      <Page.Section>
        <Text.Title>{TEXT.TITLE}</Text.Title>
        <Text.Quote by={TEXT.QUOTE.AUTHOR}>{TEXT.QUOTE.CONTENT}</Text.Quote>
        <Text className={styles.description}>{TEXT.DESCRIPTION}</Text>
      </Page.Section>
      <PackageList {...{ contributions }} />
      <Page.Section className={styles.footer}>
        <Text className={styles.description}>{TEXT.CONNECT}</Text>
      </Page.Section>
    </Page.Layout>
  );
};

export default Contributions;

