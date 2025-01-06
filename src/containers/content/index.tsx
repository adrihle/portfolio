import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from './style.module.scss';

type Div = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Content = ({ children, ...props }: Div) => {
  return (
    <div className={styles.container} {...props}>
      {children}
    </div>
  );
};

export { Content };
