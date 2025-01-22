import { Page } from '@/components';
import styles from './style.module.scss';
import { getContent } from './action';
import { Locale } from '@/interfaces';

const UnderMaintenance = async ({ locale }: { locale: Locale }) => {
  const { title, description } = await getContent({ locale });
  return (
    <Page.Layout className={styles.container}>
      <Page.Heading className={styles.title} type='h1'>
        {title}
      </Page.Heading>
      <div className={styles.loading}>
        <span className={styles.loader} />
      </div>
      <Page.Paragraph className={styles.description}>
        {description}
      </Page.Paragraph>
    </Page.Layout>
  );
};

export { UnderMaintenance };
