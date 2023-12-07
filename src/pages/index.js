import { Poppins } from 'next/font/google'

import Image from 'next/image'
import Header from '@/components/header'
import Button from '@/components/button'
import Menu from '@/components/menu'

import Text from '@/components/text'
import Contact from '@/components/contact'




const poppins = Poppins({ subsets: ['latin'],  weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

export default function Home() {
    const menuItems =[
      // {
      //   title: 'Offerte aanvragen',
      //   href: '/offerte-aanvragen'
      // }
    ]
    

  return (
    <main className={`${poppins.className} flex flex-col`}>

      <section className='flex w-full flex-col items-center bg-black h-[100vh] max-h-[1000px]  relative '>

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
          <h1 className='text-title-h1-medium-front md:text-title-h1 text-white'>WasteLess Wheels</h1>
          <span className='text-title-h2-small md:text-title-h2-bold text-accent '>De revolutie in streetfood</span>
          <div className='mt-7 flex flex-col md:flex-row gap-3'>
          <Button  text={'Impressie'} href={'/impressie'}/>
          <Button id={'Landings_pagina_cta'} text={'offerte aanvragen'} href={'/offerte-aanvragen'}/>
          </div>
        </div>

      </section>

      <section id='over-ons' className='mt-[50px] pt-[50px] ml:mt-[175px] ml:pt-[50px] '>
      <Text content={{
          text_top: 'Welkom bij Wasteless Wheels. Verse, vegetarische streetfood gerechten op wielen, met respect voor de planeet',
          text_bottom: 'Onze missie is simpel: heerlijke vegetarische gerechten aanbieden terwijl we onze ecologische voetafdruk minimaliseren. Als zero waste foodtruck brengen we smaak en duurzaamheid samen op één plek. Ontdek onze liefde voor de planeet door elk hap!',
          text_button: 'Bekijk meer',
          href_button: '/',
        }
      }/>

      </section>

      {/* <section className='mt-[110px] pt-[50px] ml:mt-[175px] ml:pt-[50px]'>
        <Slider/>
      </section> */}

      <section className=' mt-[110px] pt-[50px] ml:mt-[175px] ml:pt-[50px]mt-[110px] pt-[50px] ml:mt-[175px] ml:pt-[50px]' id='menu'>
        <Menu/>
      </section>


      <section id='offerte-aanvragen'className='mt-[110px] pt-[50px] ml:mt-[175px] ml:pt-[50px] md:mb-[225px]'>
        <Contact/>
      </section>
      
    </main>

  )
}


