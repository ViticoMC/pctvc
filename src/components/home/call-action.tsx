"use client"

import { ArrowRight, PhoneCall } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ServiciosCTA() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section
            ref={ref}
            className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background py-20"
        >
            {/* Elementos decorativos */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={cn(
                        "rounded-3xl border border-border bg-background/80 backdrop-blur-md p-10 sm:p-14 transition-all duration-700",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                    )}
                >
                    <div className="grid gap-10 md:grid-cols-2 items-center">
                        {/* Texto */}
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                                ¿Interesado en nuestros servicios?
                            </h2>

                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                                Si su empresa, proyecto o iniciativa se encuentra en proceso de
                                creación, incubación o crecimiento, nuestro equipo puede
                                acompañarle con soluciones técnicas, tecnológicas y de gestión
                                adaptadas a sus necesidades.
                            </p>

                            <p className="text-sm text-muted-foreground">
                                Contáctenos para recibir información personalizada o coordinar
                                una primera consulta con nuestros especialistas.
                            </p>
                        </div>

                        {/* Acciones */}
                        <div className="flex flex-col gap-4 sm:items-end">
                            <Link
                                href="/contacto#contacto"
                                className="inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-8 py-4 text-primary-foreground font-medium shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl"
                            >
                                Solicitar información
                                <ArrowRight className="h-5 w-5" />
                            </Link>

                            <span className="flex items-center gap-2 text-sm text-muted-foreground">
                                <PhoneCall className="h-4 w-4" />
                                Atención personalizada y confidencial
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
