import styles from './style.module.scss';
import { Badge, Icon, Text } from '@/components';

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

const Header = ({ source = 'npm', name, version }: Pick<PackageProps, 'source' | 'name' | 'version'>) => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <Icon src={source} size={50} />
        <Text>{name}</Text>
      </div>
      <div>
        <Badge>v{version}</Badge>
      </div>
    </div>
  );
};

const Footer = ({ date, license, href, homepage }: Pick<PackageProps, 'date' | 'license' | 'href' | 'homepage'>) => {
  return (
    <div className={styles.footer}>
      <Text>{license}</Text>
      <Text>{date}</Text>
      <div className={styles.links}>
        <Icon.Link src='web' href={href}/>
        <Icon.Link src='github' href={homepage}/>
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
