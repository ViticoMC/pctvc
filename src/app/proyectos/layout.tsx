import type { Metadata } from "next"
import { generateMetadata } from "@/lib/seo-config"

export const metadata: Metadata = generateMetadata(
    "Proyectos Tecnológicos",
    "Descubre nuestros proyectos de innovación en energías renovables, automatización, producción de alimentos e incubación de empresas tecnológicas.",
    "/proyectos"
)

export default function ProyectosLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
