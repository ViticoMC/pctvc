import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import localFont from "next/font/local";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { USALProvider } from "@usal/react";
import WhatsappIcon from "@/components/whatsap-button";
import { organizationSchema } from "@/lib/structured-data";
import { siteConfig } from "@/lib/seo-config";

/* =========================
   FUENTES
========================= */

// Lato - Fuente principal
const lato = localFont({
  src: [
    { path: "../../public/fonts/lato/Lato-Hairline.ttf", weight: "100", style: "normal" },
    { path: "../../public/fonts/lato/Lato-HairlineItalic.ttf", weight: "100", style: "italic" },
    { path: "../../public/fonts/lato/Lato-Light.ttf", weight: "300", style: "normal" },
    { path: "../../public/fonts/lato/Lato-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "../../public/fonts/lato/Lato-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/lato/Lato-Italic.ttf", weight: "400", style: "italic" },
    { path: "../../public/fonts/lato/Lato-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/lato/Lato-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "../../public/fonts/lato/Lato-Black.ttf", weight: "900", style: "normal" },
    { path: "../../public/fonts/lato/Lato-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-lato",
  display: "swap",
  preload: true,
});

// Dune Rise - Decorativa
const duneRise = localFont({
  src: [
    { path: "../../public/fonts/Dune_Rise.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Dune_Rise.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-dune-rise",
  display: "swap",
  preload: true,
});

/* =========================
   VIEWPORT
========================= */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

/* =========================
   METADATA SEO
========================= */

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: siteConfig.name,
  description: siteConfig.description,
  applicationName: "PCT Villa Clara",

  keywords: [
    "innovación",
    "tecnología",
    "parque tecnológico",
    "cuba",
    "villa clara",
    "incubación",
    "emprendimiento",
    "desarrollo industrial",
  ],

  authors: [
    {
      name: "PCT Villa Clara",
      url: "https://pctvc.cu",
    },
  ],

  creator: "PCT Villa Clara",
  publisher: "PCT Villa Clara",

  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },

  alternates: {
    canonical: siteConfig.url,
    languages: {
      es: `${siteConfig.url}/es`,
      en: `${siteConfig.url}/en`,
    },
  },

  openGraph: {
    type: "website",
    locale: "es_CU",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@parquecienciotecnologico",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  other: {
    "google-site-verification": "REEMPLAZAR_CON_TU_VERIFICATION_ID",
  },
};

/* =========================
   ROOT LAYOUT
========================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=REEMPLAZAR_CON_TU_GA_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'REEMPLAZAR_CON_TU_GA_ID');
          `}
        </Script>
      </head>

      <body
        className={`${lato.variable} ${duneRise.variable} antialiased relative`}
      >
        <USALProvider>
          <Navbar />
          <WhatsappIcon size={50} />
          {children}
          <Footer />
          <Analytics />
        </USALProvider>
      </body>
    </html>
  );
}