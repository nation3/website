export default function BigTitle({ text, gradientText }) {
  return (
    <div>
      <h1 className="text-3xl text-gray-900 md:text-4xl lg:text-5xl font-display dark:text-white lg:leading-tight">
        {text}
      </h1>
      <h1 className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-n3blue via-n3green to-n3green text-transparent bg-clip-text font-display mt-1 lg:leading-tight">
        {gradientText}
      </h1>
    </div>
  )
}
