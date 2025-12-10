"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { Share2, Globe, Lightbulb, Shield } from "lucide-react"

const beneficios = [
  {
    icon: Share2,
    title: "Compartir Recursos",
    description:
      "Las empresas pueden compartir instalaciones, equipos y materias primas, lo que reduce costos y optimiza el uso de recursos.",
  },
  {
    icon: Globe,
    title: "Acceso a Nuevos Mercados",
    description:
      "Al cooperar, las empresas pueden acceder a mercados que de otra manera serían difíciles de alcanzar, aumentando su competitividad.",
  },
  {
    icon: Lightbulb,
    title: "Innovación y Desarrollo",
    description:
      "Permite el intercambio de conocimientos y tecnologías, fomentando la innovación y el desarrollo de nuevos productos o servicios.",
  },
  {
    icon: Shield,
    title: "Reducción de Riesgos",
    description:
      "Compartir los riesgos asociados con nuevos proyectos o mercados puede hacer que las inversiones sean más seguras y manejables.",
  },
]

function Introduction() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={cn(
            "text-2xl sm:text-3xl font-bold text-primary mb-6 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          ¿Qué son las Producciones Cooperadas?
        </h2>

        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-accent"></div>
          <div className="w-12 h-1 rounded-full bg-primary"></div>
          <div className="w-2 h-2 rounded-full bg-accent"></div>
        </div>

        <p
          className={cn(
            "text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          Las producciones cooperadas entre empresas, también conocidas como{" "}
          <span className="text-primary font-semibold">cooperación empresarial</span>, son alianzas estratégicas donde
          dos o más empresas colaboran para alcanzar objetivos comunes. Este tipo de cooperación puede tomar varias
          formas y tiene múltiples beneficios:
        </p>
      </div>
    </section>
  )
}

function Beneficios() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 gap-6">
          {beneficios.map((beneficio, index) => {
            const Icon = beneficio.icon
            return (
              <div
                key={beneficio.title}
                className={cn(
                  "bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 border-l-4 border-accent",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{beneficio.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{beneficio.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function ProduccionesCooperadasPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* <Navbar /> */}
      <PageHeader title="Producciones Cooperadas" />
      <Introduction />
      <Beneficios />
      {/* <Footer /> */}
    </main>
  )
}
