import SocialLinks from './ScocialLinks'
import Technologies from './Technologies'

export default function About() {
  return (
    <section data-scroll-section className="py">
      <h2 data-scroll data-scroll-speed="0.5">
        About Me
      </h2>
      <p>
        My journey into software engineering started with a curiosity about how my Android
        device worked, which led me to dive into learning about programming. Since then,
        I&rsquo;ve been driven by the desire to use technology to create meaningful
        solutions for real-world problems. Recently, I&rsquo;ve had the pleasure of
        working on applications projects that truly embodied my passion for impactful
        software development. Seeing how my work directly impacted the lives real live
        users was a heartwarming experience that reinforced my love for this field.
      </p>
      <p>
        I&rsquo;m committed to continuous learning and growth, always seeking out new
        challenges and opportunities to expand my skills. With a focus on frontend
        engineering, I&rsquo;m excited to continue creating elegant, user-friendly
        interfaces that make a difference in people&rsquo;s lives.
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
