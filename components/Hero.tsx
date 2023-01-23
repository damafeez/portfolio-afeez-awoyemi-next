import AfeezAvatar from './AfeezAvatar'

export default function Hero() {
  return (
    <header className="flex flex-wrap items-center justify-center py-24 gap-28">
      <div className="flex-1 basis-96">
        <h1 className="text-3xl max-w-xl">
          Building intuitive,
          <br />
          user-friendly applications.
        </h1>
        <p className="text-foreground-secondary text-justify max-w-4xl">
          I am Afeez Awoyemi, frontend engineer with proven experience in building
          software solutions, facilitating projects from concept to launch. I am
          well-versed in modern frontend technologies, eco systems as well as design
          tools.
        </p>
      </div>
      <AfeezAvatar className="flex-1 basis-64" />
    </header>
  )
}
