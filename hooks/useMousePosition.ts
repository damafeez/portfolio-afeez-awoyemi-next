import { useEffect } from 'react'

export default function useMousePosition() {
  useEffect(() => {
    const onMouseMove = function (e: MouseEvent) {
      document.body.style.setProperty(
        '--mouse-x',
        (e.clientX + window.scrollX).toString()
      )
      document.body.style.setProperty(
        '--mouse-y',
        (e.clientY + window.scrollY).toString()
      )
    }

    document.addEventListener('mousemove', onMouseMove)
    return () => document.removeEventListener('mousemove', onMouseMove)
  })
}
