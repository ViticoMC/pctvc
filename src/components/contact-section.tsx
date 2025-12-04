"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
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
    <section ref={sectionRef} id="contacto" className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern-subtle-dark.jpg')] opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Contáctanos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              ¿Listo para Innovar?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
              Estamos aquí para ayudarte a convertir tus ideas en realidad. Contáctanos y descubre cómo podemos impulsar
              tu proyecto.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/60">Email</div>
                  <div className="text-primary-foreground font-medium">info@pctvc.cu</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/60">Teléfono</div>
                  <div className="text-primary-foreground font-medium">+53 42 123456</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/60">Dirección</div>
                  <div className="text-primary-foreground font-medium">
                    Carretera Central Km 5.5, Santa Clara, Villa Clara
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <div className="bg-card rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-semibold text-foreground mb-6">Envíanos un Mensaje</h3>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input placeholder="Nombre" className="bg-secondary/50" />
                  <Input placeholder="Email" type="email" className="bg-secondary/50" />
                </div>
                <Input placeholder="Asunto" className="bg-secondary/50" />
                <Textarea placeholder="Tu mensaje..." rows={4} className="bg-secondary/50 resize-none" />
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
