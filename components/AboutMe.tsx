import Technologies from './Technologies'

export default function About() {
  return (
    <section data-scroll-section className="py">
      <h2 data-scroll data-scroll-speed="-1">
        About Me
      </h2>
      <p>
        It all began in 2017! My software engineering journey started as a curious
        interest to understand how computers worked, particularly my tiny Android device,
        a Google search, an excitement, then several months of learning. Nemo eos rem
        consequuntur tempora alias laudantium vel voluptas autem impedit a ipsa ut
        suscipit, qui, eum incidunt. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nulla temporibus asperiores quo nemo, vero ab voluptatibus dolorum
        doloremque rerum necessitatibus, aspernatur ipsa consequatur rem, magni sed
        pariatur ratione similique iure!
      </p>
      <p>
        Vue resonates very well with the way I think about wiring front-end applications,
        I believe this is because it was the first front-end framework I learned back in
        2017; I also love that it is both a simple and intuitive framework (very close to
        how traditional HTML/JS works). I have encountered a lot of scenarios and solved
        multiple technical issues from within the many applications I have built with Vue.
      </p>
      <p>
        A friend of mine had such heartwarming comments and excitement when he realized I
        had worked on the application he uses while delivering orders for GoPuff, this is
        why I enjoy web and software development - that you get the chance to impact and
        improve the lives of real people.
      </p>

      <div className="flex flex-wrap items-center gap-8 mt-24">
        <h3 className="text-xl leading-loose tracking-wide text-foreground-secondary text-opacity-30">
          <span>some</span>
          <br />
          <span className="text-4xl leading-5 text-foreground-secondary text-opacity-50">
            TECHNO
            <br />
            LOGIES
          </span>
          <br />
          <span>I&rsquo;ve used...</span>
        </h3>
        <Technologies className=" md:-mr-14 basis-3/5 grow" />
      </div>
    </section>
  )
}
