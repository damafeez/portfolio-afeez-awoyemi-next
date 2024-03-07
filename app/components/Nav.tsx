import clsx from 'clsx'
import Link from 'next/link'
import LogoSvg from '../../assets/logo.svg'

export default function Nav({ className = '' }) {
  return (
    <nav className={clsx('py-4', className)}>
      <Link
        className="-ml-6 flex h-20 w-20 items-center justify-center rounded-full bg-background text-xl text-foreground-secondary"
        href="/">
        <LogoSvg />
      </Link>
    </nav>
  )
}
