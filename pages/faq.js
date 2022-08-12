import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import TextLink from '../components/TextLink'
import FAQMarkdown from '../public/faq.md'

const components = {
  a: (props) => <TextLink {...props} />,
}

export default function FAQ({ serialized }) {
  return (
    <>
      <h1 className="text-5xl font-medium bg-gradient-to-r from-n3blue to-n3green text-transparent bg-clip-text font-display my-16">
        Frequently asked questions
      </h1>
      <div className="prose prose-lg prose-h2:font-display prose-h2:font-normal prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-2 prose-a:text-n3blue prose-li:my-0">
        <MDXRemote {...serialized} components={components} />
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  const serialized = await serialize(FAQMarkdown)

  return {
    props: { serialized },
  }
}
