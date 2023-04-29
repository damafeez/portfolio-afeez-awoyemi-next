export default function Companies() {
  return (
    <section data-scroll-section className="py">
      <h2 data-scroll data-scroll-speed="0.5">
        Where I&apos;ve worked
      </h2>

      <div className="flex flex-wrap gap-x-10 gap-y-20">
        <div className="grow basis-3/5">
          <h3 className="text-foreground-secondary text-opacity-60">
            GoPuff (September 2019 - September 2022)
          </h3>

          <p>
            During my time at GoPuff, I had the privilege of working alongside incredibly
            talented individuals on a range of exciting projects. My primary
            responsibility was maintaining and creating frontend applications, but I also
            had the opportunity to contribute to various backend applications, the mobile
            driver app, and even some design work.
          </p>
          <ul>
            <li className="mb-3">
              Developed a risk monitoring platform that provided real-time insights into
              site metrics, allowing teams to make data-driven decisions and reduce risk.
            </li>
            <li className="mb-3">
              Led the development of an order dispatching application that improved
              internal order tracking and ensured timely delivery.
            </li>
            <li className="mb-3">
              Created an interface for delivery partners to track and visualize their
              delivery metrics, resulting in increased turnover for the company.
            </li>
            <li className="mb-3">
              Built an internal tool that allowed managers to tweak order grouping
              parameters with role-based access, increasing visibility and consistency.
            </li>
            <li className="mb-3">
              Collaborated on rewriting the Order Views section of the customer app in
              Vue, creating a more modern, maintainable codebase.
            </li>
            <li className="mb-3">
              Created Azure Serverless Functions that integrated with third-party services
              for driver acquisition and onboarding, resulting in overall driver
              happiness.
            </li>
          </ul>
        </div>

        <div className="hidden border-0 border-r border-solid border-foreground border-opacity-40 lg:block" />

        <div className="grow basis-80">
          <h3 className="text-foreground-secondary text-opacity-60">
            Andela (August 2018 - September 2019)
          </h3>
          <p>
            In 2018, I was fortunate enough to begin my career at Andela. This opportunity
            came after a year of self-learning, and I was thrilled to be able to gain
            practical experience working on internal applications for the company. During
            my time at Andela, I worked with a variety of technologies, including VueJS,
            React, and Android/Mobile.
          </p>
          <ul>
            <li className="mb-3">
              One of the projects I spent the longest time on was an Android application
              for managing meeting room availability. This project allowed me to use my
              mobile development skills to create a solution that improved internal
              communication and efficiency for the company.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
