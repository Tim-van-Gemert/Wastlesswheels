import Hero from '@/components/hero';
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'],  weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

export default function OurMission() {

  let currentPage = {
    name: 'Our_mission',
    title: 'Onze missie',
    subtitle: 'Hoe wij verspilling bestrijden',
    text: 'Onze missie is simpel maar krachtig: het verminderen van voedselverspilling door heerlijke vegetarische gerechten te creëren. Bij WasteLess Wheels geloven we dat elk gerecht dat we serveren, een verhaal vertelt over bewustzijn, verantwoordelijkheid en de liefde voor onze planeet. We willen onze klanten niet alleen voeden met voortreffelijke gerechten, maar ook educeren over de impact van voedselverspilling.',
  }


  return (
    <main className={`flex w-full flex-col items-center pt-8 relative  bg-white  overflow-y-hidden  pb-36 px-6  ${poppins.className}`}>
      <Hero page={currentPage} />
    </main>
  )
}
