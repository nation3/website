import { Avatar, Tooltip } from 'flowbite-react'

export default function Avatars() {
  const avatar = (
    <Tooltip content="Tooltip content">
      <Avatar
        img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        rounded={true}
        size="lg"
      />
    </Tooltip>
  )
  const avatars = Array(39).fill(avatar)
  return (
    <div className="flex flex-wrap gap-2">
      {avatars.map((avatar) => avatar)}
    </div>
  )
}
