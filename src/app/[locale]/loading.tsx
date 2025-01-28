import { Loader, Widget } from '@/components';
import styles from './style.module.scss';

export default function Loading() {
  return (
    <Widget height='1000px'>
      <div className={styles.loading}>
        <Loader />
      </div>
    </Widget>
  );
};


