import styles from './style.module.scss';

type BadgeProps = {
  children?: React.ReactNode;
  type?: 'alert' | 'primary'
};

const Badge = ({ children, type = 'primary' }: BadgeProps) => {
  return (
    <span className={`${styles.base} ${styles[type]}`}>
      {children}
    </span>
  );
};

export { Badge };
