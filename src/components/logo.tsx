import Image from "next/image"
export default function Logo() {
    return (
        <Image
            src="/logo_without_text.png"
            alt="Logo PCTVC"
            width={100}
            height={100}
        />

    )
}
