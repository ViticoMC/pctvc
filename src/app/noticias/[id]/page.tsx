import { BackButton } from "@/components/back-button";
import { noticias } from "@/moock-data/noticias";
import { notFound } from "next/navigation";
import { Suspense } from "react";



// Componente de fallback/loading
function NoticiasLoadingFallback() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="space-y-6 animate-pulse">
                <div className="h-12 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/4"></div>
                <div className="h-96 bg-muted rounded-lg"></div>
                <div className="space-y-3">
                    <div className="h-4 bg-muted rounded w-full"></div>
                    <div className="h-4 bg-muted rounded w-full"></div>
                    <div className="h-4 bg-muted rounded w-2/3"></div>
                </div>
            </div>
        </div>
    );
}

async function getNoticia({ id }: { id: string }) {
    return noticias.find((noticia) => noticia.id === Number(id));
}

export default async function PaginaNoticias({ params }: { params: Promise<{ id: string }> }) {
    // En Next.js 15+, params es una Promise
    const { id } = await params;
    const noticia = await getNoticia({ id });

    if (!noticia) return notFound()

    return (
        <main className="min-h-screen bg-background pt-16 ">
            <Suspense fallback={<NoticiasLoadingFallback />}>
                <div className="max-w-4xl mx-auto px-4 py-12">
                    <article className="space-y-6">
                        <BackButton />
                        <header>
                            <h1 className="text-4xl font-bold text-foreground mb-4">{noticia.title}</h1>
                            <div className="flex gap-4 text-muted-foreground text-sm">
                                <time>{new Date(noticia.fecha).toLocaleDateString('es-ES')}</time>
                            </div>
                        </header>

                        {noticia.fotos && (
                            <img
                                src={noticia.fotos[0]}
                                alt={noticia.title}
                                className="w-full h-96 object-cover rounded-lg"
                            />
                        )}

                        <div className="prose max-w-none">
                            {noticia.descripcion}
                        </div>
                    </article>
                </div>
            </Suspense>
        </main>
    );
}
