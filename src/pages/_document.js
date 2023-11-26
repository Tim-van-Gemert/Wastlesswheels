import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <head>
          {
          <script dangerouslySetInnerHTML={{
              __html: `(function (w, d, s, l, i) {
                      w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                      var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
                      j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
                  })(window, document, 'script', 'dataLayer', ${process.env.GTM});`
          }}></script>
          }
      </head>
      <body>
          <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.GTM}`}
          height="0" width="0"></iframe></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
