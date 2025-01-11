'use client'
import { Grid, Widget } from '@/components';
import styles from './style.module.scss';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const ME = 'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9jNmY3MzEyMDQwYjAxZGVmMTBhN2JlYmQ1ZjFiYjM1OT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.xNYRPSHvhcS8ISzY5PID96v3j39uPLV2Od14wYgSDrs';

const Photo = () => {
  return (
    <Widget className={styles.reset}>
      <Image src={ME} width={100} height={100} alt='me'/>
    </Widget>
  );
};

const Presentation = () => {
  return (
    <Widget>
      <p>
        Hi! My name is <strong>Adrian</strong> 👋
      </p>
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
  );
};

const Social = () => {
  return (
    <Widget>
      hola
    </Widget>
  );
};

const Greeting = () => {
  return (
    <Grid gap={5} minWidth='85px' className={styles.content}>
      <Grid.Item span={1}>
        <Photo />
      </Grid.Item>
      <Grid.Item span={1}>
        <Social />
      </Grid.Item>
      <Grid.Item span={2} className={styles.textbox}>
        <Presentation />
      </Grid.Item>
    </Grid>
  );
};

export { Greeting };
