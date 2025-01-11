'use client'
import { Grid, Widget } from '@/components';
import styles from './style.module.scss';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const ME = 'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9jNmY3MzEyMDQwYjAxZGVmMTBhN2JlYmQ1ZjFiYjM1OT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.xNYRPSHvhcS8ISzY5PID96v3j39uPLV2Od14wYgSDrs';

const Greeting = () => {
  return (
    <Grid gap={5} minWidth='85px' className={styles.content}>
      <Grid.Item span={1}>
        <div style={{ maxWidth: '100%' }}>
          <Widget style={{ padding: 0, display: 'inline-block' }}>
            <div className={styles.container}>
              <Image src={ME} width={60} height={60} alt='me' className={styles.image} />
            </div>
          </Widget>
        </div>
      </Grid.Item>
      <Grid.Item span={2} className={styles.textbox}>
        <Widget>
          <div className={styles.text}>
            Hi! My name is <strong>Adrian</strong> 👋
          </div>
          {'I´m '}
          <TypeAnimation
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
        </Widget>
      </Grid.Item>
    </Grid>
  );
};

export { Greeting };
