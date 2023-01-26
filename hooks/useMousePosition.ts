import { useEffect } from 'react'

export default function useMousePosition() {
  const delay = 50
  useEffect(() => {
    const onMouseMove = function (e: MouseEvent) {
      setTimeout(() => {
        document.body.style.setProperty(
          '--mouse-x',
          (e.clientX + window.scrollX).toString()
        )
        document.body.style.setProperty(
          '--mouse-y',
          (e.clientY + window.scrollY).toString()
        )
      }, delay)
    }

    document.addEventListener('mousemove', onMouseMove)
    return () => document.removeEventListener('mousemove', onMouseMove)
  })
}
