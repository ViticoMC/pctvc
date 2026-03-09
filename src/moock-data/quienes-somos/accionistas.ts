export interface Accionista {
  name: string;
  logo: string;
  url: string;
}

import accionistasData from "@/data/quienes-somos/accionistas.json";

export const accionistas1: Accionista[] =
  accionistasData as unknown as Accionista[];
