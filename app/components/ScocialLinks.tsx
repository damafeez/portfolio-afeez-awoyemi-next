import clsx from 'clsx'
import { IoDocumentTextOutline } from 'react-icons/io5'
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
    title: 'Email Address',
  },
  {
    to: 'https://docs.google.com/document/d/11ggxtgqYtheNBjMVzrR7qNerCDJ0E9f1lkfZLyxy9Ng/edit?usp=sharing',
    icon: IoDocumentTextOutline,
    title: 'Resume',
  },
]

export default function SocialLinks({ className = '' }) {
  return (
    <div className={clsx(className, 'flex gap-4')}>
      {links.map(({ to, icon: Icon, title }) => (
        <a
          title={title}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-solid border-foreground border-opacity-20"
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
