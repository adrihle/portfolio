import { Grid } from "./grid";

const Menu = () => {
  return (
    <>
      <div style={{ backgroundColor: 'red', minHeight: '100px', minWidth: '100px' }} />
      <Grid minWidth="100px">
        <Grid.Item>col1</Grid.Item>
        <Grid.Item>col2</Grid.Item>
        <Grid.Item>col3</Grid.Item>
        <Grid.Item>col4</Grid.Item>
        <Grid.Item>col5</Grid.Item>
        <Grid.Item>col6</Grid.Item>
        <Grid.Item>col7</Grid.Item>
        <Grid.Item>col8</Grid.Item>
        <Grid.Item>col9</Grid.Item>
        <Grid.Item>col10</Grid.Item>
        <Grid.Item>col11</Grid.Item>
        <Grid.Item>col12</Grid.Item>
      </Grid>
    </>
  );
};

const Playground = () => {
  return (
    <Grid minWidth="220px">
      <Grid.Item span={1} xs={12} sm={12} md={6} lg={4}>
        <Menu />
      </Grid.Item>
      <Grid.Item span={2} xs={12} sm={12} md={6} lg={8}>
        Content
      </Grid.Item>
    </Grid>
  );
};

export default Playground;
