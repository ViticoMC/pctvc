
import { PageHeader } from "@/components/page-header"
import Historia from "@/app/quienes-somos/historia-section"
import StatsSection from "@/components/statts-section"
import { Hero } from "./hero-section"
import { Accionistas } from "./accionistas-section"
import { stats } from "@/moock-data/stats"
import { JuntaDirectiva } from "./directivos-section"
import { Membresia } from "./membresia-section"


export default function QuienesSomosPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHeader title="Quiénes Somos" />
      <Hero />
      <Historia />
      <Accionistas />
      <Membresia />
      <StatsSection stats={stats} />
      <JuntaDirectiva />
    </main>
  )
}
