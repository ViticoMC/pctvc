import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export default function Historia() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section ref={ref} className="py-20 bg-muted/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2
                    className={cn(
                        "text-3xl sm:text-4xl font-bold text-primary text-center mb-12 transition-all duration-700",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                    )}
                >
                    Historia del Parque Científico Tecnológico
                </h2>

                <div
                    className={cn(
                        "bg-background rounded-2xl p-8 shadow-sm transition-all duration-700",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                    )}
                >
                    <p className="text-muted-foreground leading-relaxed mb-4">
                        El Parque Científico Tecnológico de Villa Clara surge como respuesta a las
                        necesidades de desarrollo industrial identificadas en la estrategia territorial de la provincia.
                        La industria villaclareña aporta más del 50% de la producción mercantil del territorio y cuenta con
                        fábricas únicas en el país, como INPUD “1ro de Mayo”, la Productora de Bujías “Neftalí Martínez” y la
                        Empresa Electroquímica.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                        A partir de las políticas nacionales de ciencia, tecnología e innovación se estableció un trabajo
                        conjunto entre MINDUS, UCLV y CITMA para analizar la viabilidad de un parque tecnológico de corte
                        industrial. Durante la visita gubernamental de octubre de 2020, la Vice Primera Ministra Inés María
                        Chapman destacó la conveniencia de su creación en Villa Clara, dada la madurez industrial y el potencial
                        humano del territorio.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                        El proceso fue respaldado por un grupo de expertos que definió la estrategia de desarrollo industrial
                        prospectivo. Se identificaron oportunidades significativas: capacidades instaladas para la producción
                        mecánica, potencial para la automatización, talento innovador en las entidades productivas, conectividad
                        adecuada, así como la ventaja estratégica de su ubicación geográfica para articular alianzas intersectoriales.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                        La creación del PCT Villa Clara busca dinamizar la innovación, modernizar procesos industriales,
                        atraer inversión, fomentar la creación de nuevas empresas y fortalecer la articulación entre el sector
                        del conocimiento, el gobierno y las entidades productivas. Con esto, el territorio avanza hacia un modelo
                        de desarrollo basado en la ciencia, la tecnología y la innovación como pilares transformadores.
                    </p>
                </div>
            </div>
        </section>
    )
}
