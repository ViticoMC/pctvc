"use client"
import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react"
import { useForm } from "react-hook-form"
import { email, emailSqema } from "@/squema/email"
import { zodResolver } from "@hookform/resolvers/zod";

export const contactInfo = [
  {
    icon: MapPin,
    title: "Visita nuestra oficina",
    details: ["Carretera a Planta Mecánica, No. 39 B, entrada a Almacenes Universales", "Municipio Santa Clara, Provincia Villa Clara, Cuba"],
  },
  {
    icon: Mail,
    title: "Correos",
    details: ["pctvillaclara@pctvc.cu", "clientes@pctvc.cu"],
  },
  {
    icon: Phone,
    title: "Teléfono Fijo",
    details: ["+53 42281551", "Extensiones : 101-107"],
  },
  {
    icon: Clock,
    title: "Horario",
    details: ["Lunes - Jueves: 8:00 AM - 5:00 PM", "Viernes: 8:00 AM - 4:00 PM"],
  },
]

function ErrorMessage({ message }: { message?: string }) {
  if (!message) return
  return (
    <p className="text-sm text-red-500">{message}</p>
  )
}


export function ContactForm() {
  const { ref, isVisible } = useScrollAnimation()
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }, } = useForm<email>({
      shouldFocusError: true,
      resolver: zodResolver(emailSqema),
    })


  const onSubmit = async (data: email) => {
    setIsSubmitting(true)
    setError("")
    setSuccess(false)

    try {
      const res = await fetch("/api/email", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data)
      })

      const result = await res.json()

      if (!res.ok) {
        setError(result.error || "Algo ha salido mal, intente otra vez")
      } else {
        setSuccess(true)
        reset() // Limpiar el formulario
      }
    } catch (e) {
      setError("Algo ha salido mal, intente otra vez")
    }
    setIsSubmitting(false)
  }

  return (
    <section ref={ref} className="pt-26 pb-20 bg-background" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={cn(
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
            )}
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Ponte en Contacto</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              No dudes en comunicarte. Simplemente complete el formulario de contacto aquí y nos aseguraremos de
              responderle lo más rápido posible.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div
                    key={info.title}
                    className={cn(
                      "flex items-start gap-4 transition-all duration-700",
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
                    )}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Form */}
          <div
            className={cn(
              "bg-card border border-border rounded-2xl p-8 shadow-lg transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
            )}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">
                    Nombre <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    {...register("nombre")}
                    id="nombre" placeholder="Nombre" required />
                  <ErrorMessage message={errors.nombre?.message || ""} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apellidos">Apellidos</Label>
                  <Input
                    {...register("apellidos")}
                    id="apellidos"
                    placeholder="Apellidos" />
                  <ErrorMessage message={errors.apellidos?.message || ""} />

                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="correo">
                  Correo <span className="text-destructive">*</span>
                </Label>
                <Input
                  {...register("correo")}
                  id="correo" type="email" placeholder="Dirección de Correo" required />
                <ErrorMessage message={errors.correo?.message || ""} />

              </div>

              <div className="space-y-2">
                <Label htmlFor="asunto">Asunto</Label>
                <Input
                  {...register("asunto")}

                  id="asunto" placeholder="Asunto" />
                <ErrorMessage message={errors.asunto?.message || ""} />

              </div>

              <div className="space-y-2">
                <Label htmlFor="mensaje">
                  Mensaje <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  {...register("mensaje")}

                  id="mensaje" placeholder="Mensaje" rows={5} required className="resize-none" />
                <ErrorMessage message={errors.mensaje?.message || ""} />

              </div>
              {
                error && (
                  <ErrorMessage message={error} />
                )
              }
              {
                success && (
                  <p className="text-sm text-green-500">¡Mensaje enviado exitosamente!</p>
                )
              }

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Enviar
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function MapSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 bg-muted" id="mapa">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={cn(
            "text-2xl font-bold text-primary text-center mb-8 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          Nuestra Ubicación
        </h2>

        <div
          className={cn(
            "bg-background rounded-2xl overflow-hidden shadow-lg h-[400px] transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.920824304149!2d-80.00750593398044!3d22.42787533379457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d52f00037eeb1f%3A0x7ed8b439cc08a984!2sParque%20cient%C3%ADfico%20tecnol%C3%B3gico%20villa%20clara!5e1!3m2!1ses!2sus!4v1765394813878!5m2!1ses!2sus"
            width="100%"
            height="100%"
            allowFullScreen
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        <p
          className={cn(
            "text-center text-sm text-muted-foreground mt-4 transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          56 visitas totales
        </p>
      </div>
    </section>
  )
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* <Navbar /> */}
      <PageHeader
        title="Contacto"
      // subtitle="Si Tienes Alguna Pregunta, Comentario O Simplemente Quieres Saludar, No Dudes En Ponerte En Contacto Con Nosotros."
      />
      <ContactForm />
      <MapSection />
      {/* <Footer /> */}
    </main>
  )
}
