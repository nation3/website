import { Card } from 'flowbite-react'
import CardLink from './CardLink'

const projects = [
  {
    title: 'Citizenship as an experience',
    image:
      'https://mirror-media.imgix.net/publication-images/fII0Qfaj-lASQJY2DLiJ4.png?height=915&width=1830&h=915&w=1830&auto=compress',
    children: (
      <>
        Citizens can stake $NATION to obtain an <b>NFT passport</b>. They can
        install it on their phone, get <b>push notifications</b> and set a
        signer account for voting. They can take part in governance using a well
        established and <b>reliable governance process</b>.
      </>
    ),
  },
  {
    title: 'Internet-native legal system',
    image:
      'https://mirror-media.imgix.net/publication-images/ZUbyJJNHqYrtqUmLVASl9.png?height=544&width=1088&h=544&w=1088&auto=compress',
    children: (
      <>
        Crypto created an Internet-native financial system, superseding the
        old-world system. But we lack an <b>Internet-native legal system</b>. We
        are building it by creating tools for{' '}
        <b>open source legal agreements</b>, enforced by a reliable{' '}
        <b>court system</b>.
      </>
    ),
  },
  {
    title: 'Basic income for citizens',
    image:
      'https://mirror-media.imgix.net/publication-images/6j4CYyaRGmxNvj7cxX83W.png?height=512&width=1024&h=512&w=1024&auto=compress',
    children: (
      <ul>
        <li>
          Providing a basic financial starting point allows citizens to have
          their essential needs covered, unleashing their mind space for
          creative purposes and opening doors for them to enter into{' '}
          <b>economic activity</b> within the Nation3 jurisdiction.
        </li>
      </ul>
    ),
  },
]

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 lg:mt-16">
      {projects.map((project, i) => (
        <CardLink
          key={i}
          title={project.title}
          description={project.description}
          image={project.image}
          items={project.items}
          url={project.url}
        >
          {project.children}
        </CardLink>
      ))}
    </div>
  )
}
