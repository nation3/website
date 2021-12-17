import Head from '../components/Head'

export default function Team() {
  return (
    <div>
      <Head title="Team" description="VC fund" image="" type="website" />
      <h1 className="text-6xl leading-loose">Team</h1>
      <div className="flex grid lg:grid-flow-col grid-flow-row gap-16">
        <div>
          <h2 className="text-4xl leading-loose">Luis Cuende</h2>
          <p>
            For the first time Web3 gives us the opportunity to un-bundle the
            services that nation states provide, make them 100x better and
            ensure they are community-owned. The result will be a new, open
            source stack for running Web3-powered nation states: the Nation3
            stack.
          </p>
        </div>
        <div>
          <h2 className="text-4xl leading-loose">Anastasiya Belyaeva</h2>
          <p>
            We have compiled a tech tree of what needs to be built to unlock the
            nations and cities of the future. If you are building one of those
            key components, please reach out, we would love to know more!
          </p>
        </div>
      </div>
    </div>
  )
}
