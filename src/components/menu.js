import Image from 'next/image'

export default function Menu() {

  const menuFoods =[
    {
      name: 'ZERO burgers',
      desc: 'Een hamburger gemaakt uit verse tomaat, kaas , ijsberg sla, runder gehakt en honing mosterd saus',
      image_src: '/burger.jpg'
    },
    {
      name: 'Frisky fries',
      desc: 'Een hamburger gemaakt uit verse tomaat, kaas , ijsberg sla, runder gehakt en honing mosterd saus',
      image_src: '/fries.jpg'
    },
    {
      name: 'Savory sweets',
      desc: 'Een hamburger gemaakt uit verse tomaat, kaas , ijsberg sla, runder gehakt en honing mosterd saus',
      image_src: '/sweets.jpg'
    },
    {
      name: "Cold Coffee's",
      desc: 'Een hamburger gemaakt uit verse tomaat, kaas , ijsberg sla, runder gehakt en honing mosterd saus',
      image_src: '/coffee.jpg'
    },
    {
      name: 'Supreme salads',
      desc: 'Een hamburger gemaakt uit verse tomaat, kaas , ijsberg sla, runder gehakt en honing mosterd saus',
      image_src: '/salads.jpg'
    },
  ]
  return (
    <div className='flex w-full flex-col items-center relative  bg-white px-4 xl:px-theme-lg'>
      <div className=' w-full xl:w-theme max-w-theme grid grid-cols-12  '>

      <div className='col-span-12 ml:col-span-10 ml:col-start-2 text-primary  flex flex-col'>
        <span className='text-title-h2-medium md:text-title-h2-bold lowercase'>Ons menu</span>
        <span className='text-small-thin md:text-regular-thin -mt-1 text-accent'>Lorem ipsum fake text</span>


        <div className='flex flex-col  gap-8 md:gap-6  mt-8'>

          {menuFoods.map((item) =>{
            return (
              <div className='flex flex-col md:flex-row   gap-4 xl:gap-10 '>
                <Image
                  className=' h-full md:w-[380px] ml:w-[480px] rounded-[5px] s:w-full md:h-[200px] ml:h-[356px] z-[1] '
                  src={item.image_src}
                  width={480}
                  height={356}
                  alt="Picture of foodtruck"
                />
                <div className='flex flex-col border-solid  border-l-[4px] border-black h-fit pl-3'>
                  <span className='text-title-h2-small-bold md:text-title-h2'>{item.name}</span>
                  <div className=' md:text-regular-thin text-accent'>{item.desc}</div>
                </div>
              </div> 
            )
          })}


        </div>
      </div>


      </div>
  </div>
  )
}
