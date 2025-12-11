export interface Noticia {
  id: number;
  title: string;
  fecha: string;
  // autor: string;
  fotos: string[] | null;
  descripcion: string;
  categoria: string;
  enlace: string;
}
