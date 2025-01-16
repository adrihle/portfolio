import { ComponentProps } from '@/interfaces';
import { Widget } from "@/components";
import styles from './style.module.scss';

const Page = () => {
  throw new Error('Should choose one method of Page, no container applied');
};

const Container = ({ children, className, ...props }: ComponentProps) => {
  return (
    <Widget height="2000px" className={ `${styles.container} ${className}`} {...props}>
      {children}
    </Widget>
  );
};


const Layout = ({ children, className, ...props }: ComponentProps) => {
  return (
    <div className={`${styles.layout} ${className}`} {...props}>
      {children}
    </div>
  );
};

const Section = ({ children, className, ...props }: ComponentProps) => {
  return (
    <div className={`${styles.section} ${className}`} {...props}>
      {children}
    </div>
  );
};

Page.Container = Container;
Page.Layout = Layout;
Page.Section = Section;

export { Page };
