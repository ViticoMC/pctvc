import { Noticia } from "@/type/noticia";

// los enlaces van a tener un title o descripcion y un href con la url ,
// se va a tener otro campo que va a hacer multimedia , donde se van a poner videos , fotos , documentos
// audios y muchos otros que sean de interes para el usuario
export const noticias: Noticia[] = [
  {
    title: "Parque Cientifico Tecnologico de Villa CLara y sus claves de exito",
    descripcion:
      "Buenas tardes . Hoy cerramos una jornada llena de logros y aprendizajes para el PCT Villa Clara en el marco de la XLI Feria Internacional de La Habana (FIHAV 2025). Queremos compartir con ustedes dos noticias de gran interés: Entrevista exclusiva en la revista Opciones No te pierdas la entrevista publicada en el diario de la feria a nuestra presidenta, MSc. Edelys Ada Saavedra Rodriguez, donde profundiza en los orígenes, misión, proyecciones y principales retos de nuestra empresa. ¡Una lectura imprescindible para conocer más sobre nuestro trabajo y visión! ",
    fecha: "27 Nov 2025",
    categoria: "Programa",
    fotos: ["/noticias/entrevista-revista-opciones.jpg"],
    enlace: [
      {
        title: "Entrevista en Opciones",
        href: "https://www.juventudrebelde.cu/cuba/2025-11-27/conocimiento-e-innovacion-en-funcion-del-desarrollo",
      },
    ],
    multimedia: {
      imagenes: [],
      videos: [],
      audios: ["entrevista-opciones.mp3"],
      documents: [],
    },
    id: 1,
  },
  {
    title: "Avanzamos en Ciencia y Tecnología",
    descripcion:
      "El pasado jueves 9 de enero, en la sede del Gobierno Provincial, se llevó a cabo un importante balance de los órganos asesores, incluyendo el Polo Científico Productivo (PCP), el Consejo Provincial de las Ciencias Sociales y Humanísticas, y el Consejo Asesor del Territorio.  Durante este encuentro, nuestra presidenta, Edelys Ada Saavedra Rodríguez, destacó la importancia de la articulación del Parque Científico Tecnológico de Villa Clara con el sistema empresarial y el Gobierno, para desarrollar la economía. Además, nos enorgullece haber recibido, junto a otras instituciones, un reconocimiento por el trabajo realizado. ",
    fecha: "9 Jan 2025",
    categoria: "Alianzas",
    fotos: ["/noticias/avanza-cienc-tecno.jpg"],
    enlace: [
      {
        title: "Artículo del periodista Ricardo Rodolfo González:",
        href: "https://www.conectec.org/",
      },
    ],
    multimedia: {
      imagenes: [],
      videos: [],
      audios: [],
      documents: [],
    },
    id: 2,
  },
  {
    title: "Visita del Embajador de Guyana a Villa Clara",
    descripcion:
      "El pasado jueves y viernes, recibimos al Excelentísimo Señor Abdool Halim Majeed, embajador de Guyana en Cuba. Durante su visita lo acompañaron funcionarios del gobierno, la Dirección de Comercio Exterior del Gobierno Provincial, la Cámara de Comercio de Villa Clara y el Parque Científico Tecnológico.Su programa de actividades incluyó un fructífero intercambio en el Gobierno Provincial, donde el Parque Científico Tecnológico de Villa Clara participó activamente junto a instituciones y empresas del gobierno.El embajador también visitó las empresas INPUD y Minerva, evaluando oportunidades de colaboración, y sostuvo un contacto con diversas Mypimes, fortaleciendo la innovación y relaciones comerciales. En febrero, celebraremos el aniversario de la Independencia de Guyana en Villa Clara, donde nuestro Parque será ",
    fecha: "20 Nov 2025",
    categoria: "Anuncio",
    fotos: [
      "/noticias/embG1.jpg",
      "/noticias/embG2.jpg",
      "/noticias/embG3.jpg",
      "/noticias/embG4.jpg",
      "/noticias/embG5.jpg",
      "/noticias/embG6.jpg",
      "/noticias/embG7.jpg",
    ],
    enlace: [],
    multimedia: {
      imagenes: [],
      videos: [],
      audios: [],
      documents: [],
    },
    id: 3,
  },
  {
    title:
      "Unidos por el Futuro: Colaboración en función del desarrollo territorial",
    descripcion:
      "Visita  el PCT Villa Clara Grecio Miguel Lorenzo Rodríguez , Coordinador del Proyecto “Resiliencia climática en ecosistemas agrícolas de Villa Clara (IRES)”  y Laritza Torres Niebla ,Directora de Comercio Exterior ,Inversión Extranjera y Cooperación Internacional del Gobierno ProvincialSe evalúan en intercambio realizado las posibilidades de incorporación a proyectos internacionales  y a fondos de colaboración del proyecto IRES Juntos exploramos oportunidades que beneficiarán a nuestras comunidades",
    fecha: "20 Nov 2025",
    categoria: "Alianzas",
    fotos: ["/noticias/unidos.jpg"],
    enlace: [],
    multimedia: {
      imagenes: [],
      videos: [],
      audios: [],
      documents: [],
    },
    id: 4,
  },
];
