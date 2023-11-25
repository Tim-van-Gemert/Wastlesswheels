import '@/styles/globals.css'
import Footer from '@/components/footer'
import Header from '@/components/header'

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
    },

  ]
  return <>

    <Header menuItems={menuItems}></Header>
      <Component {...pageProps} />
    <Footer menuItems={menuItems}></Footer>

  </>
}