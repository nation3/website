import UniversalLink from './UniversalLink'

const defaultClasses = 'text-n3blue hover:opacity-70 transition-opacity'

export default function TextLink({ children, href, className }) {
  const classes = className ? className : defaultClasses
  return (
    <UniversalLink href={href} className={classes}>
      {children}
    </UniversalLink>
  )
}
