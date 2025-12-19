import { Stats } from "@/type/stats";


export default function StatsSection({ stats }: { stats: Stats[] }) {

    return (

        <section className="py-4 text-background relative z-10">
            <div className="max-w-7xl mx-auto ">
                <div className="flex gap-4 justify-around p-3 rounded-3xl bg-linear-to-br from-primary via-primary/90 to-accent/80 ">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="text-center transition-all duration-700">
                            <div className="text-4xl sm:text-5xl font-bold  mb-2"
                                data-usal={`count-[${stat.number}] duration-2000  once`}
                            >{stat.number}</div>
                            <div className=" font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}