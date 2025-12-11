import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, AlertCircle } from "lucide-react"

export default function NotFoundPage() {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-primary via-primary/90 to-primary/80 pt-26">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-white/10 animate-pulse" />
                <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full border border-white/5 animate-pulse delay-1000" />
                <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full border border-white/5 animate-pulse delay-500" />
                <div className="absolute inset-0 bg-linear-to-t from-primary/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex justify-center mb-8 animate-bounce">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 border border-accent/50">
                        <AlertCircle className="w-10 h-10 text-accent" />
                    </div>
                </div>

                <h1 className="text-6xl sm:text-7xl font-bold text-white mb-4 animate-fade-in font-dune-rise">
                    404
                </h1>

                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 animate-fade-in">
                    Noticia No Encontrada
                </h2>

                <p className="text-lg sm:text-xl text-white/80 mb-8 animate-fade-in leading-relaxed max-w-lg mx-auto">
                    Lo sentimos, la noticia que estás buscando no existe o ha sido removida.
                    Tal vez fue archivada o el enlace es incorrecto.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
                    <Link href="/noticias">
                        <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg group">
                            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                            Volver a Noticias
                        </Button>
                    </Link>

                    <Link href="/">
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm bg-transparent"
                        >
                            Ir al Inicio
                        </Button>
                    </Link>
                </div>

                {/* Decorative elements */}
                {/* <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto text-center text-white/60">
                    <div>
                        <div className="text-2xl font-bold text-accent mb-2">03</div>
                        <p className="text-sm">Error</p>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-accent mb-2">|</div>
                        <p className="text-sm">Página</p>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-accent mb-2">04</div>
                        <p className="text-sm">No Found</p>
                    </div>
                </div> */}
            </div>

            {/* Scroll indicator */}
            {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
                    <div className="w-1.5 h-3 rounded-full bg-white/60 animate-pulse" />
                </div>
            </div> */}
        </div>
    )
}
