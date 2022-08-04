import { Carousel } from 'flowbite-react'
import SolarpunkOrb from '../public/solarpunk-orb.png'
import Image from 'next/image'
import { ChevronDoubleRightIcon } from '@heroicons/react/outline'

const CarouselItem = ({ children, image }) => {
  return (
    <div className="flex h-full items-center pl-16 pr-24 sm:pr-32 gap-8">
      <div className="lg:basis-3/5 lg:block">{children}</div>
      <div className="basis-2/5 hidden lg:block">
        <Image src={image} layout="responsive" />
      </div>
    </div>
  )
}

export default function Join({ markdown }) {
  return (
    <div className="h-screen flex flex-col" id="carousel">
      <div className="my-8 h-full rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-80 bg-gradient-to-r from-n3blue to-n3green text-white">
        <Carousel
          indicators={false}
          slide={false}
          slideInterval={1000}
          leftControl={<></>}
          rightControl={
            <span className="inline-flex items-center justify-center bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 transition absolute top-0 right-0 bottom-0 w-16 sm:w-24">
              <ChevronDoubleRightIcon className="h-6 w-6 text-white dark:text-gray-800 sm:h-12 sm:w-12" />
            </span>
          }
        >
          <CarouselItem image={SolarpunkOrb}>
            <h2 className="font-display text-5xl mb-4">1.</h2>
            <h2 className="font-display text-4xl mb-4">Become a contributor</h2>
            <div className="text-lg">
              You read the manifesto, it clicked.
              <br /> You are fed up with the way traditional states run the
              show. You see your taxes go nowhere. Now what?
              <br />
              <br /> Now you can contribute to building a web3-powered,
              tax-free, inclusive community, that will one day receive
              international recognition and build solar punk cities you’ll want
              to live in.
              <br />
              <br />
              <ul className="list-disc">
                <li>
                  Head over to Discord and introduce yourself to the community
                  (majority of channels are token-gated, but you’ll learn how to
                  unlock them in next steps)
                </li>
                <li>
                  Pick up open tasks on Dework and earn $NATION. Why would you
                  want to have any?
                </li>
              </ul>
            </div>
          </CarouselItem>
          <CarouselItem image={SolarpunkOrb}>{markdown}</CarouselItem>
        </Carousel>
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const card1 = await fetch('http://localhost:3000/content/join/card1.md')
  const markdown = await card1.text()
  console.log(markdown)

  return {
    props: { markdown },
    revalidate: 60 * 5,
  }
}
