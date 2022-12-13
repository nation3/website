import UniversalLink from './UniversalLink'

const classes =
  'block bg-gradient-to-r from-n3blue via-n3green to-n3green text-white px-8 py-3 text-lg rounded-xl shadow cursor-pointer transition hover:scale-95'

export default function Button({ href, children }) {
  return (
    <UniversalLink className={classes} href={href}>
      {children}
    </UniversalLink>
  )
}
