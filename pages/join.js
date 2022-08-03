import { Card, Carousel } from 'flowbite-react'

export default function Join() {
  return (
    <div className="h-screen flex flex-col">
      <div className="my-8 h-full rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-80 bg-gradient-to-r from-n3blue to-n3green text-white">
        <Carousel indicators={false} slide={false}>
          <div className="flex h-full items-center justify-center px-32">
            <div className="basis-3/5 md:block">
              <h2 className="font-display text-5xl mb-4" id="carousel">
                1.
              </h2>
              <h2 className="font-display text-4xl mb-4" id="carousel">
                Become a contributor
              </h2>
              <div className="text-lg">
                You’ve read the manifesto, it clicked.
                <br /> You are fed up with the way traditional states run the
                show. You see your taxes go nowhere. Now what?
                <br />
                <br /> Now you can contribute to building a web3-powered,
                tax-free, inclusive community, that will one day receive
                international recognition and build solar punk cities you’ll
                want to live in.
                <br />
                <br />
                <ul className="list-disc">
                  <li>
                    Head over to Discord and introduce yourself to the community
                    (majority of channels are token-gated, but you’ll learn how
                    to unlock them in next steps)
                  </li>
                  <li>
                    Pick up open tasks on Dework and earn $NATION. Why would you
                    want to have any?
                  </li>
                </ul>
              </div>
            </div>
            <div className="basis-2/5 hidden md:block"></div>
          </div>
          <div className="flex h-full items-center justify-center">Slide 1</div>
          <div className="flex h-full items-center justify-center">Slide 1</div>
        </Carousel>
      </div>
    </div>
  )
}
