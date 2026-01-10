import { heroElements } from "@/moock-data/quienes-somos/hero-elements";
import { HeroCard } from "./hero-card";
import AnimatedContainer from "@/components/animated/animated-container";
import { Eye, Target } from "lucide-react";

export function Hero() {

    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid md:grid-cols-2 gap-8">
                    <AnimatedContainer
                        animation="zoomin"
                        direction="r"
                        className={`bg-primary rounded-2xl p-8 `}
                    >
                        <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                            <Target className="h-7 w-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-background">MISIÓN</h3>
                        <p className="text-white leading-relaxed">Contribuir al desarrollo industrial, participando y coadyuvando a la creación, implantación,
                            funcionamiento, fortalecimiento , lanzamiento de nuevas entidades (productos nuevos  o mejorados y empresas),
                            adoptando sistemas de gestion integrada que incrementen el fondo de bienes exportables y la sustitucion de
                            importaciones en armonía con el medio ambiente</p>
                    </AnimatedContainer>
                    <AnimatedContainer
                        animation="zoomin"
                        direction="l"
                        className={`bg-chart-2 rounded-2xl p-8 `}
                    >
                        <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                            <Eye className="h-7 w-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-background">VISIÓN</h3>
                        <p className="text-white leading-relaxed">Ser un referente de ecosistema de innovación y transferencia científica en la rama de las industria ,
                            con un minimo viable de industria 4.0 , para promover, la generación y sostenibilidad de nuevas y exigentes
                            empresas , proporcionando productos y servicios de alto valor agregado y un sistema de gestión alineado
                            a la Política de Desarrollo Industrial.</p>
                    </AnimatedContainer>
                    {/* {
                        heroElements.map((heroElement, index) => (
                            <HeroCard key={index} {...heroElement} />
                        ))
                    } */}

                </div>
            </div>
        </section>
    )
}