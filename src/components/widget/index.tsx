import styles from './style.module.scss';

type WidgetProps = {
  children: React.ReactNode;
  height?: string;
};

const Widget = ({ children, height }: WidgetProps) => {
  return  (
    <div className={styles.container} style={{ height }}>
      {children}
    </div>
  );
};

export { Widget };
