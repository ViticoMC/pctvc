import type { Metadata } from "next"
import { generateMetadata } from "@/lib/seo-config"

export const metadata: Metadata = generateMetadata(
    "Quiénes Somos",
    "Conoce la misión, visión y equipo directivo del Parque Científico Tecnológico de Villa Clara. Historia, accionistas e innovación.",
    "/quienes-somos"
)

export default function QuienesSomosLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
