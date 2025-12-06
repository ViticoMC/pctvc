import Image from "next/image"
export default function Logo({ width, height }: {
    width: number,
    height: number
}) {
    return (
        <Image
            // src="/logo_without_text.png"
            src="/logo.png"
            alt="Logo PCTVC"
            width={width}
            height={height}
        />

    )
}
