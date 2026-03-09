// Datos estructurados JSON-LD para SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Parque Científico Tecnológico de Villa Clara",
  alternateName: "PCT Villa Clara",
  description:
    "Centro de innovación y desarrollo tecnológico en Villa Clara, Cuba. Fomentamos la creatividad, la investigación y el emprendimiento a través de proyectos de alto impacto.",
  url: "https://pctvc.cu",
  logo: "https://pctvc.cu/logo.png",
  foundingDate: "2021",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Zona Industrial de Santa Clara",
    addressLocality: "Santa Clara",
    addressRegion: "Villa Clara",
    addressCountry: "CU",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: "+53-422-XXXXXX",
    email: "pctvillaclara@pctvc.cu",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61557233646236",
    "https://www.instagram.com/parquecientificotecnologico",
    // "https://www.linkedin.com/company/pctvillaclaracu",
  ],
  knowsAbout: [
    "Innovación Tecnológica",
    "Incubación de Empresas",
    "Transferencia de Tecnología",
    "Investigación y Desarrollo",
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Parque Científico Tecnológico de Villa Clara",
  image: "https://pctvc.cu/logo.png",
  description:
    "Centro especializado en innovación, tecnología y emprendimiento",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Zona Industrial",
    addressLocality: "Santa Clara",
    postalCode: "50100",
    addressCountry: "CU",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
};

export const eventSchema = (
  title: string,
  description: string,
  date: string,
  location: string,
) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: title,
  description: description,
  startDate: date,
  endDate: date,
  location: {
    "@type": "Place",
    name: location,
    address: {
      "@type": "PostalAddress",
      addressCountry: "CU",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Parque Científico Tecnológico de Villa Clara",
    url: "https://pctvc.cu",
  },
  image: "https://pctvc.cu/logo.png",
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
