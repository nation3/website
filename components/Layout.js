import { Fragment } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'
import Icon from '../public/icon.svg'
import GradientLink from './GradientLink'
import Script from 'next/script'
import Announcement from './Announcement'

import { Navbar, Button } from 'flowbite-react'

const navigation = [
  { name: 'Manifesto', href: '/manifesto' },
  { name: 'Citizen app', href: 'https://app.nation3.org' },
  { name: 'Wiki', href: 'https://wiki.nation3.org' },
  { name: 'Discord', href: 'https://discord.gg/nation3' },
  { name: 'Governance', href: 'https://vote.nation3.org' },
]

export default function Layout({ children }) {
  return (
    <>
      <div className="container max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8 my-4">
        <Script src="https://cdn.splitbee.io/sb.js" />
        <div className="relative mb-36 z-10">
          <Navbar fluid={true} rounded={true}>
            <Navbar.Brand>
              <Link href="/">
                <a className="flex flex-row gap-2">
                  <Image src={Icon} width={50} height={50} />
                  <span className="self-center whitespace-nowrap text-lg font-light dark:text-white">
                    Nation3
                  </span>
                </a>
              </Link>
            </Navbar.Brand>
            <div className="flex md:order-2">
              <Button color="primary">Become a citizen</Button>
              <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
              {navigation.map((item) => (
                <Navbar.Link>
                  <Link key={item.name} href={item.href}>
                    <span className="cursor-pointer text-base">
                      {item.name}
                    </span>
                  </Link>
                </Navbar.Link>
              ))}
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className="px-2 sm:px-4">{children}</div>
        <footer className="px-2 sm:px-4 mt-8 md:mt-32 flex justify-between font-light">
          <p>☁️ 🇺🇳</p>
          <GradientLink
            href="https://twitter.com/nation3dao"
            text="@Nation3DAO"
            hideArrow={true}
          />
        </footer>
      </div>
      <Announcement />
    </>
  )
}
