import { clsx } from 'clsx'
import { useEffect, useRef } from 'react'

export default function AfeezAvatar({ className = '' }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    ;(async () => {
      const canvas = canvasRef.current
      const ctx = canvas?.getContext('2d')

      if (!canvas || !ctx) return

      const img = await loadImage('/me.png', 100).catch(() => null)

      if (!img) return
      canvas.height = (canvas.width / img.width) * img.height
      const imageData = getImageData(img)

      if (!imageData) return
      const gapX = canvas.width > img.width ? canvas.width / img.width : 0

      for (let i = 0, x = 0, y = 0; i < imageData.length; i += 4) {
        const r = imageData[i + 0]
        const g = imageData[i + 1]
        const b = imageData[i + 2]
        const a = imageData[i + 3]

        const gray = 0.2 * r + 0.72 * g + 0.07 * b
        const color = `rgba(${gray}, ${gray}, ${gray}, ${a})`

        x += gapX
        // if at the end of width
        if ((i / 4) % img.width === 0) {
          x = 0
          y += gapX
        }

        const particle = new Particle({ x, y, color })
        particle.draw(ctx)
      }
    })()
  }, [])

  return <canvas ref={canvasRef} className={clsx(className)}></canvas>
}

const getImageData = (img: HTMLImageElement): Uint8ClampedArray | undefined => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  canvas.width = img.width
  canvas.height = img.height

  ctx?.drawImage(img, 0, 0)

  return ctx?.getImageData(0, 0, canvas.width, canvas.height).data
}

const loadImage = async (url: string, maxWidth?: number): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = url

    img.onerror = reject
    img.onload = () => {
      // compress and shrink image
      if (maxWidth && img.width > maxWidth) {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')

        canvas.width = Math.min(maxWidth, img.width)
        canvas.height = (canvas.width / img.width) * img.height

        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height)

        const el = document.createElement('img')
        el.src = canvas.toDataURL('image/png')
        resolve(el)
      } else {
        resolve(img)
      }
    }
  })
}

type IParticle = {
  x: number
  y: number
  radius?: number
  color?: string
}
class Particle {
  x: number
  y: number
  radius: number
  color: string

  constructor({ x, y, radius = 1, color = 'gray' }: IParticle) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.translate(this.x, this.y)

    ctx.beginPath()
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2)

    ctx.fillStyle = this.color
    ctx.fill()

    ctx.restore()
  }
}
