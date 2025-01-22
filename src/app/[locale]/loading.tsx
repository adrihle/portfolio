import { Spinner, Widget } from '@/components';
import styles from './style.module.scss';

export default function Loading() {
  return (
    <Widget height='1000px'>
      <div className={styles.loading}>
        <Spinner />
        {/* <div className={styles.spinner}></div> */}
        {/* <span className={styles.loader}></span> */}
        {/* <span className={styles.loader2}></span> */}
      </div>
    </Widget>
  );
};


