
import { HeroSection } from "@/components/home/hero-section"
import { WelcomeSection } from "@/components/home/welcome-section"
import { ServicesSection } from "@/components/home/services-section"
import { NewsSection } from "@/components/home/news-section"
import { EventsSection } from "@/components/home/events-section"
import { ContactSection } from "@/components/contact-section"
import { USALProvider } from '@usal/react';
import { VentajasParque } from "@/components/home/ventajas-section"
import ConvergenciaParque from "@/components/home/confluencia"
import FlagsCounter from "@/components/home/flags-counter"

import { get_home_page_info } from "@/service/home_page"

import Image from "next/image"
import { notFound } from "next/navigation"


export default async function Home() {
  const res = await get_home_page_info();

  console.log(res)
  if (!res.success) {
    return notFound()
  }

  const home_page = res.data

  return (
    <USALProvider>
      <main className="min-h-screen bg-transparent">
        {/* <Navbar /> */}
        <HeroSection hero_section={home_page.hero_section} />
        <WelcomeSection welcome_section={home_page.welcome_section} />
        <ConvergenciaParque confluencia_section={home_page.confluencia_section} />
        <ServicesSection services_section={home_page.servicios_section} />
        <div className="fixed -z-100 inset-0 overflow-hidden pointer-events-none h-screen w-screen">
          <Image
            fill
            src={home_page.image_bg}
            alt="Fondo"
            className="min-w-screen min-h-screen"
          />
        </div>
        <VentajasParque ventajas_section={home_page.ventajas_section} />
        {/* <AdvantagesSection /> */}
        <FlagsCounter />
        <NewsSection articles_section={home_page.articles_section} />
        <EventsSection events_section={home_page.events_section} />
        <ContactSection contact_section={home_page.contact_section} />
        {/* <Footer /> */}
      </main>
    </USALProvider>
  )
}
