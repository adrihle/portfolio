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
  minWidth?: React.CSSProperties['minWidth'];
} & Div;

const Grid = ({ children, minWidth = 50, gap, className }: GridProps) => {
  const min = typeof minWidth === 'number' ? `${minWidth}px` : minWidth;
  return (
    <div
      className={`${styles.grid} ${className}`}
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(${min}, 1fr))`,
        gridGap: gap,
      }}
    >
      {children}
    </div>
  );
};

Grid.Item = Item;

export { Grid };

