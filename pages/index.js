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
          <p className="my-4 max-w-lg">
            The Nation3 DAO gathers those dreaming about cloud nations and
            crypto cities, documents the required technology for such vision,
            and aims to fund it.
          </p>
          <div className="mt-5 sm:mt-4">
            <GradientLink href="/manifesto" text="Read the manifesto" />
          </div>
        </div>
      </div>
      <div className="flex grid lg:grid-flow-col grid-flow-row gap-16 pt-8 relative bg-white z-1">
        <div>
          <Image src={ThesisIcon} width={42} height={42} />
          <h2 className="text-2xl leading-loose">$NATION</h2>
          <p className="mb-4">
            $NATION holders are Nation3's citizens. It allows its holders to
            govern the Nation3 DAO. $NATION can also be used to obtain NFT
            passports and membership into gated Discord channels.
          </p>
          <GradientLink href="/thesis" text="Become a citizen" />
        </div>
        <div>
          <Image src={RfsIcon} width={42} height={42} />
          <h2 className="text-2xl leading-loose">DAO</h2>
          <p className="mb-4">
            The Nation3 DAO aims to gather together the builders, creators and
            artists that are reimagining nation states. Rebuilding society's
            fabric isn't easy, but you can be part of the journey today.
          </p>
          <GradientLink href="/thesis" text="Join Discord" />
        </div>
      </div>
    </div>
  )
}
