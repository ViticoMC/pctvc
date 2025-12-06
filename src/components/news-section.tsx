"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const news = [
  {
    title: "Lanzamiento del Programa ConecTEC 2025",
    excerpt: "El nuevo programa de aceleración conectará emprendedores cubanos con mentores internacionales.",
    date: "28 Nov 2025",
    category: "Programa",
    image: "/startup-acceleration-program-tech-event.jpg",
  },
  {
    title: "Alianza con Universidad Central",
    excerpt: "Nueva colaboración para fortalecer la investigación y desarrollo tecnológico en la región.",
    date: "25 Nov 2025",
    category: "Alianzas",
    image: "/university-partnership-signing.png",
  },
  {
    title: "Aviso Importante: Nuevos Horarios",
    excerpt: "Comunicamos los nuevos horarios de atención al público y servicios disponibles.",
    date: "20 Nov 2025",
    category: "Anuncio",
    image: "/office-announcement-notification-board.jpg",
  },
]

export function NewsSection() {
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
    <section ref={sectionRef} id="noticias" className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <span
              className={`inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              Mantente Informado
            </span>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              Artículos tecnicos, entrevistas y noticias nacionales e internacionales
            </h2>
          </div>
          <Button
            variant="outline"
            className={`group transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Ver Todas
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={item.title}
              className={`group bg-card  rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 ">
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </div>
                </div>
                <div className="flex flex-col justify-between ">

                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{item.excerpt}</p>
                  <button className="mt-4 text-sm font-medium text-primary hover:text-accent transition-colors flex items-center gap-1 group/btn">
                    Leer más
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
