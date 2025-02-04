import { Card, Image, Text } from "@/components";
import styles from './style.module.scss';

type FeatureInfo = {
  title: string;
  description: string;
  image?: string;
  imagePosition?: 'left' | 'right';
  version?: number | 'latest';
};

const FeatureCard = ({ title, description, image, imagePosition = 'left', version = 'latest' }: FeatureInfo) => {
  return (
    <Card className={styles.container}>
      {image && imagePosition === 'left' && <Image.Fill src={image} className={styles.image_left}/>}
      <div className={styles.text_container} style={!image ? { minWidth: '100%' } : {}}>
        <Text size="large" className={styles.title} bold color="secondary">{title}</Text>
        <Text size="medium" italic>{description}</Text>
        <div className={styles.version_container} style={{ textAlign: imagePosition === 'left' ? 'right' : 'left' }}>
          <Text size="small" color="highlight">Release version: {version}</Text>
        </div>
      </div>
      {image && imagePosition === 'right' && <Image.Fill src={image} className={styles.image_right}/>}
    </Card>
  );
};

export { FeatureCard };
export type { FeatureInfo };
