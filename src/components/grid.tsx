import { DetailedHTMLProps, HTMLAttributes } from "react";

type Div = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type ItemProps = {
  children: React.ReactNode;
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
} & Div;

const Item = ({ children, span = 1, style, ...divProps }: ItemProps) => {
  const gridStyles: React.CSSProperties = { gridColumn: `span ${span}`, ...style };
  return (
    <div {...{ style: gridStyles, ...divProps }}>{children}</div>
  );
};

type GridProps = {
  children: React.ReactNode;
  gap?: number;
} & Div;

const Grid = ({ children, gap = 5, style, ...divProps }: GridProps) => {
  const gridStyles: React.CSSProperties = {
    ...style,
    display: 'grid',
    gridTemplateColumns: `repeat(12, 1fr)`,
    gap: `${gap}px`
  };
  return <div {...{ style: gridStyles, ...divProps}}>{children}</div>;
};

Grid.Item = Item;

export { Grid };
