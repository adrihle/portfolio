import Link from 'next/link';
import styles from './style.module.scss';

const Menu = () => {
  return (
    <div className={styles.container}>
      <Link href='/' legacyBehavior passHref>
        <a  className={styles.link}>
          home
        </a>
      </Link>
      <Link href='/about' className={styles.link}>about</Link>
    </div>
  );
};

export { Menu };

