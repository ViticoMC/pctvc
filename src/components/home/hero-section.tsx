"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!localStorage.getItem("visited")) {
      // actualizando counter
      console.log("visitado")
      fetch("/api/traffic", { method: "POST" });
      localStorage.setItem("visited", "true");
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const images = [
    "./slide/01.jpg",
    "./slide/02.jpg",
    "./slide/03.jpg",
    "./slide/04.jpg",
    "./slide/05.jpg",
    "./slide/06.jpg",
    "./slide/07.jpg",
    "./slide/08.jpeg",
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % images.length), 5000)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div ref={heroRef} className="absolute inset-0 bg-linear-to-br from-primary via-primary/90 to-primary/80">
        {/* <div className="absolute inset-0 bg-[url('/abstract-technology-network-pattern-dark-blue.jpg')] opacity-20 bg-cover bg-center" /> */}
        <div className="absolute inset-0 bg-linear-to-t from-primary/50 to-transparent" />
      </div>

      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-white/10 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full border border-white/5 animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full border border-white/5 animate-pulse delay-500" />
      </div>

      <div className="relative z-10 min-w-screen mx-auto">
        {/* <div className="animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-8 border border-white/20">
            Innovación • Tecnología • Desarrollo
          </span>
        </div> */}
        {/* Layout: side-by-side on md+, stacked on small (info on top, foto below) */}
        <div className="flex flex-row items-stretch gap-8">
          {/* Image slider */}
          <div className="min-h-screen min-w-screen ">
            <div className="relative h-full rounded-xl overflow-hidden bg-black/10">
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Slide ${i + 1}`}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${i === current ? "opacity-100" : "opacity-0"
                    }`}
                />
              ))}

              {/* Prev/Next buttons */}
              <button
                aria-label="Anterior"
                onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/50 text-white p-2 rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Siguiente"
                onClick={() => setCurrent((c) => (c + 1) % images.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/50 text-white p-2 rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Ir a la imagen ${i + 1}`}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/40"
                      }`}
                  />
                ))}
              </div>
              <div
                data-usal="fade-u split-letter split-delay-50  once"
                className="absolute bottom-10 left-1/2 -translate-x-1/2 md:px-10 px-4 md:py-4 py-2 bg-black/40 backdrop-blur-md rounded-3xl text-center text-white text-2xl md:text-3xl font-semibold tracking-wide">
                Alianza , Oportunidad y Desarrollo.
              </div>

            </div>
          </div>

          {/* Info section */}

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-white/60 animate-pulse" />
        </div>
      </div>
    </section>
  )
}


const InfoSection = () => {
  return (
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
        <span className="block">Parque Científico</span>
        <span className="block">Tecnológico</span>
        <span className="block text-accent">Villa Clara</span>
      </h1>

      <p className="text-xl  text-white/80 max-w-2xl mb-6 animate-fade-in leading-relaxed">
        El Parque Científico Tecnológico de Villa Clara es un centro de innovación que promueve la colaboración
        entre gobierno,  el sector del conocimiento y el sector empresarial
        para impulsar el desarrollo científico-tecnológico en Cuba. Ofrece
        un entorno dinámico para crear y hacer crecer empresas tecnológicas, facilitando la transferencia de
        conocimientos y tecnologías.
        Alianza Oportunidad y Desarrollo
      </p>

      <div className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-4 animate-fade-in">
        <Link href="/contacto#contacto">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg group">
            Contactar Ahora
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
        <Button
          size="lg"
          variant="outline"
          className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm bg-transparent"
        >
          <Play className="mr-2 h-5 w-5" />
          Ver Video
        </Button>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
        {[
          { value: "50+", label: "Empresas" },
          { value: "200+", label: "Profesionales" },
          { value: "15+", label: "Años de experiencia" },
          { value: "100+", label: "Proyectos" },
        ].map((stat, index) => (
          <div key={index} className="text-center md:text-left">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-white/70 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}