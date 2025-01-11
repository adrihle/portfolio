'use client'
import { Grid, Text, Widget } from '@/components';
import styles from './style.module.scss';
import Image from 'next/image';

const ME = 'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9jNmY3MzEyMDQwYjAxZGVmMTBhN2JlYmQ1ZjFiYjM1OT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.xNYRPSHvhcS8ISzY5PID96v3j39uPLV2Od14wYgSDrs';
const MIN_COL_WIDTH = 150;

const Photo = () => {
  return (
    <Widget className={styles.reset}>
      <Image src={ME} width={100} height={100} alt='me' />
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
  return (
    <Widget>
      hola
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
