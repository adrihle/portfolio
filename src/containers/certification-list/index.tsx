import { ASSETS } from "@/common";
import { Card, Image, Text } from "@/components";
import styles from './style.module.scss';
import Link from "next/link";

type Certification = Record<keyof typeof ASSETS.CERTIFICATIONS, {
  title: string;
  description: string;
  icon: string;
  cert: string;
}>;

type Certifications = {
  aws: Certification;
};

const CertificationList = ({ aws }: Certifications) => {
  return (
    <>
      {Object.values(aws).map(({ title, description, icon, cert }, i) => {
        return (
          <Card
            key={i}
            className={styles.container}
            style={{ '--background-image': `url(${icon})` } as React.CSSProperties}
          >

            <div className={styles.logo_container}>
              <div className={styles.logo}>
                <Image src={ASSETS.IMAGES.aws} width={70} height={50} alt="aws" className={styles.image}/>
              </div>
            </div>

            <div className={styles.content}>
              <div className={styles.header}>
                <Image src={ASSETS.IMAGES.aws} width={70} height={50} alt="aws" className={styles.imagexs}/>
                <Text size="medium" bionic>{title}</Text>
              </div>
              <hr className={styles.divider} />
              <div className={styles.description}>
                <Text italic size="medium" bionic>{description}</Text>
              </div>
              <div className={styles.link}>
                <Link href={cert} target="_blank" referrerPolicy="no-referrer">
                  <Text size="small" color="secondary">View certificate</Text>
                </Link>
              </div>
            </div>
          </Card>
        )
      })}
    </>
  );
};

export { CertificationList };
export type { Certifications };
