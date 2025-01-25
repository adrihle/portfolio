import { ProviderDate } from '@/providers';
import styles from './style.module.scss';
import { Badge, Card, Icon, Text } from '@/components';

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
        <Text size='medium' bold>{name}</Text>
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
      <div className={styles.update}>
        <Text size='small' bold>Last update: {ProviderDate.fromNow(date)}</Text>
        <Badge type='alert'>{license}</Badge>
      </div>
      <div className={styles.links}>
        <Icon.Link src='web' href={href} size={30} />
        <Icon.Link src='github' href={homepage} size={30} />
      </div>
    </div>
  );
};

const Body = ({ description }: Pick<PackageProps, 'description'>) => {
  return (
    <div className={styles.body}>
      <Text italic bionic size='large'>{description}</Text>
    </div>
  );
};

const Package = ({ source = 'npm', version, name, date, license, href, description, homepage }: PackageProps) => {
  return (
    <Card className={styles.container}>
      <Header {...{ source, name, version }} />
      <Body {...{ description }} />
      <Footer {...{ date, license, href, homepage }} />
    </Card>
  );
};

const PackageList = ({ contributions }: { contributions: PackageProps[] }) => {
  return (
    <div className={styles.packages}>
      {contributions.map((pkg, i) => {
        return (
          <div key={i} className={styles.package} style={{ animationDelay: `${i * 0.3}s` }}>
            <Package {...pkg} />
          </div>
        )
      })}
    </div>
  )
};

export { PackageList };
export type { PackageInfo };
