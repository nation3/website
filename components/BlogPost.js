import { Card } from 'flowbite-react'

export default function BlogPost({ title, description, image, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="hover:opacity-70 transition text-n3blue"
    >
      <Card imgSrc={image}>
        <div className="xl:h-48">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </Card>
    </a>
  )
}
