export default function Quote({ children, author }) {
  return (
    <blockquote className="py-4 md:text-center text-base">
      {children}
      <br />
      <div className="text-gray-500 mt-2">{author}</div>
    </blockquote>
  )
}
