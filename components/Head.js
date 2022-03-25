import Head from 'next/head'

export default function WebsiteHead({ title, description, image, type }) {
  const baseUrl = 'https://nation3.org'
  const titlePrefix = 'Nation3'
  return (
    <Head>
      <title>
        {titlePrefix} {title}
      </title>
      <meta name="description" content={description} />
      <meta property="og:title" content={`${titlePrefix} ${title}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${image}`} />
      <meta property="og:type" content={type} />
      <meta name="twitter:title" content={`${titlePrefix} ${title}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${image}`} />
      <meta name="twitter:site" content="@Nation3VC" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}
