import Image from 'next/image'
import BigTitle from '../components/BigTitle'
import InfiniteCarousel from '../components/InfiniteCarousel'
import GradientBorderCard from '../components/GradientBorderCard'

export default function CitizensCarousel() {
  const citizens = [
    {
      name: 'Tim Draper',
      role: 'Legendary investor',
      twitter: 'timdraper',
      pic: 'https://pbs.twimg.com/profile_images/712463875975680000/yUVhpujj_400x400.jpg',
    },
    {
      name: 'Sandeep Nailwal',
      role: 'Founder, Polygon',
      twitter: 'sandeepnailwal',
      pic: 'https://pbs.twimg.com/profile_images/1571949221506420741/3aRt9iud_400x400.jpg',
    },
    {
      name: 'Alex Masmej',
      role: 'Founder, Showtime',
      twitter: 'AlexMasmej',
      pic: 'https://pbs.twimg.com/profile_images/1585481031653564422/nuPwlIQ1_400x400.jpg',
    },
    {
      name: 'Santi Siri',
      role: 'Founder, PoH',
      twitter: 'santisiri',
      pic: 'https://pbs.twimg.com/profile_images/1511355749913481216/tDQSHYB0_400x400.png',
    },
    {
      name: 'Jake Brukhman',
      role: 'Founder, CoinFund',
      twitter: 'jbrukh',
      pic: 'https://pbs.twimg.com/profile_images/1583116442764976128/iQTvJdWR_400x400.jpg',
    },
    {
      name: 'Paul Kohlhaas',
      role: 'Founder, Molecule',
      twitter: 'paulkhls',
      pic: 'https://pbs.twimg.com/profile_images/1444995367146344454/3YJbxvwq_400x400.jpg',
    },
  ]

  const cards = citizens.map(({ name, role, twitter, pic }, i) => {
    return (
      <GradientBorderCard
        className="p-4 text-center flex flex-col justify-center align-items-center gap-4"
        containerClassName="w-64 h-48"
        key={i}
      >
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={`https://twitter.com/${twitter}`}
        >
          <div className="flex flex-row justify-center align-items-center">
            <div className="relative w-16 h-16">
              <Image
                src={pic}
                width={64}
                height={64}
                className="w-16 h-16 m-auto rounded-full absolute z-0 grayscale sepia contrast-100 saturate-200 brightness-125"
              />
              <div className="bg-gradient-to-b from-n3blue to-n3green opacity-75 absolute top-0 right-0 bottom-0 left-0 z-10 rounded-full"></div>
            </div>
          </div>
          <p className="font-medium text-xl dark:text-white">{name}</p>
          <p className="text-n3blue text-xl">{role}</p>
        </a>
      </GradientBorderCard>
    )
  })

  return (
    <div className="text-center mt-16 xl:mt-32 mb-16 xl:mx-0 xl:px-0">
      <BigTitle text="Meet the citizens" />
      <p className="max-w-md m-auto mt-4 px-4 dark:text-white">
        Nation3 has caught the attention of some of the leading thinkers and
        doers in the space.
      </p>
      <div className="mt-16">
        <InfiniteCarousel items={cards} />
      </div>
    </div>
  )
}
