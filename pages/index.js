import Image from 'next/image'
import Head from '../components/Head'
import BigTitle from '../components/BigTitle'
import GradientLink from '../components/GradientLink'
import Projects from '../components/Projects'
import Roadmap from '../components/Roadmap'
import CardLink from '../components/CardLink'
import Flag from '../public/flag.svg'
import HalfOrb from '../public/half-orb.svg'
import Manifesto5 from '../public/manifesto/5.svg'
import TechTree from '../public/tech-tree.png'
import Icon from '../public/icon.svg'
import Card from 'react-animated-3d-card-shadow'
import BurningPhoto from '../public/photos/burning.jpg'
import PutinPhoto from '../public/photos/putin.jpg'
import WHOPhoto from '../public/photos/who.png'
import { Timeline, Button, Card as FlowbiteCard, Avatar } from 'flowbite-react'
import { useEffect, useState } from 'react'
import fetchMeta from 'fetch-meta-tags'

const tradStateImages = [
  {
    photo: BurningPhoto,
    link: 'https://climateactiontracker.org',
  },
  {
    photo: PutinPhoto,
    link: 'https://liveuamap.com',
  },
  {
    photo: WHOPhoto,
    link: 'https://edition.cnn.com/2020/03/30/world/coronavirus-who-masks-recommendation-trnd/index.html',
  },
]

export default function Home({ posts }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    setWidth(window.innerWidth)
  }, [])

  return (
    <div>
      <Head
        title=""
        description="Sovereign cloud nation. Building a community of like-minded people creating a nation on the cloud."
        image="/social/home.png"
        type="website"
      />

      <div className="relative flex flex-row gap-16 mx-auto mt-16 lg:mt-20 xl:mt-64 mb-16 lg:w-full md:mb-24 lg:mb-32 xl:mb-48 items-center">
        <div className="text-left md:basis-3/5 flex flex-col">
          <BigTitle text="A new nation state" gradientText="on the cloud" />
          <p className="my-4 max-w-lg text-lg dark:text-white">
            We are building a zero-tax, Web3-powered, solarpunk society. One
            that serves you, not the other way round.
          </p>
          <div className="mt-5 sm:mt-4">
            <GradientLink href="/join#carousel" text="Become a citizen" />
          </div>
        </div>
        <div className="basis-2/5 hidden md:block">
          <Card
            style={{
              backgroundColor: 'transparent',
              width: width > 1024 ? '470px' : '300px',
              height: width > 1024 ? '300px' : '200px',
              cursor: 'pointer',
            }}
          >
            <Image src={Flag} />
          </Card>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center md:gap-16 md:mb-32 items-center">
        <div className="text-left md:basis-3/5">
          <h2 className="text-xl dark:text-white">
            We have been taught that nation states are ever-lasting institutions
            that are native to humankind itself.
          </h2>
          <br></br>
          <h2 className="font-display text-3xl md:text-4xl dark:text-white">
            <span className="underline decoration-red-700">
              Yet they have failed us.
            </span>
          </h2>
        </div>
        <div className="basis-2/5 md:block pt-8">
          <div className="mb-5 flex -space-x-4 justify-end">
            {tradStateImages.map((image, i) => (
              <a
                href={image.link}
                target="_blank"
                rel="noreferrer"
                className="hover:z-50 hover:scale-105 transition"
                key={i}
              >
                <Avatar
                  img={image.photo.src}
                  rounded={true}
                  stacked={true}
                  size="xl"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="md:-mb-24 overflow-hidden py-8">
        <div className="relative z-10">
          <h1 className="max-w-2xl text-3xl tracking-loose sm:text-4xl md:text-5xl bg-gradient-to-r from-n3blue via-n3green to-n3green text-transparent bg-clip-text font-display mt-1 md:leading-tight">
            We can do <span className="border-b-4 border-n3green">better</span>.
          </h1>
          <p className="my-4 max-w-lg dark:text-white">
            Nation3 is on a mission to rebuild nation states into zero-tax,
            Web3-powered, solarpunk societies.
          </p>
          <div className="mt-5 sm:mt-4">
            <GradientLink href="/manifesto" text="Read the manifesto" />
          </div>
        </div>
        <div className="md:mt-16 md:mb-24 md:my-0 md:-mx-16 md:-mt-48">
          <Image src={Manifesto5} alt="Solarpunk building"></Image>
        </div>
      </div>

      <div className="relative flex flex-col gap-8 mx-auto mb-16 lg:mb-32 xl:mb-48 lg:w-full">
        <div className="text-left">
          <BigTitle text="Our projects" />
          <Projects />
        </div>
      </div>

      <div className="max-w-5xl lg:mt-16 m-auto">
        <div className="w-full relative hidden lg:block">
          <div className="bg-gradient-to-b from-transparent via-white to-white dark:via-gray-800 dark:to-gray-800 absolute w-full h-full z-10"></div>
          <Image src={HalfOrb} layout="responsive" />
        </div>
        <div className="max-w-2xl m-auto rounded-lg lg:pt-32 lg:-mt-96 relative z-20">
          <Roadmap />
          {/*<div className="w-full flex flex-col items-center">
            <Button color="primary">Check out the roadmap</Button>
          </div>*/}
        </div>
      </div>

      <div className="relative flex flex-col gap-8 mx-auto my-16 lg:my-32 xl:my-48 lg:w-full">
        <div className="text-left">
          <BigTitle text="Our thoughts" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 lg:mt-16">
            {posts.map((post, i) => (
              <CardLink
                key={i}
                title={post.title}
                image={post.image}
                url={post.url}
              >
                {post.description}
              </CardLink>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex flex-col gap-8 mx-auto my-16 lg:my-32 xl:my-48 lg:w-full">
        <div className="text-left">
          <BigTitle
            text="Want to co-found a nation?"
            gradientText="Join the movement"
          />
          <p className="my-4 max-w-xl dark:text-white">
            The Nation3 DAO aims to gather together the builders, creators and
            artists that are reimagining nation states. We are sailing uncharted
            waters, and you can be part of our exciting journey today.
          </p>
          <div className="mt-5 sm:mt-4">
            <GradientLink href="/join#carousel" text="Join the movement" />
          </div>
        </div>
      </div>

      <div className="relative flex flex-col lg:flex-row gap-8 mx-auto my-16 lg:my-32 xl:my-48 mb-16 lg:w-full justify-end">
        <div className="md:basis-2/5">
          <Image src={TechTree} alt="Nation3 tech tree" />
        </div>
        <div className="text-right md:basis-3/5 flex flex-col items-end">
          <BigTitle text="Build towards" gradientText="the Nation3 stack" />
          <div className="my-4 max-w-xl dark:text-white">
            <p>
              Choose a piece of the nation3 infrastructure to focus on, submit a
              funding proposal, and help us build a better tomorrow.
            </p>
          </div>
          <div>
            <GradientLink
              href="https://www.figma.com/file/tbvWJ8S962j1hHJJfaCOMK/Nation3---Cloud-Nation-Ecosystem?node-id=439%3A1262"
              text="Explore the tech tree"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const posts = await Promise.all(
    [
      'https://mirror.xyz/writings.nation3.eth/5Y2QNLOYWlkXL7RH8utRHqmx_6H430q-ADGi4ZuzbHo',
      'https://mirror.xyz/writings.nation3.eth/RUl_BPCU5bbbA2GB36ZZStmk4kLhlqzMO-PzRTIhHpw',
      'https://mirror.xyz/writings.nation3.eth/YoT8BtioUPZx3QKgdLcoVBuI7UIddWjk_uiCh2iBuy0',
      'https://mirror.xyz/writings.nation3.eth/IkI3u7YEI0GYEK5cz2WqU6kno-YDEik1K0WT--uHzfw',
      'https://mirror.xyz/writings.nation3.eth/AOOXi_YLeQgTa1xSsjdgkym740uiKYpvNt2LhE9Neik',
      'https://mirror.xyz/writings.nation3.eth/hdCkkEWV17VHZyVtRpRnL11UsqpT9OzoicVVHueZftA',
    ].map((url) => fetchMeta(url))
  )

  return {
    props: {
      posts,
    },
    revalidate: 1,
  }
}
