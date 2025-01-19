import Image from 'next/image';
import styles from './style.module.scss';
import Link from 'next/link';

type AppIconProps = {
  image: string;
  label: string;
  href: string;
  background: string;
  size?: number;
  boldKey: string;
};

const DEFAULT_SIZE = 60;

const AppIcon = ({ image, label, href, background, size = DEFAULT_SIZE, boldKey }: AppIconProps) => {
  return (
    <Link className={styles.container} href={`${href}#content`} shallow scroll={false}>
      <Image src={image}
        alt={label}
        width={size}
        height={size}
        className={styles.image}
        style={{ background }}
      />
      <p className={styles.label}>{label.split('').map((l, i) => l.toLowerCase() === boldKey.toLowerCase() ? <b key={`${label}-${l}-${i}`} style={{ fontWeight: 1000 }}>{l}</b> : l)}</p>
    </Link>
  );
};

export { AppIcon };
