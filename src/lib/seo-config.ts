// Configuración centralizada de SEO

export const siteConfig = {
  name: "Parque Científico Tecnológico de Villa Clara",
  description:
    "Centro de innovación y desarrollo tecnológico en Villa Clara, Cuba. Fomentamos la creatividad, la investigación y el emprendimiento.",
  url: "https://pctvc.cu",
  ogImage: "https://pctvc.cu/logo.png",
  links: {
    twitter: "https://twitter.com/parquecienciotecnologico",
    facebook: "https://www.facebook.com/profile.php?id=61557233646236",
    instagram: "https://www.instagram.com/parquecientificotecnologico",
    // linkedin: "https://www.linkedin.com/company/pctvillaclaracu",
  },
};

export const generateMetadata = (
  title: string,
  description: string,
  path: string = "/",
  image?: string,
) => ({
  title: `${title} | ${siteConfig.name}`,
  description,
  canonical: `${siteConfig.url}${path}`,
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}${path}`,
    type: "website",
    images: [
      {
        url: image || siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteConfig.name}`,
    description,
    images: [image || siteConfig.ogImage],
  },
});

export const keywordsByPage = {
  home: [
    "innovación cuba",
    "parque tecnológico",
    "desarrollo tecnológico",
    "emprendimiento cuba",
    "incubación empresas",
  ],
  projects: [
    "proyectos tecnológicos",
    "innovación industria",
    "proyectos sostenibles",
    "energías renovables cuba",
  ],
  news: [
    "noticias tecnología cuba",
    "innovación noticias",
    "desarrollo económico",
  ],
  events: [
    "eventos tecnología",
    "conferencias innovación",
    "ferias tecnológicas cuba",
  ],
  about: [
    "sobre parque tecnológico",
    "misión visión innovación",
    "equipo directivo castro",
  ],
};
