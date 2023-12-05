import '@/styles/globals.css'
import Footer from '@/components/footer'
import Script from 'next/script'
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

const menuItems =[
  {
    title: 'Over ons',
    href: '#over-ons'
  },
  {
    title: 'Ons menu',
    href: '#menu'
  },
  {
    title: 'Contact',
    href: '#offerte-aanvragen'
  }
]

export default function App({ Component, pageProps }) {


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
