import Image from 'next/image';
import styles from './style.module.scss';
import { Text } from '../text';

type PackageProps = {
  name: string;
  source?: 'npm';
};

const PACKAGE_ICONS = {
  npm: '/npm.svg',
};

const Package = ({ name, source = 'npm' }: PackageProps) => {
  return (
    <div className={styles.container}>
      <Image src={PACKAGE_ICONS[source]} width={50} height={50} alt={source} />
      <Text>{name}</Text>
    </div>
  );
};

export { Package };
