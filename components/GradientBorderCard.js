export default function GradientBorderCard({
  children,
  className,
  containerClassName,
}) {
  return (
    <div className="mx-auto flex items-center justify-center cursor-pointer transition hover:scale-95">
      <div
        className={`w-full rounded-2xl bg-gradient-to-b from-n3blue to-n3green p-0.5 ${containerClassName}`}
      >
        <div
          className={`h-full w-full bg-white dark:bg-n3navyblue rounded-2xl ${className}`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
