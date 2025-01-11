'use client'
import { Grid, Text, Widget } from '@/components';
import styles from './style.module.scss';
import Image from 'next/image';
import { SETTINGS } from './settings';

const Photo = () => {
  return (
    <Widget className={styles.photo}>
      <Image src={SETTINGS.PROFILE_IMAGE} width={100} height={100} alt='me' className={styles.image} priority/>
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

const Social = () => {
  const overlay = SETTINGS.SOCIAL_ICON_WIDTH + SETTINGS.SOCIAL_ICON_OVERLAY;
  return (
    <Widget className={styles.social}>
      <Grid minWidth={overlay} gap={10} className={styles.socialGrid}>
        {Object.values(SETTINGS.SOCIAL).map(({ href, icon }) => {
          return (
            <Grid.Item
              key={href}
              className={styles.socialIcon}
              style={{ width: `${overlay}px`, height: `${overlay}px` }}
            >
              <a href={href} target='_blank'>
                <Image
                  style={{ filter: 'brightness(1.2) contrast(90%)' }}
                  src={`/social/${icon}.svg`}
                  height={SETTINGS.SOCIAL_ICON_WIDTH}
                  width={SETTINGS.SOCIAL_ICON_WIDTH}
                  alt={icon}
                  className={styles.socialIconImage}
                />
              </a>
            </Grid.Item>
          )
        })}
      </Grid>
    </Widget>
  );
};

const Greeting = () => {
  return (
    <Grid gap={5} minWidth={SETTINGS.MIN_COLUMN_WIDTH}>
      <Grid.Item span={1}>
        <Photo />
      </Grid.Item>
      <Grid.Item span={1} className={styles.socialItem}>
        <Social />
      </Grid.Item>
      <Grid.Item span={2} className={styles.presentationItem}>
        <Presentation />
      </Grid.Item>
    </Grid>
  );
};

export { Greeting };
