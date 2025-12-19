"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "@/components/project-card"
import { USALProvider } from "@usal/react"
import StatsSection from "@/components/statts-section"
import { stats } from "@/moock-data/stats"





export const proyectos = [
  {
    label: "Fuentes renovables de energía",
    content: [
      {
        title: "Sistemas fotovoltaicos híbridos – PDL Creación",
        descripcion:
          "Estudio, diseño, instalación y puesta en marcha de sistemas fotovoltaicos híbridos con acumulación e inyección a red.",
        estado: "En ejecución",
        fotos: ["/pctvc-logo.jpg"],
      },
      {
        title: "SFV con acumulación – UEB Brisas del Mar",
        descripcion:
          "Ingeniería básica, planificación ejecutiva, suministro y montaje de un sistema fotovoltaico con acumulación de energía (6 kW).",
        estado: "En ejecución",
        fotos: ["/pctvc-logo.jpg"],
      },
      {
        title: "SFV con acumulación – UEB Vista Hermosa",
        descripcion:
          "Ingeniería básica y ejecución de sistema fotovoltaico con acumulación de energía (10 kW).",
        estado: "En ejecución",
        fotos: ["/pctvc-logo.jpg"],
      },
    ],
  },
  {
    label: "Producción de alimentos",
    content: [
      {
        title: "Granja automatizada de producción de alimentos",
        descripcion:
          "Ingeniería conceptual para el diseño y montaje de una granja automatizada de producción de huevos, porcicultura y centro de elaboración.",
        estado: "En ejecución",
        fotos: ["/pctvc-logo.jpg"],
      },
      {
        title: "Modernización agroindustrial – ONUDI",
        descripcion:
          "Programa de modernización tecnológica y empresarial del sector de agroquímicos y maquinaria agrícola (Fase II), financiado por la Federación de Rusia.",
        estado: "Cooperación internacional",
        fotos: ["/pctvc-logo.jpg"],
      },
    ],
  },
  {
    label: "Automatización e Inteligencia Artificial",
    content: [
      {
        title: "Directorio de gestión de actores económicos",
        descripcion:
          "Sistema de información para la gestión y visualización de actores económicos.",
        estado: "En desarrollo",
        fotos: ["/pctvc-logo.jpg"],
      },
      {
        title: "Desarrollo de plataformas digitales",
        descripcion:
          "Diseño y desarrollo de páginas digitales para entidades y proyectos asociados al PCT.",
        estado: "En ejecución",
        fotos: ["/pctvc-logo.jpg"],
      },
      {
        title: "Edificio Inteligente – PCT Villa Clara",
        descripcion:
          "Proyecto técnico ejecutivo de la infraestructura básica de edificio inteligente del PCT Villa Clara.",
        estado: "En ejecución",
        fotos: ["/pctvc-logo.jpg"],
      },
    ],
  },
  {
    label: "Producción de materiales de la construcción",
    content: [
      {
        title: "Bloque de arcilla – ADOBEMAN",
        descripcion:
          "Desarrollo de bloque de arcilla y otros materiales de la construcción en conjunto con la MIPYME ADOBEMAN.",
        estado: "En incubación",
        fotos: ["/pctvc-logo.jpg"],
      },
    ],
  },
  {
    label: "Incubación de nuevas empresas",
    content: [
      {
        title: "MIPYME ADOBEMAN",
        descripcion:
          "Empresa dedicada a la producción de materiales de la construcción a base de arcilla y actividades asociadas a fuentes renovables de energía.",
        estado: "Incubación",
        fotos: ["/proyectos/adobeman.jpg"],
      },
      {
        title: "PDL CREACIÓN",
        descripcion:
          "Proyecto de desarrollo local orientado a la producción de talabartería y proyectos de producción de alimentos con uso de energías renovables.",
        estado: "Incubación",
        fotos: ["/pctvc-logo.jpg"],
      },
      {
        title: "PDL MERCAMAX",
        descripcion:
          "Producción y comercialización de productos de aseo e higiene e introducción de nuevas líneas productivas.",
        estado: "Incubación",
        fotos: [
          "/proyectos/mercamax/mercamax1.webp",
          "/proyectos/mercamax/mercamax2.jpg",
          "/proyectos/mercamax/mercamax3.webp",
          "/proyectos/mercamax/mercamax4.jpg",
          "/proyectos/mercamax/mercamax5.jpg",
          "/proyectos/mercamax/mercamax6.jpg",
          "/proyectos/mercamax/mercamax7.jpg",
          "/proyectos/mercamax/mercamax8.jpg",
          "/proyectos/mercamax/mercamax9.jpg",
          "/proyectos/mercamax/mercamax10.jpg",

        ],
      },
    ],
  },
]




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
          <StatsSection stats={stats} />
          {/* <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">PROYECTOS</h2> */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <div className="w-12 h-1 rounded-full bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-accent"></div>
          </div>

        </div>

        <Tabs
          defaultValue={proyectos[0].label}

        >
          <TabsList className="w-full grid gap-2 h-auto p-2  "
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))"
            }}
          >

            {proyectos.map((proyecto) => (
              <TabsTrigger key={proyecto.label} value={proyecto.label} className=" p-1 text-md cursor-pointer">
                {proyecto.label}
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
      <PageHeader title="Proyectos"
        subtitle="Los proyectos gestionados por el Parque Científico Tecnológico Villa Clara
          se alinean con prioridades nacionales en ciencia, tecnología e innovación,
          con impacto directo en sectores estratégicos de la economía."
      />
      {/* <ContextoProyectos /> */}
      <ProyectosSection />
      {/* <Footer /> */}
    </main>
  )
}
