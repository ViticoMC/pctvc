import { HeroSection } from "@/components/hero-section"
import { WelcomeSection } from "@/components/welcome-section"
import { ServicesSection } from "@/components/services-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { NewsSection } from "@/components/news-section"
import { EventsSection } from "@/components/events-section"
import { ContactSection } from "@/components/contact-section"
import { USALProvider } from '@usal/react';
import Image from "next/image"


export default function Home() {
  return (
    <USALProvider>
      <main className="min-h-screen bg-transparent">
        {/* <Navbar /> */}
        <HeroSection />
        <WelcomeSection />
        <ServicesSection />
        <div className="fixed -z-100 inset-0 overflow-hidden pointer-events-none h-screen w-screen">
          <Image
            fill
            src="/soluciones-bg.jpg"
            alt="Fondo"
            className="min-w-screen min-h-screen"
          />
        </div>
        <AdvantagesSection />

        <NewsSection />
        <EventsSection />
        <ContactSection />
        {/* <Footer /> */}
      </main>
    </USALProvider>
  )
}
