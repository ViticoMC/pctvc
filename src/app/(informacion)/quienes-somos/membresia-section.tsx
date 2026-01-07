import AnimatedContainer from "@/components/animated/animated-container";

export function Membresia() {

    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <AnimatedContainer
                    etiqueta="h1"
                    duration={300}
                    className="text-3xl sm:text-4xl font-bold text-primary mb-8 "
                >
                    Membresía
                </AnimatedContainer>

                <AnimatedContainer
                    etiqueta="a"
                    className=
                    "inline-block  rounded-2xl  p-8 "
                    atributos={{
                        href: "https://www.iasp.ws/",
                        target: "_blank"
                    }}
                >
                    <img src="/colaboradores/iasp.png" alt="IASP" className="h-24 w-auto mx-auto mb-4" />
                </AnimatedContainer>

                <AnimatedContainer
                    className=
                    "inline-block  rounded-2xl  p-8 "
                >
                    <img src="/colaboradores/iasp-latam.png" alt="IASP" className="h-24 w-auto mx-auto mb-4" />
                </AnimatedContainer>
            </div>
        </section >
    )
}