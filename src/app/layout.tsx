import type React from "react"
import type { Metadata } from "next"
// import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import localFont from "next/font/local";
import Logo from "@/components/logo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// Lato - Fuente por defecto
const lato = localFont({
  src: [
    {
      path: "../../public/fonts/lato/Lato-Hairline.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/lato/Lato-HairlineItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/lato/Lato-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/lato/Lato-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/lato/Lato-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/lato/Lato-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/lato/Lato-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/lato/Lato-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/lato/Lato-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/lato/Lato-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-lato",
  display: "swap",
  preload: true,
});

// Dune Rise - Fuente decorativa
const duneRise = localFont({
  src: [
    {
      path: "../../public/fonts/Dune_Rise.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Dune_Rise.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-dune-rise",
  display: "swap",
  preload: true,
});

// const _inter = Inter({ subsets: ["latin"] })
// const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Parque Científico Tecnológico Villa Clara",
  description:
    "Centro de innovación y desarrollo tecnológico en Villa Clara, Cuba. Fomentamos la creatividad, la investigación y el emprendimiento.",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${lato.variable} ${duneRise.variable} antialiased relative`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        {/* <div className="fixed z-100 top-2 left-2 p-1 rounded-lg ">
          <Logo width={200} height={200} />
        </div> */}
      </body>
    </html>
  )
}
