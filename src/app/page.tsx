import { Playground } from "@/containers";
import styles from './style.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <Playground />
    </div>
  );
}

export default Home;
