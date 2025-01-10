import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from './style.module.scss';

type Div = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type ItemProps = {
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
} & Div;

const Item = ({ children, span = 1, style, ...divProps }: ItemProps) => {
  return (
    <div
      className={styles.item}
      style={{ gridColumn: `span ${span}`, ...style }}
      {...divProps}
    >
      {children}
    </div>
  );
};

type GridProps = {
  gap?: number;
  minWidth?: string;
} & Div;

const Grid = ({ children, minWidth = '50px', gap }: GridProps) => {
  return (
    <div
      className={styles.grid}
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, 1fr))`,
        gridGap: gap,
      }}
    >
      {children}
    </div>
  );
};

Grid.Item = Item;

export { Grid };

