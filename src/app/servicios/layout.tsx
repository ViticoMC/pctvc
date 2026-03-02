import type { Metadata } from "next"
import { generateMetadata } from "@/lib/seo-config"

export const metadata: Metadata = generateMetadata(
    "Servicios",
    "Descubre nuestros servicios de innovación, transferencia de tecnología, incubación y capacitación empresarial.",
    "/servicios"
)

export default function ServiciosLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
