import type { Metadata } from "next"
import { generateMetadata } from "@/lib/seo-config"

export const metadata: Metadata = generateMetadata(
    "Eventos",
    "Participa en nuestros eventos, conferencias y encuentros sobre innovación, tecnología y emprendimiento.",
    "/eventos"
)

export default function EventosLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
