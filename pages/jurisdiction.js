import Image from 'next/image'
import BigTitle from '../components/BigTitle'
import Card from 'react-animated-3d-card-shadow'
import Constitution from '../public/illustrations/constitution.svg'
import ConstitutionText from '../public/illustrations/constitution-text.svg'
import GradientLink from '../components/GradientLink'
import { TextInput } from 'flowbite-react'
import CitizensCarousel from '../components/CitizensCarousel'
import BePart from '../components/BePart'
import InternetNative from '../public/icons/jurisdiction/internet-native.svg'
import Professional from '../public/icons/jurisdiction/professional.svg'
import LimitedLiability from '../public/icons/jurisdiction/limited-liability.svg'
import ChecksAndBalances from '../public/icons/jurisdiction/checks-balances.svg'
import LegalStandards from '../public/icons/jurisdiction/legal-standards.svg'
import EncryptedPrivate from '../public/icons/jurisdiction/encrypted-private.svg'
import ReuseIcon from '../public/icons/jurisdiction/reuse.svg'
import PickIcon from '../public/icons/jurisdiction/pick.svg'
import AgreeIcon from '../public/icons/jurisdiction/agree.svg'
import DisputeIcon from '../public/icons/jurisdiction/dispute.svg'
import Button from '../components/Button'
import LazyIframe from '../components/LazyIframe'

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col relative items-stretch">
      <Image src={icon} height={230} />
      <h2 className="font-display text-2xl my-2">{title}</h2>
      <p className="text-lg">{description}</p>
    </div>
  )
}

const ListItem = ({ icon, children }) => {
  return (
    <li className="flex items-top my-4 gap-4">
      <Image src={icon} className="w-6 h-6 text-gray-400 flex-shrink-0" />
      {children}
    </li>
  )
}

export default function Jurisdiction() {
  return (
    <div className="dark:text-white">
      <div className="bg-gradient-to-r from-[#EEF9FF] to-[#EAFFF4] full-width dark:bg-none">
        <div className="max-w-screen-xl m-auto text-center py-32 bg-[url('/ellipse-bg.svg')] bg-bottom bg-no-repeat dark:bg-none">
          <BigTitle
            text="The world's first"
            gradientText="Internet-native jurisdiction"
          />
          <p className="max-w-md m-auto mt-4 px-4 dark:text-white">
            Enter agreements. As easy as tweeting.
          </p>
        </div>
      </div>
      <div className="text-center mt-16 lg:mt-24">
        <h1 className="text-3xl text-gray-900 md:text-4xl lg:text-5xl font-display dark:text-white lg:leading-tight inline">
          Are you a{' '}
        </h1>
        <h1 className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-n3blue via-n3green to-n3green text-transparent bg-clip-text font-display mt-1 lg:leading-tight inline">
          DAO
        </h1>
        <h1 className="text-3xl text-gray-900 md:text-4xl lg:text-5xl font-display dark:text-white lg:leading-tight inline">
          ?
        </h1>
        <div className="max-w-screen-xl m-auto flex flex-col lg:flex-row align-items-center gap-x-24 items-center mt-8 mb-16">
          <div className="lg:w-5/12 text-left text-xl">
            <p>
              Leave bureaucracy behind. Easily enter into agreements backed by
              Nation3 — the Internet’s first sovereign jurisdiction.
            </p>
            <ul className="list-inside mt-8">
              <ListItem icon={ReuseIcon}>Re-use agreement templates</ListItem>
              <ListItem icon={PickIcon}>
                Pick your collateral assets and value
              </ListItem>
              <ListItem icon={AgreeIcon}>Agree on terms & sign</ListItem>
              <ListItem icon={DisputeIcon}>
                Should either party breach, qualified Nation3 Judges will make
                their ruling, enforced through collateral
              </ListItem>
            </ul>
          </div>
          <div className="lg:w-7/12 lg:text-left w-full">
            <div className="relative aspect-video my-8 lg:my-16 shadow-xl rounded-xl border border-n3green dark:border-none">
              <LazyIframe
                url="https://www.youtube.com/embed/0GEulicKACw?autoplay=1&loop=1&cc_load_policy=1rel=0&controls=0&showinfo=0&mute=1&playlist=0GEulicKACw"
                title="test"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-x-8 gap-y-8">
        <FeatureItem
          icon={InternetNative}
          title="Internet-native"
          description="No need to print, fax, pigeon or take a plane to attend a hearing. No need to wait years for a resolution. This is 2022, not the Stone Age! Welcome to Nation3."
        />
        <FeatureItem
          icon={Professional}
          title="Professional judges"
          description="The Nation3 DAO elects vetted professionals to resolve disputes. Judges have skin in the game and are incentivized to make fair rulings."
        />
        <FeatureItem
          icon={LimitedLiability}
          title="Limited liability"
          description="In Nation3, each party entering an agreement deposits crypto as collateral — the maximum amount they can be liable for, in case of breach. No surprises."
        />
        <FeatureItem
          icon={ChecksAndBalances}
          title="Checks and balances"
          description="The Nation3 Constitution lays out the mechanisms for law creation and the separation of powers between the judiciary, the legislative and the executive."
        />
        <FeatureItem
          icon={LegalStandards}
          title="High legal standards"
          description="In Nation3 it's unconstitutional to pass law with retroactive effect. Nation3 also adheres to the Universal Declaration of Human Rights."
        />
        <FeatureItem
          icon={EncryptedPrivate}
          title="Encrypted and private"
          description="In case of dispute, all communications between the parties and the judges are end-to-end encrypted. And, by law, all evidence must remain private."
        />
      </div>
      <div className="bg-gradient-to-r from-[#EEF9FF] to-[#EAFFF4] full-width my-16 lg:my-24 dark:bg-none px-4 xl:px-0">
        <div className="max-w-screen-xl m-auto text-center py-32">
          <BigTitle gradientText="Sign up for launch phase whitelist" />
          <div className="max-w-md m-auto">
            <p className="m-auto mt-2 mb-8 dark:text-white">
              No fees for 6 months.
            </p>
            <div className="flex items-end mb-3">
              <div className="relative w-full mr-3 revue-form-group">
                <input
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-n3blue focus:border-n3blue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your email"
                  type="email"
                />
              </div>
              <input
                type="submit"
                value="Sign up"
                className="cursor-pointer text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gradient-to-r from-n3blue via-n3green to-n3green transition hover:scale-95"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center full-width bg-[url('/illustrations/constitution-bg-jurisdiction.svg')] bg-bottom bg-no-repeat bg-contain lg:mb-32 px-4 lg:px-0">
        <div className="max-w-screen-xl m-auto">
          <div className="max-w-screen-xl m-auto flex flex-col lg:flex-col align-items-center xl:gap-4 items-center">
            <div>
              <BigTitle gradientText="Become a citizen" />
              <BigTitle text="and have a say in the Constitution" />
              <p>of the world’s first internet-native jurisdiction</p>
            </div>
            <div className="bg-[url('/ellipse-bg-circle.svg')] bg-top bg-no-repeat hidden lg:block">
              <div className="grid grid-cols-2 justify-items-center items-center relative max-w-3xl py-16 bg-[url('/ellipse-bg-circle.svg')] bg-bottom bg-no-repeat">
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
                    <Image src={Constitution} fill={true} />
                  </Card>
                </div>
                <div className="z-0">
                  <Card
                    style={{
                      backgroundColor: 'transparent',
                      width: 406,
                      height: 566,
                      cursor: 'pointer',
                      zIndex: 0,
                    }}
                  >
                    <Image src={ConstitutionText} fill={true} />
                  </Card>
                </div>
              </div>
            </div>
            <div className="lg:hidden flex justify-center py-8">
              <Image src={Constitution} className="shadow-xl rounded-xl" />
            </div>
            <GradientLink text="Read the Nation3 Constitution" href={''} />
          </div>
        </div>
      </div>
      <CitizensCarousel />
      <BePart />
    </div>
  )
}
