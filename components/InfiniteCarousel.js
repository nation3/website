export default function InfiniteCarousel({ items }) {
  return (
    <div className="flex items-center justify-center full-width">
      {/* 1. */}
      <div className="w-[200%] h-48 border-gray-600 overflow-hidden relative">
        {/* 2. */}
        <div className="w-[200%] flex items-center h-48 justify-around absolute left-0 animate gap-4 animate">
          {/* 3 */}
          {items.map((item) => {
            return (
              <div className="flex justify-center items-start w-[20rem]">
                {item}
              </div>
            )
          })}
          {items.map((item) => {
            return (
              <div className="flex justify-center items-start w-[20rem]">
                {item}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
