import { Stack } from "@/common";
import { Card, Icon, Image, List, Text } from "@/components";
import styles from './style.module.scss';
import { FillProps } from "@/components/image";

type ProjectInfo = {
  logoUrl: string;
  aspectRatio?: FillProps['aspectRatio'];
  name: string;
  short: string;
  description: string;
  stack: Stack[];
  infoHref?: string;
  repoHref?: string;
  background?: string;
};

const ProjectCard = ({ name, description, stack, logoUrl, aspectRatio, background, short }: ProjectInfo) => {
  return (
    <Card style={{ background }} className={styles.container}>
      <div className={styles.header}>
        <div className={styles.image_container}>
          <Image.Fill src={logoUrl} className={styles.img} aspectRatio={aspectRatio} sizes="(max-width: 768px) 100vw, 50vw"/>
        </div>
        <div className={styles.divider} />
        <div>
          <Text size="medium" bold>{name}</Text>
          <Text size="medium" bold color="secondary">{short}</Text>
        </div>
      </div>
      <div className={styles.body}>
        <Text size="large" italic bionic>{description}</Text>
      </div>
      <div className={styles.footer}>
        <List
          list={stack.map(s => ({ icon: s }))}
          renderElement={Icon.Brand}
          className={styles.stacklist}
        />
        <div className={styles.links}>
          <Text size="small">Comming soon</Text>
          {/* {infoHref && <Icon.Link href={infoHref} src="mail" />} */}
          {/* {repoHref && <Icon.Link href={repoHref} src="github" />} */}
        </div>
      </div>
    </Card>
  );
};

export { ProjectCard };
export type { ProjectInfo };
