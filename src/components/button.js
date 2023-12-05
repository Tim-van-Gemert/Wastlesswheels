import { Poppins } from 'next/font/google'
import Link from 'next/link'


export default function Button({ text, href }) {
    return <>
        <Link className='py-2 px-3 md:px-5 w-fit text-primary text-btn transition-all border border-solid border-white border-[1px] text-white hover:bg-white hover:bg-white/40 transition-all duration-200 backdrop-blur-sm bg-white/10' href={href}>{text}</Link>  
    </>
}