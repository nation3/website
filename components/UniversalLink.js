import Link from 'next/link'

export default function UniversalLink(props) {
  const absolute = /^https?:\/\//i.test(props.href)
  return (
    <>
      {!absolute ? (
        <Link {...props}>{props.children}</Link>
      ) : (
        <a rel="noopener noreferrer" target="_blank" {...props}>
          {props.children}
        </a>
      )}
    </>
  )
}
