"use client";

import Image from "next/image";

export default function CarruselColaboradores({ accionistas }: any) {
    return (
        <section className="py-20 bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
                    Instituciones Colaboradoras
                </h2>

                {/* VIEWPORT */}
                <div className="relative h-72 overflow-hidden">

                    {/* TRACK padre: pausa al hover */}
                    <div className="absolute inset-0 flex flex-col group">

                        {/* TRACK 1 */}
                        <div
                            className="
                flex  gap-6
                animate-[vertical-scroll_12s_linear_infinite]
                group-hover:paused
              "
                        >
                            {accionistas.map((item: any, i: number) => (
                                <LogoCard key={"a" + i} item={item} />
                            ))}
                        </div>

                        {/* TRACK 2 — copia exacta para loop perfecto */}
                        <div
                            className="
                flex flex-col gap-6
                animate-[vertical-scroll_12s_linear_infinite]
                group-hover:paused
              "
                            style={{ animationDelay: "6s" }}
                        >
                            {accionistas.map((item: any, i: number) => (
                                <LogoCard key={"b" + i} item={item} />
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

function LogoCard({ item }: any) {
    return (
        <div
            className="
        bg-background rounded-xl p-4 shadow-sm 
        flex items-center justify-center 
        transition-all duration-500
        hover:shadow-lg hover:-translate-y-1
        mx-auto
      "
            style={{
                width: "180px",
                height: "90px",
            }}
        >
            <Image
                src={item.logo}
                alt={item.name}
                width={160}
                height={80}
                className="object-cover w-full h-full"
            />
        </div>
    );
}
