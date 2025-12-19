"use client"


import { PageHeader } from "@/components/page-header"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { Target, Eye } from "lucide-react"
import Historia from "@/components/historia"
import Image from "next/image"
import StatsSection from "@/components/statts-section"
import { accionistas } from "@/moock-data/accionistas"
import AnimatedContainer from "@/components/animated-container"
import { AnimatedDirection } from "@/type/animated-direction"
import { heroElements } from "@/moock-data/quienes-somos/hero-elements"
import { HeroCard } from "./hero-card"



const directivos = [
  {
    name: "Edelys Ada Saavedra Rodríguez",
    cargo: "Presidenta Junta Directiva de la Sociedad Mercantil de la Junta Directiva",
    image: "/professional-woman-portrait.png",
  },
  {
    name: "Danay Álvarez Mesa",
    cargo: "Vicepresidenta Primera de la Sociedad Mercantil",
    image: "/professional-woman-portrait-2.png",
  },
  {
    name: "Dalgys La Rosa Morales",
    cargo: "Vicepresidenta Gestora de la Sociedad Mercantil",
    image: "/professional-woman-portrait-3.png",
  },
]

const stats = [
  { number: "28", label: "Proyectos" },
  { number: "18", label: "Iniciados" },
  { number: "5", label: "Terminados" },
  { number: "5", label: "Otros" },
]






function MisionVision() {

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-8">
          {
            heroElements.map((heroElement, index) => (
              <HeroCard key={index} {...heroElement} />
            ))
          }

        </div>
      </div>
    </section>
  )
}

function Accionistas() {

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContainer
          etiqueta="h1"
          duration={300}
          className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
          Instituciones Colaboradoras
        </AnimatedContainer>

        <div className=" grid gap-10 justify-center  "
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 150px), 1fr))"
          }}
        >
          {accionistas.map((accionista) => (
            <a
              target="_blank"
              href={accionista.url}
              key={accionista.name}
              className=
              "bg-background h-36 hover:opacity-65  rounded-xl p-3 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1"
            // style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <Image
                width={200}
                height={200}
                src={accionista.logo || "/placeholder.svg"}
                alt={accionista.name}
                className=" w-auto object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Membresia() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={cn(
            "text-3xl sm:text-4xl font-bold text-primary mb-8 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          Membresía
        </h2>

        <a
          className={cn(
            "inline-block  rounded-2xl  p-8 transition-all duration-700 delay-200",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
          )}
          href="https://www.iasp.ws/"
          target="_blank"
        >
          <img src="/colaboradores/iasp.png" alt="IASP" className="h-24 w-auto mx-auto mb-4" />
        </a>
      </div>
    </section >
  )
}


function JuntaDirectiva() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={cn(
            "text-3xl sm:text-4xl font-bold text-primary text-center mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          Junta Directiva
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {directivos.map((directivo, index) => (
            <div
              key={directivo.name}
              className={cn(
                "text-center transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-accent/20 shadow-lg">
                <img
                  src={directivo.image || "/placeholder.svg"}
                  alt={directivo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{directivo.name}</h3>
              <p className="text-sm text-muted-foreground">{directivo.cargo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function QuienesSomosPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* <Navbar /> */}
      <PageHeader title="Quiénes Somos" />
      <MisionVision />
      <Historia />
      {/* <CarruselColaboradores accionistas={accionistas} /> */}
      <Accionistas />
      <Membresia />
      <StatsSection stats={stats} />
      <JuntaDirectiva />
      {/* <Footer /> */}
    </main>
  )
}
