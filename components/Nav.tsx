import clsx from 'clsx'
import Link from 'next/link'
import LogoSvg from '../assets/logo.svg'

export default function Nav({ className = '' }) {
  return (
    <nav className={clsx('py-4', className)}>
      <Link
        className="text-xl flex items-center justify-center w-20 h-20 bg-background rounded-full -ml-6"
        href="/">
        <LogoSvg />
      </Link>
    </nav>
  )
}
