import { Clock, Layers } from "lucide-react";

export default function ComingSoonSection() {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-slate-900 via-slate-900 to-background py-24">
            {/* Efectos decorativos */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-24 left-16 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl" />
                <div className="absolute bottom-24 right-16 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                {/* Icono principal */}
                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 border border-primary/30">
                    <Clock className="h-10 w-10 text-primary" />
                </div>

                {/* Título */}
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
                    Contenido en preparación
                </h1>

                {/* Mensaje principal */}
                <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                    En esta sección se agregará contenido próximamente.
                    Actualmente estamos trabajando para ofrecer información y recursos
                    actualizados, relevantes y de alto valor.
                </p>

                {/* Bloque informativo */}
                {/* <div className="mt-12 grid gap-6 sm:grid-cols-3">
                    <InfoCard
                        icon={<Layers className="h-6 w-6 text-primary" />}
                        title="Nuevas secciones"
                        description="Información estructurada y accesible para nuestros usuarios."
                    />
                    <InfoCard
                        icon={<Layers className="h-6 w-6 text-primary" />}
                        title="Servicios ampliados"
                        description="Detalles claros sobre los servicios y capacidades del parque."
                    />
                    <InfoCard
                        icon={<Layers className="h-6 w-6 text-primary" />}
                        title="Actualizaciones constantes"
                        description="Contenido en evolución para mantenerte siempre informado."
                    />
                </div> */}
            </div>
        </section>
    );
}

function InfoCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-white/10">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                {icon}
            </div>
            <h3 className="text-base font-semibold text-white mb-2">
                {title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
