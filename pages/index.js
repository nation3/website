import Head from '../components/Head'
import Image from 'next/image'
import Orb from '../public/orb.png'

export default function Home() {
  return (
    <div>
      <Head title="" description="VC fund" image="" type="website" />
      <div className="mt-10 mx-auto sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28 flex flex-row items-center gap-16 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
        <div className="text-left max-w-xl basis-2/3">
          <h1 className="text-4xl tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Rebuilding nation states</span>{' '}
            <span className="block text-teal-600 xl:inline bg-gradient-to-br from-sky-400 to-emerald-400 text-transparent bg-clip-text">
              with Web3
            </span>
          </h1>
          <div className="mt-5 sm:mt-8">
            <a href="#" className="text-base font-medium">
              Manifesto →
            </a>
          </div>
        </div>
        <div className="grow flex justify-end basis-1/3 relative">
          <Image src={Orb} />
        </div>
      </div>
      <div className="flex grid lg:grid-flow-col grid-flow-row gap-16">
        <div>
          <h2 className="text-4xl leading-loose">Thesis</h2>
          <p>
            For the first time Web3 gives us the opportunity to un-bundle the
            services that nation states provide, make them 100x better and
            ensure they are community-owned. The result will be a new, open
            source stack for running Web3-powered nation states: the Nation3
            stack.
          </p>
        </div>
        <div>
          <h2 className="text-4xl leading-loose">Request for startups</h2>
          <p>
            We have compiled a tech tree of what needs to be built to unlock the
            nations and cities of the future. If you are building one of those
            key components, please reach out, we would love to know more!
          </p>
        </div>
        <div>
          <h2 className="text-4xl leading-loose">Team</h2>
          <p>
            We have deep experience in Web3, DAOs and helping early-stage teams.
            We have been founders before, so we know what we are talking about.
            We are extremely passionate about brand-building, design and
            technical discussions.
          </p>
        </div>
      </div>
    </div>
  )
}
