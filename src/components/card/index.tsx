import { ComponentProps } from "@/interfaces"
import styles from './style.module.scss';

const Card = ({ children, className, ...props }: ComponentProps) => {
  return (
    <div className={`${styles.container} ${className}`} { ...props }>
      { children }
    </div >
  );
};

export { Card };
