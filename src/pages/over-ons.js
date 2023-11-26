import Hero from '@/components/hero';
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'],  weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

export default function AboutUs() {

  let currentPage = {
    name: 'About us',
    title: 'Over ons',
    subtitle: 'En onze heerlijke smaken',
    text: 'Tessa van Gemert, de drijvende kracht achter WasteLess Wheels, is een visionair die haar zorgen over voedselverspilling omzette in een inspirerende onderneming. Haar liefde voor de planeet en wens om verandering te bewerkstelligen, zijn de kern van onze foodtruck. Elk recept, elk ingrediënt en elke maaltijd is zorgvuldig samengesteld om niet alleen de smaakpapillen te verwennen, maar ook om bij te dragen aan een betere wereld.',
  }

  return (
    <main>
      <section className={`flex w-full flex-col items-center pt-8 relative  bg-white  overflow-y-hidden  pb-36 px-6 lg:min-h-[705px] ${poppins.className}`}>
        <Hero page={currentPage} />
      </section>
    </main>

  )
}
