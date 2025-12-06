import { HeroSection } from "@/components/hero-section"
import { WelcomeSection } from "@/components/welcome-section"
import { ServicesSection } from "@/components/services-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { NewsSection } from "@/components/news-section"
import { EventsSection } from "@/components/events-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { USALProvider } from '@usal/react';


export default function Home() {
  return (
    <USALProvider>
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <WelcomeSection />
        <ServicesSection />
        <AdvantagesSection />
        <NewsSection />
        <EventsSection />
        <ContactSection />
        <Footer />
      </main>
    </USALProvider>
  )
}
