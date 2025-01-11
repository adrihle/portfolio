import Image from 'next/image';
import styles from './style.module.scss';
import Link from 'next/link';

type AppIconProps = {
  image: string;
  label: string;
  href: string;
  background: string;
  size?: number;
};

const DEFAULT_SIZE = 60;

const AppIcon = ({ image, label, href, background, size = DEFAULT_SIZE }: AppIconProps) => {
  return (
    <Link className={styles.container} href={href}>
      <Image src={image}
        alt={label}
        width={size}
        height={size}
        className={styles.image}
        style={{ background }}
      />
      <p className={styles.label}>{label}</p>
    </Link>
  );
};

export { AppIcon };
