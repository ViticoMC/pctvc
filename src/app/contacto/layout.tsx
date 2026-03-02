import type { Metadata } from "next"
import { generateMetadata } from "@/lib/seo-config"

export const metadata: Metadata = generateMetadata(
    "Contacto",
    "Contáctanos para consultas sobre proyectos, servicios, incubación de empresas y colaboraciones.",
    "/contacto"
)

export default function ContactoLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
