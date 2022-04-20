import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/logo.svg'
import GradientLink from './GradientLink'
import Script from 'next/script'
import Announcement from './Announcement'

const navigation = [
  { name: 'Manifesto', href: '/manifesto' },
  { name: 'Wiki', href: 'https://wiki.nation3.org' },
  { name: 'Discord', href: 'https://discord.gg/rvrqvUWPDy' },
  { name: 'Governance', href: 'https://snapshot.org/#/nation3.eth' },
  { name: 'DAO', href: 'https://client.aragon.org/#/nation3' },
]

export default function Layout({ children }) {
  return (
    <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 overflow-x-hidden">
      <Script src="https://cdn.splitbee.io/sb.js" />
      <Popover>
        <div className="relative pt-6 mb-36 z-10">
          <nav className="relative flex items-center justify-between sm:h-10">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto cursor-pointer">
                <Link href="/">
                  <a>
                    <Image src={Logo} width={128} height={50} />
                  </a>
                </Link>
                <div className="mr-2 flex items-center md:hidden">
                  {
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  }
                </div>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-16">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-end">
                <div className="mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      {children}
      <footer className="mt-8 md:mt-32 flex justify-between font-light">
        <p>☁️ 🇺🇳</p>
        <GradientLink
          href="https://twitter.com/nation3dao"
          text="@Nation3DAO"
          hideArrow={true}
        />
      </footer>
      <Announcement />
    </div>
  )
}
