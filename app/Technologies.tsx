import clsx from 'clsx'
import * as React from 'react'
import { FaVuejs, FaReact } from 'react-icons/fa'
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiFlutter,
  SiMaterialui,
  SiGraphql,
} from 'react-icons/si'
import { TbBrandNuxt } from 'react-icons/tb'
import useRandomInRange from '../hooks/useRandomInRange'
import { randomInRange } from '../utils'

type TechnologyProps = React.PropsWithChildren<{ className?: string; width?: number }>

function Technology({ children, className = '', width: initialWidth }: TechnologyProps) {
  const width = useRandomInRange(initialWidth ?? 65, initialWidth ?? 100)
  const duration = useRandomInRange(9, 20)

  return (
    <div
      style={{ width: width, animationDuration: `${duration}s` }}
      className={clsx(
        'flex justify-center items-center aspect-square rounded-full border border-solid border-current text-foreground animate-float',
        className
      )}>
      {children}
    </div>
  )
}

export default function Technologies({
  className = '',
  ...props
}: {
  className?: string
  [k: `data-scroll${string}`]: any
}) {
  const technologies = [
    FaVuejs,
    TbBrandNuxt,
    FaReact,
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
    SiExpress,
    SiNodedotjs,
    SiFlutter,
    SiGraphql,
    SiMaterialui,
  ]

  return (
    <div
      {...props}
      className={clsx(
        'flex flex-wrap items-center justify-around gap-y-10 gap-[5%] border border-solid border-foreground border-opacity-50 border-r-0 border-bx px-8 py-12',
        className
      )}>
      {technologies.map((Component, i) => (
        <Technology key={i} width={i === 0 ? 100 : undefined} className="animate-float">
          <Component fontSize="2rem" />
        </Technology>
      ))}
    </div>
  )
}
