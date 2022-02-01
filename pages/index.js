import Image from 'next/image'
import Link from 'next/link'
import Head from '../components/Head'
import BigTitle from '../components/BigTitle'
import ThesisIcon from '../public/icons/thesis.svg'
import RfsIcon from '../public/icons/rfs.svg'
import TeamIcon from '../public/icons/team.svg'

export default function Home() {
  return (
    <div>
      <Head title="" description="VC fund" image="" type="website" />

      <div className="bg-[url('/home-bg.svg')] bg-no-repeat absolute inset-0 bg-[top_-7.5rem_right_-20rem] bg-[length:768px_768px] bottom-32 md:bg-[top_-7.5rem_right_-7.5rem] lg:bg-[length:768px_768px] xl:bg-auto xl:bottom-0"></div>
      <div className="relative flex flex-row items-center gap-16 mx-auto mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-64 mb-32 lg:w-full xl:mb-32 xl:mb-60 z-1">
        <div className="text-left">
          <BigTitle text="Rebuilding nation states" gradientText="with Web3" />
          <div className="mt-5 sm:mt-4">
            <Link href="/manifesto">
              <a className="text-lg font-medium bg-gradient-to-r from-n3blue to-n3green text-transparent bg-clip-text">
                Read the manifesto →
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex grid lg:grid-flow-col grid-flow-row gap-16 pt-8 relative bg-white z-1">
        <div>
          <Image src={ThesisIcon} width={42} height={42} />
          <h2 className="text-2xl leading-loose">Thesis</h2>
          <p>
            For the first time Web3 gives us the opportunity to un-bundle the
            services that nation states provide, make them 100x better and
            ensure they are community-owned. The result will be a new, open
            source stack for running Web3-powered nation states: the Nation3
            stack.
          </p>
        </div>
        <div>
          <Image src={RfsIcon} width={42} height={42} />
          <h2 className="text-2xl leading-loose">Request for startups</h2>
          <p>
            We have compiled a tech tree of what needs to be built to unlock the
            nations and cities of the future. If you are building one of those
            key components, please reach out, we would love to know more!
          </p>
        </div>
        <div>
          <Image src={TeamIcon} width={42} height={42} />
          <h2 className="text-2xl leading-loose">Team</h2>
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
