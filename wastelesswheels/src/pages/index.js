import Image from 'next/image'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'],  weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

export default function Home() {
  return (
    <main className={`flex w-full flex-col items-center pt-8 relative  bg-white  overflow-y-hidden  pb-36 px-6  ${poppins.className}`}>
      <section className=' w-full 2xl:w-theme max-w-theme  mt-12'>
        <img className='absolute left-0 top-0 z-[0] ' src='/svg-shape-6.svg'></img>
        <h1 className=' text-title-h1-small md:text-title-h1 relative  text-primary'>Wasteless Wheels</h1>
        <h2 className=' text-title-h2-small md:text-title-h2 md:-mt-5 relative  text-primary'>de revolutie in streetfood</h2>
      </section>

      <section className=' w-full 2xl:w-theme max-w-theme relative z-[1] grid grid-cols-12 md:mt-20'>
        <div className='flex col-span-12 grid grid-cols-12'>
          <div className=' order-2 md:order-1 col-span-12  lg:col-start-0  lg:col-span-6  text-regular-small md:text-regular'>
            Welkom bij WasteLess Wheels, de revolutie in streetfood, waar duurzaamheid en smaak samenkomen. Opgericht door Tessa van Gemert, een gepassioneerde voorvechter van een duurzamere wereld, belichaamt onze foodtruck meer dan alleen eten; het is een beweging tegen voedselverspilling.
          </div>
          <img className=' order-1 md:order-2 lg:-mt-12   col-span-12 lg:col-span-5 lg:col-start-8 relative z-[2] ' src='/3d-illustration-of-food-truck-hot-dog-fast-food-car-burger-truck-pizza-truck-coffee-car-mobile-fast-food-3d-rendering-png.webp'></img>

        </div>
      </section>


    </main>
  )
}


