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
import TechTree from '../public/tech-tree.png'
import Icon from '../public/icon.svg'
import Card from 'react-animated-3d-card-shadow'
import Avatars from '../components/Avatars'
import { CalendarIcon, ExternalLinkIcon } from '@heroicons/react/outline'
import { Timeline, Button, Card as FlowbiteCard, Avatar } from 'flowbite-react'
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

      <div className="relative flex flex-row gap-16 mx-auto mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-64 mb-16 lg:w-full md:mb-24 lg:mb-32 xl:mb-48 z-1">
        <div className="text-left md:basis-3/5">
          <BigTitle text="A new nation state" gradientText="on the cloud" />
          <p className="my-4 max-w-lg text-lg">
            We are building a zero-tax, Web3-powered, solarpunk society.
            Finally, a nation you want to be a part of.
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

      <div className="flex flex-col lg:flex-row justify-center gap-16 mb-32 items-center">
        <div className="text-left md:basis-3/5">
          <h2 className="text-xl">
            We have been taught that nation states are ever-lasting institutions
            that are native to humankind itself.
          </h2>
          <br></br>
          <h2 className="font-display text-4xl">
            <span className="underline decoration-red-700">
              Yet they have failed us.
            </span>
          </h2>
        </div>
        <div className="basis-2/5 md:block pt-8">
          <Avatar.Group>
            <Avatar
              img="https://static.dw.com/image/19464620_401.jpg"
              rounded={true}
              stacked={true}
              size="xl"
            />
            <Avatar
              img="https://images.theconversation.com/files/454945/original/file-20220329-25-1hqdcz4.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
              rounded={true}
              stacked={true}
              size="xl"
            />
            <Avatar
              img="/photos/who.png"
              rounded={true}
              stacked={true}
              size="xl"
            />
          </Avatar.Group>
        </div>
      </div>

      <div className="md:-mb-24 overflow-hidden py-8">
        <div className="relative z-10">
          <h1 className="max-w-2xl text-3xl tracking-loose sm:text-4xl md:text-5xl bg-gradient-to-r from-n3blue via-n3green to-n3green text-transparent bg-clip-text font-display mt-1 md:leading-tight">
            We can do <span className="border-b-4 border-n3green">better</span>.
          </h1>
          <p className="my-4 max-w-lg">
            Nation3 is on a mission to rebuild nation states into zero-tax,
            Web3-powered, solarpunk societies.
          </p>
          <div className="mt-5 sm:mt-4">
            <GradientLink href="/manifesto" text="Read the manifesto" />
          </div>
        </div>
        <div className="mt-16 mb-24 md:my-0 md:-mx-16 md:-mt-48">
          <Image src={Manifesto5}></Image>
        </div>
      </div>

      <div className="max-w-5xl mt-16 m-auto">
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
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 align-middle list-disc">
                      {item.subitems.map((item) => (
                        <li>
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
                        </li>
                      ))}
                    </ul>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </div>

      <div className="relative flex flex-col gap-8 mx-auto sm:my-8 md:my-16 lg:my-32 xl:my-48 lg:w-full">
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

      <div className="relative flex flex-row gap-8 mx-auto sm:my-8 md:my-16 lg:my-32 xl:my-48 mb-16 lg:w-full justify-end">
        <div className="md:basis-2/5">
          <Image src={TechTree} />
        </div>
        <div className="text-right md:basis-3/5 flex flex-col items-end">
          <BigTitle text="Build towards" gradientText="the Nation3 stack" />
          <div className="my-4 max-w-xl">
            <p>
              Choose a piece of the nation3 infrastructure to focus on, submit a
              funding proposal, and help us build a better tomorrow.
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
