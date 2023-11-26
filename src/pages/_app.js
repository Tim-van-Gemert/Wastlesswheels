import '@/styles/globals.css'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Script from 'next/script'
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import TagManager from 'react-gtm-module'
 
const tagManagerArgs = {
    gtmId: process.env.GTM
}
 
TagManager.initialize(tagManagerArgs)


export default function App({ Component, pageProps }) {

  const menuItems =[
    {
      title: 'Over ons',
      href: '/over-ons'
    },
    {
      title: 'Ons menu',
      href: '/ons-menu'
    },
    {
      title: 'Onze missie',
      href: '/onze-missie'
    },
    {
      title: 'Doe mee',
      href: '/doe-mee'
    },
    {
      title: 'Contact',
      href: '/contact'
    }
  ]

  return <>
    <Script  strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG}`}/>
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JC3B9XJK1D', {
            page_path: window.location.pathname,
          });
        `,
        }}
    />
    <Analytics />
    <Header menuItems={menuItems}></Header>
      <Component {...pageProps}  />
    <Footer menuItems={menuItems}></Footer>

  </>
}
