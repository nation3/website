import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Head from '../components/Head'
import TextLink from '../components/TextLink'
import FAQMarkdown from '../public/faq.md'

const components = {
  a: (props) => <TextLink {...props} />,
}

export default function FAQ({ serialized }) {
  return (
    <div className="max-w-screen-md mx-auto">
      <Head
        title="FAQ"
        description="Frequently asked questions about Nation3, a sovereign nation on the cloud."
        image="/social/home.png"
        type="website"
      />

      <h1 className="text-5xl font-medium bg-gradient-to-r from-n3blue to-n3green text-transparent bg-clip-text font-display my-16">
        Frequently asked questions
      </h1>
      <div className="prose prose-lg prose-h2:font-display prose-h2:font-normal prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-2 prose-a:text-n3blue prose-li:my-0 dark:prose-invert">
        <MDXRemote {...serialized} components={components} />
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const serialized = await serialize(FAQMarkdown)

  return {
    props: { serialized },
  }
}
