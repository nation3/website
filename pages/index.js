import Image from 'next/image'
import Head from '../components/Head'
import BigTitle from '../components/BigTitle'
import GradientLink from '../components/GradientLink'
import Icon from '../public/icon.svg'
import Card from 'react-animated-3d-card-shadow'
import Headline from '../public/headline.svg'
import HeadlineLG from '../public/headline-lg.svg'
import HeadlineDark from '../public/headline-dark.svg'
import HeadlineDarkLG from '../public/headline-lg-dark.svg'
import HeroAnimation from '../public/hero.json'
import VideoBg from '../public/illustrations/video-bg.svg'
import SolarpunkCity from '../public/illustrations/solarpunk-city.svg'
import Constitution from '../public/illustrations/constitution.svg'
import ConstitutionText from '../public/illustrations/constitution-text.svg'
import SolarpunkCity2 from '../public/illustrations/solarpunk-city-2.svg'
import { Button } from 'flowbite-react'
import { useEffect, useState } from 'react'
import fetchMeta from 'fetch-meta-tags'
import Lottie from 'lottie-react'

import GradientBorderCard from '../components/GradientBorderCard'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Keyboard } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import CitizensCarousel from '../components/CitizensCarousel'
import BePart from '../components/BePart'
import LazyIframe from '../components/LazyIframe'

export default function Home({ posts }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    setWidth(window.innerWidth)
  }, [])

  let carouselItems = [
    {
      text: `
      # 1.
      ## Join the community
      You read [the manifesto](/manifesto), it clicked.

      You are fed up with the way traditional states run the show. You see your taxes go nowhere. Now what?

      Now you can contribute to building a Web3-powered,
      tax-free, inclusive community that aims to build [solarpunk](https://en.wikipedia.org/wiki/Solarpunk) society you’ll
      want to live in.

      - $NATION is your entry point into the ecosystem. You can [buy some here](https://app.balancer.fi/#/trade/ether/0x333A4823466879eeF910A04D473505da62142069), or earn it by completing [open tasks on Dework](https://app.dework.xyz/nation3/board)
      - Head over to [Discord](https://n3.gg/discord) and introduce yourself to the community
      - Majority of tasks and discussion channels are token-gated to citizens 
      (pro tip: you’d want to get at least 2 $NATION)`,
      image: '/icons/nation3.svg',
    },
    {
      text: `
      # 2.a.
      ## Become a Genesis Citizen
      You can now become a Genesis Citizen of an emerging, rapidly growing tech nation. You can claim your passport out of only 420 to ever be minted.

      ### Why would you want to be a citizen?
      
      - Have a say in the direction we take as a nation
      - Participate in the internal economy, including paid work and the upcoming UBI
      - Access all citizen-only spaces online and offline
      - Propose your own projects and get funding
      - Benefit from all Nation3 services being built now and in the future, such as the Court and insurance circles
      - As a Genesis Citizen, get priority access to any physical locations in Nation3`,
      image: '/icons/world.svg',
    },
    {
      text: `
      # 2.b.
      ## Become a Genesis Citizen
      ### Ready to grab your passport?

      - [Lock up](https://app.nation3.org/lock) your $NATION to obtain more than 2 $veNATION* - your skin-in-the-state. Whenever your lock expires, the underlying $NATION is yours to keep, sell, or re-lock
      - While we’re devising a social vouching mechanism to ensure Nation3 is inclusive to everyone regardless of their financial background, you can still get verified on [Discord](https://n3.gg/discord) and get access to [Dework tasks](https://app.dework.xyz/nation3/board) with a minimum balance of 0.1 $veNATION. You can earn the rest you need for a passport by completing paid tasks`,
      image: '/join/passport.svg',
    },
    {
      text: `
      # 3.
      ## Start contributing
      You are now one of the handful of visionary individuals to anticipate the rise of cloud nations and [network states](https://thenetworkstate.com) - and you can contribute to shaping it in a way that preserves our tomorrow: 

      - Participate in governance, following our new [Governance Standard](https://github.com/nation3/gov/blob/main/GOVERNANCE.md)
      - Propose your own projects that advance the [Nation3 stack](https://www.figma.com/file/tbvWJ8S962j1hHJJfaCOMK/Nation3---Cloud-Nation-Ecosystem?node-id=439%3A1262), and get funding from the DAO
      - Contribute to current [open tasks on Dework](https://app.dework.xyz/nation3/board)
      - Join Social Circles and other community events (as announced on Discord)`,
      image: '/icons/people.svg',
    },
  ]

  return (
    <div>
      <Head
        title=""
        description="Sovereign cloud nation. Building a community of like-minded people creating a nation on the cloud."
        image="/social/home.png"
        type="website"
      />
      <div className="w-full flex flex-row my-4 lg:mt-24 lg:mb-16 mx-auto items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src={Headline}
            className="block lg:hidden dark:hidden"
            priority
            alt="A new nation state on the cloud"
          />
          <Image
            src={HeadlineDark}
            className="hidden lg:hidden dark:block lg:dark:hidden"
            priority
            alt="A new nation state on the cloud"
          />
          <Image
            src={HeadlineLG}
            className="hidden lg:block dark:hidden"
            priority
            alt="A new nation state on the cloud"
          />
          <Image
            src={HeadlineDarkLG}
            className="hidden lg:dark:block"
            priority
            alt="A new nation state on the cloud"
          />

          <p className="max-w-md text-lg text-center dark:text-white">
            Online-first, zero-tax nation with its own jurisdiction, court and
            system of law.
          </p>
        </div>
      </div>
      <Lottie animationData={HeroAnimation} loop={false} />

      <div className="text-center flex flex-col justify-center">
        <BigTitle
          text="The world's first"
          gradientText="Internet-native jurisdiction"
        />
        <p className="max-w-md m-auto mt-4 dark:text-white">
          Nation3 gives you the legal guarantees you need to safely transact on
          the Internet, without resorting to traditional countries and endless
          bureaucracy.
        </p>
        <div className="relative aspect-video my-8 lg:my-16 shadow-xl rounded-xl">
          <LazyIframe
            url="https://www.youtube.com/embed/0GEulicKACw?autoplay=1&loop=1&cc_load_policy=1rel=0&controls=0&showinfo=0&mute=1&playlist=0GEulicKACw&autoplay=1"
            title="test"
          />
        </div>
        <Image src={VideoBg} className="full-width -mt-36 -z-10" alt="" />
      </div>

      <div className="flex flex-col mx-auto my-16 px-8 lg:px-0 full-width">
        <div className="text-center">
          <BigTitle text="Our thoughts" />
          <p className="max-w-md m-auto mb-16 dark:text-white">
            Read about our journey creating a country on the Internet.
          </p>
          <Swiper
            pagination={true}
            navigation={true}
            spaceBetween={16}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 4,
              },
              1660: {
                slidesPerView: 5,
              },
            }}
            modules={[Pagination, Navigation, Keyboard]}
            keyboard={{
              enabled: true,
            }}
          >
            {posts.map(({ title, image, url, description }, i) => (
              <SwiperSlide key={i}>
                <div className="mb-12">
                  <GradientBorderCard
                    className="text-left flex flex-col justify-center align-items-center gap-4 shadow-xl"
                    containerClassName="max-w-sm"
                  >
                    <Image
                      src={image}
                      className="rounded-tl-2xl rounded-tr-2xl"
                      width={380}
                      height={190}
                      alt=""
                    />
                    <div className="px-4 pb-4">
                      <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                        {title}
                      </h3>
                      <div className="font-normal text-gray-700 dark:text-gray-400">
                        {description}
                      </div>
                    </div>
                  </GradientBorderCard>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="text-center -mx-16 px-16 xl:full-width xl:mx-0 xl:px-0 bg-gradient-to-r from-[#EEF9FF] to-[#EAFFF4] dark:bg-none">
        <div className="bg-[url('/illustrations/constitution-bg.svg')] bg-right-bottom bg-no-repeat py-24">
          <div className="max-w-screen-xl m-auto flex flex-col lg:flex-row align-items-center gap-16">
            <div className="lg:w-5/12 lg:text-left lg:py-16 ">
              <BigTitle gradientText="Become a citizen" />
              <BigTitle
                text="and have a say in the Constitution
of the world’s first internet-native jurisdiction"
              />
              <GradientLink text="Read the Nation3 Constitution" href={''} />
            </div>

            <div className="hidden lg:block lg:w-7/12 flex flex-row relative z-0">
              <div className="z-10">
                <Card
                  style={{
                    backgroundColor: 'transparent',
                    width: 474,
                    height: 660,
                    cursor: 'pointer',
                    zIndex: 10,
                  }}
                >
                  <Image src={Constitution} fill={true} alt="" />
                </Card>
              </div>
              <div className="hidden lg:block absolute -right-4 top-20 mt-2 -z-10">
                <Image
                  src={ConstitutionText}
                  className="z-0"
                  height={490}
                  alt=""
                />
              </div>
            </div>
            <div className="lg:hidden flex justify-center">
              <Image
                src={Constitution}
                className="shadow-xl rounded-xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <CitizensCarousel />
      <Image src={SolarpunkCity2} alt="" />
      <BePart />
    </div>
  )
}

export const getStaticProps = async () => {
  /*const posts = await Promise.all(
    [
      'https://mirror.xyz/writings.nation3.eth/5Y2QNLOYWlkXL7RH8utRHqmx_6H430q-ADGi4ZuzbHo',
      'https://mirror.xyz/writings.nation3.eth/RUl_BPCU5bbbA2GB36ZZStmk4kLhlqzMO-PzRTIhHpw',
      'https://mirror.xyz/writings.nation3.eth/YoT8BtioUPZx3QKgdLcoVBuI7UIddWjk_uiCh2iBuy0',
      'https://mirror.xyz/writings.nation3.eth/IkI3u7YEI0GYEK5cz2WqU6kno-YDEik1K0WT--uHzfw',
      'https://mirror.xyz/writings.nation3.eth/AOOXi_YLeQgTa1xSsjdgkym740uiKYpvNt2LhE9Neik',
      'https://mirror.xyz/writings.nation3.eth/hdCkkEWV17VHZyVtRpRnL11UsqpT9OzoicVVHueZftA',
    ].map((url) => fetchMeta(url))
  )*/

  const posts = [
    {
      title: 'The scope of a nation',
      image:
        'https://mirror-media.imgix.net/publication-images/fII0Qfaj-lASQJY2DLiJ4.png?height=915&width=1830&h=915&w=1830&auto=compress',
      url: '',
      description:
        "What does a nation state really do? Today's nation states simultaneously do a lot and very little. They tend to be very paternalistic and constantly expand scope, all while failing to deliver on the basics  ",
    },
    {
      title: "We don't really need taxes",
      image:
        'https://mirror-media.imgix.net/publication-images/8brzF7FrwZ8OUnJros5CU.png?height=1062&width=2124&h=1062&w=2124&auto=compress',
      url: '',
      description:
        "What does a nation state really do? Today's nation states simultaneously do a lot and very little. They tend to be very paternalistic and constantly expand scope, all while failing to deliver on the basics ",
    },
    {
      title: 'test',
      image:
        'https://mirror-media.imgix.net/publication-images/fII0Qfaj-lASQJY2DLiJ4.png?height=915&width=1830&h=915&w=1830&auto=compress',
      url: '',
      description:
        "What does a nation state really do? Today's nation states simultaneously do a lot and very little. They tend to be very paternalistic and constantly expand scope, all while failing to deliver on the basics ",
    },
    {
      title: 'test',
      image:
        'https://mirror-media.imgix.net/publication-images/fII0Qfaj-lASQJY2DLiJ4.png?height=915&width=1830&h=915&w=1830&auto=compress',
      url: '',
      description:
        "What does a nation state really do? Today's nation states simultaneously do a lot and very little. They tend to be very paternalistic and constantly expand scope, all while failing to deliver on the basics  ",
    },
    {
      title: 'test',
      image:
        'https://mirror-media.imgix.net/publication-images/fII0Qfaj-lASQJY2DLiJ4.png?height=915&width=1830&h=915&w=1830&auto=compress',
      url: '',
      description:
        "What does a nation state really do? Today's nation states simultaneously do a lot and very little. They tend to be very paternalistic and constantly expand scope, all while failing to deliver on the basics  ",
    },
    {
      title: 'test',
      image:
        'https://mirror-media.imgix.net/publication-images/fII0Qfaj-lASQJY2DLiJ4.png?height=915&width=1830&h=915&w=1830&auto=compress',
      url: '',
      description:
        "What does a nation state really do? Today's nation states simultaneously do a lot and very little. They tend to be very paternalistic and constantly expand scope, all while failing to deliver on the basics  ",
    },
  ]

  return {
    props: {
      posts,
    },
    revalidate: 1,
  }
}
