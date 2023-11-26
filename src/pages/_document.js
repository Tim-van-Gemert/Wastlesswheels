import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.GTM}`} ></iframe></noscript> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
