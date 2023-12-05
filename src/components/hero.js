import { Poppins } from 'next/font/google'
import Link from 'next/link'


const poppins = Poppins({ subsets: ['latin'],  weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

export default function Hero({page}) {
  return (
    <>
        <div className='absolute hidden sm:flex top-0 w-full h-full  bg-gradient-to-r to-[#57ef94] from-[#3df587] z-[0] left-0 '></div>
        <div className=' w-full 2xl:w-theme max-w-theme  mt-6 '>
            <img className='absolute  flex sm:hidden left-0 top-0 z-[0]  w-full ' src='/svg-shape-mobile.svg'></img>
            <h1 className=' text-title-h1-small md:text-title-h1 relative md:mb-[24px] mt-5 text-primary'>{page.title}</h1>
            <h2 className=' text-title-h2-small md:text-title-h2 md:-mt-3 relative  text-primary'>{page.subtitle}</h2>
        </div>
    </>

  )
}
