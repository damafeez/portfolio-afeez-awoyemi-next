import { clsx } from 'clsx'
import { useEffect, useRef } from 'react'
import { loadImage, getRenderLoop, makeParticlesFromImage } from '../utils'

const cursor = {
  x: Infinity,
  y: Infinity,
}

// configuration
const fps = 25
const colorThreshold = 25
const imgUrl = '/me.png'
const resolution = 85

export default function AfeezAvatar({ className = '' }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const asyncSetup = (async () => {
      const img = await loadImage(imgUrl, resolution).catch(console.error)
      if (!img) return () => undefined

      const aspect = img.width / img.height
      const parentWidth = Math.max(canvas.parentElement?.offsetWidth ?? 0, 800)

      canvas.width = parentWidth
      canvas.height = canvas.width / aspect

      const particles = makeParticlesFromImage(img, canvas.width, colorThreshold)
      particles.forEach((particle) => particle.draw(ctx))

      const [renderLoop, stopRenderLoop] = getRenderLoop(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        particles.forEach((particle) => {
          particle.update(cursor)
          particle.draw(ctx)
        })
      }, fps)

      renderLoop()
      canvas.addEventListener('mousemove', onMouseMove)
      canvas.addEventListener('mouseenter', onMouseEnter)

      return stopRenderLoop
    })()

    return () => {
      asyncSetup.then((stopRenderLoop) => stopRenderLoop())
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseenter', onMouseEnter)
    }
  }, [])

  return (
    <div className={clsx('flex items-center', className)}>
      <canvas className="max-w-full" ref={canvasRef}></canvas>
    </div>
  )
}

const onMouseEnter = (e: Event) => {
  e.target?.addEventListener('mouseout', onMouseOut, { once: true })
}

const onMouseOut = (_e: Event) => {
  cursor.x = Infinity
  cursor.y = Infinity
}

const onMouseMove = (e: MouseEvent) => {
  const canvas = e.target as HTMLCanvasElement

  cursor.x = (e.offsetX / canvas.offsetWidth) * canvas.width
  cursor.y = (e.offsetY / canvas.offsetHeight) * canvas.height
}
