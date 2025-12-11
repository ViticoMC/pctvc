"use client"

import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { ArrowLeft } from "lucide-react"

export function BackButton() {
    const router = useRouter()

    return (
        <Button
            variant="outline"
            className="cursor-pointer group transition-all duration-700 delay-200 "
            onClick={() => router.back()}
        >
            <ArrowLeft className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            Volver
        </Button>
    )
}