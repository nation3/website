import { ChartBarIcon, ChartPieIcon, CashIcon } from '@heroicons/react/outline'
import { Card } from 'flowbite-react'
import Image from 'next/image'
import GradientLink from '../components/GradientLink'
import Head from '../components/Head'
import CirclesIcon from '../public/icons/circles.svg'
import Nation3Icon from '../public/icons/nation3.svg'
import WorldIcon from '../public/icons/world.svg'

const Stat = ({ number, legend }) => (
  <div>
    <h1 className="text-5xl font-medium bg-gradient-to-r from-n3blue to-n3green text-transparent bg-clip-text font-display">
      {number}
    </h1>
    <p className="dark:text-white">{legend}</p>
  </div>
)

const Dashboard = ({ name, href, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-70 transition text-n3blue"
  >
    <Card>
      <div className="flex flex-col items-center text-center">
        <Icon className="w-8 h-8 mb-4" />
        {name}
      </div>
    </Card>
  </a>
)

export default function Token() {
  return (
    <div>
      <Head
        title="Token"
        description="$NATION is the community currency underpinning Nation3. It economically aligns the whole community towards achieving the Nation3 mission."
        image="/social/home.png"
        type="website"
      />
      <h1 className="text-5xl font-medium bg-gradient-to-r from-n3blue to-n3green text-transparent bg-clip-text font-display mt-16 mb-8">
        $NATION, the token that ties it all
      </h1>
      <div className="relative flex flex-row gap-8 lg:w-full justify-cente my-16">
        <div className="md:basis-3/5 flex flex-col items-center">
          <p className="text-lg dark:text-white">
            For Nation3 to succeed, the demand for its citizenship needs to be
            tied to the nation's financial success. And that's exactly what
            $NATION does.
            <br />
            <br />
            To claim a passport, users need to <b>time-lock</b> (usually for 4
            years) a minimum amount of $NATION, obtaining another token called{' '}
            <b>$veNATION</b>.
            <br />
            <br />
            As demand increases while supply decreases, $NATION accrues value.
            <br />
            The Nation3 DAO <b>holds $NATION in its treasury</b>, benefitting
            from this value accrual and becoming well-funded. It can then
            proceed to fund further services that make citizenship more
            appealing, further increasing demand.
          </p>
        </div>
        <div className="md:basis-2/5 relative">
          <Image src={Nation3Icon} fill={true} alt="" />
        </div>
      </div>
      <div className="flex grid lg:grid-flow-col grid-flow-row gap-16 md:pt-16 relative z-1">
        <Stat number={'>67 %'} legend={'of circulating supply locked'} />
        <Stat number={'>2 $veNATION'} legend={'needed to claim a passport'} />
        <Stat number={'>30%'} legend={'$NATION/ETH liquidity rewards APY'} />
      </div>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:w-full justify-cente my-16 md:my-32 items-center dark:text-white">
        <div className="md:basis-3/5">
          <h2 className="font-display text-3xl mb-2">Community dashboards</h2>
          <p>
            Our community members have authored multiple dashboards to track the
            $NATION ecosystem.
          </p>
        </div>
        <div className="md:basis-2/5 relative">
          <div className="flex grid grid-cols-1 md:grid-cols-3 gap-2 relative  z-1">
            <Dashboard
              name="$NATION overview"
              href="https://dune.com/linzi/Nation3-Dashboard"
              Icon={ChartBarIcon}
            />
            <Dashboard
              name="$veNATION dashboard"
              href="https://dune.com/eherrerosj/Nation3-Dashboard"
              Icon={ChartPieIcon}
            />
            <Dashboard
              name="$NATION liquidity rewards"
              href="https://dune.com/sunosuporno/dollarNATION-Liquidity-Rewards-Program"
              Icon={CashIcon}
            />
          </div>
        </div>
      </div>
      <div className="flex grid lg:grid-flow-col grid-flow-row gap-16 relative dark:text-white">
        <div>
          <Image src={WorldIcon} width={42} height={42} alt="" />
          <h2 className="text-2xl leading-loose">Earn $NATION</h2>
          <p className="mb-4">
            You can earn $NATION by completing tasks on our community dashboard.
            In the process you will also meet some of our nice citizens!
          </p>
          <GradientLink
            href="https://app.dework.xyz/nation3/board"
            text="Check out tasks"
          />
        </div>
        <div>
          <Image src={CirclesIcon} width={42} height={42} alt="" />
          <h2 className="text-2xl leading-loose">Buy $NATION</h2>
          <p className="mb-4">
            If you don't have time to complete tasks, but you want to be part of
            the ecosystem, you can easily buy $NATION.
          </p>
          <GradientLink
            href="https://app.balancer.fi/#/trade/ether/0x333A4823466879eeF910A04D473505da62142069"
            text="Buy"
          />
        </div>
      </div>
    </div>
  )
}
