import Image from 'next/image'
import Head from '../components/Head'
import BigTitle from '../components/BigTitle'
import GradientLink from '../components/GradientLink'
import ThesisIcon from '../public/icons/thesis.svg'
import RfsIcon from '../public/icons/rfs.svg'
import Flag from '../public/flag.svg'
import HalfOrb from '../public/half-orb.svg'
import SolarpunkOrb from '../public/solarpunk-orb.png'
import Manifesto5 from '../public/manifesto/5.svg'
import Icon from '../public/icon.svg'
import Card from 'react-animated-3d-card-shadow'
import Avatars from '../components/Avatars'
import { CalendarIcon, ExternalLinkIcon } from '@heroicons/react/outline'
import { Timeline, Button, Card as FlowbiteCard } from 'flowbite-react'
import { useEffect, useState } from 'react'

const timelineItems = [
  {
    phase: 1,
    title: 'Setting the groundwork',
    subitems: [
      {
        title: 'Nation3 Manifesto first published + $NATION airdrop',
        link: 'https://mirror.xyz/3.nation3.eth/ldUGMXZ-yDCXsvaZnQIGqK2zFRR7AmjRmgv2ZmDFNbo',
      },
      {
        title: '420 Genesis NFT passports launch for co-founding community',
        link: 'https://mirror.xyz/3.nation3.eth/ldUGMXZ-yDCXsvaZnQIGqK2zFRR7AmjRmgv2ZmDFNbo',
      },
      {
        title: 'Kickstart internal economy on Dework',
        link: '',
      },
      {
        title:
          'Optimise governance process to allow fast-moving, decentralised decisions',
        link: 'https://vote.nation3.org/#/proposal/0x6a8d5266c40d0be9a57ec52294db243e1a508e5be756227d3eb1659e9f64b609',
      },
      {
        title:
          'Build healthy treasury reserves to sustain long term operations',
        link: '',
      },
      {
        title: 'Launch the Court system for fair dispute resolution',
        link: '',
      },
      {
        title: 'Introduce UBI for Nation3 citizens',
        link: '',
      },
      {
        title: 'Launch standard Citizen Passports',
        link: '',
      },
    ],
  },
  {
    phase: 2,
    title: 'Building towards the Nation3 tech stack',
    subitems: [
      {
        title:
          'Add products & services for Nation3 Citizens, such as circles-based insurance and opsec tools',
      },
      {
        title:
          'Develop key pieces of infrastructure through project Guilds internally',
      },
      {
        title:
          'Launch Nation3 VC (subject to governance vote) to scout & back external products & services for cloud nations',
      },
    ],
  },
  {
    phase: 3,
    title: 'Establish physical presence',
    subitems: [
      {
        title: 'Open embassies where citizens can connect IRL',
      },
      {
        title: 'Grow a global archipelago of Nation3 territories',
      },
      {
        title:
          'Negotiate land with Special Economic Zones (SEZs) to establish first tax-free, solar punk cities',
      },
    ],
  },
]

export default function Home() {
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

      <div className="relative flex flex-row items-center gap-16 mx-auto mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-64 mb-16 lg:w-full md:mb-24 lg:mb-32 xl:mb-48 z-1">
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
              width: width > 1024 ? '450px' : '300px',
              height: width > 1024 ? '300px' : '200px',
              cursor: 'pointer',
            }}
          >
            <Image src={Flag} />
          </Card>
        </div>
      </div>

      <div
        className="relative flex flex-row justify-center gap-16 mb-8 flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 backdrop-opacity-60 text-white bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: 'url(/photos/war.jpg)' }}
      >
        <div class="w-full h-full flex flex-col justify-center items-center backdrop-blur-sm py-32">
          <div className="text-left md:text-center m-auto max-w-3xl">
            <h2 className="font-display text-4xl">
              We’ve been taught that nation states are ever-lasting institutions
              that are native to humankind itself.
            </h2>
            <p className="my-4">
              Yet the have failed us: destroying our planet, inflicting economic
              and health crises through design flaws and incompetence, and
              propagating industrial age education that proliferates all this.
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex flex-row items-center gap-16 mx-auto mt-10 sm:my-4 md:my-8 lg:my-16 xl:my-32 mb-16 lg:w-full">
        <div className="text-left md:basis-3/5">
          <BigTitle gradientText="We can do better" />
          <p className="my-4 max-w-lg">
            Nation3 is on a mission to rebuild nation states into zero-tax,
            Web3-powered, solarpunk societies.
          </p>
          <div className="mt-5 sm:mt-4">
            <GradientLink href="/manifesto" text="Read the manifesto" />
          </div>
        </div>
        <div className="basis-2/5 hidden md:block">
          <Image src={Manifesto5} />
        </div>
      </div>

      <div className="max-w-5xl">
        <div className="w-full relative hidden lg:block">
          <div className="bg-gradient-to-b from-transparent via-white to-white absolute w-full h-full z-10"></div>
          <Image src={HalfOrb} layout="responsive" />
        </div>
        <div className="max-w-2xl m-auto rounded-lg pt-32 lg:-mt-96 relative z-20">
          <Timeline>
            {timelineItems.map((item) => (
              <Timeline.Item>
                <Timeline.Point icon={CalendarIcon} />
                <Timeline.Content>
                  <Timeline.Time>Phase {item.phase}</Timeline.Time>
                  <Timeline.Title>{item.title}</Timeline.Title>
                  <Timeline.Body>
                    {item.content}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 align-middle">
                      {item.subitems.map((item) => (
                        <div>
                          {item.title}
                          {item.link && (
                            <>
                              .{' '}
                              <a
                                href={item.link}
                                className="text-n3blue hover:opacity-70 transition-opacity"
                              >
                                Done
                                <ExternalLinkIcon className="w-4 h-4 inline-block ml-1 mb-1 text-gray-500" />
                              </a>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </div>

      <div className="relative flex flex-col gap-8 mx-auto mt-10 sm:my-4 md:my-8 lg:my-16 xl:my-32 mb-16 lg:w-full">
        <div className="text-left">
          <BigTitle
            text="Want to co-found a nation?"
            gradientText="Join the movement"
          />
          <p className="my-4 max-w-lg">
            Nation3 is on a mission to rebuild nation states into zero-tax,
            Web3-powered, solarpunk societies.
          </p>
          <div className="mt-5 sm:mt-4">
            <GradientLink href="/join" text="Join the movement" />
          </div>
        </div>
        <Avatars></Avatars>
      </div>

      <div className="relative flex flex-col gap-8 mx-auto mt-10 sm:my-4 md:my-8 lg:my-16 xl:my-32 mb-16 lg:w-full">
        <div className="text-left">
          <BigTitle
            text="A flourishing nation starts"
            gradientText="with a solid foundation"
          />
          <div className="my-4 max-w-2xl">
            <p>
              New nations need new governance structures. Nations aren't
              corporations, but they also shouldn't be monolithic, bureaucratic
              organizations in which citizens don't have any real ownership.
              That's why Nation3 is structured as a 
              <a href="https://aragon.org/dao">DAO</a>.
            </p>
            <br />
            <p>
              DAOs are Internet-native organizations that give ownership to its
              constituents -- citizens. The Nation3 DAO is governed by citizens,
              who can increase their weight in governance decisions by staking
              more $NATION.
            </p>
            <br />
            <p>
              Citizens can put forward governance proposals to make Nation3 a
              better place. Our core contributors have years of experience
              helping DAOs, so they have carefully crafted our very own
              governance process -- which makes it simple for citizens to engage
              with the process, while minimizing bureaucracy and admin overhead.
            </p>
          </div>
          <div className="mt-5 sm:mt-4">
            <GradientLink
              href="https://github.com/nation3/gov/blob/main/GOVERNANCE.md"
              text="Read more"
            />
          </div>
        </div>
      </div>

      <div className="relative flex flex-row gap-8 mx-auto mt-10 sm:my-4 md:my-8 lg:my-16 xl:my-32 mb-16 lg:w-full text-right">
        <div className="md:basis-2/5"></div>
        <div className="text-right md:basis-3/5">
          <BigTitle
            text="Build towards starts"
            gradientText="the Nation3 stack"
          />
          <div className="my-4 max-w-2xl">
            <p>
              Choose a piece of the nation3 infrastructure to focus on, submit a
              funding proposal, and help us build a better tomorrow.
              <a href="https://aragon.org/dao">DAO</a>.
            </p>
          </div>
          <div className="mt-5 sm:mt-4">
            <GradientLink
              href="https://github.com/nation3/gov/blob/main/GOVERNANCE.md"
              text="Read more"
            />
          </div>
        </div>
      </div>

      <div className="flex grid lg:grid-flow-col grid-flow-row gap-16 pt-8 relative bg-white z-1">
        <div>
          <Image src={ThesisIcon} width={42} height={42} />
          <h2 className="text-2xl leading-loose">Become a citizen</h2>
          <p className="mb-4">
            Time-lock $NATION tokens to get $veNATION, then claim your NFT
            passport. NFT passports give citizens governance rights in the
            Nation3 DAO and membership into gated Discord channels.
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
          <GradientLink
            href="https://discord.gg/rvrqvUWPDy"
            text="Join Discord"
          />
        </div>
      </div>
    </div>
  )
}
