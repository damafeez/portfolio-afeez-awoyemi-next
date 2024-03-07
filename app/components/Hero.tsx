import clsx from 'clsx'
import AfeezAvatar from './AfeezAvatar'

export default function Hero({ className = '' }) {
  return (
    <header
      data-scroll-section
      className={clsx(
        'flex flex-wrap items-center justify-center gap-28 py-24',
        className
      )}>
      <div className="flex-1 basis-96">
        <h1
          data-scroll
          data-scroll-speed="2"
          className="text-3xl text-foreground-secondary md:text-4xl 2xl:text-5xl">
          Building intuitive,
          <br />
          user-friendly applications.
        </h1>
        <p className="max-w-4xl text-justify">
          I am <b className="text-foreground-secondary">Afeez Awoyemi</b>, frontend
          engineer with proven experience in building software solutions, facilitating
          projects from concept to launch. I am well-versed in modern frontend
          technologies, eco systems as well as design tools.
        </p>
      </div>
      <AfeezAvatar className="flex-1 basis-64" />
    </header>
  )
}
