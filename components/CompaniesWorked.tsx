export default function Companies() {
  return (
    <section data-scroll-section className="py">
      <h2 data-scroll data-scroll-speed="1">
        Where I&apos;ve worked
      </h2>

      <div className="flex flex-wrap gap-x-10 gap-y-20">
        <div className="basis-3/5">
          <h3 className="text-foreground-secondary text-opacity-60">
            GoPuff (September 2019 - September 2022)
          </h3>

          <p>
            I was fortunate to have had the most fun and exciting experience of my career,
            yet, at GoPuff. I had the opportunity to work along side other talented
            individuals in various capacities including frontend, backend, serverless and
            mobile. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, ea,
            nobis minima, eaque dolore eos esse laborum iste aperiam magni expedita quia
            ipsam natus sed pariatur vel eligendi. Eos, quaerat! Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Iusto error nemo molestias suscipit nihil
            pariatur aliquid totam ipsam ipsum placeat ipsa facere perferendis aut enim
            alias blanditiis ducimus, eligendi eveniet.
          </p>
        </div>

        <div className="border-solid border-0 border-r border-foreground border-opacity-40" />

        <div className="flex-1">
          <h3 className="text-foreground-secondary text-opacity-60">
            Andela (August 2018 - September 2019)
          </h3>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, ea, nobis
            minima, eaque dolore eos esse laborum iste aperiam magni expedita quia ipsam
            natus sed pariatur vel eligendi. Eos, quaerat!
          </p>
        </div>
      </div>
    </section>
  )
}
