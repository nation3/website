export default function BigTitle({ text, gradientText, sizeClasses }) {
  return (
    <div className={`${sizeClasses || 'text-3xl md:text-4xl lg:text-5xl'}`}>
      <h1 className="text-gray-900  font-display dark:text-white lg:leading-tight">
        {text}
      </h1>
      <h1 className="bg-gradient-to-r from-n3blue via-n3green to-n3green text-transparent bg-clip-text font-display mt-1 lg:leading-tight">
        {gradientText}
      </h1>
    </div>
  )
}
