"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { Target, GraduationCap, Users, Briefcase, Building, DollarSign } from "lucide-react"

const servicios = [
  {
    icon: Target,
    title: "Objetivo",
    description:
      "Aumentar las probabilidades de éxito de las nuevas empresas, ayudándolas a superar los desafíos iniciales y a crecer de manera sostenible.",
  },
  {
    icon: GraduationCap,
    title: "Capacitación y talleres",
    description: "Proveen formación en áreas clave como marketing, finanzas y gestión empresarial.",
  },
  {
    icon: Users,
    title: "Asesoramiento y mentoría",
    description: "Expertos en negocios ayudan a los emprendedores a desarrollar sus ideas y estrategias.",
  },
  {
    icon: Briefcase,
    title: "Redes de contactos",
    description: "Facilitan conexiones con otros emprendedores, inversores y profesionales del sector.",
  },
  {
    icon: Building,
    title: "Espacio de trabajo",
    description: "Ofrecen oficinas y espacios compartidos donde los emprendedores pueden trabajar y colaborar.",
  },
  {
    icon: DollarSign,
    title: "Acceso a Financiamiento",
    description: "Ayudan a las startups a conseguir fondos a través de inversores, subvenciones y otros medios.",
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
          ¿Qué es la incubación de empresas?
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
          La incubación de empresas es un proceso diseñado para apoyar a emprendedores y startups en sus etapas
          iniciales de desarrollo. Las incubadoras de empresas proporcionan una variedad de recursos y servicios.
        </p>
      </div>
    </section>
  )
}

function ServiciosIncubacion() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio, index) => {
            const Icon = servicio.icon
            return (
              <div
                key={servicio.title}
                className={cn(
                  "bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 border-t-4 border-primary",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{servicio.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{servicio.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function IncubacionEmpresasPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* <Navbar /> */}
      <PageHeader title="Incubación Empresas" />
      <Introduction />
      <ServiciosIncubacion />
      {/* <Footer /> */}
    </main>
  )
}
