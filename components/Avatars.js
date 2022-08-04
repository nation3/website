import { Avatar, Tooltip } from 'flowbite-react'

export default function Avatars() {
  const avatar = (
    <Tooltip content="Tooltip content">
      <Avatar img="/orb.png" rounded={true} size="lg" />
    </Tooltip>
  )
  const avatars = Array(39).fill(avatar)
  return (
    <div className="flex flex-wrap gap-1">
      {avatars.map((avatar) => avatar)}
    </div>
  )
}
