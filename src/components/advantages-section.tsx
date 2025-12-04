"use client"

import { useEffect, useRef, useState } from "react"
import { Atom, BadgeCheck, Check, LucideIcon, PackageCheck } from "lucide-react"

const advantages = [
  {
    title: "Exención",
    description:
      "Beneficio fiscal que elimina el pago de tributos durante los primeros cinco años de operación en el Parque",
    features: [
      "Ahorro",
      "Crecimiento",
      "Estabilidad",
      "Incentivo",
    ],
    image: "/modern-technology-lab-with-computers-and-equipment.jpg",
    icon: BadgeCheck as LucideIcon
  },
  {
    title: "Importación",
    description: "Eliminación del pago de aranceles por importación de partes, piezas y equipos necesarios para la empresa incubada.",
    features: [
      "Equipamiento",
      "Aceleración",
      "Reducción",
      "Facilidad",
    ],
    image: "/business-professionals-networking-meeting-collabor.jpg",
    icon: PackageCheck as LucideIcon

  },
  {
    title: "Innovación",
    description:
      "Trabajo del equipo en un entorno de ciencia e innovación que impulsa productividad y desarrollo empresarial.",
    features: [
      "Creatividad",
      "Avance",
      "Colaboración",
      "Producción",
    ],
    image: "/business-support-team-consulting-professionals.jpg",
    icon: Atom as LucideIcon
  },
]

export function AdvantagesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="ventajas" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span
            className={`inline-block text-accent font-semibold text-md tracking-wider uppercase mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            ¿Por qué elegirnos?
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Principales Ventajas
          </h2>
        </div>

        <div className="flex md:flex-row flex-col gap-5 justify-between items-center relative">
          <span className="md:h-2 h-0 bg-linear-to-r from-accent to-accent/40 absolute bottom-[50%] w-[80%]" />

          {advantages.map((advantage, index) => (
            // <div
            //   key={advantage.title}
            //   className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            // >
            //   <div
            //     className={`${index % 2 === 1 ? "lg:order-2" : ""} transition-all duration-1000 ${isVisible
            //       ? "opacity-100 translate-x-0"
            //       : index % 2 === 0
            //         ? "opacity-0 -translate-x-10"
            //         : "opacity-0 translate-x-10"
            //       }`}
            //     style={{ transitionDelay: `${index * 200}ms` }}
            //   >
            //     <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{advantage.title}</h3>
            //     <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{advantage.description}</p>
            //     <ul className="space-y-4">
            //       {advantage.features.map((feature) => (
            //         <li key={feature} className="flex items-center gap-3">
            //           <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
            //             <Check className="h-4 w-4 text-accent" />
            //           </div>
            //           <span className="text-foreground">{feature}</span>
            //         </li>
            //       ))}
            //     </ul>
            //   </div>

            //   <div
            //     className={`${index % 2 === 1 ? "lg:order-1" : ""} transition-all duration-1000 ${isVisible
            //       ? "opacity-100 translate-x-0"
            //       : index % 2 === 0
            //         ? "opacity-0 translate-x-10"
            //         : "opacity-0 -translate-x-10"
            //       }`}
            //     style={{ transitionDelay: `${index * 200 + 100}ms` }}
            //   >
            //     <div className="relative">
            //       <div className="aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl">
            //         <img
            //           src={advantage.image || "/placeholder.svg"}
            //           alt={advantage.title}
            //           className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            //         />
            //       </div>
            //       <div className="absolute -z-10 inset-4 bg-accent/20 rounded-2xl" />
            //     </div>
            //   </div>
            // </div>
            <div
              key={advantage.title}
              className={`group bg-card max-w-80 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-border hover:border-accent/30 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <advantage.icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{advantage.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              <ul className="flex flex-col gap-1">

                {advantage.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          ))}
        </div>
      </div>
    </section>
  )
}
