import { Layout, Package } from "@/components";
import { getColaborations } from './action';
import styles from './style.module.scss';

const Page = async () => {
  const collaborations = await getColaborations();
  return (
    <Layout>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {collaborations.map(({ name }, i) => {
          return (
            <div key={i} className={styles.item}
              style={{
                animationDelay: `${i * 0.3}s`, // Delay increases with index
              }}>
              <Package name={name} />
            </div>
          )
        })}
      </div>
    </Layout>
  );
};

export default Page;

