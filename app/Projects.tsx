import Image from 'next/image'
import a from '../public/b.png'

export default function Projects() {
  return (
    <section data-scroll-section>
      <h2 data-scroll data-scroll-speed="1.5">
        Some public projects
      </h2>
      <div
        data-scroll
        data-scroll-speed="1.5"
        data-scroll-direction="horizontal"
        className="flex overflow-scroll">
        <figure className="w-96 shrink-0">
          <Image className="rounded-xl" width={300} src={a} alt="simple image" />
          <figcaption>Folios</figcaption>
        </figure>
        <figure className="w-96 shrink-0">
          <Image className="rounded-xl" width={300} src={a} alt="simple image" />
          <figcaption>Folios</figcaption>
        </figure>
        <figure className="w-96 shrink-0">
          <Image className="rounded-xl" width={300} src={a} alt="simple image" />
          <figcaption>Folios</figcaption>
        </figure>
        <figure className="w-96 shrink-0">
          <Image className="rounded-xl" width={300} src={a} alt="simple image" />
          <figcaption>Folios</figcaption>
        </figure>
        <figure className="w-96 shrink-0">
          <Image className="rounded-xl" width={300} src={a} alt="simple image" />
          <figcaption>Folios</figcaption>
        </figure>
        <figure className="w-96 shrink-0">
          <Image className="rounded-xl" width={300} src={a} alt="simple image" />
          <figcaption>Folios</figcaption>
        </figure>
        <figure className="w-96 shrink-0">
          <Image className="rounded-xl" width={300} src={a} alt="simple image" />
          <figcaption>Folios</figcaption>
        </figure>
        <figure className="w-96 shrink-0">
          <Image className="rounded-xl" width={300} src={a} alt="simple image" />
          <figcaption>Folios</figcaption>
        </figure>
      </div>
    </section>
  )
}
