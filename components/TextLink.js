import Link from 'next/link'

const classes =
  'text-lg font-medium bg-gradient-to-r from-n3blue to-n3green text-transparent bg-clip-text font-display hover:opacity-80 transition'

const defaultClasses = 'text-n3blue hover:opacity-70 transition-opacity'

export default function TextLink({ children, href, className }) {
  const absolute = /^https?:\/\//i.test(href)
  const classes = className ? className : defaultClasses
  return (
    <>
      {!absolute ? (
        <Link href={href} className={classes}>
          {children}
        </Link>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      )}
    </>
  )
}
