import BigTitle from '../components/BigTitle'
import Button from '../components/Button'

export default function BePart() {
  return (
    <div className="text-center grid justify-items-center align-items-center py-8 lg:py-32">
      <BigTitle text="Be part of Nation3" />
      <p className="max-w-md m-auto text-lg text-center dark:text-white mb-4">
        We are building a zero-tax, Web3-powered, solarpunk society. One that serves you, not the other way round.
      </p>
      <Button href="/join#carousel">Become a citizen</Button>
    </div>
  )
}
