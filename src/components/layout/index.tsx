import { ComponentProps } from "@/interfaces"
import styles from './style.module.scss';

type LayoutProps = {} & ComponentProps;
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export { Layout };
