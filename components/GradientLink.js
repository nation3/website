import Link from 'next/link'

export default function GradientLink({ text, href, hideArrow }) {
  const absolute = /^https?:\/\//i.test(href)
  return (
    <>
      {!absolute ? (
        <Link href={href}>
          <a className="text-lg font-medium bg-gradient-to-r from-n3blue to-n3green text-transparent bg-clip-text">
            {text} {!hideArrow ? '→' : ''}
          </a>
        </Link>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium bg-gradient-to-r from-n3blue to-n3green text-transparent bg-clip-text"
        >
          {text} {!hideArrow ? '→' : ''}
        </a>
      )}
    </>
  )
}
