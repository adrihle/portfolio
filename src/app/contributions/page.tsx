import { Layout, Text } from "@/components";
import { Package } from '@/containers';
import { getContributions } from './action';
import { TEXT } from './text';
import styles from './style.module.scss';

const Page = async () => {
  const contributions = await getContributions();
  return (
    <Layout>
      <div className={styles.section}>
        <Text.Title>{TEXT.TITLE}</Text.Title>
        <Text.Quote by={TEXT.QUOTE.AUTHOR}>{TEXT.QUOTE.CONTENT}</Text.Quote>
        <Text className={styles.description}>{TEXT.DESCRIPTION}</Text>
      </div>
      <div className={styles.packages}>
        {contributions.map((pkg, i) => {
          return (
            <div key={i} className={styles.package} style={{ animationDelay: `${i * 0.3}s` }}>
              <Package {...pkg} />
            </div>
          )
        })}
      </div>
      <div className= {styles.footer}>
        <Text className={styles.description}>{TEXT.CONNECT}</Text>
      </div>
    </Layout>
  );
};

export default Page;

