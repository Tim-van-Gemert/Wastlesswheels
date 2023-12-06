import Image from 'next/image'

export default function Form() {

  const handleSubmit = async (event) => {

    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      location: formData.get('location'),
      extraInfo: formData.get('extraInfo')
    };
  
    const response = await fetch('/api/sendMail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
  
  
  };
  

  
  return (
    <div className='flex w-full flex-col items-center relative bg-white overflow-hidden'>
      <div className=' w-full xl:w-theme max-w-theme grid grid-cols-12 px-4 ml:px-theme-lg '>

      <div className=' col-span-12  ml:col-span-7  text-primary  flex flex-col'>
        <div className=' text-regular-small w-full max-w-full md:text-regular-thin '>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</div>
        <form onSubmit={handleSubmit} className='mt-5 flex flex-col gap-5 w-full max-w-full'>
            <div className='flex flex-col md:flex-row gap-5'>
              <input type="text" className='w-full input  md:col-span-6 py-1 px-3 border-solid border-black border-[1px]  text-regular-small md:text-form' placeholder='Naam'/>
              <input type="text" className='w-full  input  md:col-span-6  py-1 px-3 border-solid border-black border-[1px] text-regular-small md:text-form' placeholder='Bedrijf'/>
            </div>
            <div className='flex flex-col md:flex-row gap-5'>
              <input type="text" className='w-full input  md:col-span-6  py-1 px-3 border-solid border-black border-[1px] text-regular-small md:text-form' placeholder='E-mail'/>
              <input type="text" className='w-full input  md:col-span-6  py-1 px-3 border-solid border-black border-[1px] text-regular-small md:text-form' placeholder='Plaats'/>
            </div>
            <textarea type="text" rows={4} className='w-full input  py-3 px-3 border-solid border-black border-[1px] text-regular-small md:text-form' placeholder='Extra informatie'/>

            <div className='col-span-12'>
                <button type='submit' className='py-1 px-3 border-solid border-black btn-tiny md:text-btn  border-[1px] transition-all hover:text-white hover:bg-black'> Verstuur </button>
            </div>
        </form>
      </div>

      <div className='mt-12 md:mt-0 col-span-12 flex  md:hidden ml:flex ml:col-span-5 ml:col-start-9 text-primary  flex flex-col'>
        <Image
        className=' hidden md:flex z-[1] h-full'
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
