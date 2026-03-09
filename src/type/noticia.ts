export interface Noticia {
  id: string;
  title: string;
  fecha: string;
  // autor: string;
  fotos: string[] | null;
  descripcion: string;
  categoria: string;
  enlace: {
    title: string;
    href: string;
  }[];
  multimedia: {
    videos: string[];
    audios: string[];
    imagenes: string[];
    documents: string[];
  };
}
