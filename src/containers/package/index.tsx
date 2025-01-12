import styles from './style.module.scss';
import { Grid, Text } from '@/components';
import Image from 'next/image';

type PackageProps = {
  name: string;
  source?: 'npm';
  version: string;
  href: string;
  description: string;
  date: string;
  license: string;
};

const PACKAGE_ICONS = {
  npm: '/npm.svg',
};

const Package = ({ source = 'npm', ...props }: PackageProps) => {
  return (
    <div className={styles.container}>
      <Grid minWidth={50} className={styles.title}>
        <Grid.Item span={1} className={styles.logo}>
          <Image src={PACKAGE_ICONS[source]} width={50} height={50} alt={source} />
        </Grid.Item>
        <Grid.Item span={5}>
          <Text>{props.name}</Text>
        </Grid.Item>
        <Grid.Item span={3} className={styles.version}>
          <Text>{props.version}</Text>
        </Grid.Item>
      </Grid>
      <Grid className={styles.description}>
        <Text>{props.description}</Text>
      </Grid>
      <Grid className={styles.footer}>
        <Grid.Item>{props.date}</Grid.Item>
        <Grid.Item className={styles.version}>{props.license}</Grid.Item>
      </Grid>
    </div>
  );
};

export { Package };
export type { PackageProps };
