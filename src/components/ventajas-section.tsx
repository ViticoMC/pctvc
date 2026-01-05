import { HomePageInfo } from "@/service/home_page";

export function VentajasParque({ ventajas_section }: { ventajas_section: HomePageInfo["ventajas_section"] }) {
    return (
        <section className="w-full py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2
                    data-usal="zoomin duration-800  once"
                    className="text-3xl md:text-4xl font-semibold text-center text-slate-800 mb-14">
                    {ventajas_section.title}
                </h2>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 ">
                    {ventajas_section.advantages.map((ventaja) => {
                        const Icon = ventaja.icon;

                        return (
                            <div
                                data-usal="zoomin duration-800  once"
                                key={ventaja.title}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-8"
                            >
                                <div
                                    className={`w-12 h-12 flex items-center justify-center rounded-xl mb-5 ${ventaja.bgColor} ${ventaja.textColor}`}
                                >
                                    <Icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                                    {ventaja.title}
                                </h3>

                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {ventaja.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
