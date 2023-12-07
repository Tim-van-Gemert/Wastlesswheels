import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Button from '@/components/button'

const poppins = Poppins({ subsets: ['latin'],  weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

export default function Menu() {

  return (
    <section className='flex w-full flex-col items-center bg-black h-[100vh] max-h-[1000px]  relative mb-[225px]'>


    <div className='bg-black opacity-[65%] w-full h-full z-[2] absolute'/>

      <Image
      className='absolute h-full w-full object-cover  z-[1] '
        src="/foodtruck foto.jpg"
        width={1400}
        height={736}
        alt="Picture of foodtruck"
      />


      <div className='flex w-full px-4 mlpx-theme-lg w-full xl:w-theme  flex-col items-start mt-[200px]  md:mt-[250px] z-[2] relative  '>
        <h1 className='text-title-h1-medium md:text-title-h1 text-white'>Coming Soon</h1>
        <span className='text-title-h2-small md:text-title-h2-bold text-accent '>Aan deze pagina word nog gewerkt</span>
        <div className='mt-7 flex flex-col md:flex-row gap-3'>
        <Button  text={'Home'} href={'/'}/>
        </div>
      </div>

    </section>
  )
}
