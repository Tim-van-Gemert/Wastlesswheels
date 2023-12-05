import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Text({content}) {
  return (
    <>
        <div className='flex w-full flex-col items-center relative  bg-white '>
            <div className=' w-full 2xl:w-theme max-w-theme grid grid-cols-12 px-4  ml:px-theme-lg '>

            <div className=' col-span-12 text-primary text-title-h2-tiny-bold md:text-title-h2-small-bold ml:text-intro'>
            {content.text_top}
            </div>
            <div className=' col-span-12 ml:col-span-7 ml:col-start-6 mt-4 text-primary text-regular-small md:text-regular'>
            {content.text_bottom}
            </div>

            {/* {content.text_button ? (
            <div className='col-span-12  ml:col-span-6   mt-4 ml:col-start-6 '>
                <Link className=' flex items-center gap-1 hover:gap-2  hover:cursor-pointer hover:bg-black hover:text-white  transition-all text-primary font-primary p-2 border-black border-solid border-[1px] w-fit' href='/home' >
                    <span className=' text-button-small md:text-button '>{content.text_button}</span>  <FontAwesomeIcon className='text-icon-small md:text-icon' icon={faChevronRight} />
                </Link>
            </div>
            ) : null} */}

            </div>
      </div>
    </>

  )
}
