import AnimatedContainer from "@/components/animated/animated-container";
import AnimatedList from "@/components/animated/animated-list";
import { historia } from "@/moock-data/quienes-somos/historia";

const title = "Historia del Parque Científico Tecnológico"

export default function Historia() {

    return (
        <section className="py-20 bg-muted/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedContainer
                    etiqueta="h2"
                    duration={300}
                    animation="zoomin"
                    className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12 ">
                    {title}
                </AnimatedContainer>

                <AnimatedList className="bg-background rounded-2xl p-8 shadow-sm"
                    delay={200}
                >
                    {
                        historia.map((parrafo, index) => (
                            <li className="text-muted-foreground leading-relaxed mb-4"
                                key={index}
                            >
                                {parrafo}
                            </li>
                        ))
                    }
                </AnimatedList>
            </div>
        </section>
    )
}
