import { heroElements } from "@/moock-data/quienes-somos/hero-elements";
import { HeroCard } from "./hero-card";

export function Hero() {

    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid md:grid-cols-2 gap-8">
                    {
                        heroElements.map((heroElement, index) => (
                            <HeroCard key={index} {...heroElement} />
                        ))
                    }

                </div>
            </div>
        </section>
    )
}