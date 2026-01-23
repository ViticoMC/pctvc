import { ventajasParque } from "@/moock-data/ventajas-parque";

const colorMap: Record<string, { bg: string; text: string }> = {
    "1": { bg: "bg-blue-100", text: "text-blue-600" },
    "2": { bg: "bg-emerald-100", text: "text-emerald-600" },
    "3": { bg: "bg-purple-100", text: "text-purple-600" },
    "4": { bg: "bg-orange-100", text: "text-orange-600" },
};

export function VentajasParque() {
    return (
        <section className="w-full py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2
                    data-usal="zoomin duration-800  once"
                    className="text-3xl md:text-4xl font-semibold text-center text-slate-800 mb-14">
                    Principales ventajas competitivas del Parque
                </h2>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 ">
                    {ventajasParque.map((ventaja) => {
                        const Icon = ventaja.icon;
                        const colors = colorMap[ventaja.id.toString()] || colorMap["1"];

                        return (
                            <div
                                data-usal="zoomin duration-800  once"
                                key={ventaja.id}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-8"
                            >
                                <div
                                    className={`w-12 h-12 flex items-center justify-center rounded-xl mb-5 ${colors.bg} ${colors.text}`}
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
