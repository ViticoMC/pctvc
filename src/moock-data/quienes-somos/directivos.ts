export interface Directivo {
  name: string;
  cargo: string;
  image: string;
}

export const directivos: Directivo[] = [
  {
    name: "MSc. Edelys Ada Saavedra Rodríguez",
    cargo:
      "Presidenta de la Junta General de Accionistas y de la Junta Directiva",
    image: "/junta/edelys.jpg",
  },
  {
    name: "MSc. Danay Alvarez Mesa. Vicepresidenta Primera.",
    cargo: "Vicepresidenta Primera",
    image: "/junta/danay.jpeg",
  },
  {
    name: "Ing. Dalgys La Rosa Morales",
    cargo: "Vicepresidenta Científica",
    image: "/junta/dalgys.jpeg",
  },
];
