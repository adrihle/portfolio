import { Grid, Key } from '@/components';

const Playground = () => {
  return (
    <Grid>
      <Grid.Item span={6}>
        <Key>Ctrl</Key>
        <Key>Shift</Key>
        <Key>o</Key>
      </Grid.Item>
      <Grid.Item span={6}>
        col2
      </Grid.Item>
    </Grid>
  );
};

export default Playground;
