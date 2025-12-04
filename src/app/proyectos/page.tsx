"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { Building2, Leaf, Zap, Rocket } from "lucide-react"

const stats = [
  { number: "28", label: "Proyectos", color: "text-accent" },
  { number: "18", label: "Iniciados", color: "text-accent" },
  { number: "5", label: "Terminados", color: "text-accent" },
  { number: "5", label: "Otros", color: "text-accent" },
]

const proyectos = [
  {
    title: "Edificio Inteligente I Etapa",
    instituciones: "PCT VC, UEB CEDAI VC, Empresa CCREA y Facultad de Ingeniería Eléctrica de la Universidad Central.",
    descripcion:
      "Del inicio de la ingeniería conceptual para la construcción del edificio sede central del PCT con las más robustas y avanzadas TIC.",
    estado: "En ejecución",
    icon: Building2,
    partners: [
      "/ccrea-logo.jpg",
      "/generic-university-logo.png",
      "/cedai-logo.jpg",
      "/pctvc-logo.jpg",
    ],
  },
  {
    title: "Producción de mini tubérculos de papa en ambiente controlado",
    instituciones: "SED GAIC, IGP",
    descripcion:
      "Objetivo: Diseñar una instalación donde se realice una producción de semilla de papa en ambiente controlado.",
    estado: "En ejecución",
    icon: Leaf,
    partners: ["/pctvc-logo.jpg"],
  },
  {
    title: "Electrolinera Km 259 de la Autopista Nacional",
    instituciones: "TECNOSIME, UEB CEDAI VC y CCREA",
    descripcion:
      "Objetivo: Conformar el proyecto técnico ejecutivo de la infraestructura física destinada al uso inteligente para el PCT Villa Clara.",
    estado: "En ejecución",
    icon: Zap,
    partners: [
      "/pctvc-logo.jpg",
      "/cedai-logo.jpg",
      "/tecnosime-logo.jpg",
      "/ccrea-logo.jpg",
    ],
  },
  {
    title: "Incubación de empresas y PDL - CAUSE SRL",
    instituciones: "CAUSE SRL",
    descripcion: "Misión: Producciones softítulo.",
    estado: "En incubación",
    icon: Rocket,
    partners: ["/pctvc-logo.jpg"],
  },
  {
    title: "Incubación de empresas y PDL - DEECHERI",
    instituciones: "DEECHERI",
    descripcion: "Misión: Producciones asociadas a turismo inteligente.",
    estado: "En incubación",
    icon: Rocket,
    partners: ["/pctvc-logo.jpg"],
  },
]

function StatsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-12 bg-gradient-to-r from-primary to-accent -mt-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "text-center transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProyectosSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Descripción De Proyectos Y Negocios</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <div className="w-12 h-1 rounded-full bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-accent"></div>
          </div>
        </div>

        <div className="space-y-6">
          {proyectos.map((proyecto, index) => {
            const Icon = proyecto.icon
            return (
              <div
                key={proyecto.title}
                className={cn(
                  "bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{proyecto.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-semibold">INSTITUCIONES PARTICIPANTES:</span> {proyecto.instituciones}
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-semibold">DESCRIPCIÓN:</span> {proyecto.descripcion}
                    </p>
                    <p className="text-sm mb-4">
                      <span className="font-semibold">ESTADO ACTUAL:</span>{" "}
                      <span className="text-accent font-medium">{proyecto.estado}</span>
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      {proyecto.partners.map((partner, idx) => (
                        <img
                          key={idx}
                          src={partner || "/placeholder.svg"}
                          alt="Partner logo"
                          className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                        />
                      ))}
                    </div>
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

export default function ProyectosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader title="Proyectos" />
      <StatsSection />
      <ProyectosSection />
      <Footer />
    </main>
  )
}
