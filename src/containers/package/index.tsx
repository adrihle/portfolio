import styles from './style.module.scss';
import { Badge, Text } from '@/components';
import Image from 'next/image';

type PackageInfo = {
  name: string;
  version: string;
  href: string;
  homepage: string;
  description: string;
  date: string;
  license: string;
};

type PackageProps = {
  source?: 'npm';
} & PackageInfo;

const PACKAGE_ICONS = {
  npm: '/npm.svg',
};

const Header = ({ source = 'npm', name, version }: Pick<PackageProps, 'source' | 'name' | 'version'>) => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <Image src={PACKAGE_ICONS[source]} width={50} height={50} alt={source} />
        <Text>{name}</Text>
      </div>
      <div>
        <Badge>v{version}</Badge>
      </div>
    </div>
  );
};

const Footer = ({ date, license, href }: Pick<PackageProps, 'date' | 'license' | 'href' | 'homepage'>) => {
  return (
    <div className={styles.footer}>
      <Text>{license}</Text>
      <Text>{date}</Text>
      <div className={styles.links}>
        <Image src={'/web.svg'} width={25} height={25} alt='web' />
        <Image src={'/social/github.svg'} width={25} height={25} alt='github' />
      </div>
    </div>
  );
};

const Body = ({ description }: Pick<PackageProps, 'description'>) => {
  return (
    <div className={styles.body}>
      <Text>{description}</Text>
    </div>
  );
};

const Package = ({ source = 'npm', version, name, date, license, href, description, homepage }: PackageProps) => {
  return (
    <div className={styles.container}>
      <Header {...{ source, name, version }} />
      <Body {...{ description }} />
      <Footer {...{ date, license, href, homepage }} />
    </div>
  );
};

export { Package };
export type { PackageProps, PackageInfo };
