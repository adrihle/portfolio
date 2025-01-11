import { ComponentProps } from '@/interfaces';
import { Widget } from "@/components";
import styles from './style.module.scss';

const Content = ({ children, ...props }: ComponentProps) => {
  return (
    <Widget height="2000px" className={styles.container} {...props}>
      {children}
    </Widget>
  );
};

export { Content };
