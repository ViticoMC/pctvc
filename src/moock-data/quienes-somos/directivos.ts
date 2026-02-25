export interface Directivo {
  name: string;
  cargo: string;
  image: string;
}

import directivosData from "@/data/quienes-somos/directivos.json";

export const directivos: Directivo[] = directivosData as unknown as Directivo[];
