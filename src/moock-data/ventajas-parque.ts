import {
  BadgeDollarSign,
  PackageCheck,
  FlaskConical,
  MapPin,
  LucideIcon,
} from "lucide-react";
import ventajasData from "@/data/ventajas-parque.json";

export interface Ventaja {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  textColor: string;
}

const iconMap: { [key: string]: LucideIcon } = {
  BadgeDollarSign,
  PackageCheck,
  FlaskConical,
  MapPin,
};

export const ventajasParque: Ventaja[] = ventajasData.map((ventaja: any) => ({
  ...ventaja,
  icon: iconMap[ventaja.icon],
}));
