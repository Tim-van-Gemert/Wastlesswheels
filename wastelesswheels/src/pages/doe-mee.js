import Image from 'next/image'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'],  weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

export default function JoinUs() {
  return (
    <main className={`flex w-full flex-col items-center pt-8 relative  bg-white  overflow-y-hidden  pb-36 px-6  ${poppins.className}`}>
      <section className=' w-full 2xl:w-theme max-w-theme  mt-12'>
        <img className='absolute left-0 top-0 z-[0] ' src='/svg-shape-6.svg'></img>
        <h1 className=' text-title-h1-small md:text-title-h1 relative  text-primary'>Doe mee</h1>
        <h2 className=' text-title-h2-small md:text-title-h2 md:-mt-5 relative   text-primary'>Help ons verspilling tegen te gaan</h2>
      </section>

      <section className=' w-full 2xl:w-theme max-w-theme relative z-[1] grid grid-cols-12 mt-10 md:mt-20'>
        <div className='flex col-span-12 grid grid-cols-12'>
          <div className=' order-2 md:order-1 col-span-12  lg:col-start-0  lg:col-span-10  text-regular-small md:text-regular'>
          Bij WasteLess Wheels nodigen we je uit om deel te nemen aan onze missie. Door bij ons te eten, draag je niet alleen bij aan een duurzamere wereld, maar word je ook deel van een gemeenschap die streeft naar verandering. Sluit je aan bij ons op deze smakelijke reis naar een betere toekomst!
          </div>
        </div>
      </section>


    </main>
  )
}
