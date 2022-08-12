import SolarpunkOrb from '../public/join/solarpunk-orb.png'
import Image from 'next/image'
import { ChevronDoubleRightIcon } from '@heroicons/react/outline'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Keyboard } from 'swiper'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const components = {
  a: (props) => <a target="_blank" rel="noreferrer" {...props}></a>,
}

const CarouselItem = ({ children, image }) => (
  <div className="flex h-full items-center px-16 gap-8">
    <div className="lg:basis-4/6 lg:block">{children}</div>
    <div className="basis-2/6 hidden lg:block flex h-full">
      <div className="relative h-full rounded-full overflow-hidden">
        <Image src={image} layout="fill" objectFit="contain" />
      </div>
    </div>
  </div>
)

export default function Join({ carouselItems }) {
  return (
    <div className="h-screen flex flex-col" id="carousel">
      <div className="my-8 h-full rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-80 bg-gradient-to-r from-n3blue to-n3green text-white overflow-hidden">
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
                <div className="prose prose-lg text-white prose-h1:font-display prose-h1:text-white prose-h1:font-light prose-h1:text-5xl prose-h1:mb-4 prose-h2:font-display prose-h2:text-white prose-h2:font-normal prose-h2:text-4xl prose-h2:mb-4 prose-h2:mt-0 prose-a:text-white prose-li:my-0">
                  <MDXRemote {...item.serialized} components={components} />
                </div>
              </CarouselItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  let carouselItems = [
    {
      text: `
      # 1.
      ## Become a contributor
      You read [the manifesto](/manifesto), it clicked.

      You are fed up with the way traditional states run the show. You see your taxes go nowhere. Now what?

      Now you can contribute to building a Web3-powered,
      tax-free, inclusive community that aims to build [solarpunk](https://en.wikipedia.org/wiki/Solarpunk) cities you’ll
      want to live in.
      
      - Head over to [Discord](https://discord.com/invite/nation3) and introduce yourself to the community. The majority of channels are token-gated, but you’ll learn how to unlock them next.
      - Pick up [open tasks on Dework](https://app.dework.xyz/nation3) and earn $NATION.
      Next, we'll dive in into $NATION.`,
      image: SolarpunkOrb,
    },
    {
      text: `
      # 2.
      ## Become a co-founder
      Ever dreamed of co-founding a new nation? You can contribute to the
      Nation3 economy, earn $NATION.
      Holding $NATION is the community currency underpinning Nation3. It economically aligns the whole community towards achieving the Nation3 mission. like holding a co-founder stake in an emerging, rapidly growing tech country. It’s how nations should have always been: not parasitically taking a cut from everything you create, but sharing in the upside. 

      - You can earn your $NATION by picking up open tasks, or [buy it here](https://app.balancer.fi/#/trade/ether/0x333A4823466879eeF910A04D473505da62142069).
      - You can earn rewards by providing liquidity to the [NATION/ETH pool](https://app.balancer.fi/#/pool/0x0bf37157d30dfe6f56757dcadff01aed83b08cd600020000000000000000019a).
      - You can [lock up your $NATION in exchange for $veNATION](https://app.nation3.org/lock) — your skin-in-the-state — and for a limited time only get access to Discord channels with a balance above 0.1 $veNATION.

      You’ll want to have more than 0.1 though. Next, we'll discover why.`,
      image: '/join/flag-shade.svg',
    },
    {
      text: `
      # 3.
      ## Become a Genesis Citizen
      You can now become a Genesis Citizen and claim your passport out of only 420 Genesis Passports to ever be minted.

      Why would you want to be a Citizen? 

      - Have a say in the direction we take as a nation.
      - Participate in the internal economy, including paid work.
      - Access all citizen-only spaces online and offline.
      - Propose your own projects and get funding.
      - Benefit from all Nation3 services being built now and in the future.
      - As a Genesis Citizen, get priority access to any physical locations in Nation3.

      A minimum of 2 $veNATION is required to mint a passport. Whenever your lock expires, the underlying $NATION is yours to keep, sell, or re-lock.`,
      image: '/join/passport.svg',
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
