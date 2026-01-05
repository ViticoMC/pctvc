import { apiClient } from "@/lib/api_client";
import {
  BadgeDollarSign,
  FlaskConical,
  LucideIcon,
  MapPin,
  PackageCheck,
} from "lucide-react";

export interface HomePageInfo {
  hero_section: {
    slogan: string;
    slide: string[];
  };
  welcome_section: {
    small_title: string;
    title: string;
    text_1: string;
    text_2: string;
    image: string;
  };
  confluencia_section: {
    title: string;
    empresa_text: string;
    escuela_text: string;
    parque_text: string;
    sector_institucional_text: string;
    title_info: string;
    text_info1: string;
    text_info2: string;
    text_info3: string;
  };
  servicios_section: {
    title: string;
    advantages: {
      title: string;
      description: string;
      gradient: string;
      bgGlow: string;
    }[];
  };
  image_bg: string;
  ventajas_section: {
    title: string;
    advantages: {
      title: string;
      description: string;
      bgColor: string;
      textColor: string;
      icon: LucideIcon;
    }[];
  };
  articles_section: {
    small_title: string;
    title: string;
  };
  events_section: {
    small_title: string;
    title: string;
    subtitle: string;
  };
  contact_section: {
    small_title: string;
    title: string;
    subtitle: string;
    emails: string[];
    phones: string[];
    extensiones: string[];
    address: string[];
  };
}

export function home_page_info() {
  // return apiClient.get("/home_page_info");
  return home_info;
}

const home_info: HomePageInfo = {
  hero_section: {
    slogan: "Alianza , Oportunidad y Desarrollo.",
    slide: [
      "./slide/01.jpg",
      "./slide/02.jpg",
      "./slide/03.jpg",
      "./slide/04.jpg",
      "./slide/05.jpg",
      "./slide/06.jpg",
      "./slide/07.jpg",
      "./slide/08.jpeg",
    ],
  },
  welcome_section: {
    small_title: "Bienvenidos",
    title: "Parque Científico Tecnológico de Villa Clara",
    text_1:
      "El Parque Científico Tecnológico de Villa Clara es un centro de innovación que promueve la colaboración entre gobierno, el sector del conocimiento y el sector empresarial para impulsar el desarrollo científico-tecnológico en Cuba. Ofrece un entorno dinámico para crear y hacer crecer empresas tecnológicas, facilitando la transferencia de conocimientos y tecnologías. Alianza Oportunidad y Desarrollo",
    text_2:
      "Nuestro compromiso es ser el puente entre la academia, la industria y el gobierno, facilitando la transferencia de conocimiento y tecnología que genere impacto positivo en la sociedad.",
    image: "/eventos/feriaC4.jpg",
  },
  confluencia_section: {
    title: "Un ecosistema donde la innovación converge",
    empresa_text: "Sector Empresarial",
    escuela_text: "Sector del Conocimiento",
    parque_text: "Parque Científico Tecnológico",
    sector_institucional_text: "Sector Gubernamental y otras Organizaciones",
    title_info: "Un modelo de colaboración para un futuro sostenible",
    text_info1:
      "El Parque Científico Tecnológico funciona como un espacio de articulación donde confluyen el talento, el conocimiento, la producción y los servicios y la gestión gubernamental. En este entorno, las empresas incubadas, los proyectos y servicios se dirigen a ofrecer soluciones innovadoras, alineadas con las prioridades del desarrollo económico y social.",
    text_info2:
      "El sector del conocimiento aporta investigación, formación y capital humano, que en vínculo con las demandas y recursos empresariales y de la sociedad, se alinean e integran con las estrategias de desarrollo gubernamentales mediante políticas, programas, proyectos con la coordinación y el financiamiento necesario, para propiciar la transformación de ideas en impacto real y sostenible.",
    text_info3:
      "Esta convergencia permite trabajar de forma integrada con actores nacionales e internacionales, fomentando la innovación, la transferencia de conocimiento y la construcción de un futuro sostenible basado en la cooperación y el desarrollo tecnológico.",
  },
  servicios_section: {
    title: "Soluciones Integrales",
    advantages: [
      {
        title: "Financiación",
        description: "Fondos e inversión",
        gradient: "from-amber-500 to-orange-500",
        bgGlow: "bg-amber-500/20",
      },
      {
        title: "Recursos",
        description: "Equipos y materiales",
        gradient: "from-emerald-500 to-teal-500",
        bgGlow: "bg-emerald-500/20",
      },
      {
        title: "Espacios",
        description: "Oficinas compartidas",
        gradient: "from-slate-500 to-slate-700",
        bgGlow: "bg-slate-500/20",
      },
      {
        title: "Riesgos",
        description: "Inversiones seguras",
        gradient: "from-indigo-500 to-violet-500",
        bgGlow: "bg-indigo-500/20",
      },
    ],
  },
  image_bg: "/soluciones-bg.jpg",
  ventajas_section: {
    title: "Principales ventajas competitivas del Parque",
    advantages: [
      {
        title: "Incentivos fiscales sostenidos",
        description:
          "Las empresas incubadas disfrutan de una exención total de tributos sobre utilidades durante los primeros cinco (5) años de funcionamiento, lo que reduce la presión financiera inicial y permite concentrar recursos en innovación, crecimiento y consolidación empresarial.",
        icon: BadgeDollarSign,
        bgColor: "bg-blue-100",
        textColor: "text-blue-600",
      },
      {
        title: "Facilitación de importaciones",
        description:
          "Se otorga la exención del pago de aranceles por la importación de partes, piezas y equipamiento necesarios para el funcionamiento de las empresas incubadas, asegurando acceso oportuno a tecnología y reduciendo significativamente los costos operativos.",
        icon: PackageCheck,
        bgColor: "bg-emerald-100",
        textColor: "text-emerald-600",
      },
      {
        title: "Ecosistema de ciencia e innovación",
        description:
          "El Parque ofrece un entorno especializado para la investigación, el desarrollo tecnológico y la innovación, fomentando la colaboración multidisciplinaria y la generación de soluciones de alto valor agregado, alejadas de las limitaciones de los entornos productivos tradicionales.",
        icon: FlaskConical,
        bgColor: "bg-purple-100",
        textColor: "text-purple-600",
      },
      {
        title: "Ubicación estratégica y conectividad",
        description:
          "Ubicado en la zona industrial de Santa Clara, en el centro del país, el Parque posee una localización estratégica única. Su cercanía a polos industriales, así como el acceso directo a la Carretera Central, la Autopista Nacional, la Línea Central de Ferrocarril, el Puerto de Cienfuegos y La Habana, garantizan una conectividad logística eficiente y competitiva.",
        icon: MapPin,
        bgColor: "bg-orange-100",
        textColor: "text-orange-600",
      },
    ],
  },
  articles_section: {
    small_title: "Mantente Informado",
    title:
      "Artículos tecnicos, entrevistas y noticias nacionales e internacionales",
  },
  events_section: {
    small_title: "Agenda",
    title: "Eventos",
    subtitle: "Participa en nuestras actividades y conecta con la comunidad",
  },
  contact_section: {
    small_title: "Contáctanos",
    title: "¿Listo para Innovar?",
    subtitle:
      "Estamos aquí para ayudarte a convertir tus ideas en realidad. Contáctanos y descubre cómo podemos impulsar tu proyecto.",
    emails: ["pctvillaclara@pctvc.cu", "clientes@pctvc.cu"],
    phones: ["+53 42281551"],
    extensiones: ["101-107"],
    address: [
      "Carretera a Planta Mecánica, No. 39 B,",
      "entrada a Almacenes Universales,",
      "Municipio Santa Clara, Provincia Villa Clara, Cuba",
    ],
  },
};
