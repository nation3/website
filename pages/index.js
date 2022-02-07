import Image from 'next/image'
import Link from 'next/link'
import Head from '../components/Head'
import BigTitle from '../components/BigTitle'
import GradientLink from '../components/GradientLink'
import ThesisIcon from '../public/icons/thesis.svg'
import RfsIcon from '../public/icons/rfs.svg'
import TeamIcon from '../public/icons/team.svg'

export default function Home() {
  return (
    <div>
      <Head
        title=""
        description="It's time to reinvent the nation state."
        image=""
        type="website"
      />

      <div className="bg-[url('/home-bg.svg')] bg-no-repeat absolute inset-0 bg-[top_-7.5rem_right_-20rem] bg-[length:768px_768px] bottom-32 md:bg-[top_-7.5rem_right_-7.5rem] lg:bg-[length:768px_768px] xl:bg-auto xl:bottom-0"></div>
      <div className="relative flex flex-row items-center gap-16 mx-auto mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-64 mb-32 lg:w-full xl:mb-32 xl:mb-60 z-1">
        <div className="text-left">
          <BigTitle text="Rebuilding nation states" gradientText="with Web3" />
          <div className="mt-5 sm:mt-4">
            <GradientLink href="/manifesto" text="Read the manifesto" />
          </div>
        </div>
      </div>
      <div className="flex grid lg:grid-flow-col grid-flow-row gap-16 pt-8 relative bg-white z-1">
        <div>
          <Image src={ThesisIcon} width={42} height={42} />
          <h2 className="text-2xl leading-loose">Thesis</h2>
          <p className="mb-4">
            For the first time Web3 gives us the opportunity to un-bundle the
            services that nation states provide, make them 100x better and
            ensure they are community-owned. The result will be a new, open
            source stack for running Web3-powered nation states: the Nation3
            stack.
          </p>
          <GradientLink href="/thesis" text="Thesis" />
        </div>
        <div>
          <Image src={RfsIcon} width={42} height={42} />
          <h2 className="text-2xl leading-loose">Request for startups</h2>
          <p className="mb-4">
            We have compiled a tech tree of what needs to be built to unlock the
            nations and cities of the future. If you are building one of those
            key components, please reach out, we would love to know more!
          </p>
          <GradientLink href="/thesis" text="Tech tree" />
        </div>
        <div>
          <Image src={TeamIcon} width={42} height={42} />
          <h2 className="text-2xl leading-loose">Team</h2>
          <p className="mb-4">
            We combine VC and founder experience in Web3 and DAOs, and know what
            it's like to build at the dawn of a new movement. But most
            importantly, we are loyal — empathy with founders is truly in our
            heart.
            <br></br>
            <br></br>
            Are you one of the hopeful, bold and visionary souls building a
            better world for humankind? Then we commit to sticking by your side
            as you crack on — while also jumping into brand-building, design and
            technical discussions when you need us.
          </p>
          <GradientLink href="/team" text="Team" />
        </div>
      </div>
    </div>
  )
}
