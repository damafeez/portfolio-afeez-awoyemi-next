import { clsx } from 'clsx'
import styles from './AfeezAvatar.module.css'

export default function AfeezAvatar({ className = '' }) {
  return (
    <div className={clsx(styles.canvas, className)}>
      <div className={styles.cap}></div>
      <div className={styles.head}>
        <div className={styles.eyes}>
          <div className={styles.eye}></div>
          <div className={styles.eye}></div>
        </div>

        <div className={styles.mouth}></div>
      </div>
      <div className={styles.body}></div>
    </div>
  )
}
