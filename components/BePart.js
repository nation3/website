import BigTitle from '../components/BigTitle'
import { Button } from 'flowbite-react'

export default function BePart() {
  return (
    <div className="text-center grid justify-items-center align-items-center py-8 lg:py-32">
      <BigTitle text="Be part of Nation3" />
      <p className="max-w-md m-auto text-lg text-center dark:text-white mb-4">
        Online-first, zero-tax nation with its own jurisdiction, court and
        system of law.
      </p>
      <Button color="primary">Become a citizen</Button>
    </div>
  )
}
