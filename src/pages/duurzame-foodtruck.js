import Hero from '@/components/hero'
import { Poppins } from 'next/font/google'
import Link from 'next/link'

const poppins = Poppins({ subsets: ['latin'],  weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

export default function LandingPage() {

  let currentPage = {
    name: 'Landing_page',
    title: 'Zero Waste Street Food',
    subtitle: 'Proef de Toekomst in Onze Foodtruck',
    text: 'Welkom bij WasteLess Wheels, de revolutie in streetfood, waar duurzaamheid en smaak samenkomen. Opgericht door Tessa van Gemert, een gepassioneerde voorvechter van een duurzamere wereld, belichaamt onze foodtruck meer dan alleen eten; het is een beweging tegen voedselverspilling.',
  }
  
  return (
    <main className={`flex w-full flex-col items-center pt-8 relative  bg-white  overflow-y-hidden  px-6  pb-36 ${poppins.className}`}>
        <Hero page={currentPage}/>
        <section className=' w-full 2xl:w-theme max-w-theme relative z-[1]  gap-8  mt-40 '>
          <div className='bg-primary w-full grid grid-cols-12 ' >
            <div className='flex flex-col justify-center items-center relative overflow-hidden col-span-12 p-5 gap-3 h-[240px] relative'>
              <img src='/landingspagina/asset4.svg' className='absolute  w-[60px] z-[2] left-[80%] top-1/2'></img>
              <img src='/landingspagina/asset4.svg' className='absolute  w-[60px] z-[2] right-[80%] top-1/2'></img>
              <img src='/landingspagina/asset4.svg' className='absolute  w-[60px] z-[2] right-[90%] top-1/4'></img>
              <img src='/landingspagina/asset4.svg' className='absolute  w-[60px] z-[2] left-[90%] top-1/4'></img>
              <h2 className=' text-title-h2-small md:text-title-h2 text-center  relative bg-black z-[3] text-white'>Wil je meer weten?</h2>
              <Link href={'/'} id='Landings_pagina_cta' className={"text-regular-small flex items-center w-fit z-[2]  p-3 md:p-4 rounded-full border border-[2px] border-white bg-transparent text-white hover:bg-white hover:text-black transition-all"}>Ontdek meer</Link>
            </div>
          </div>
        </section>  
    </main>
  )
}
