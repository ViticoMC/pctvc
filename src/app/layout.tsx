import type React from "react"
import type { Metadata } from "next"
// import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import localFont from "next/font/local";
import Logo from "@/components/logo";
import { Navbar } from "@/components/navbar";
import { Footer } from "react-day-picker";

const duneRise = localFont({
  src: [
    {
      path: "../assets/fonts/Dune_Rise.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Dune_Rise.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-dune-rise",
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
      <body className={`font-sans antialiased ${duneRise.variable} relative`}>
        <Navbar />
        {children}
        <Footer />
        {/* <Analytics /> */}
        {/* <div className="fixed z-100 top-2 left-2 p-1 rounded-lg ">
          <Logo width={200} height={200} />
        </div> */}
      </body>
    </html>
  )
}
