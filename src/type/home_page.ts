import { LucideIcon } from "lucide-react";

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
