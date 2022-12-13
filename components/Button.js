import Link from 'next/link'

const classes =
  'block bg-gradient-to-r from-n3blue via-n3green to-n3green text-white px-8 py-3 text-lg rounded-xl shadow cursor-pointer transition hover:scale-95'

export default function Button({ href, children }) {
  const absolute = /^https?:\/\//i.test(href)

  return (
    <>
      {!absolute ? (
        <Link href={href} className={classes}>
          {children}
        </Link>
      ) : (
        <a
          className={classes}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {children}
        </a>
      )}
    </>
  )
}
