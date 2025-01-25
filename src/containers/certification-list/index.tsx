import { ASSETS } from "@/common";
import { Card, Image, Text } from "@/components";
import styles from './style.module.scss';

const CertificationList = () => {
  return (
    <Card>
      <div className={styles.header}>
        <Image src={ASSETS.CERTIFICATIONS.serverless.icon} width={70} height={70} alt="aws" className={styles.logo}/>
        <Text size="large">Certificate of Completion: Advanced Architecting</Text>
      </div>
    </Card>
  );
};

export { CertificationList };
