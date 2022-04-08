import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class WebsiteDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          />
          <meta name="theme-color" content="#54c3ff" />
          <link rel="icon" href="/favicon.ico" />
          <Script src="https://cdn.splitbee.io/sb.js" />
        </Head>
        <body className="text-n3navyblue">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default WebsiteDocument
