"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { Target, Eye } from "lucide-react"

const accionistas = [
  { name: "TECNOSIME", logo: "/tecnosime-logo.jpg" },
  { name: "SICTE S.A.", logo: "/sicte-sa-logo.jpg" },
  { name: "Planta Mecánica", logo: "/planta-mecanica-logo.jpg" },
  { name: "Minerva", logo: "/minerva-logo.jpg" },
  { name: "ERMP Villa Clara", logo: "/ermp-villa-clara-logo.jpg" },
  { name: "CEDAI", logo: "/cedai-logo.jpg" },
]

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
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Qué Hacemos</h2>
          <p className="text-muted-foreground max-w-3xl">
            Ofrecemos Servicios A Clientes Del PCT VC Las Empresas Cubanas Estatales Y Privadas, Empresas Extranjeras,
            Trabajadores Por Cuenta Propia Y Personas Naturales (Incluyendo Estudiantes Y Jóvenes Emprendedores).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            className={cn(
              "bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
              <Target className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">MISIÓN</h3>
            <p className="text-white/90 leading-relaxed">
              Contribuir al desarrollo industrial, participando y coadyuvando a la creación, implantación,
              funcionamiento, fortalecimiento al nuevo entorno productivo que sirve de acogida a empresas y organismos,
              adoptando sistemas de gestión integrada que incrementen el fluido de bienes exportables y la sustitución
              de importaciones, en armonía con el medio ambiente.
            </p>
          </div>

          <div
            className={cn(
              "bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-8 text-accent-foreground transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
              <Eye className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">VISIÓN</h3>
            <p className="text-white/90 leading-relaxed">
              Ser un referente de ecosistema de innovación y transferencia científica y tecnológica, con un portafolio
              de Industrias 4.0, para propiciar la operación y comercialización de nuevas y reformadas empresas,
              proporcionando productos y servicios de alto valor agregado y un sistema de gestión innovador orientado a
              la calidad, el fomento de la economía circular.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Accionistas() {
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
          Accionistas Y Patrocinador
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {accionistas.map((accionista, index) => (
            <div
              key={accionista.name}
              className={cn(
                "bg-background rounded-xl p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <img
                src={accionista.logo || "/placeholder.svg"}
                alt={accionista.name}
                className="max-h-12 w-auto object-contain"
              />
            </div>
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

        <div
          className={cn(
            "inline-block bg-muted rounded-2xl p-8 transition-all duration-700 delay-200",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
          )}
        >
          <img src="/iasp-logo-international-association-science-parks.jpg" alt="IASP" className="h-24 w-auto mx-auto mb-4" />
          <p className="text-sm text-muted-foreground">
            International Association of Science Parks
            <br />
            and Areas of Innovation
          </p>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-primary to-accent">
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
              <div className="text-5xl sm:text-6xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
      <Navbar />
      <PageHeader title="Quiénes Somos" />
      <MisionVision />
      <Accionistas />
      <Membresia />
      <Stats />
      <JuntaDirectiva />
      <Footer />
    </main>
  )
}
