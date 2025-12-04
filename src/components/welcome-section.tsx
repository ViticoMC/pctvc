"use client"

import { useEffect, useRef, useState } from "react"

export function WelcomeSection() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">Bienvenidos</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight">
              Un Espacio Diseñado para la <span className="text-primary">Innovación</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              El Parque Científico Tecnológico de Villa Clara es un ecosistema integral diseñado para fomentar la
              creatividad, la investigación y el desarrollo tecnológico. Conectamos talento, recursos y oportunidades
              para impulsar el crecimiento económico y social de la región.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nuestro compromiso es ser el puente entre la academia, la industria y el gobierno, facilitando la
              transferencia de conocimiento y tecnología que genere impacto positivo en la sociedad.
            </p>

            {/* <div className="mt-10 flex items-center gap-6">
              <div className="w-16 h-1 bg-accent rounded-full" />
              <span className="text-sm text-muted-foreground">Transformando ideas en realidad desde 2008</span>
            </div> */}
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <div className="relative">
              <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/modern-technology-office-with-professionals-workin.jpg"
                  alt="Centro de innovación"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent text-xl font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Certificación</div>
                    <div className="text-sm text-muted-foreground">ISO 9001:2015</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
