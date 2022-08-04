const item = (question, answer) => (
  <>
    <h2 className="text-xl font-medium bg-gradient-to-r from-n3blue to-n3green text-transparent bg-clip-text font-display">
      {question}
    </h2>
    <p className="text-lg">{answer}</p>
  </>
)

export default function FAQ() {
  return (
    <>
      <h1 className="text-5xl font-medium bg-gradient-to-r from-n3blue to-n3green text-transparent bg-clip-text font-display my-16">
        Frequently asked questions
      </h1>
      <div className="max-w-2xl">
        {item(
          'Flowbite is an open-source library?',
          `Now you can contribute to building a web3-powered,
        tax-free, inclusive community, that will one day receive
        international recognition and build solar punk cities youll want
        to live in.`
        )}
      </div>
    </>
  )
}
