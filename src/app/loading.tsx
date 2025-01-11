import styles from './contributions/style.module.scss';

export default function Loading() {
  return (
    <div className={styles['container-spinner']}>
      <div className={styles.spinner}></div>
    </div>
  )
}
