import Image from 'next/image'
import Head from '../components/Head'
import BigTitle from '../components/BigTitle'
import GradientLink from '../components/GradientLink'
import ThesisIcon from '../public/icons/thesis.svg'
import RfsIcon from '../public/icons/rfs.svg'
import Flag from '../public/flag.svg'
import Card from 'react-animated-3d-card-shadow'
import { useEffect, useState } from 'react'

export default function Home() {
  const [width, setWidth] = useState()
  const breakpoint = 620

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  return (
    <div>
      <Head
        title=""
        description="It's time to reinvent the nation state."
        image=""
        type="website"
      />

      <div className="relative flex flex-row items-center gap-16 mx-auto mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-64 mb-32 lg:w-full xl:mb-32 xl:mb-60 z-1">
        <div className="text-left md:basis-3/5">
          <BigTitle text="A new nation state" gradientText="on the cloud" />
          <p className="my-4 max-w-lg">
            Nation3 is a sovereign cloud nation. We are building a community of
            like-minded people creating a nation on the cloud.
          </p>
          <div className="mt-5 sm:mt-4">
            <GradientLink href="/manifesto" text="Read the manifesto" />
          </div>
        </div>
        <div className="basis-2/5 hidden md:block">
          <Card
            style={{
              backgroundColor: 'transparent',
              width: width > 1025 ? '450px' : '300px',
              height: width > 1025 ? '300px' : '200px',
              cursor: 'pointer',
            }}
          >
            <Image src={Flag} />
          </Card>
        </div>
      </div>
      <div className="flex grid lg:grid-flow-col grid-flow-row gap-16 pt-8 relative bg-white z-1">
        <div>
          <Image src={ThesisIcon} width={42} height={42} />
          <h2 className="text-2xl leading-loose">Become a citizen</h2>
          <p className="mb-4">
            You need to lock 10 $NATION tokens for a year to obtain an NFT
            passport. Such passport gives you governance rights in the Nation3
            DAO and membership into gated Discord channels.
          </p>
          <GradientLink
            href="https://app.nation3.org/join"
            text="Become a citizen"
          />
        </div>
        <div>
          <Image src={RfsIcon} width={42} height={42} />
          <h2 className="text-2xl leading-loose">Help shape it</h2>
          <p className="mb-4">
            The Nation3 DAO aims to gather together the builders, creators and
            artists that are reimagining nation states. We are sailing uncharted
            waters, and you can be part of our exciting journey today.
          </p>
          <GradientLink href="/thesis" text="Join Discord" />
        </div>
      </div>
    </div>
  )
}
