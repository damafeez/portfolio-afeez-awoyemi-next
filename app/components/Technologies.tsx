import clsx from 'clsx'
import * as React from 'react'
import { FaReact, FaVuejs } from 'react-icons/fa'
import {
  SiExpress,
  SiFlutter,
  SiGraphql,
  SiMaterialui,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { TbBrandNuxt } from 'react-icons/tb'
import useRandomInRange from '../../hooks/useRandomInRange'

type TechnologyProps = React.PropsWithChildren<{ className?: string; width?: number }>

function Technology({ children, className = '', width: initialWidth }: TechnologyProps) {
  const width = useRandomInRange(initialWidth ?? 65, initialWidth ?? 100)
  const duration = useRandomInRange(9, 20)

  return (
    <div
      style={{ width: width, animationDuration: `${duration}s` }}
      className={clsx(
        'flex aspect-square animate-float items-center justify-center rounded-full border border-solid border-current text-foreground',
        className
      )}>
      {children}
    </div>
  )
}

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

export default function Technologies({
  className = '',
  ...props
}: {
  className?: string
  [k: `data-scroll${string}`]: any
}) {
  return (
    <div
      {...props}
      className={clsx(
        'border-bx flex flex-wrap items-center justify-around gap-[5%] gap-y-10 border border-r-0 border-solid border-foreground border-opacity-50 px-8 py-12',
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
