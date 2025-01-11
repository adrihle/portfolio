'use client'
import { Grid, Text, Widget } from '@/components';
import styles from './style.module.scss';
import Image from 'next/image';

const ME = 'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9jNmY3MzEyMDQwYjAxZGVmMTBhN2JlYmQ1ZjFiYjM1OT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.xNYRPSHvhcS8ISzY5PID96v3j39uPLV2Od14wYgSDrs';
const MIN_COL_WIDTH = 120;
const SOCIAL_ICON_WIDTH = 16;

const Photo = () => {
  return (
    <Widget className={styles.photo}>
      <Image src={ME} width={100} height={100} alt='me' className={styles.image}/>
    </Widget>
  );
};

const Presentation = () => {
  return (
    <Widget className={styles.presentation}>
      <Text>Hi! My name is <strong>Adrian</strong> 👋</Text>
      <Text>
        I´m&nbsp;
        <Text.Type
          sequence={[
            'Full Stack Developer',
            1000,
            'Software Engineer',
            1000
          ]}
          repeat={Infinity}
          speed={50}
          className={styles.type}
        />
      </Text>
    </Widget>
  );
};

type SocialMedia = 'instagram' | 'github' | 'linkedin' | 'mail';

const SocialIcon = ({ media }: { media: SocialMedia }) => {
  return (
    <Grid.Item className={styles.socialIcon}>
      <Image
        style={{
          filter: 'brightness(1.2) contrast(90%)',
        }}
        src={`/social/${media}.svg`}
        height={SOCIAL_ICON_WIDTH}
        width={SOCIAL_ICON_WIDTH}
        alt='instagram'
        className={styles.socialIconImage}
      />
    </Grid.Item>
  );
};

const Social = () => {
  return (
    <Widget className={styles.social}>
      <Grid minWidth={40} gap={10} className={styles.socialGrid}>
        <SocialIcon media='instagram'/>
        <SocialIcon media='github'/>
        <SocialIcon media='linkedin'/>
          <a href='mailto:adrian.lpes@gmail.com'>
          <SocialIcon media='mail' />
        </a>
      </Grid>
    </Widget>
  );
};

const Greeting = () => {
  return (
    <Grid gap={5} minWidth={MIN_COL_WIDTH}>
      <Grid.Item span={1}>
        <Photo />
      </Grid.Item>
      <Grid.Item span={1}>
        <Social />
      </Grid.Item>
      <Grid.Item span={2}>
        <Presentation />
      </Grid.Item>
    </Grid>
  );
};

export { Greeting };
