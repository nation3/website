import { Fragment } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Footer } from 'flowbite-react'
import Link from 'next/link'
import Image from 'next/image'
import Icon from '../public/icon.svg'
import GradientLink from './GradientLink'
import Script from 'next/script'
import Announcement from './Announcement'

import { Navbar, Button } from 'flowbite-react'

const navigation = [
  { name: 'Manifesto', href: '/manifesto' },
  { name: '$NATION', href: '/token' },
  { name: 'FAQ', href: '/faq' },
]

// footer links
// https://discord.gg/nation3, https://wiki.nation3.or, Governance portal, https://vote.nation3.org, Aragon DAO

// main nav
// manifesto, $nation, FAQ

export default function Layout({ children }) {
  return (
    <>
      <div className="container h-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <Script src="https://cdn.splitbee.io/sb.js" />
        <div className="relative mb-4 z-10 -mx-4">
          <Navbar fluid={true} rounded={true}>
            <Navbar.Brand>
              <Link href="/">
                <div className="flex flex-row gap-2 cursor-pointer hover:opacity-80 transition">
                  <Image src={Icon} width={50} height={50} />
                  <span className="self-center whitespace-nowrap text-lg font-light dark:text-white">
                    Nation3
                  </span>
                </div>
              </Link>
            </Navbar.Brand>
            <div className="flex md:order-2">
              <Link href="/join#carousel">
                <Button color="primary">Become a citizen</Button>
              </Link>
              <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
              {navigation.map((item) => (
                <Navbar.Link key={item.href}>
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
        {children}
        <footer className="py-8 md:mt-16 flex justify-between font-light">
          <p>☁️ 🇺🇳</p>
          <GradientLink
            href="https://twitter.com/nation3dao"
            text="@Nation3DAO"
            hideArrow={true}
          />
        </footer>
        <footer>
          <div className="w-full">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
              <div>
                <Footer.Brand
                  href="https://flowbite.com"
                  src="https://flowbite.com/docs/images/logo.svg"
                  alt="Flowbite Logo"
                  name="Flowbite"
                />
              </div>
              <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                  <Footer.Title title="about" />
                  <Footer.LinkGroup col={true}>
                    <Footer.Link href="#">Flowbite</Footer.Link>
                    <Footer.Link href="#">Tailwind CSS</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="Follow us" />
                  <Footer.LinkGroup col={true}>
                    <Footer.Link href="#">Github</Footer.Link>
                    <Footer.Link href="#">Discord</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="Legal" />
                  <Footer.LinkGroup col={true}>
                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                    <Footer.Link href="#">Terms & Conditions</Footer.Link>
                  </Footer.LinkGroup>
                </div>
              </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
              <Footer.Copyright href="#" by="Flowbite™" year={2022} />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon href="#" icon={MenuIcon} />
                <Footer.Icon href="#" icon={MenuIcon} />
                <Footer.Icon href="#" icon={MenuIcon} />
                <Footer.Icon href="#" icon={MenuIcon} />
                <Footer.Icon href="#" icon={MenuIcon} />
              </div>
            </div>
          </div>
        </footer>
      </div>
      <Announcement />
    </>
  )
}
