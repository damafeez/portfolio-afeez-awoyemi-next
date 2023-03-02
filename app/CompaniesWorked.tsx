export default function Companies() {
  return (
    <section data-scroll-section className="py">
      <h2 data-scroll data-scroll-speed="0.5">
        Where I&apos;ve worked
      </h2>

      <div className="flex flex-wrap gap-x-10 gap-y-20">
        <div className="basis-3/5 grow">
          <h3 className="text-foreground-secondary text-opacity-60">
            GoPuff (September 2019 - September 2022)
          </h3>

          <p>
            Honoured to have had the most fun and exciting experience of my career yet, at
            GoPuff. I worked alongside many talented individuals in various capacities.
            Most of the time, I maintained our frontend applications (or spun up brand new
            ones as required); other times, I was a wildcard, touching on various backend
            applications, the mobile driver app, creating Azure functions or doing some
            simple designs.
          </p>
          <ul>
            <li className="mb-3">
              I was responsible for several key projects that helped streamline operations
              and improve efficiency across various departments. One of my most
              significant accomplishments was developing a risk monitoring platform that
              allowed administrators to track site metrics proactively. This platform
              provided real-time insights into key performance indicators, enabling teams
              to make data-driven decisions and reduce risk.
            </li>
            <li className="mb-3">
              I led development for an order dispatching application that allowed
              administrators to view order status and override driver assignments. This
              provided an easy way to track orders internally and ensure they were
              appropriately assigned to drivers for the fastest delivery. I also built an
              interface for delivery partners to track and visualize their delivery
              metrics, making it easy to see how close they are to qualifying for company
              benefits. This resulted in increased turnover, which was a significant win
              for the company.
            </li>
            <li className="mb-3">
              I built an internal tool that let managers tweak order grouping parameters
              with role-based access. This product increased visibility and consistency by
              allowing us to track who and when changes were made. Additionally, I
              collaborated on rewriting the Order Views section of the customer app in Vue
              from a legacy application, allowing for a more modern, maintainable
              codebase. Lastly, I created Azure Serverless Functions that integrated with
              3rd-party services for driver acquisition and onboarding, resulting in
              overall driver happiness.
            </li>
          </ul>
        </div>

        <div className="border-solid hidden lg:block border-0 border-r border-foreground border-opacity-40" />

        <div className="grow basis-80">
          <h3 className="text-foreground-secondary text-opacity-60">
            Andela (August 2018 - September 2019)
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, ea, nobis
            minima, eaque dolore eos esse laborum iste aperiam magni expedita quia ipsam
            natus sed pariatur vel eligendi. Eos, quaerat!
          </p>
          <ul>
            <li className="mb-3">
              I collaborated in developing a mobile application for scheduling and
              managing meeting room availability within the company.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
