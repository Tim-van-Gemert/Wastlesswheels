import '@/styles/globals.css'
import Footer from '@/components/footer'
import Script from 'next/script'
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/header';




export default function App({ Component, pageProps }) {

  const menuItems =[
    // {
    //   title: 'Offerte aanvragen',
    //   href: '/offerte-aanvragen'
    // }
  ]
  return <>
    <Script  strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG4}`}/>
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KZTEVKWRCW', {
            page_path: window.location.pathname,
          });
        `,
        }}
    />
    <Analytics />
      <Component {...pageProps}  />
    <Footer menuItems={menuItems}></Footer>

  </>
}
