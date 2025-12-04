"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const events = [
  {
    title: "Hackathon de Innovación 2025",
    description: "48 horas para desarrollar soluciones tecnológicas a retos locales.",
    date: "15-17 Dic",
    time: "09:00 AM",
    location: "Auditorio Principal",
    type: "Competencia",
  },
  {
    title: "Taller de Inteligencia Artificial",
    description: "Introducción práctica al desarrollo de aplicaciones con IA.",
    date: "20 Dic",
    time: "10:00 AM",
    location: "Sala de Formación",
    type: "Taller",
  },
  {
    title: "Networking Empresarial",
    description: "Encuentro mensual de emprendedores y empresarios del ecosistema.",
    date: "22 Dic",
    time: "06:00 PM",
    location: "Terraza PCTVC",
    type: "Networking",
  },
]

export function EventsSection() {
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
    <section ref={sectionRef} id="eventos" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className={`inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Agenda
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Próximos Eventos
          </h2>
          <p
            className={`mt-4 text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Participa en nuestras actividades y conecta con la comunidad
          </p>
        </div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <div
              key={event.title}
              className={`group bg-card rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-500 border border-border hover:border-accent/30 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{event.date.split(" ")[0]}</span>
                    <span className="text-xs text-muted-foreground uppercase">{event.date.split(" ")[1] || "Dic"}</span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <Button className="group/btn bg-primary hover:bg-primary/90">
                    Inscribirse
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Calendar className="mr-2 h-5 w-5" />
            Ver Calendario Completo
          </Button>
        </div>
      </div>
    </section>
  )
}
