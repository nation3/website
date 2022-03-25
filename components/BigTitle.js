export default function BigTitle({ text, gradientText }) {
  return (
    <div>
      <h1 className="text-4xl tracking-loose text-gray-900 md:text-5xl lg:text-6xl font-display md:leading-tight">
        {text}
      </h1>
      <h1 className="text-4xl tracking-loose md:text-5xl lg:text-6xl bg-gradient-to-r from-n3blue via-n3green to-n3green text-transparent bg-clip-text font-display mt-1 md:leading-tight">
        {gradientText}
      </h1>
    </div>
  )
}
