'use client'
import { Text, Widget } from '@/components';
import styles from './style.module.scss';
import Image from 'next/image';
import { GREETING_SETTINGS } from './settings';

const { PROFILE_IMAGE, WELCOME, INTRO, IMAGE_SIZE } = GREETING_SETTINGS;

const Greeting = () => {
  return (
    <Widget className={styles.presentation}>
      <Image src={PROFILE_IMAGE} width={IMAGE_SIZE} height={IMAGE_SIZE} alt='me' className={styles.image} priority />
      <div className={styles.presentationTextContainer}>
        <Text size='medium' className={styles.intro}>{WELCOME}</Text>
        <Text size='medium' className={styles.intro}>
          {INTRO.FIXED}
          <Text.Typing
            sequence={INTRO.SEQUENCE}
            repeat={Infinity}
            speed={50}
            className={styles.type}
          />
        </Text>
      </div>
    </Widget>
  );
};

export { Greeting };
