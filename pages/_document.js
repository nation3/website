import Document, { Html, Head, Main, NextScript } from 'next/document'

class WebsiteDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          />
          <meta name="theme-color" content="#54c3ff" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="text-n3navyblue dark:bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default WebsiteDocument
