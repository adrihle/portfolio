import { ComponentProps } from '@/interfaces';
import styles from './style.module.scss';

type WidgetProps = {
  height?: string;
} & ComponentProps;

const Widget = ({ children, className, height, ...props }: WidgetProps) => {
  return  (
    <div className={`${styles.container} ${className}`} style={{ height }} {...props}>
      {children}
    </div>
  );
};

export { Widget };
