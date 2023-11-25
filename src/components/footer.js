import { Poppins } from 'next/font/google'
import Link from 'next/link'

const poppins = Poppins({ subsets: ['latin'],  weight: ["400", "500", "600", "700", "800", "900"] })

export default function Footer({ menuItems }) {
    const locations = ['Utrecht', 'Amsterdam', 'Den Haag']
    return <>
        <footer className='text-white  pt-24 pb-12 bottom-0 z-[2]  w-full flex justify-center mt-auto px-6 xl:px-12'>
            <div className='w-full lg:w-theme max-w-theme grid grid-cols-12 text-primary'>
                <div className=' col-span-12 xl:col-span-3 flex flex-col gap-2'>
                    <span className='text-regular-bold mb-3'>Wasteless Wheels</span>
                    <div className='text-regular-small '>de revolutie in streetfood, waar duurzaamheid en smaak samenkomen.</div>
                </div>
                <div className=' mt-6 md:mt-12 col-span-12 xl:mt-0 md:col-span-4 xl:col-start-5 xl:col-span-3 flex flex-col gap-2'>
                    <span className='text-regular-bold mb-3'>Ontdek meer</span>
                    {menuItems.map((item) => {
                        return (
                            <div key={item.href} className='text-regular-small border-solid  border-b-[1px] w-fit pb-1 border-primary hover:text-accent hover:cursor-pointer'>{item.title}</div>
                        )
                    })}
                </div>

                <div className='  mt-6 md:mt-12 col-span-12 xl:mt-0 md:col-span-4  xl:col-start-8 xl:col-span-3 flex flex-col gap-2'>
                    <span className='text-regular-bold mb-3'>Onze locaties</span>
                    {locations.map((location) => {
                        return (
                            <div  key={location} className='text-regular-small border-solid  border-b-[1px] w-fit pb-1 border-primary hover:text-accent hover:cursor-pointer'>{location}</div>
                        )
                    })}
                </div>

                <div className='  mt-6 md:mt-12 col-span-12 xl:mt-0 md:col-span-4 xl:col-start-11 xl:col-span-3 flex flex-col gap-2'>
                    <span className='text-regular-bold mb-3'>Contact opnemen?</span>
                    <Link className={"text-regular-small flex items-center w-fit justify-center  p-3 md:p-4 rounded-full border border-[2px] border-solid-accent hover:bg-black hover:text-white transition-all"}  href={'/contact'}>Neem contact op</Link>
                </div>
                
                <div className='col-span-12  mt-8 md:mt-24 flex  gap-6 md:gap-0 flex-col md:flex-row justify-between text-gray'>
                    <div className='text-regular-small  w-fit '>Gemaakt door Tessa van Gemert</div>
                    <div className='text-regular-small  w-fit '>Copyright 2023</div>
                </div>
            </div>

      
        </footer>
    </>
}