import Hero from '@/components/hero'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'],  weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

export default function OurMenu() {

  let currentPage = {
    name: 'Our_menu',
    title: 'Ons menu',
    subtitle: 'Bekijk onze heerlijke gerechten',
    text: 'Ons menu is een ode aan creativiteit en duurzaamheid. We serveren een verscheidenheid aan vegetarische streetfood gerechten, elk gemaakt met liefde, respect voor het milieu en de beste lokale ingrediënten. Elk gerecht is ontworpen om je een unieke smaakervaring te bieden, terwijl je bijdraagt aan een zero-waste levensstijl.',
  }
  
  return (
    <main>
      <section className={`flex w-full flex-col items-center pt-8 relative  bg-white  overflow-y-hidden  pb-36 px-6 lg:min-h-[705px] ${poppins.className}`}>
        <Hero page={currentPage} />
      </section>
    </main>
  )
}
