import { Timeline } from 'flowbite-react'
import { CalendarIcon, ExternalLinkIcon } from '@heroicons/react/outline'

const items = [
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
        link: 'https://app.dework.xyz/nation3',
      },
      {
        title:
          'Optimize governance process to allow fast-moving, decentralised decisions',
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

export default function Roadmap() {
  return (
    <Timeline>
      {items.map((item, i) => (
        <Timeline.Item key={i}>
          <Timeline.Point icon={CalendarIcon} />
          <Timeline.Content>
            <Timeline.Time>Phase {item.phase}</Timeline.Time>
            <Timeline.Title>{item.title}</Timeline.Title>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 align-middle list-disc">
              {item.subitems.map((item, i) => (
                <li key={i}>
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
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  )
}
