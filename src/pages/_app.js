import '@/styles/globals.css'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Script from 'next/script'
import { useEffect } from 'react';
import { initializeGoogleTagManager } from './googleTagManager';

import { Analytics } from '@vercel/analytics/react';

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

  useEffect(() => {
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', 'GTM-W2T7DJKT');
  }, []);


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
