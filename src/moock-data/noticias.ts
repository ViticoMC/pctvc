import { Noticia } from "@/type/noticia";
import noticiasData from "@/data/noticias.json";

// los enlaces van a tener un title o descripcion y un href con la url ,
// se va a tener otro campo que va a hacer multimedia , donde se van a poner videos , fotos , documentos
// audios y muchos otros que sean de interes para el usuario
export const noticias: Noticia[] = noticiasData as unknown as Noticia[];
