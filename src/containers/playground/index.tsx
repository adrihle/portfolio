'use client'
import { Grid } from '@/components';
import { TypeAnimation } from 'react-type-animation';
import styles from './style.module.scss';

const Playground = (props: any) => {
  const sequence = props.packages.reduce((acc, { name }) => {
    return [...acc, name, 1000];
  }, []);
  return (
    <div style={{ height: '2000px' }}>
      <TypeAnimation
        sequence={sequence}
        repeat={Infinity}
        speed={10}
        className={styles.type}
        style={{ fontSize: '2rem' }}
      />
    </div>
  );
};

export default Playground;
