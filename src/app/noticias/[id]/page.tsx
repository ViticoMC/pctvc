import { BackButton } from "@/components/back-button";
import PhotoSlider from "@/components/photo-slider";
import { noticias } from "@/moock-data/noticias";
import { notFound } from "next/navigation";
import { Activity, Suspense } from "react";

export function generateStaticParams() {
    return noticias.map((noticia) => ({
        id: noticia.id.toString(),
    }));
}


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

function getNoticia(id: string) {
    return noticias.find((noticia) => noticia.id === Number(id));
}

export default function PaginaNoticias({ params }: { params: { id: string } }) {
    const { id } = params;
    const noticia = getNoticia(id);

    if (!noticia) {
        return <div>Noticia no encontrada</div>;
    }

    const { imagenes, videos, audios, documents } = noticia.multimedia;

    const matInteres = noticia.enlace.length > 0 || imagenes.length > 0 || videos.length > 0 || audios.length > 0 || documents.length > 0;

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
                            <PhotoSlider fotos={noticia.fotos} />
                        )}

                        <div className="prose max-w-none">
                            {noticia.descripcion}
                        </div>
                        <Activity mode={matInteres ? "visible" : "hidden"}>
                            <section className="mt-12 border-t border-border pt-8">
                                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                                    Material de interés
                                </h2>

                                <p className="text-muted-foreground mb-6">
                                    Recursos adicionales relacionados con esta noticia.
                                </p>

                                <div className="space-y-6">

                                    {/* Enlaces */}
                                    {
                                        noticia.enlace.length > 0 && (
                                            <div>
                                                <h3 className="text-lg font-medium mb-2">Enlaces externos</h3>
                                                <ul className="space-y-2">
                                                    {noticia.enlace.map((enlace) => (
                                                        <li key={enlace.href}>
                                                            <a
                                                                href={enlace.href}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-primary hover:underline"
                                                            >
                                                                {enlace.title}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )
                                    }

                                    {/* Documentos */}
                                    {
                                        noticia.multimedia.documents.length > 0 && (
                                            <div>
                                                <h3 className="text-lg font-medium mb-2">Documentos</h3>
                                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                                    {noticia.multimedia.documents.map((documento) => (
                                                        <div key={documento} className="aspect-video rounded-lg overflow-hidden bg-muted">
                                                            <iframe
                                                                src={documento}
                                                                className="w-full h-full"
                                                                allowFullScreen
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )
                                    }

                                    {/* Videos */}
                                    {
                                        noticia.multimedia.videos.length > 0 && (
                                            <div>
                                                <h3 className="text-lg font-medium mb-2">Videos</h3>
                                                <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                                                    <iframe
                                                        src={noticia.multimedia.videos[0]}
                                                        className="w-full h-full"
                                                        allowFullScreen
                                                    />
                                                </div>
                                            </div>
                                        )
                                    }

                                    {/* Audios */}
                                    {
                                        noticia.multimedia.audios.length > 0 && (
                                            <div>
                                                <h3 className="text-lg font-medium mb-2">Audios</h3>
                                                <audio controls className="w-full">
                                                    <source src={"/audios/" + noticia.multimedia.audios[0]} type="audio/mpeg" />
                                                    Tu navegador no soporta el audio.
                                                </audio>
                                            </div>
                                        )
                                    }

                                </div>
                            </section>
                        </Activity>
                    </article>

                </div>
            </Suspense>
        </main>
    );
}
