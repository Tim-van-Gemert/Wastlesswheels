import { Poppins } from 'next/font/google'
import Link from 'next/link'


export default function Button({ type, id, text, href }) {
    if (type == 'black') {
        return <>
        <Link id={id} className='py-2 px-3 md:px-5 w-fit text-primary btn-tiny md:text-btn transition-all border border-solid border-black border-[1px] text-black hover:bg-black transition-all duration-200 hover:text-white' href={href}>{text}</Link>  
        </>
    } else {
        return <>
        <Link id={id} className='py-2 px-3 md:px-5 w-fit text-primary btn-tiny md:text-btn transition-all border border-solid border-white border-[1px] text-white hover:bg-white hover:bg-white/40 transition-all duration-200 backdrop-blur-sm bg-white/10' href={href}>{text}</Link>  
        </>
    }

}