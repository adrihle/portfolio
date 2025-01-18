'use client'
import { Text, Widget } from '@/components';
import styles from './style.module.scss';
import Image from 'next/image';
import { SETTINGS } from './settings';

const Greeting = () => {
  return (
    <Widget className={styles.presentation}>
      <Image src={SETTINGS.PROFILE_IMAGE} width={90} height={90} alt='me' className={styles.image} priority />
      <div className={styles.presentationTextContainer}>
        <Text size='medium'>Hi! My name is <strong>Adrian</strong> 👋</Text>
        <Text size='medium'>
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

export { Greeting };
