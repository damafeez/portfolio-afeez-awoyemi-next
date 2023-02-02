export default function Companies() {
  return (
    <section data-scroll-section className="py">
      <h2 data-scroll data-scroll-speed="1">
        Where I&apos;ve worked
      </h2>

      <div className="flex flex-wrap gap-x-10 gap-y-20">
        <div className="basis-3/5 grow">
          <h3 className="text-foreground-secondary text-opacity-60">
            GoPuff (September 2019 - September 2022)
          </h3>

          <p>
            I was fortunate to have had the most fun and exciting experience of my career
            yet, at GoPuff. I worked alongside many talented individuals in various
            capacities. Most of the time, I maintained our frontend applications (or spun
            up brand new ones as required); other times, I was a wildcard, touching on
            various backend applications, the mobile driver app, creating Azure functions
            or doing some simple designs.
          </p>
          <ul>
            <li>
              I lead development for a risk monitoring platform allowing administrators to
              track site metrics proactively. Lead development for an order dispatching
              application, allowing administrators to view order status and override
              driver assignments. This provided an easy way to track orders internally and
              ensure they were appropriately assigned to the proper drivers for the
              fastest delivery.
            </li>
            <li>
              I built an internal tool that lets managers tweak order grouping parameters
              with role-based access. The product increased visibility and consistency by
              allowing us to track who and when changes were made.
            </li>
            <li>
              I collaborated in rewriting the Order Views section of the customer app in
              Vue from a legacy application allowing for a more modern, maintainable
              codebase.
            </li>
            <li>
              I created Azure Serverless Functions integrating with 3rd-party services for
              driver acquisition and onboarding resulting in overall driver happiness.
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
            <li>
              I collaborated in developing a mobile application for scheduling and
              managing meeting room availability within the company.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
