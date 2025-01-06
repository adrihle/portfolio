import { Grid } from '@/components';
import styles from './style.module.scss';

const Playground = () => {
  return (
    <Grid>
      <div className={styles.typewriter}>
        <span className={styles.text}>
          hola que ase
        </span>
      </div>
    </Grid>
  );
};

export default Playground;
