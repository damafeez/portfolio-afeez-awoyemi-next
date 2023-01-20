import AfeezAvatar from "./AfeezAvatar"

export default function Hero() {
  return (
    <header className="flex flex-wrap items-center py-24 gap-28">
      <div className="max-w-2xl">
        <h1 className="text-3xl">
          Building intuitive,
          <br />
          user-friendly applications.
        </h1>
        <p className="text-foreground-secondary text-opacity-95 text-sm text-justify">
          I am a frontend engineer with proven experience in building software solutions,
          facilitating projects from concept to launch. I am well-versed in modern
          frontend technologies and eco systems.
        </p>
      </div>
      <AfeezAvatar />
    </header>
  )
}
