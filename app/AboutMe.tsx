import SocialLinks from './ScocialLinks'
import Technologies from './Technologies'

export default function About() {
  return (
    <section data-scroll-section className="py">
      <h2 data-scroll data-scroll-speed="0.5">
        About Me
      </h2>
      <p>
        My software engineering journey started as a curious interest to understand how
        computers worked, particularly my tiny Android device, a Google search, an
        excitement, then several months of learning. Nemo eos rem consequuntur tempora
        alias laudantium vel voluptas autem impedit a ipsa ut suscipit, qui, eum incidunt.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla temporibus
        asperiores quo nemo, vero ab voluptatibus dolorum doloremque rerum necessitatibus,
        aspernatur ipsa consequatur rem, magni sed pariatur ratione similique iure!
      </p>
      <p>
        A friend of mine had such heartwarming comments and excitement when he found out I
        had worked on the application he uses while delivering orders for GoPuff, this is
        why I enjoy web and software development - that you get the chance to impact and
        improve the lives of real people.
      </p>

      <SocialLinks className="mt-6" />

      <div
        data-scroll
        data-scroll-speed="2.5"
        className="group flex flex-wrap items-center gap-8 mt-24">
        <h3 className="text-xl leading-loose tracking-wide text-foreground-secondary text-opacity-30">
          <span>some</span>
          <br />
          <span className="text-[5rem] leading-3 group-hover:leading-10 transition-all duration-1000 delay-300 text-foreground-secondary text-opacity-50">
            TECHNO
            <br />
            LOGIES
          </span>
          <br />
          <span>I&rsquo;ve used...</span>
        </h3>
        <Technologies
          className="md:-mr-16 basis-3/5 grow"
          data-scroll
          data-scroll-speed="1"
          data-scroll-direction="horizontal"
        />
      </div>
    </section>
  )
}
