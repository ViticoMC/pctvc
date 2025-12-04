"use client"

import { useEffect, useRef, useState } from "react"
import { Lightbulb, Users, Rocket, GraduationCap, DollarSign, HandHeart, Building, ShieldCheck } from "lucide-react"

const services = [
  {
    icon: DollarSign,
    title: "Financiación",
    description:
      "Ayudan a las startups a conseguir fondos de inversores, subvenciones y otros medios.",
  },
  {
    icon: HandHeart,
    title: "Recursos",
    description:
      "Compartir instalaciones, equipos y materias primas.",
  },
  {
    icon: Building,
    title: "Espacios",
    description:
      "Oficinas y espacios compartidos para emprendedores.",
  },
  {
    icon: ShieldCheck,
    title: "Riesgos",
    description: "Compartir riesgos asociados a nuevos proyectos para inversiones más seguras.",
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="servicios" className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className={`inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Nuestros Servicios
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            ¿Qué Ofrecemos?
          </h2>
          <p
            className={`mt-4 text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Soluciones integrales para potenciar tu proyecto de innovación tecnológica
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-border hover:border-accent/30 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
