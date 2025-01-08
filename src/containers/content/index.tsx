import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from './style.module.scss';
import { Widget } from "@/components";

type Div = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Content = ({ children, ...props }: Div) => {
  return (
    <div className={styles.container} {...props}>
      <Widget height="2000px" >
        {children}
      </Widget>
    </div>
  );
};

export { Content };
