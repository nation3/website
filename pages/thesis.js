import Head from '../components/Head'
import BigTitle from '../components/BigTitle'
import Button from '../components/Button'
import Image from 'next/image'
import ThesisArt from '../public/thesis-art.svg'

export default function Thesis() {
  return (
    <div>
      <Head title="Team" description="VC fund" image="" type="website" />
      <BigTitle text="Nation3 thesis" gradientText="Unbundling nation states" />
      <div className="mx-auto flex flex-col md:flex-row items-center gap-8 mt-16">
        <div className="basis-1/3">
          <Image src={ThesisArt} layout="responsive" quality="100" />
        </div>
        <div className="text-left basis-2/3 text-lg">
          <p className="mb-4">
            Ever since the inception of Homo Sapiens, we have lived in tribes.
          </p>
          <p className="mb-4">
            Early tribes gathered around a shared culture, resulting from common
            descent, religion and language. Those tribes conquered others and
            expanded to become entire kingdoms and empires.
          </p>
          <p className="mb-4">
            The threat of physical violence determined the purpose of those
            early nations: Protecting their citizens.
          </p>{' '}
          <p className="mb-4">
            Their ethos revolted around war, pride and sacrifice.
          </p>
          <div className="mt-5 sm:mt-8">
            <Button text="Read the thesis" link="" />
          </div>
        </div>
      </div>
    </div>
  )
}
