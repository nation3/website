import TextLink from './TextLink'

const classes =
  'text-lg font-medium bg-gradient-to-r from-n3blue to-n3green text-transparent bg-clip-text font-display hover:opacity-80 transition'

export default function GradientLink({ text, href, hideArrow, className }) {
  return (
    <TextLink href={href} className={`${classes} ${className}`}>
      {text} {!hideArrow ? '→' : ''}
    </TextLink>
  )
}
