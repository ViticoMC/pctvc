"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "@/components/project-card"

const stats = [
  { number: "28", label: "Proyectos", color: "text-accent" },
  { number: "18", label: "Iniciados", color: "text-accent" },
  { number: "5", label: "Terminados", color: "text-accent" },
  { number: "5", label: "Otros", color: "text-accent" },
]

const tematicas = [
  { label: "Ciencias" },
  { label: "Tecnologias" },
  { label: "Arte" },
  { label: "Educacion" },
  { label: "Economia" },
]

const proyectos = [{
  label: "Ciencias",
  content: [
    {
      title: "Edificio Inteligente I Etapa",
      descripcion:
        "Del inicio de la ingeniería conceptual para la construcción del edificio sede central del PCT con las más robustas y avanzadas TIC.",
      estado: "En ejecución",
      // icon: Building2,
      fotos: [
        "/ccrea-logo.jpg",
        "/generic-university-logo.png",
        "/cedai-logo.jpg",
        "/pctvc-logo.jpg",
      ],
    },
    {
      title: "Producción de mini tubérculos de papa en ambiente controlado",
      descripcion:
        "Objetivo: Diseñar una instalación donde se realice una producción de semilla de papa en ambiente controlado.",
      estado: "En ejecución",
      fotos: ["/pctvc-logo.jpg"],
    },
  ]
},
{
  label: "Tecnologias",
  content: [
    {
      title: "Electrolinera Km 259 de la Autopista Nacional",
      descripcion:
        "Objetivo: Conformar el proyecto técnico ejecutivo de la infraestructura física destinada al uso inteligente para el PCT Villa Clara.",
      estado: "En ejecución",
      // icon: Zap,
      fotos: [
        "/pctvc-logo.jpg",
        "/cedai-logo.jpg",
        "/tecnosime-logo.jpg",
        "/ccrea-logo.jpg",
      ],
    },
    {
      title: "Incubación de empresas y PDL - CAUSE SRL",
      descripcion: "Misión: Producciones softítulo.",
      estado: "En incubación",
      // icon: Rocket,
      fotos: ["/pctvc-logo.jpg"],
    },
    {
      title: "Incubación de empresas y PDL - DEECHERI",
      descripcion: "Misión: Producciones asociadas a turismo inteligente.",
      estado: "En incubación",
      // icon: Rocket,
      fotos: ["/pctvc-logo.jpg"],
    },
  ]
},
{
  label: "Arte",
  content: [
    {
      title: "Producción de mini tubérculos de papa en ambiente controlado",
      descripcion:
        "Objetivo: Diseñar una instalación donde se realice una producción de semilla de papa en ambiente controlado.",
      estado: "En ejecución",
      // icon: Leaf,
      fotos: ["/pctvc-logo.jpg"],
    },
  ]
},
{
  label: "Educacion",
  content: [
    {
      title: "Producción de mini tubérculos de papa en ambiente controlado",
      descripcion:
        "Objetivo: Diseñar una instalación donde se realice una producción de semilla de papa en ambiente controlado.",
      estado: "En ejecución",
      // icon: Leaf,
      fotos: ["/pctvc-logo.jpg"],
    },
  ]
},
{
  label: "Economia",
  content: [
    {
      title: "Producción de mini tubérculos de papa en ambiente controlado",
      descripcion:
        "Objetivo: Diseñar una instalación donde se realice una producción de semilla de papa en ambiente controlado.",
      estado: "En ejecución",
      // icon: Leaf,
      fotos: ["/pctvc-logo.jpg"],
    },
  ]
}
]

function StatsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-4 text-background relative z-10">
      <div className="max-w-7xl mx-auto ">
        <div className="flex gap-4 justify-around p-3 rounded-3xl bg-linear-to-br from-primary via-primary/90 to-accent/80 ">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "text-center transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl sm:text-5xl font-bold  mb-2">{stat.number}</div>
              <div className=" font-medium">{stat.label}</div>
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
    <section ref={ref} className=" pb-10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <StatsSection />
          {/* <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">PROYECTOS</h2> */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <div className="w-12 h-1 rounded-full bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-accent"></div>
          </div>

        </div>

        <Tabs>
          <TabsList className="w-full grid gap-2 h-auto "
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 200px), 1fr))"
            }}
            defaultValue={proyectos[0].label}
          >

            {proyectos.map((pr) => (
              <TabsTrigger key={pr.label} value={pr.label} className="w-full p-1 text-md cursor-pointer">
                {pr.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {
            proyectos.map((proyecto) => (
              <TabsContent key={proyecto.label} value={proyecto.label} className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
                {proyecto.content.map((proyecto, index) => {
                  return (
                    <ProjectCard key={index} titulo={proyecto.title} descripcion={proyecto.descripcion} estado={proyecto.estado} fotos={proyecto.fotos} />
                  )
                })}
              </TabsContent>
            ))
          }
        </Tabs>
      </div>
    </section>
  )
}

export default function ProyectosPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* <Navbar /> */}
      <PageHeader title="Proyectos" />
      <ProyectosSection />
      {/* <Footer /> */}
    </main>
  )
}
