import { AnimatedDirection } from "@/type/animated-direction";
import { Eye, LucideIcon, Target } from "lucide-react";
import heroElementsData from "@/data/quienes-somos/hero-elements.json";

export interface HeroElement {
  title: string;
  description: string;
  color: string;
  direction: AnimatedDirection;
  icon: LucideIcon;
}

const iconMap: { [key: string]: LucideIcon } = {
  Target,
  Eye,
};

export const heroElements: HeroElement[] = heroElementsData.map((element: any) => ({
  ...element,
  icon: iconMap[element.icon],
}));
    description: `   Contribuir al desarrollo industrial, participando y coadyuvando a la creación, implantación,
              funcionamiento, fortalecimiento , lanzamiento de nuevas entidades (productos nuevos  o mejorados y empresas),
              adoptando sistemas de gestion integrada que incrementen el fondo de bienes exportables y la sustitucion de
              importaciones en armonía con el medio ambiente`,
    color: "primary",
    direction: "r",
    icon: Target,
  },
  {
    title: "VISIÓN",
    description: `   Ser un referente de ecosistema de innovación y transferencia científica en la rama de las industria ,
              con un minimo viable de industria 4.0 , para promover, la generación y sostenibilidad de nuevas y exigentes
              empresas , proporcionando productos y servicios de alto valor agregado y un sistema de gestión alineado
              a la Política de Desarrollo Industrial.`,
    color: "chart-2",
    direction: "l",
    icon: Eye,
  },
];
