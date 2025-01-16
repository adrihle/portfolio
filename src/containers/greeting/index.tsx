'use client'
import { Grid, Icon, Text, Widget } from '@/components';
import styles from './style.module.scss';
import Image from 'next/image';
import { SETTINGS } from './settings';
import { IconProps } from '@/components/icon';

const Presentation = () => {
  return (
    <Widget className={styles.presentation}>
      <Image src={SETTINGS.PROFILE_IMAGE} width={90} height={90} alt='me' className={styles.image} priority />
      <div className={styles.presentationTextContainer}>
        <Text size='large'>Hi! My name is <strong>Adrian</strong> 👋</Text>
        <Text size='large'>
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
      </div>
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
            <Grid.Item key={href} className={styles.socialIcon} style={{ width: `${overlay}px`, height: `${overlay}px` }}>
              <Icon.Link
                src={icon as IconProps['src']}
                size={SETTINGS.SOCIAL_ICON_WIDTH}
                href={href}
                className={styles.socialIconImage}
                style={{ filter: 'brightness(1.2) contrast(90%)' }}
              />
            </Grid.Item>
          )
        })}
      </Grid>
    </Widget>
  );
};

const Greeting = () => {
  return (
    <Grid gap={5} minWidth={'200px'}>
      <Grid.Item span={2} className={styles.socialItem}>
        <Social />
      </Grid.Item>
      <Grid.Item span={2} className={styles.presentationItem}>
        <Presentation />
      </Grid.Item>
    </Grid>
  );
};

export { Greeting };
