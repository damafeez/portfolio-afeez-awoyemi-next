import { useEffect } from 'react'

export default function useMousePosition() {
  const onMouseMove = function (e: MouseEvent) {
    document.body.style.setProperty('--mouse-x', e.clientX.toString())
    document.body.style.setProperty('--mouse-y', e.clientY.toString())
  }

  useEffect(() => {
    document.addEventListener('pointermove', onMouseMove)

    return () => document.removeEventListener('pointermove', onMouseMove)
  })
}
