import AnimatedContainer from "@/components/animated/animated-container";
import { accionistas1 } from "@/moock-data/quienes-somos/accionistas";
import Image from "next/image";

const title = "Instituciones Colaboradoras"

export function Accionistas() {
    return (
        <section className="py-20 bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedContainer
                    etiqueta="h1"
                    duration={400}
                    className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
                    {title}
                </AnimatedContainer>

                <div className=" grid gap-10 justify-center  mb-10"
                    style={{
                        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 150px), 1fr))"
                    }}
                >
                    {accionistas1.map((accionista) => (
                        <AnimatedContainer
                            etiqueta="a"
                            atributos={{
                                target: "_blank",
                                href: accionista.url
                            }}
                            animation="zoomin"
                            key={accionista.name}
                            className="bg-background h-36 hover:opacity-65  rounded-xl p-3 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1"
                        >
                            <Image
                                width={200}
                                height={200}
                                src={accionista.logo || "/placeholder.svg"}
                                alt={accionista.name}
                                className=" w-auto object-cover"
                            />
                        </AnimatedContainer>
                    ))}
                </div>

            </div>
        </section>
    )
}