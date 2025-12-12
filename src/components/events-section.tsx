"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import EventoCard from "./event-card"
import { eventosData } from "@/moock-data/eventos"

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

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventosData.slice(0, 3).map((event, index) => (
            <EventoCard key={event.title} event={event} index={index} isVisible={isVisible} />
          ))}
        </div>

        <div className="w-full flex justify-center m-3">

          <Link href="/eventos" className="">
            <Button variant="outline" size="lg">
              <Calendar className="mr-2 h-5 w-5" />
              Ver Calendario Completo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
