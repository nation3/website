import Link from 'next/link'

const classes =
  'text-lg font-medium bg-gradient-to-r from-n3blue to-n3green text-transparent bg-clip-text font-display hover:opacity-80 transition'

export default function GradientLink({ text, href, hideArrow }) {
  const absolute = /^https?:\/\//i.test(href)
  return (
    <>
      {!absolute ? (
        <Link href={href}>
          <a className={classes}>
            {text} {!hideArrow ? '→' : ''}
          </a>
        </Link>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {text} {!hideArrow ? '→' : ''}
        </a>
      )}
    </>
  )
}
