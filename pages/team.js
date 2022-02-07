import Head from '../components/Head'
import BigTitle from '../components/BigTitle'
import Button from '../components/Button'
import Image from 'next/image'
import LuisPic from '../public/team/l.png'
import AniPic from '../public/team/a.png'

export default function Team() {
  return (
    <div>
      <Head
        title="Team"
        description="It's time to reinvent the nation state."
        image=""
        type="website"
      />
      <BigTitle
        text="Nation3 team"
        gradientText="The humans behind the project"
      />
      <div className="flex grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <div>
          <Image src={LuisPic} layout="responsive" quality="100" />
          <h2 className="text-2xl leading-loose mt-4">Luis Cuende</h2>
          <p className="text-lg mb-6">
            Started hacking on Linux at the age of 12, inspired by the free
            software ethos. Co-founder of Aragon, bringing DAOs to their first
            billion in AUM. Into crypto since 2011, co-founded the
            Bitcoin timestamping startup Stampery (now Witnet).
            <br></br>
            <br></br>
            Advisor to Decentraland, Keep, Status... Crypto-anarchist, writing
            about crypto cities/nations first in 2013. Awakened by the 2008
            crisis.
          </p>
          <Button text="Follow" link="https://twitter.com/licuende" />
        </div>
        <div>
          <Image src={AniPic} layout="responsive" quality="100" />
          <h2 className="text-2xl leading-loose mt-4">Anastasiya Belyaeva</h2>
          <p className="text-lg mb-6">
            Became a VC at 20, first fintech & marketplaces (Firestartr), then
            SaaS (OpenOcean), then Web3 (co-founded one of the first European
            funds in the space, Fabric Ventures).
            <br></br>
            <br></br>
            Host of Web3 Forum at CogX (10k-30k attendees) for 3 years Growth
            advisor to PieDAO - asset allocation DAO. Crimean, seeing first-hand
            the rampant issues of nation states even today.
          </p>
          <Button text="Follow" link="https://twitter.com/anastasiyavc" />
        </div>
      </div>
    </div>
  )
}
