import { Spinner } from '@/components';
import styles from './style.module.scss';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <Spinner />
      {/* <div className={styles.spinner}></div> */}
      {/* <span className={styles.loader}></span> */}
      {/* <span className={styles.loader2}></span> */}
      {/* <Image src={'/loading.gif'} width={300} height={150} alt='' /> */}
    </div>
  );
};

