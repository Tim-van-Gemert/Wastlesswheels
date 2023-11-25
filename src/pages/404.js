import { Poppins } from 'next/font/google'
import Hero from '@/components/hero';

const poppins = Poppins({ subsets: ['latin'],  weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

export default function FourZeroFour() {

    let currentPage = {
        name: '404',
        title: '404',
        subtitle: 'Hier hebben we (nog) geen pagina voor.',
        text: 'Maar wees gerust, onze website staat vol met informatie!',
        button_href: '/',
        button_text: 'Terug naar home'
    }

  return (
    <main className={`flex w-full flex-col items-center pt-8 relative  bg-white  overflow-y-hidden  pb-36 px-6  ${poppins.className}`}>
        <Hero page={currentPage} />
    </main>
  )
}
