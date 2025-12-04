"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

const actividadesPrincipales = [
  "Asistencia para la formulación e implementación de proyectos de innovación; incluye la búsqueda de personal idóneo para la formación de equipos de proyecto.",
  "Asistencia para la definición de modelos de negocios.",
  "Asistencia para el logro de adecuada interrelación y cooperación corporativa industrial, en las esferas de la ciencia, la tecnología y la innovación.",
  "Producciones cooperadas.",
  "Servicios de representación comercial, contabilidad y asesoría jurídica.",
  "Alquiler de locales con facilidades para negocios y proyectos, y acceso a Internet.",
  "Cursos generales de capacitación y personalizados para miembros de los equipos de proyecto y los encargados del proceso de innovación.",
  "Asistencia para la búsqueda de financiamiento para los procesos de incubación.",
]

const actividadesSecundarias = [
  "Brindar servicios de asesoría y consultoría especializada y otras asociadas al desarrollo de sistemas de gestión empresarial, sus componentes o procesos claves, tanto a los grupos de trabajo constituidos para ejecutar proyectos de desarrollo industrial y local, como a otras personas naturales y jurídicas que lo soliciten.",
  "Ejecutar las operaciones de Comercio Exterior relacionadas con la exportación de bienes y servicios según nomenclatura aprobada por el MINCEX.",
  "Brindar servicios de atención a delegaciones extranjeras y nacionales, con la prestación de servicios logísticos tales como transportación, alojamiento no turístico, seguro médico, servicios gastronómicos, traducción oficial y no oficial, elaboración de documentos, protocolo, entre otros.",
  "Servicios de trámites a personas naturales nacionales o extranjeras vinculadas a actividades afines a la organización.",
  "Brindar servicios de Protocolo.",
  "Prestar servicio de alquiler de parqueos, espacios, locales y salones pertenecientes a la Sociedad Mercantil.",
  "Brindar servicios de capacitación, entrenamiento y certificación técnico-profesional especializada, en actividades de las organizaciones del Sector Industrial del país, así como otras asociadas al desarrollo de los sistemas de gestión empresarial, sus componentes o procesos claves en el ámbito de la colaboración, la inversión extranjera y otras que se requieran.",
  "Brindar servicios de representación comercial en el territorio nacional y en el exterior a personas naturales o jurídicas, así como a otros modelos de gestión.",
  "Brindar servicios para la organización y desarrollo de eventos científicos y técnicos, el montaje y habilitación de espacios, ferias, fórums empresariales, reuniones de negocio, y exposiciones afines a las especialidades de las personas naturales y jurídicas, que lo soliciten.",
  "Promocionar oportunidades de negocios mediante lanzamiento de proyectos, licitaciones institucionales, evento de negocio, entre otros.",
  "Gestionar y brindar servicios de alojamiento no turístico a personas naturales y jurídicas que lo soliciten.",
  "Gestionar y prestar servicios de impresión de documentos y materiales en diferentes soportes que sean o no publicidad.",
  "Servicios asociados a las tecnologías de informática y las comunicaciones (TIC).",
  "Venta mayorista y minorista de productos no alimenticios y alimentos.",
  "Servicios gastronómicos y/o de alimentación a personas naturales y jurídicas que sean o no de la organización.",
  "Servicios inmobiliarios, limpieza, jardinería u otros que se demanden.",
]

function ActividadesPrincipales() {
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
          Actividades Principales
        </h2>

        <div className="space-y-4">
          {actividadesPrincipales.map((actividad, index) => (
            <div
              key={index}
              className={cn(
                "flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all duration-500",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
              )}
              style={{ transitionDelay: `${200 + index * 50}ms` }}
            >
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="h-4 w-4 text-accent" />
              </div>
              <p className="text-foreground leading-relaxed">{actividad}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ActividadesSecundarias() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={cn(
            "text-3xl sm:text-4xl font-bold text-primary text-center mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          Actividades Secundarias
        </h2>

        <div className="space-y-4">
          {actividadesSecundarias.map((actividad, index) => (
            <div
              key={index}
              className={cn(
                "flex items-start gap-4 p-4 rounded-xl bg-background hover:shadow-md transition-all duration-500",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
              )}
              style={{ transitionDelay: `${200 + index * 30}ms` }}
            >
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <p className="text-foreground leading-relaxed">{actividad}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Servicios"
        subtitle="Pueden Ser Clientes Del PCT VC Las Empresas Cubanas Estatales Y Privadas, Empresas Extranjeras, Trabajadores Por Cuenta Propia Y Personas Naturales"
      />
      <ActividadesPrincipales />
      <ActividadesSecundarias />
      <Footer />
    </main>
  )
}
