import { clsx } from 'clsx'
import { useEffect, useRef } from 'react'
import { Particle, getImageData, mapRange, loadImage } from '../utils'

const cursor = {
  x: Infinity,
  y: Infinity,
}

// configuration
const fps = 20
const colorThreshold = 25
const imgUrl = '/me.png'
const resolution = 64

export default function AfeezAvatar({ className = '' }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const asyncSetup = (async () => {
      const img = await loadImage(imgUrl, resolution).catch(() => null)
      if (!img) return () => undefined

      const aspect = img.width / img.height
      const parentWidth = Math.max(canvas.parentElement?.offsetWidth ?? 0, 800)

      canvas.width = parentWidth
      canvas.height = canvas.width / aspect

      const particles = makeParticles(img, canvas.width)
      particles.forEach((particle) => particle.draw(ctx))

      const [renderLoop, stopRenderLoop] = getRenderLoop(canvas, particles)

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

const getRenderLoop = (canvas: HTMLCanvasElement, particles: Particle[]) => {
  const ctx = canvas.getContext('2d')
  if (!ctx) return [() => undefined, () => undefined]
  let animationId: number
  let timeoutId: NodeJS.Timeout

  const renderLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particles.forEach((particle) => {
      particle.update(cursor)
      particle.draw(ctx)
    })

    timeoutId = setTimeout(() => {
      animationId = window.requestAnimationFrame(renderLoop)
    }, 1000 / fps)
  }

  const stopRenderLoop = () => {
    window.clearTimeout(timeoutId)
    window.cancelAnimationFrame(animationId)
  }

  return [renderLoop, stopRenderLoop]
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

const makeParticles = (img: HTMLImageElement, canvasWidth: number) => {
  const particles: Particle[] = []
  const imageData = getImageData(img)

  const gapX = canvasWidth > img.width ? canvasWidth / img.width : 0

  for (let i = 0, x = 0, y = 0; i < imageData.length; i += 4) {
    const r = imageData[i + 0]
    const g = imageData[i + 1]
    const b = imageData[i + 2]
    const a = imageData[i + 3]

    const gray = 0.2 * r + 0.72 * g + 0.07 * b
    const color = `rgba(${gray}, ${gray}, ${gray}, ${a})`
    const radius = mapRange(gray, 0, 255, 0.5, 5)

    x += gapX
    // if at the right edge of image
    if ((i / 4) % img.width === 0) {
      x = 0
      y += gapX
    }

    if (gray > colorThreshold) {
      const particle = new Particle({ x, y, color, radius })
      particles.push(particle)
    }
  }

  return particles
}
