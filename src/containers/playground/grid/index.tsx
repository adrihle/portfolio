import styles from './styles.module.scss';

type GridProps = {
  children: React.ReactNode;
  minWidth?: string;
};

const Grid = ({ children, minWidth = '50px' }: GridProps) => {
  return (
    <div
      className={styles.grid}
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, 1fr))` }}
    >
      {children}
    </div>
  );
};

type ItemProps = {
  children: React.ReactNode;
  span?: number;
};

const Item = ({ children, span }: ItemProps) => {
  return (
    <div
      className={styles.item}
      style={{ gridColumn: `span ${span}` }}
    >
      {children}
    </div>
  );
};

Grid.Item = Item;

export { Grid };
