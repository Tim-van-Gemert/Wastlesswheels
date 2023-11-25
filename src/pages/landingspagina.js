import Hero from '@/components/hero'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'],  weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

export default function LandingPage() {

  let currentPage = {
    name: 'Landing_page',
    title: 'Landingspagina',
    subtitle: 'subtitel landignspagina',
    text: 'text landingspagina',
  }
  
  return (
    <main className={`flex w-full flex-col items-center pt-8 relative  bg-white  overflow-y-hidden  pb-36 px-6  ${poppins.className}`}>
      <Hero page={currentPage}/>
      <section className=' w-full 2xl:w-theme max-w-theme relative z-[1] grid grid-cols-12 gap-8  mt-10'>
            {/* <div className='col-span-3 p-8  border border-[1px] relative h-[300px] '>
                <img className='absolute right-[-22px] top-[22px] object-cover' src='/landingspagina/micheile-henderson-7NFwwp-vZk8-unsplash.jpg'></img>
            </div>
            <div className='col-span-3 p-8  border border-[1px] relative h-[300px] '>
                <img className='absolute right-[-22px] top-[22px] object-cover' src='/landingspagina/nikko-osaka-IPePRchsbWA-unsplash.jpg'></img>
            </div>
            <div className='col-span-3 p-8  border border-[1px] relative h-[300px] '>
                <img className='absolute right-[-22px] top-[22px] object-cover' src='/landingspagina/photo-1551730707-ae4fde676aae.avif'></img>
            </div>
            <div className='col-span-3 p-8  border border-[1px] relative h-[300px] '>
                <img className='absolute right-[-22px] top-[22px] object-cover ' src='/landingspagina/ryan-kwok-d2RYC06lRV0-unsplash.jpg'></img>
            </div> */}
        </section>  
    </main>
  )
}
