export default function InfiniteCarousel({ items }) {
  const Item = (item, i) => (
    <div className="flex justify-center items-start w-[20rem]" key={i}>
      {item}
    </div>
  )

  return (
    <div className="flex items-center justify-center full-width">
      <div className="w-[200%] h-48 border-gray-600 overflow-hidden relative">
        <div className="w-[200%] flex items-center h-48 justify-around absolute left-0 animate gap-4 animate">
          {items.map((item, i) => Item(item, i))}
          {items.map((item, i) => Item(item, i))}
        </div>
      </div>
    </div>
  )
}
