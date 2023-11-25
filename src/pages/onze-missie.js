import Image from 'next/image'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'],  weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

export default function OurMission() {
  return (
    <main className={`flex w-full flex-col items-center pt-8 relative  bg-white  overflow-y-hidden  pb-36 px-6  ${poppins.className}`}>
      <section className=' w-full 2xl:w-theme max-w-theme  mt-12'>
        <img className='absolute left-0 top-0 z-[0] ' src='/svg-shape-6.svg'></img>
        <h1 className=' text-title-h1-small md:text-title-h1 relative  text-primary'>Onze missie</h1>
        <h2 className=' text-title-h2-small md:text-title-h2 md:-mt-5 relative   text-primary'>Hoe wij verspilling bestrijden</h2>
      </section>

      <section className=' w-full 2xl:w-theme max-w-theme relative z-[1] grid grid-cols-12 mt-10 md:mt-20'>
        <div className='flex col-span-12 grid grid-cols-12'>
          <div className=' order-2 md:order-1 col-span-12  lg:col-start-0  lg:col-span-10  text-regular-small md:text-regular'>
          Onze missie is simpel maar krachtig: het verminderen van voedselverspilling door heerlijke vegetarische gerechten te creëren. Bij WasteLess Wheels geloven we dat elk gerecht dat we serveren, een verhaal vertelt over bewustzijn, verantwoordelijkheid en de liefde voor onze planeet. We willen onze klanten niet alleen voeden met voortreffelijke gerechten, maar ook educeren over de impact van voedselverspilling.
          </div>
        </div>
      </section>


    </main>
  )
}