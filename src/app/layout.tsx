import type React from "react"
import type { Metadata } from "next"
// import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

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
      <body className={`font-sans antialiased `}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
