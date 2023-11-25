import Hero from '@/components/hero'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'],  weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

export default function JoinUs() {

  let currentPage = {
    name: 'join_us',
    title: 'Doe mee',
    subtitle: 'Help ons verspilling tegen te gaan',
    text: 'Bij WasteLess Wheels nodigen we je uit om deel te nemen aan onze missie. Door bij ons te eten, draag je niet alleen bij aan een duurzamere wereld, maar word je ook deel van een gemeenschap die streeft naar verandering. Sluit je aan bij ons op deze smakelijke reis naar een betere toekomst!'
  }
  
  return (
    <main className={`flex w-full flex-col items-center pt-8 relative  bg-white  overflow-y-hidden  pb-36 px-6  ${poppins.className}`}>
      <Hero page={currentPage} />
    </main>
  )
}
