import clsx from 'clsx'
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si'

const links = [
  {
    to: 'https://github.com/damafeez',
    icon: SiGithub,
  },
  {
    to: 'https://www.linkedin.com/in/afeez-awoyemi',
    icon: SiLinkedin,
  },
  {
    to: 'mailto:damafeez@gmail.com',
    icon: SiGmail,
  },
]

export default function SocialLinks({ className = '' }) {
  return (
    <div className={clsx(className, 'flex gap-4')}>
      {links.map(({ to, icon: Icon }) => (
        <a
          className="w-14 h-14 border border-solid border-foreground border-opacity-30 flex items-center justify-center rounded-full"
          key={to}
          href={to}
          target="_blank"
          rel="noopener noreferrer">
          <Icon fontSize={18} />
        </a>
      ))}
    </div>
  )
}
