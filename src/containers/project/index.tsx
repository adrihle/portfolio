import { ASSETS } from "@/common";
import { Card, Icon, Image, Text } from "@/components";
import styles from './style.module.scss';

type ProjectInfo = {
  name?: string;
};

const STACK = ['typescript', 'java'];

const ProjectCard = ({ }: ProjectInfo) => {
  return (
    <Card>
      <div className={styles.header}>
        <div className={styles.image_container}>
          <Image.Fill src={ASSETS.PROJECTS.resq} />
        </div>
        <div className={styles.divider} />
        <div>
          <Text size="medium" bold>RESQ: An app focus on help pet adoptions</Text>
        </div>
      </div>
      <div className={styles.body}>
        <Text size="small" italic bionic>Description</Text>
      </div>
      <div className={styles.footer}>
        <div>
          {STACK.map(s => <Icon.Brand key={s} icon={s as any} />)}
        </div>
        <div>
          <Icon.Link href="https://google.com" src="mail" />
        </div>
      </div>
    </Card>
  );
};

export { ProjectCard };
export type { ProjectInfo };
