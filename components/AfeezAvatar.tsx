import styles from './AfeezAvatar.module.css'

export default function AfeezAvatar() {
  return (
    <div className={styles.canvas}>
      <div className={styles.cap}></div>
      <div className={styles.head}>
        <div className={styles.eye}></div>
        <div className={styles.eye}></div>

        <div className={styles.mouth}></div>
      </div>
      <div className={styles.body}></div>
    </div>
  )
}
