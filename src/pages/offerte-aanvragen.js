import { Poppins } from 'next/font/google'

import Image from 'next/image'
import Header from '@/components/header'
import Button from '@/components/button'
import Menu from '@/components/menu'

import Text from '@/components/text'
import Form from '@/components/form'

const poppins = Poppins({ subsets: ['latin'],  weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })


export default function Offerte() {


    const menuItems =[
        // {
        // title: 'Offerte aanvragen',
        // href: '/offerte-aanvragen'
        // }
    ]

  return (
    <main className={`${poppins.className} flex flex-col`}>

      <section className='flex w-full flex-col items-center bg-black  max-h-[1000px]  relative '>

      <Header menuItems={menuItems}></Header>

      <div className='bg-black opacity-[65%] w-full h-full z-[2] absolute'/>

        <Image
        className='absolute h-full w-full object-cover  z-[1] '
          src="/foodtruck foto.jpg"
          width={1400}
          height={736}
          alt="Picture of foodtruck"
        />


        <div className='flex w-full px-4 ml:px-theme-lg w-full xl:w-theme  flex-col items-start mt-[200px]  md:mt-[250px] z-[2] relative'>
          <h1 className='text-title-h1-medium md:text-title-h1 text-white'>Geïnteresseerd?</h1>
          <span className='text-title-h2-small md:text-title-h2-bold text-accent '>Vraag een offerte aan!</span>
          <div className='mt-7 flex flex-col md:flex-row gap-3'>
          </div>
        </div>

      </section>

      {/* <section id='over-ons' className='mt-[110px] pt-[50px] ml:mt-[175px] ml:pt-[50px] '>
      <Text content={{
          text_top: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups',
          text_bottom: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups',
          text_button: 'Bekijk meer',
          href_button: '/',
        }
      }/>

      </section> */}


      <section className='mt-[50px] pt-[50px] ml:mt-[175px] ml:pt-[50px] md:mb-[225px]'>
        <Form/>
      </section>
      
    </main>

  )
}


