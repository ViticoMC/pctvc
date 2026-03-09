import type { Metadata } from "next"
import { generateMetadata } from "@/lib/seo-config"

export const metadata: Metadata = generateMetadata(
    "Noticias y Artículos",
    "Lee las últimas noticias sobre innovación, tecnología, emprendimiento y desarrollo industrial en Villa Clara.",
    "/noticias"
)

export default function NoticiasLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
