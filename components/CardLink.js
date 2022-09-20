import { Card } from 'flowbite-react'

export default function CardLink({ title, children, image, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={url && 'hover:opacity-70 transition text-n3blue'}
    >
      <Card imgSrc={image}>
        <div className="xl:h-52">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
            {title}
          </h5>
          <div className="font-normal text-gray-700 dark:text-gray-400">
            {children}
          </div>
        </div>
      </Card>
    </a>
  )
}
