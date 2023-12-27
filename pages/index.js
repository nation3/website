import Lottie from '@rookino/react-lottie-light'
import fetchMeta from 'fetch-meta-tags'
import Image from 'next/image'
import Card from 'react-animated-3d-card-shadow'
import { Pagination, Navigation, Keyboard } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import BePart from '../components/BePart'
import BigTitle from '../components/BigTitle'
import CitizensCarousel from '../components/CitizensCarousel'
import GradientBorderCard from '../components/GradientBorderCard'
import GradientLink from '../components/GradientLink'
import Head from '../components/Head'
import LazyIframe from '../components/LazyIframe'
import HeadlineDark from '../public/headline-dark.svg'
import HeadlineDarkLG from '../public/headline-lg-dark.svg'
import HeadlineLG from '../public/headline-lg.svg'
import Headline from '../public/headline.svg'
import HeroAnimation from '../public/hero.json'
import ConstitutionText from '../public/illustrations/constitution-text.svg'
import Constitution from '../public/illustrations/constitution.svg'
import SolarpunkCity2 from '../public/illustrations/solarpunk-city-2.svg'
import VideoBg from '../public/illustrations/video-bg.svg'
import 'swiper/css'

export default function Home({ posts }) {
  return (
    <div className="home">
      <Head
        title=""
        description="Sovereign cloud nation. Building a community of like-minded people creating a nation on the cloud."
        image="/social/home.png"
        type="website"
      />
      <div className="w-full flex flex-row mt-8 mb-4 lg:mt-28 lg:mb-16 mx-auto items-center">
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

          <p className="max-w-md text-lg text-center dark:text-white my-2">
            A zero-tax, Web3-powered, solarpunk society. One that serves you, not the other way round.
          </p>
        </div>
      </div>
      <Lottie options={{ animationData: HeroAnimation, loop: false }} />

      <div className="text-center flex flex-col justify-center lg:mb-0">
        <BigTitle
          text="The world's first"
          gradientText="Internet-native jurisdiction"
        />
        <p className="max-w-md m-auto mt-4 dark:text-white">
          Nation3 gives you the legal guarantees you need to safely transact on
          the Internet, without resorting to traditional countries and endless
          bureaucracy.
        </p>
        <GradientLink
          text="Read more"
          href="/jurisdiction"
          className="mt-4 lg:mt-8 mb-8 lg:mb-16"
        />
        <Image
          src={VideoBg}
          className="full-width hidden lg:block lg:-mt-36 -z-10"
          alt=""
        />
      </div>

      <div className="flex flex-col mx-auto -mx-8 lg:px-12 my-8 lg:-mt-12 lg:my-16 lg:full-width">
        <div className="text-center">
          <BigTitle text="Our thoughts" />
          <p className="max-w-md m-auto mb-8 px-4 lg:mb-16 dark:text-white">
            Read about our journey creating a country on the Internet.
          </p>
          <Swiper
            pagination={true}
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
            navigation={true}
          >
            {posts.map(({ title, image, url, description }, i) => (
              <SwiperSlide key={i}>
                <GradientBorderCard
                  className="text-left shadow-xl overflow-hidden"
                  containerClassName="max-w-sm flex place-self-stretch mb-12"
                >
                  <a target="_blank" rel="noreferrer noopener" href={url}>
                    <Image
                      src={image}
                      className="rounded-tl-2xl rounded-tr-2xl"
                      width={380}
                      height={190}
                      alt=""
                    />
                    <div className="p-4">
                      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                        {title}
                      </h2>
                      <div className="font-normal text-gray-700 dark:text-gray-400">
                        {description}
                      </div>
                    </div>
                  </a>
                </GradientBorderCard>
              </SwiperSlide>
            ))}
          </Swiper>{' '}
        </div>
      </div>
      <div className="text-center -mx-8 px-8 xl:full-width xl:mx-0 xl:px-0 bg-gradient-to-r from-[#EEF9FF] to-[#EAFFF4] dark:bg-none">
        <div className="bg-[url('/illustrations/constitution-bg.svg')] bg-right-bottom bg-no-repeat py-8 md:py-16">
          <div className="max-w-screen-xl m-auto flex flex-col lg:flex-row align-items-center gap-16">
            <div className="lg:w-5/12 lg:text-left lg:py-16 ">
              <BigTitle gradientText="Become a citizen" />
              <BigTitle text="and have a say in the Constitution of the world’s first internet-native jurisdiction" />
              <GradientLink
                text="Read the Nation3 Constitution"
                href="https://linked.md/v?u=https://linked.md/api/github/nation3/law/main/Constitution.linked.md"
                className="block mt-4"
              />
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
