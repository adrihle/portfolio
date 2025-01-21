import { ComponentProps } from '@/interfaces';
import { Widget } from "@/components";
import styles from './style.module.scss';

const Page = () => {
  throw new Error('Should choose one method of Page, no container applied');
};

const Layout = ({ children, className, ...props }: ComponentProps) => {
  return (
    <Widget height="2000px" className={`${styles.container} ${className}`} {...props}>
      <div className={`${styles.layout} ${className}`} {...props}>
        {children}
      </div>
    </Widget>
  );
};

const Section = ({ children, className, ...props }: ComponentProps) => {
  return (
    <div className={`${styles.section} ${className}`} {...props}>
      {children}
    </div>
  );
};

Page.Layout = Layout;
Page.Section = Section;

export { Page };
