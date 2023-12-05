import Image from 'next/image'

export default function Form() {

  return (
    <div className='flex w-full flex-col items-center relative bg-white overflow-hidden'>
      <div className=' w-full xl:w-theme max-w-theme grid grid-cols-12 px-4 ml:px-theme-lg '>

      <div className='col-span-12  text-primary  flex flex-col  mb-5'>
        <span className='text-title-h2-medium md:text-title-h2-bold lowercase'>Vraag een offerte aan!</span>
        <span className='text-small-thin md:text-regular-thin -mt-1 text-accent'>Lorem ipsum fake text</span>
      </div>


      <div className=' col-span-12  ml:col-span-7  text-primary  flex flex-col'>
        <div className=' text-regular-small  md:text-regular-thin '>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</div>
        <form className='mt-5 grid grid-cols-12 gap-5'>
            <input type="text" className=' w-fit input col-span-12 md:col-span-6 py-1 px-3 border-solid border-black border-[1px]  text-regular-small md:text-form' placeholder='Naam'/>
            <input type="text" className='w-fit md:w-full  input col-span-12 md:col-span-6  py-1 px-3 border-solid border-black border-[1px] text-regular-small md:text-form' placeholder='Bedrijf'/>
            <input type="text" className='w-fit md:w-full input col-span-12 md:col-span-6  py-1 px-3 border-solid border-black border-[1px] text-regular-small md:text-form' placeholder='E-mail'/>
            <input type="text" className='w-fit md:w-full input col-span-12 md:col-span-6  py-1 px-3 border-solid border-black border-[1px] text-regular-small md:text-form' placeholder='Plaats'/>
            <textarea type="text" rows={4} className='w-fit md:w-full input col-span-12 py-3 px-3 border-solid border-black border-[1px] text-regular-small md:text-form' placeholder='Extra informatie'/>

            <div className='col-span-12'>
                <button type='submit' className='py-1 px-3 border-solid border-black text-form border-[1px] transition-all hover:text-white hover:bg-black'> Verstuur </button>
            </div>
        </form>
      </div>

      <div className='mt-12 col-span-12 flex  md:hidden ml:flex ml:col-span-5 ml:col-start-9 text-primary  flex flex-col'>
        <Image
        className=' z-[1] h-full'
          src="/form.jpg"
          width={400}
          height={616}
          alt="Picture of foodtruck"
        />
      </div>

      </div>
  </div>
  )
}
