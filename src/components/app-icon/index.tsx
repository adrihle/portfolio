import Image from 'next/image';
import styles from './style.module.scss';
import Link from 'next/link';

type AppIconProps = {
  image: string;
  label: string;
  href: string;
  background: string;
};

const AppIcon = ({ image, label, href, background }: AppIconProps) => {
  return (
    <Link
      className={styles.container}
      href={href}
    >
      <Image src={image}
        alt={label}
        width={60}
        height={60}
        className={styles.image}
        style={{ background }}
      />
      <p className={styles.label}>{label}</p>
    </Link>
  );
};

export { AppIcon };
