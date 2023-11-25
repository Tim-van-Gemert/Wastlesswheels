import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { useState, useEffect } from 'react';

const poppins = Poppins({ subsets: ['latin'],  weight: ["400", "500", "600", "700", "800", "900"] })

export default function Header({menuItems}) {

    const [isOpen, setIsOpen] = useState(false);


    const handleClick = () => {

        const screenWidth = window.innerWidth;

        if (screenWidth < 768) {
            setIsOpen(!isOpen);

        
            const navElement = document.getElementById('primary-nav');
        
            if (!isOpen) {
            navElement.classList.remove('h-0');
            navElement.classList.add('flex-col', 'pt-[100px]', 'pb-[1000px]', 'menu-transition');
        
            document.querySelector('body').classList.add('overflow-hidden');
            } else {
            // Adding a delay of 500 milliseconds (adjust as needed)
            setTimeout(() => {
                navElement.classList.add('h-0');
                navElement.classList.remove('flex-col', 'pt-[100px]', 'pb-[1000px]', 'menu-transition');
                document.querySelector('body').classList.remove('overflow-hidden');
            }, 200);
            }
        }
      };


  

    useEffect(() => {
        const handleResize = () => {
            const navElement = document.getElementById('primary-nav');
            
            if (window.innerWidth > 768) {
                navElement.classList.add('h-0');
                navElement.classList.remove('flex-col', 'pt-[100px]', 'pb-[1000px]');
                document.querySelector('body').classList.remove('overflow-hidden')
            } else {
                setIsOpen(false)
            }
        };
    
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
        }
    
        // Clean up the event listener on component unmount
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);
  


    return <>
        <header className={`flex absolute top-0 z-[2] justify-center py-5 w-screen px-6 ${poppins.className}`}>
            <div className='flex w-full justify-between items-center w-full lg:w-theme  max-w-theme '>

                <Link onClick={handleClick} href={'/'} className='text-nav text-primary relative z-[11]'>Wasteless Wheels</Link>

                <button onClick={handleClick} className="flex relative z-[11]'> flex-col justify-center items-center md:hidden flex gap-1 h-[30px]">
                        <span className={`bg-black block  relative z-[11] transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-2' : '-translate-y-1' }`} >
                        </span>
                        <span className={`bg-black block  relative z-[11] transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100' }`} >
                        </span>
                        <span className={`bg-black block  relative z-[11] transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm ${isOpen ?  '-rotate-45 -translate-y-2' : 'translate-y-1'  }`} >
                        </span>    
                </button>

                <div id='primary-nav' className='menu-transition flex  gap-1 md:gap-5 z-[10]  w-full md:w-fit top-0 left-0 md:right-0 px-6  md:px-0 bg-white md:bg-transparent  h-0 absolute md:relative overflow-hidden md:overflow-visible md:h-fit text-nav-mobile  md:text-nav-small  lg:text-nav  text-black '>
            
                {menuItems.map((item) => {
                    return (
                        <Link  onClick={handleClick}  key={item.href} className='group h-fit' href={item.href}> 
                        <span className='group-hover:text-accent'>{item.title}</span>
                        <div className='w-0 group-hover:w-full transition-all h-[2px] bg-accent'></div>
                        </Link>
                    )
                })}
        
                </div>
            </div>
        </header>
    </>
}