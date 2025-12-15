"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import { ContactSection } from "@/components/contact-section"
import { ServiciosCTA } from "@/components/call-action"

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

const serviciosEstrategicos = [
  {
    title: "Asesoría técnica y legal",
    description:
      "Acompañamiento integral a empresas de reciente creación o en proceso de incubación, orientado a la toma de decisiones técnicas, jurídicas y organizacionales.",
  },
  {
    title: "Acceso a redes de inversionistas",
    description:
      "Vinculación con redes de inversionistas y actores estratégicos que facilitan el financiamiento y escalamiento de proyectos innovadores.",
  },
  {
    title: "Arrendamiento de espacios tecnológicos",
    description:
      "Arrendamiento de espacios con servicios de conectividad, suministro eléctrico y condiciones adecuadas para el desarrollo empresarial y tecnológico.",
  },
]
const serviciosTIC = [
  "Desarrollo de sitios web.",
  "Sistemas de información a la medida.",
  "Implementación de técnicas y modelos de Inteligencia Artificial.",
  "Ecosistemas inteligentes.",
  "Formación y capacitación en sistemas de gestión de la información.",
  "Formación y capacitación en IA para empresarios.",
  "Gestión de plataformas ORM y ERP.",
  "Análisis cienciométrico y estadístico.",
  "Diseño y gestión de bases de datos.",
  "Sistemas de información geográfica (SIG).",
  "Computación gráfica.",
  "Diseño de interfaces visuales Backend y Frontend.",
  "Gestión de repositorios.",
  "Web 3.0 y 4.0.",
  "Análisis de datos.",
  "Ciencia de datos.",
]
function ServiciosEstrategicosYTIC() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={cn(
            "text-3xl sm:text-4xl font-bold text-primary text-center mb-14 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          Servicios Estratégicos y Tecnológicos
        </h2>

        {/* Servicios estratégicos */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {serviciosEstrategicos.map((servicio, index) => (
            <div
              key={index}
              className={cn(
                "rounded-2xl border border-border bg-muted/40 p-6 transition-all duration-500 hover:shadow-lg hover:-translate-y-1",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              )}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-primary mb-3">
                {servicio.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {servicio.description}
              </p>
            </div>
          ))}
        </div>

        {/* Servicios TIC */}
        <div className="rounded-3xl border border-border bg-muted/30 p-8">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
            Servicios vinculados a las Tecnologías de la Información y las Comunicaciones (TIC)
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviciosTIC.map((servicio, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-start gap-3 p-4 rounded-xl bg-background/70 transition-all duration-500",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6",
                )}
                style={{ transitionDelay: `${300 + index * 40}ms` }}
              >
                <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  {servicio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


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
      <PageHeader title="Servicios" />
      <ActividadesPrincipales />
      <ServiciosEstrategicosYTIC />
      <ActividadesSecundarias />
      <ServiciosCTA />
    </main>
  )
}

