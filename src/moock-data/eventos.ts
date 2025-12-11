import { Noticia } from "@/type/eventos";

export const eventosData: Noticia[] = [
  {
    id: 1,
    title: "Conferencia de Innovación Tecnológica 2025",
    descripcion:
      "Únete a nosotros en una conferencia magistral donde expertos de la industria compartirán las últimas tendencias en tecnología, inteligencia artificial y transformación digital. Se abordarán temas como cloud computing, cyberseguridad y desarrollo sostenible.\n\nPonentes destacados incluyen líderes de empresas tecnológicas internacionales que compartirán sus experiencias y visiones para el futuro del sector.",
    fecha: "15/01/2025",
    categoria: "Conferencia",
    fotos: [],
    direccion: "Centro de Convenciones, Avenida Principal 123",
  },
  {
    id: 2,
    title: "Taller de Emprendimiento y Negocios",
    descripcion:
      "Aprende las claves para emprender tu propio negocio en este taller interactivo. Cubriremos temas esenciales como:\n\n• Plan de negocios\n• Financiamiento y capital de riesgo\n• Marketing digital\n• Gestión empresarial\n• Propuesta de valor\n\nInstruido por emprendedores exitosos y mentores de empresas consolidadas.",
    fecha: "22/01/2025",
    categoria: "Taller",
    fotos: ["/eventos/taller-emprendimiento.jpg"],
    direccion: "Sala de Capacitación, Edificio Corporativo Sur",
  },
  {
    id: 3,
    title: "Networking Empresarial: Conecta y Colabora",
    descripcion:
      "Un espacio diseñado para que profesionales, emprendedores e inversores se conecten, compartan ideas y creen oportunidades de negocio. Este evento reúne a más de 200 participantes de diferentes sectores.\n\nDisfrutaremos de sesiones de speed networking, presentaciones de startups y espacios para conversaciones significativas. Incluye refrigerio y cena.",
    fecha: "28/01/2025",
    categoria: "Networking",
    fotos: [
      "/eventos/networking-empresarial.jpg",
      "/eventos/networking-empresarial-2.jpg",
    ],
    direccion: "Hotel Convention Plaza, Salón de Eventos Principal",
  },
  {
    id: 4,
    title: "Exposición de Proyectos de Innovación Social",
    descripcion:
      "Descubre cómo la tecnología y la innovación pueden resolver problemas sociales reales. En esta exposición, emprendedores sociales presentarán sus proyectos en áreas como:\n\n• Educación\n• Salud\n• Sustentabilidad\n• Inclusión social\n• Desarrollo comunitario\n\nOportunidad de conocer iniciativas inspiradoras y participar en conversaciones sobre impacto social.",
    fecha: "05/02/2025",
    categoria: "Exposición",
    fotos: ["/eventos/expo-innovacion-social.jpg"],
    direccion: "Parque Tecnológico Regional, Pabellón A y B",
  },
  {
    id: 5,
    title: "Certificación en Transformación Digital",
    descripcion:
      "Programa intensivo de 3 días para profesionales que desean certificarse en transformación digital. Los participantes aprenderán:\n\n• Estrategias de transformación digital\n• Implementación de tecnologías emergentes\n• Gestión del cambio organizacional\n• Casos de estudio reales\n\nAl finalizar, recibirás un certificado reconocido internacionalmente.",
    fecha: "12/02/2025",
    categoria: "Certificación",
    fotos: [
      "/eventos/certificacion-digital.jpg",
      "/eventos/certificacion-digital-2.jpg",
    ],
    direccion: "Instituto de Capacitación Profesional, Campus Principal",
  },
  {
    id: 6,
    title: "Hackathon: 48 Horas de Innovación",
    descripcion:
      "Participa en una competencia intensiva donde equipos de desarrolladores, diseñadores y emprendedores tendrán 48 horas para crear soluciones innovadoras a desafíos reales.\n\nPremios totales: $50,000 USD\n\n• Participación gratuita\n• Alojamiento y comidas incluidas\n• Acceso a mentores y expertos\n• Oportunidad de inversión para ganadores\n\nEquipos de 3-5 personas. Registro abierto hasta el 31 de enero.",
    fecha: "22/02/2025",
    categoria: "Competencia",
    fotos: ["/slide/slide_1.jpg", "/slide/slide_2.jpg", "/slide/slide_3.jpg"],
    direccion: "Parque Tecnológico Regional, Campus Completo",
  },
  {
    id: 7,
    title: "Reunión de Cooperadoras: Estrategia 2025",
    descripcion:
      "Encuentro estratégico de cooperadores para definir los objetivos y proyectos del año 2025. Se discutirán:\n\n• Proyectos colaborativos\n• Alianzas estratégicas\n• Financiamiento compartido\n• Impacto comunitario\n• Sostenibilidad\n\nPor invitación. Se requiere confirmar asistencia.",
    fecha: "03/02/2025",
    categoria: "Reunión",
    fotos: null,
    direccion: "Sala de Juntas, Oficina Central",
  },
  {
    id: 8,
    title: "Masterclass: Liderazgo e Innovación",
    descripcion:
      "Sesión exclusiva con líderes reconocidos internacionalmente que compartirán sus experiencias en liderazgo, toma de decisiones y conducción de equipos en ambientes de innovación.\n\nTemas a tratar:\n• Liderazgo transformacional\n• Cultura de innovación\n• Gestión de conflictos\n• Decisiones estratégicas\n\nMáximo 80 participantes. Incluye material de estudio y networking.",
    fecha: "19/02/2025",
    categoria: "Masterclass",
    fotos: ["/eventos/masterclass-liderazgo.jpg"],
    direccion: "Auditorio Principal, Centro de Innovación",
  },
];
