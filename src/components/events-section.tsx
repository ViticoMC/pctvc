// No "use client" — ahora es SSR

import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import EventoCard from "./event-card"
import { eventosData } from "@/moock-data/eventos"

export function EventsSection() {
  return (
    <section id="eventos" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">

          <span
            data-usal="fade-up duration-700"
            className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4"
          >
            Agenda
          </span>

          <h2
            data-usal="fade-up duration-700 delay-100"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground"
          >
            Próximos Eventos
          </h2>

          <p
            data-usal="fade-up duration-700 delay-200"
            className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Participa en nuestras actividades y conecta con la comunidad
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventosData.slice(0, 3).map((event, index) => (
            <div
              key={event.title}
              data-usal={` zoomin duration-700 delay-${index * 150}`}
            >
              <EventoCard event={event} index={index} />
            </div>
          ))}
        </div>

        {/* Button */}
        <div
          className="w-full flex justify-center m-3"
          data-usal="fade slide-up duration-700 delay-300"
        >
          <Link href="/eventos">
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
