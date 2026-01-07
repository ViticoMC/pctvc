import AnimatedContainer from "@/components/animated/animated-container";
import { directivos } from "@/moock-data/quienes-somos/directivos";

const title = "Junta Directiva";
export function JuntaDirectiva() {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedContainer
                    etiqueta="h1"
                    duration={300}
                    animation="zoomin"
                    className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12 transition-all duration-700">
                    {title}
                </AnimatedContainer>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {directivos.map((directivo, index) => (
                        <AnimatedContainer
                            key={directivo.name}
                            animation="zoomin"
                            duration={300 + 200 * index}
                            className="text-center "
                        >
                            <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-accent/20 shadow-lg">
                                <img
                                    src={directivo.image || "/placeholder.svg"}
                                    alt={directivo.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="font-semibold text-foreground mb-1">{directivo.name}</h3>
                            <p className="text-sm text-muted-foreground">{directivo.cargo}</p>
                        </AnimatedContainer>
                    ))}
                </div>
            </div>
        </section>
    )
}