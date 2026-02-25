import { Evento } from "@/type/eventos";
import eventosData_raw from "@/data/eventos.json";

export const eventosData: Evento[] = eventosData_raw as unknown as Evento[];
