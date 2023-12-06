import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { useState, useEffect } from 'react';

const poppins = Poppins({ subsets: ['latin'],  weight: ["300", "400", "500", "600", "700", "800", "900"] })

export default function Header({menuItems}) {

    const [isOpen, setIsOpen] = useState(false);


    const handleClick = () => {

        const screenWidth = window.innerWidth;

        if (screenWidth < 768) {
            setIsOpen(!isOpen);

        
            const navElement = document.getElementById('primary-nav');
            const navItems = navElement.querySelectorAll('.navitem')
        
            if (!isOpen) {

            setTimeout(() => {
                navElement.classList.remove('h-0');
                navElement.classList.add('flex-col', 'ml:px-theme-lg', 'pb-[1000px]', 'menu-transition', 'bg-black', 'pt-10');
  
            }, 200);

            setTimeout(() => {           
            Array.from(navItems).map((item) => {
                item.classList.remove('opacity-0');
            })
            }, 200);

            document.querySelector('body').classList.add('overflow-hidden');
            } else {
      
            setTimeout(() => {
                navElement.classList.add('h-0');
                navElement.classList.remove('flex-col', 'ml:px-theme-lg', 'pb-[1000px]', 'pt-10');
                document.querySelector('body').classList.remove('overflow-hidden');
            }, 200);




                Array.from(navItems).map((item) => {
                    item.classList.add('opacity-0');
                })
                
      
            
            }
        }
      };


      const handleHomeClick = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            setIsOpen(false);


            navElement.classList.add('h-0');
            navElement.classList.remove('flex-col', 'ml:px-theme-lg', 'pb-[1000px]', 'pt-10');
            document.querySelector('body').classList.remove('overflow-hidden');


        }


      };
  

    useEffect(() => {
        const handleResize = () => {
            const navElement = document.getElementById('primary-nav');
            const navItems = navElement.querySelectorAll('.navitem')

            
            if (window.innerWidth > 768) {
                navElement.classList.add('h-0');
                navElement.classList.remove('flex-col', 'pt-[100px]', 'pb-[1000px]', 'pt-10');
                document.querySelector('body').classList.remove('overflow-hidden')
                Array.from(navItems).map((item) => {
                    item.classList.remove('opacity-0');
                })
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
        <header className={` flex absolute top-0 z-[3] justify-center  w-full  ${poppins.className}`}>
            <div className='flex w-full justify-between items-center py-4 w-full lg:w-theme  relative z-[3] max-w-theme px-4 =ml:px-theme-lg'>

                <Link onClick={handleHomeClick} href={'/'} className='text-nav text-primary text-white relative z-[11]'>Wasteless Wheels</Link>

                <button onClick={handleClick} className="flex relative z-[11]'> flex-col justify-center items-center md:hidden flex gap-[4px] h-[30px] ">
                        <span className={`bg-white block  relative z-[11] transition-all duration-300 ease-out h-0.5 w-4 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5' }`} >
                        </span>
                        <span className={`bg-white block  relative z-[11] transition-all duration-300 ease-out h-0.5 w-4 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100' }`} >
                        </span>
                        <span className={`bg-white block  relative z-[11] transition-all duration-300 ease-out  h-0.5 w-4 rounded-sm ${isOpen ?  '-rotate-45 -translate-y-1' : 'translate-y-0.5'  }`} >
                        </span>    
                </button>

                <div id='primary-nav' className='menu-transition flex  gap-4 z-[10]  w-full md:w-fit top-0 left-0 md:right-0 px-4  md:px-0  md:bg-transparent  h-0 absolute md:relative overflow-hidden md:overflow-visible md:h-fit text-nav-mobile  md:text-nav-small  lg:text-nav  text-black  pt-10 md:pt-0'>
            
                {menuItems.map((item) => {
                    return (
                        <Link  onClick={handleClick}  key={item.href} className='group navitem h-fit w-fit ' href={item.href}> 
                        <span className='group-hover:text-accent text-white'>{item.title}</span>
                        <div className=' w-full md:w-0 group-hover:w-full  transition-all h-[2px] bg-accent'></div>
                        </Link>
                    )
                })}
        
                </div>
            </div>
        </header>
    </>
}