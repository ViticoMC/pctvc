import { HeroSection } from "@/components/home/hero-section"
import { WelcomeSection } from "@/components/home/welcome-section"
import { ServicesSection } from "@/components/home/services-section"
import { NewsSection } from "@/components/home/news-section"
import { EventsSection } from "@/components/home/events-section"
import { ContactSection } from "@/components/contact-section"
import { USALProvider } from '@usal/react';
import Image from "next/image"
import { VentajasParque } from "@/components/ventajas-section"
import ConvergenciaParque from "@/components/home/confluencia"
// import FlagsCounter from "@/components/home/flags-counter"
import { ContactForm } from "./contacto/page"

export default function Home() {
  return (
    <USALProvider>
      <main className="min-h-screen bg-transparent">
        {/* <Navbar /> */}
        <HeroSection />
        <WelcomeSection />
        <ConvergenciaParque />
        <ServicesSection />
        <div className="fixed -z-100 inset-0 overflow-hidden pointer-events-none h-screen w-screen">
          <Image
            fill
            src="/soluciones-bg.jpg"
            alt="Fondo"
            className="min-w-screen min-h-screen"
          />
        </div>
        <VentajasParque />
        {/* <FlagsCounter /> */}
        <NewsSection />
        <EventsSection />
        {/* <ContactSection /> */}
        <ContactForm />
        {/* <Footer /> */}
      </main>
    </USALProvider>
  )
}
