import clsx from 'clsx'
import Link from 'next/link'
import LogoSvg from '../assets/logo.svg'

export default function Nav({ className = '' }) {
  return (
    <nav className={clsx('py-4', className)}>
      <Link className="text-xl" href="/">
        <LogoSvg />
      </Link>
    </nav>
  )
}
