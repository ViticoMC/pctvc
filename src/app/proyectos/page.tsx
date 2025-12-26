"use client"

import { PageHeader } from "@/components/page-header"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "@/components/project-card"
import StatsSection from "@/components/statts-section"
import { stats } from "@/moock-data/stats"
import { proyectos } from "@/moock-data/proyectos"










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
