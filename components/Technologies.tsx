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
} from 'react-icons/si'
import { TbBrandNuxt } from 'react-icons/tb'
import { randomInRange } from '../utils'

type TechnologyProps = React.PropsWithChildren<{ className?: string; width?: number }>

function Technology({ children, className = '', width }: TechnologyProps) {
  const widthRef = React.useRef(width ?? randomInRange(65, 100))
  const durationRef = React.useRef(width ?? randomInRange(8, 18))

  return (
    <div
      style={{ width: widthRef.current, animationDuration: `${durationRef.current}s` }}
      className={clsx(
        'flex justify-center items-center aspect-square rounded-full border border-solid border-current text-foreground animate-float',
        className
      )}>
      {children}
    </div>
  )
}

export default function Technologies({ className = '' }) {
  return (
    <div
      className={clsx(
        'flex flex-wrap items-center justify-around gap-y-10 gap-[5%] border border-solid border-foreground border-opacity-50 border-r-0 border-bx px-8 py-12',
        className
      )}>
      <Technology width={100} className="animate-float">
        <FaVuejs fontSize="2rem" />
      </Technology>
      <Technology>
        <TbBrandNuxt fontSize="2rem" />
      </Technology>
      <Technology width={100} className="animate-float">
        <FaReact fontSize="2rem" />
      </Technology>
      <Technology>
        <SiNextdotjs fontSize="2rem" />
      </Technology>
      <Technology>
        <SiTailwindcss fontSize="2rem" />
      </Technology>
      <Technology>
        <SiTypescript fontSize="2rem" />
      </Technology>
      <Technology>
        <SiExpress fontSize="2rem" />
      </Technology>
      <Technology>
        <SiNodedotjs fontSize="2rem" />
      </Technology>
      <Technology>
        <SiFlutter fontSize="2rem" />
      </Technology>
      <Technology>
        <SiMaterialui fontSize="2rem" />
      </Technology>
    </div>
  )
}
