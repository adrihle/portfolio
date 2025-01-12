import styles from './style.module.scss';

type BadgeProps = {
  children?: React.ReactNode;
};

const Badge = ({ children }: BadgeProps) => {
  return (
    <span className={styles.badge}>
      {children}
    </span>
  );
};

export { Badge };
