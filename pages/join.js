import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Image from 'next/image'
import { Pagination, Navigation, Keyboard } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import Head from '../components/Head'
import TextLink from '../components/TextLink'
import 'swiper/css'

const components = {
  a: (props) => (
    <TextLink className="hover:opacity-70 transition-opacity" {...props} />
  ),
}

const CarouselItem = ({ children, image }) => (
  <div className="flex h-full items-center justify-items-stretch px-16 gap-8">
    <div className="lg:basis-4/6 lg:block">{children}</div>
    <div className="basis-2/6 hidden lg:block flex h-full">
      <div className="relative h-full rounded-full overflow-hidden">
        <Image src={image} fill={true} alt="" />
      </div>
    </div>
  </div>
)

export default function Join({ carouselItems }) {
  return (
    <>
      <Head
        title="Join"
        description="Join Nation3 and co-found a sovereign nation on the cloud. "
        image="/social/home.png"
        type="website"
      />
      <div className="h-screen flex flex-col" id="carousel">
        <div className="-ml-16 -mr-8 md:mx-0 md:my-8 h-full rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-80 bg-gradient-to-r from-n3blue to-n3green text-white overflow-hidden">
          <Swiper
            pagination={{
              type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation, Keyboard]}
            className="h-full"
            keyboard={{
              enabled: true,
            }}
          >
            {carouselItems.map((item, i) => (
              <SwiperSlide key={i}>
                <CarouselItem image={item.image}>
                  <div className="prose prose-sm md:prose-lg text-white prose-h1:font-display prose-h1:text-white prose-h1:font-light md:prose-h1:text-5xl prose-h1:mb-4 prose-h2:font-display prose-h2:text-white prose-h2:font-normal md:prose-h2:text-4xl prose-h2:mb-4 prose-h2:mt-0 prose-h3:font-display prose-h3:text-white prose-h3:font-normal md:prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-0 prose-a:text-white prose-li:my-0">
                    <MDXRemote {...item.serialized} components={components} />
                  </div>
                </CarouselItem>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
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
  const serializedItems = await Promise.all(
    carouselItems.map((item) => serialize(item.text))
  )
  carouselItems = carouselItems.map((item, i) => ({
    serialized: serializedItems[i],
    ...item,
  }))

  return {
    props: { carouselItems },
  }
}
