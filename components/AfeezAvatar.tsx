import { clsx } from 'clsx'
import { createRef, RefObject, useEffect } from 'react'
import styles from './AfeezAvatar.module.css'

export default function AfeezAvatar({ className = '' }) {
  const canvasRef = createRef<HTMLDivElement>()
  useAddRelativePositionToElement(canvasRef)

  return (
    <div ref={canvasRef} className={clsx(styles.canvas, className)}>
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

const useAddRelativePositionToElement = (ref: RefObject<HTMLElement>) => {
  useEffect(() => {
    const onMouseMove = function (e: MouseEvent) {
      ref.current?.style.setProperty(
        '--mouse-x-relative',
        (e.clientX / window.innerWidth).toString()
      )

      ref.current?.style.setProperty(
        '--mouse-y-relative',
        (e.clientY / window.innerHeight).toString()
      )
    }

    document.addEventListener('mousemove', onMouseMove)
    return () => document.removeEventListener('mousemove', onMouseMove)
  })
}
