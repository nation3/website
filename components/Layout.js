import { Fragment } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Footer } from 'flowbite-react'
import Link from 'next/link'
import Image from 'next/image'
import Icon from '../public/icon.svg'
import GradientLink from './GradientLink'
import Script from 'next/script'
import Announcement from './Announcement'
import { Navbar, Button, Tooltip } from 'flowbite-react'
import {
  FaDiscord,
  FaGithub,
  FaDiscourse,
  FaVoteYea,
  FaBookOpen,
} from 'react-icons/fa'

const navigation = [
  { name: 'Manifesto', href: '/manifesto' },
  { name: '$NATION', href: '/token' },
  { name: 'FAQ', href: '/faq' },
]

// main nav
// manifesto, $nation, FAQ

export default function Layout({ children }) {
  return (
    <>
      <div className="container h-full max-w-screen-xl mx-auto px-6 lg:px-8 mt-4">
        <Script src="https://cdn.splitbee.io/sb.js" />
        <div className="relative mb-4 z-10 -mx-4">
          <Navbar fluid={true} rounded={true}>
            <Navbar.Brand>
              <Link href="/">
                <div className="flex flex-row gap-2 cursor-pointer hover:opacity-80 transition">
                  <Image src={Icon} width={50} height={50} alt="Nation3 logo" />
                  <span className="self-center whitespace-nowrap text-lg font-light dark:text-white">
                    Nation3
                  </span>
                </div>
              </Link>
            </Navbar.Brand>
            <div className="flex md:order-2">
              <div className="hidden md:block">
                <Link href="/join#carousel">
                  <Button color="primary">Become a citizen</Button>
                </Link>
              </div>
              <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
              {navigation.map((item) => (
                <Navbar.Link key={item.href}>
                  <Link key={item.name} href={item.href}>
                    <span className="cursor-pointer text-base font-display">
                      {item.name}
                    </span>
                  </Link>
                </Navbar.Link>
              ))}
              <div className="md:hidden">
                <Link href="/join#carousel">
                  <Button color="primary">Become a citizen</Button>
                </Link>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </div>
        {children}
        <footer className="py-6 mt-16 flex justify-between">
          <div className="w-full">
            <div className="w-full sm:flex sm:items-center sm:justify-between">
              <div className="relative w-8 h-8">
                <Image src="/icon-plain.svg" layout="fill" alt="Nation3 icon" />
              </div>
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon
                  href="https://discord.gg/nation3"
                  icon={FaDiscord}
                />
                <Footer.Icon
                  href="https://forum.nation3.org"
                  icon={FaDiscourse}
                />
                <Footer.Icon href="https://gov.nation3.org" icon={FaVoteYea} />
                <Footer.Icon
                  href="https://github.com/nation3"
                  icon={FaGithub}
                />
                <Footer.Icon
                  href="https://wiki.nation3.org"
                  icon={FaBookOpen}
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
      <Announcement />
    </>
  )
}

// footer links
// , , Governance portal, , Aragon DAO
