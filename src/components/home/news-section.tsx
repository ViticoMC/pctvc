
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { noticias } from "@/moock-data/noticias"
import PhotoSlider from "@/components/photo-slider"



export function NewsSection() {
  return (
    <section id="noticias" className="py-24 lg:py-32 bg-linear-to-b from-slate-50 to-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <p
              data-usal="zoomin duration-700  once"
              className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4"
            >
              Mantente Informado
            </p>
            <h2
              data-usal="fade-r duration-700 delay-200  once"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground  "
            >
              Artículos tecnicos, entrevistas y noticias nacionales e internacionales
            </h2>
          </div>
          <Link
            href="/noticias"
            data-usal="flip-r  duration-500  once"
          >
            <Button
              variant="outline"
              className="cursor-pointer group "

            >
              Ver Todas
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticias.slice(0, 3).map((item, index) => (
            <article
              data-usal={`zoomin duration-700 delay-${index * 200}  once`}
              key={item.title}
              className="group bg-card  rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border "
            >
              <PhotoSlider fotos={item.fotos || []} />
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 ">
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    {item.categoria}
                  </span>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    <time>{new Date(item.fecha).toLocaleDateString('es-ES')}</time>
                  </div>
                </div>
                <div className="flex flex-col justify-between ">

                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{item.descripcion}</p>
                  <Link href={`/noticias/${item.id}`} className="mt-4 text-sm font-medium text-primary hover:text-accent transition-colors flex items-center gap-1 group/btn">
                    Leer más
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
