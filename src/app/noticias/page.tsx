"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User, Search } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Noticia } from "@/type/noticia"
import { noticias as mockNoticias } from "@/moock-data/noticias"



// Componente de tarjeta de noticia
function TarjetaNoticia({ noticia }: { noticia: Noticia }) {
    return (
        <Link href={`/noticias/${noticia.id}`}>
            <article className="group h-full bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:shadow-xl hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                {/* Imagen */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-linear-to-br from-primary/20 to-primary/10">
                    <img
                        src={noticia.fotos?.[0]}
                        alt={noticia.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                    {/* Badge de categoría */}
                    <span className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {noticia.categoria}
                    </span>
                </div>

                {/* Contenido */}
                <div className="p-6 space-y-4">
                    {/* Fecha y autor */}
                    <div className="flex gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(noticia.fecha).toLocaleDateString('es-ES', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </span>
                        {/* <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {noticia.autor}
                        </span> */}
                    </div>

                    {/* Título */}
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 line-clamp-2">
                        {noticia.title}
                    </h3>

                    {/* Descripción */}
                    <p className="text-sm text-foreground/80 line-clamp-3">
                        {noticia.descripcion}
                    </p>

                    {/* Tags */}
                    {/* <div className="flex flex-wrap gap-2 pt-2">
                        {noticia.categoria.slice(0, 2).map((tag) => (
                            <span
                                key={tag}
                                className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div> */}

                    {/* Botón */}
                    <div className="flex items-center text-accent text-sm font-medium pt-4 group-hover:gap-2 gap-1 transition-all duration-300">
                        Leer más
                        <ArrowRight className="h-4 w-4" />
                    </div>
                </div>
            </article>
        </Link>
    )
}

// Componente principal
export default function NoticiasPage() {
    const [noticias, setNoticias] = useState<Noticia[]>([])
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    // Simular carga de datos
    useEffect(() => {
        // Aquí irá tu fetch a la API
        setTimeout(() => {
            setNoticias(mockNoticias)
            setIsLoading(false)
        }, 500)
    }, [])

    // Filtrar noticias
    const noticiasFiltradas = noticias.filter((noticia) => {
        const matchesSearch = noticia.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            noticia.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = !selectedCategory || noticia.categoria === selectedCategory

        return matchesSearch && matchesCategory
    })

    // Obtener categorías únicas
    const categorias = Array.from(new Set(noticias.map((n) => n.categoria)))

    return (
        <>
            <PageHeader
                title="Noticias y Actualidades"
                subtitle="Mantente informado sobre los últimos eventos, logros y novedades del parque científico"
            />

            <main className="min-h-screen bg-linear-to-b from-background to-background/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Barra de búsqueda y filtros */}
                    <div className="mb-12 space-y-6">
                        {/* Búsqueda */}
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Buscar noticias..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-xl bg-card/80 border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                            />
                        </div>

                        {/* Filtros de categoría */}
                        {categorias.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                <button
                                    onClick={() => setSelectedCategory(null)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === null
                                        ? "bg-accent text-accent-foreground"
                                        : "bg-card/80 border border-border/50 text-foreground hover:border-accent/50"
                                        }`}
                                >
                                    Todas
                                </button>
                                {categorias.map((categoria) => (
                                    <button
                                        key={categoria}
                                        onClick={() => setSelectedCategory(categoria)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === categoria
                                            ? "bg-accent text-accent-foreground"
                                            : "bg-card/80 border border-border/50 text-foreground hover:border-accent/50"
                                            }`}
                                    >
                                        {categoria}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Listado de noticias */}
                    {isLoading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[...Array(6)].map((_, i) => (
                                <div
                                    key={i}
                                    className="h-96 bg-card/80 border border-border/50 rounded-2xl animate-pulse"
                                />
                            ))}
                        </div>
                    ) : noticiasFiltradas.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {noticiasFiltradas.map((noticia) => (
                                <TarjetaNoticia key={noticia.id} noticia={noticia} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <p className="text-xl text-muted-foreground mb-4">
                                No se encontraron noticias
                            </p>
                            <Button
                                onClick={() => {
                                    setSearchTerm("")
                                    setSelectedCategory(null)
                                }}
                                variant="outline"
                            >
                                Limpiar filtros
                            </Button>
                        </div>
                    )}
                </div>
            </main>
        </>
    )
}
