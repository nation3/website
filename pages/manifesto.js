import Head from '../components/Head'
import BigTitle from '../components/BigTitle'
import Quote from '../components/Quote'
import Button from '../components/Button'
import Image from 'next/image'
import Manifesto1 from '../public/manifesto/1.svg'
import Manifesto2 from '../public/manifesto/2.svg'
import Manifesto3 from '../public/manifesto/3.svg'
import Manifesto4 from '../public/manifesto/4.svg'
import Manifesto5 from '../public/manifesto/5.svg'
import Manifesto6 from '../public/manifesto/6.svg'
import Nation1Icon from '../public/icons/nation1.svg'
import Nation2Icon from '../public/icons/nation2.svg'
import Nation3Icon from '../public/icons/nation3.svg'
import TwitterIcon from '../public/icons/twitter.svg'
import EmailIcon from '../public/icons/email.svg'
import RedditIcon from '../public/icons/reddit.svg'

export default function Manifesto() {
  return (
    <div className="text-lg">
      <Head title="Team" description="VC fund" image="" type="website" />
      <BigTitle
        text="It's time to re-invent the nation state."
        gradientText="Towards a peaceful world of interconnected communities."
      />
      <div className="my-16">
        <Image src={Manifesto1}></Image>
      </div>
      <div class="flex flex-col md:flex-row gap-8 my-8 md:my-16">
        <div class="basis-3/5">
          <p>
            Ever since the inception of Homo Sapiens, we have lived in tribes.
            <br></br>
            <br></br>
            Early tribes gathered around a shared culture, resulting from common
            descent, religion and language.
            <br></br>
            <br></br>
            Those tribes conquered others and expanded to become entire kingdoms
            and empires. The threat of physical violence determined the purpose
            of those early nations: Protecting their citizens.
            <br></br>
            <br></br>
            Their ethos revolted around war, pride and sacrifice.
          </p>
        </div>
        <div class="basis-2/5">
          <Quote author="Pope Eugene III (1145 - 1153)">
            Whoever devotedly undertakes and performs this most holy journey...
            shall have the enjoyment of eternal reward from the repayer of all
            men.
          </Quote>
          <Quote author="Alexander III (1845 - 1894)">
            Russia only has two allies — its army and its navy.
          </Quote>

          <p>
            A statue was erected in 2017 in Crimea with the quote above.
            <br></br>
            <br></br>
            How much have we evolved in 700 years?
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-8 my-0 md:mt-24 md:mb-8">
        <div class="basis-1/3"></div>
        <div class="basis-2/3">
          <Image src={Manifesto2}></Image>
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-8 my-8 md:my-16 md:my-0 md:-ml-32">
        <div class="hidden md:block basis-2/5">
          <Image src={Manifesto3}></Image>
        </div>
        <div class="basis-3/5 mt-8 md:mt-16">
          <div class="flex flex-col md:flex-row gap-8">
            <div class="basis-1/2">
              <p>
                As the Industrial Revolution came upon us, technology and mass
                production took violence to a new level. With the increasing
                economic returns of violence and military expenditure, nation
                states needed to expropriate more wealth.
                <br></br>
                <br></br>
                And since they controlled the media, they could bend the
                narrative. That turned into a powerful weapon which could
                legitimize any of their wrongdoings. Spreading hatred and fear
                became profitable, justifying endless wars.
              </p>
            </div>
            <div class="basis-1/2">
              <p>
                Fast-forward to today, our nation states are still based on the
                very same pillars of war, pride and sacrifice as those in the
                Dark Ages. Our science and technology has leaped forward so
                much.
                <br></br>
                <br></br>
                We no longer pray to Gods for harvest, and we are now on our way
                to becoming multi-planetary. Yet, for close to a thousand years,
                the monolithic structure of nation states remains unchanged.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-16 md:my-0 md:mb-32 lg:pl-64 lg:-mt-64">
        <h1 className="text-2xl tracking-loose sm:text-4xl md:text-5xl bg-gradient-to-r from-n3blue via-n3green to-n3green text-transparent bg-clip-text mt-1 md:leading-tight">
          Their outdated, Industrial Era education system is producing human
          robots that memorize well but don't ask the why nor the what if.
        </h1>
        <h1 className="text-2xl tracking-loose text-gray-900 sm:text-4xl md:text-5xl md:leading-tight">
          These don’t know of creativity nor basic concepts like what inflation
          is — creating unparalleled unemployment across regions like Southern
          Europe.
        </h1>
      </div>
      <div class="flex flex-col md:flex-row gap-8 mb-8 md:mb-16">
        <div class="basis-1/2">
          <p>
            The macro-institutions that governments are part of, such as WHO,
            are as clueless as the governments themselves. People reading Balaji
            on Twitter were better prepared for COVID than those adhering to
            WHO's initial recommendations — such as not wearing masks.
            <br></br>
            <br></br>
            Governments all around the world are failing to react swiftly to the
            severe destruction of our planet — endangering our whole species.
          </p>
        </div>
        <div class="basis-1/2">
          <Quote author="The Sovereign Individual">
            A system that routinely submits control over the largest, most
            deadly enterprises on earth to the winner of popularity contests
            between charismatic demagogues is bound to suffer for it in the long
            run.
          </Quote>
        </div>
      </div>
      <div class="-mx-4 md:-mx-6 lg:-mx-8 xl:-mx-32">
        <Image src={Manifesto4}></Image>
        <div class="flex flex-col md:flex-row gap-12 bg-gradient-to-r from-n3blue via-n3green to-n3green text-white px-8 py-12 -mt-2 mb-16 lg:px-32 lg:py-40 lg:mb-32">
          <div class="basis-1/2">
            <p>
              We cannot entrust our currency, our education, our healthcare, our
              planet nor the future of our kids to these institutions anymore.
              Nor will we surrender all our individual freedoms in exchange for
              their protection.
              <br></br>
              <br></br>
              This ends here, and this ends now. For the first time in a
              thousand years, the very pillars that gave birth to the largest,
              longest-standing institutions of our planet — nation states — are
              about to collapse. And something new and beautiful is about to
              emerge from their ashes.
            </p>
          </div>
          <div class="basis-1/2">
            <p>
              We are taught that nation states are ever-lasting institutions
              that are native to humankind itself. That they are too big to
              fail. They have become a dogma. A dogma that is dragging us down
              and endangering our civilization. It's time to debunk their dogma.
            </p>
          </div>
        </div>
      </div>
      <h1 className="max-w-2xl text-3xl tracking-loose sm:text-4xl md:text-5xl bg-gradient-to-r from-n3blue via-n3green to-n3green text-transparent bg-clip-text font-display mt-1 md:leading-tight md:-mb-24">
        We need to reimagine new nations and we need to{' '}
        <span className="border-b-4 border-n3green">build them</span>.
      </h1>
      <Image src={Manifesto5}></Image>
      <div className="text-xl max-w-2xl m-auto my-8">
        <p>
          We need new <span className="text-n3blue">communities</span> that
          provide us with belonging, both on the Internet and in our cities.
          <br></br>
          <br></br>
          We need <span className="text-n3blue">new cities</span> where nature
          and technology become one.
          <br></br>
          <br></br>
          We need <span className="text-n3blue">new neighborhoods</span> where
          kids can run free again.
          <br></br>
          <br></br>
          We need <span className="text-n3blue">new ducation</span> to unleash
          our creativity.
          <br></br>
          <br></br>
          We need <span className="text-n3blue">tools to combat</span> the
          propaganda that certain agencies use to misinform people.
          <br></br>
          <br></br>
          We need <span className="text-n3blue">new tools to protect</span> from
          the new violence, which is more digital than physical.
          <br></br>
          <br></br>
          We need <span className="text-n3blue">
            new tools to understand
          </span>{' '}
          the laws we are subject to, instead of confusing bureaucracy.
          <br></br>
          <br></br>
          We need <span className="text-n3blue">
            new forms of governance
          </span>{' '}
          where citizens do more than voting in a popularity contest each four
          years.
          <br></br>
          <br></br>
          We need to use those new forms of governance to{' '}
          <span className="text-n3blue">
            fund common goods and reverse climate change
          </span>
          .<br></br>
          <br></br>
          We need governments that{' '}
          <span className="text-n3blue">
            treat their citizens like customers
          </span>{' '}
          and not cattle.
          <br></br>
          <br></br>
          And we need it all{' '}
          <span className="text-n3blue">sooner rather than later</span>.
          <br></br>
          <br></br>
          Thankfully, we already have some{' '}
          <span className="text-n3blue">building blocks</span>.<br></br>
          <br></br>
          We have a <span className="text-n3blue">global currency</span>,
          Bitcoin.
          <br></br>
          <br></br>
          We have a <span className="text-n3blue">global jurisdiction</span> for
          programmatic value settlement, Ethereum.
          <br></br>
          <br></br>
          We have <span className="text-n3blue">tools to organize</span> and
          collaborate on such jurisdictions, like Aragon.
        </p>
      </div>
      <div class="bg-gradient-to-r from-n3blue via-n3green to-n3green px-8 py-4 my-8 md:px-16 md:py-24 md:my-16 -mx-4 md:-mx-6 lg:-mx-8 xl:-mx-32 text-center">
        <h1 className="text-1xl tracking-loose text-white sm:text-5xl md:text-5xl font-display md:leading-tight">
          Bitcoin → Ethereum → DAOs → Digital nations
        </h1>
      </div>
      <div class="flex flex-col lg:flex-row my-8 md:my-24">
        <div class="basis-1/3"></div>
        <div class="basis-2/3 md:pr-16">
          <p className="text-2xl md:text-4xl">
            <span className="text-n3blue">Web3 is here</span>, and for the first
            time in history, the Internet will determine the structure of our
            society.
          </p>
        </div>
      </div>
      <Image src={Manifesto6}></Image>
      <div className="max-w-2xl my-8 md:my-16">
        <h3 className="text-lg md:text-xl">Rebuilding nations with Web3</h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-loose text-gray-900 md:leading-tight">
          Web3 is much more than a new Internet.
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-loose  bg-gradient-to-r from-n3blue via-n3green to-n3green text-transparent bg-clip-text mt-1 md:leading-tight">
          Web3 shifts the narrative from master-to-slave to peer-to-peer.
        </h1>
      </div>
      <div class="flex flex-col md:flex-row gap-8">
        <div class="basis-1/2">
          <p>
            As value is moving to Web3 en masse, it moves further away from any
            centralized power held by nation states. While Web2 already gave
            rise to the cybereconomy, such economy was still piggybacking off
            old systems. Web3 is truly Internet-native. Web3 grows faster as
            it's further away from physical violence, political instability and
            endless bureaucracy.
            <br></br>
            <br></br>
            And for the first time in humankind's history, as value moves to
            Web3, the Internet will determine the shape of our new society.
            <br></br>
            <br></br>
            People are now feeling they belong more to niche Internet
            communities and DAOs, rather than massive nation states.
            <br></br>
            <br></br>
            Remote work is becoming the rule and not the exception.
            <br></br>
            <br></br>
            Work itself is becoming more like compartmentalized tasks rather
            than 9-to-5 jobs.
          </p>
        </div>
        <div class="basis-1/2">
          <p>
            Corporations are becoming fluid DAOs and not forever-lasting
            hierarchical institutions.
            <br></br>
            <br></br>
            People are starting to see nation states as service providers,
            rather than rulers. And they are moving to wherever these providers
            offer them a fair deal.
            <br></br>
            <br></br>
            For the first time Web3 gives us the opportunity to un-bundle the
            services that nation states provide, make them 100x better and
            ensure they are community-owned. The result will be a new, open
            source stack for running Web3-powered nation states: the Nation3
            stack.
            <br></br>
            <br></br>
            Even nation states themselves will help in this journey, as they
            start to compete against each other. Some are already making moves,
            such as allowing Bitcoin as legal tender or attracting skilled
            individuals with fair tax deals. We have entered the era of
            jurisdictional competition.
          </p>
        </div>
      </div>
      <div className="flex grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
        <div className="bg-zinc-50 p-8">
          <Image src={Nation1Icon} width={74} height={74}></Image>
          <h4 className="text-lg text-gray-400 mt-16">Nation1</h4>
          <h4 className="text-xl">Arbitrary Dictatorship</h4>
        </div>
        <div className="bg-zinc-50 p-8">
          <Image src={Nation2Icon} width={74} height={74}></Image>
          <h4 className="text-lg text-gray-400 mt-16">Nation1</h4>
          <h4 className="text-xl">Monolithic Democracy</h4>
        </div>
        <div className="bg-gradient-to-r from-n3blue/10 via-n3green/10 to-n3green/10 p-8">
          <Image src={Nation3Icon} width={74} height={74}></Image>
          <h4 className="text-lg text-gray-400 mt-16">Nation1</h4>
          <h4 className="text-xl">Mesh of Crypto-powered Communities</h4>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row gap-8 my-8 md:my-24">
        <div class="basis-1/3"></div>
        <div class="basis-2/3 md:pr-16">
          <p className="text-2xl md:text-4xl">
            With startups and Web3 networks un-bundling the nation state's
            services and making them 100x better, and these nations themselves
            competing against each other, we will enter a new era of prosperity
            and peace.<br></br>
            <span className="text-n3blue">It's time for Nation3.</span>
          </p>
        </div>
      </div>
      <div class="bg-gradient-to-r from-n3blue via-n3green to-n3green px-16 py-24 my-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-loose text-white text-white mb-8">
          Share this manifesto with the world
        </h2>
        <div className="flex gap-4 justify-center">
          <Image src={TwitterIcon} width={56} height={56} />
          <Image src={EmailIcon} width={56} height={56} />
          <Image src={RedditIcon} width={56} height={56} />
        </div>
      </div>
    </div>
  )
}
