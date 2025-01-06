import { DetailedHTMLProps, HTMLAttributes } from "react";

type Div = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Content = ({ children, ...props }: Div) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};

export { Content };
