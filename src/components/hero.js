import { Poppins } from 'next/font/google'
import Link from 'next/link'


const poppins = Poppins({ subsets: ['latin'],  weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

export default function Hero({page}) {
  return (
    <>
        <section className=' w-full 2xl:w-theme max-w-theme  mt-12 '>
            <img className='absolute left-0 top-0 z-[0]  w-full ' src='/svg-shape-6.svg'></img>
            <h1 className=' text-title-h1-small md:text-title-h1 relative  md:mb-[30px] md:mb-[24px] mt-5 text-primary'>{page.title}</h1>
            <h2 className=' text-title-h2-small md:text-title-h2 md:-mt-5 relative   text-primary'>{page.subtitle}</h2>
        </section>

        <section className=' w-full 2xl:w-theme max-w-theme relative z-[1] grid grid-cols-12  mt-10 '>
            <div className='flex col-span-12 grid grid-cols-12'>
            <div className=' order-2 md:order-1 col-span-12  lg:col-start-0  lg:col-span-10  flex flex-col gap-8 '>
            <div className='text-regular-small md:text-regular'> {page.text}</div>

            {page.button_text ? (
            <Link href={page.button_href} className="text-regular-small flex items-center w-fit justify-center p-3 md:p-4 rounded-full border border-[2px] border-solid-accent hover:bg-black hover:text-white transition-all">
                {page.button_text}
            </Link>
            ) : null}

          </div>
            </div>
        </section>
    </>

  )
}
