import Image from 'next/image'
import Button from './button'

export default function Menu() {

  const menuFoods =[
    {
      name: 'Onze Vegetarische Burger - Een Groene Delicatesse!',
      desc: 'Proef de magie van onze vegetarische burger! Gemaakt met verse, lokaal geproduceerde ingrediënten en vol van smaak. Het is niet alleen een feest voor je smaakpapillen, maar ook voor de planeet.',
      image_src: '/burger.jpeg'
    },
    {
      name: 'Zoete Aardappel Frietjes met Kruidige Hummus - Een Knapperige Verleiding!',
      desc: 'Onze zoete aardappel frietjes, geserveerd met zelfgemaakte kruidige hummus, zijn een ware traktatie. Perfect gekruid en gebakken tot goudbruine perfectie, een echte duurzame lekkernij.',
      image_src: '/fries.jpg'
    },
    {
      name: 'Groente Taco - Een Kleurrijk Festijn!',
      desc: 'Maak kennis met onze groente taco’s: een explosie van kleur en smaak in elke hap. Vers, levendig en vol met de beste seizoensgroenten, ze zijn een ode aan de natuur.',
      image_src: '/taco.jpg'
    },
  ]
  return (
    <div className='flex w-full flex-col items-center relative  bg-white px-4 xl:px-theme-lg'>
      <div className=' w-full xl:w-theme max-w-theme grid grid-cols-12  '>

      <div className='col-span-12 ml:col-span-10 ml:col-start-2 text-primary  flex flex-col'>
        <span className='text-title-h2-medium md:text-title-h2-bold lowercase'>Ons menu</span>
        <span className='text-small-thin md:text-regular-thin -mt-1 text-accent'>Bekijk onze heerlijke gerechten </span>


        <div className='flex flex-col  gap-8 md:gap-6  mt-8'>

          {menuFoods.map((item) =>{
            return (
              <div className='flex flex-col md:flex-row   gap-4 xl:gap-10 '>
                <Image
                  className=' h-full  md:min-w-[380px] ml:min-w-[480px] md:w-[380px] ml:w-[480px]  rounded-[5px] object-cover s:w-full md:min-h-[200px] max-h-[356px] z-[1] '
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


          <Button type={'black'} text={'Bekijk meer'} href={'/menu'}/>


        </div>
      </div>


      </div>
  </div>
  )
}
