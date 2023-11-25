import Hero from '@/components/hero'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'],  weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

export default function Contact() {

  let currentPage = {
    name: 'contact',
    title: 'Contact',
    subtitle: 'Heb je vragen?',
    text: 'Heb je vragen, suggesties of wil je meer weten over onze missie en gerechten? Neem gerust contact met ons op. We horen graag van je en delen met plezier onze passie voor duurzaamheid en heerlijk eten. Samen kunnen we de wereld veranderen, één gerecht per keer. Welkom bij WasteLess Wheels - waar elk hapje telt!'
  }

  return (
    <main className={`flex w-full flex-col items-center pt-8 relative  bg-white  overflow-y-hidden  pb-36 px-6  ${poppins.className}`}>
        <Hero page={currentPage} />
    </main>
  )
}
