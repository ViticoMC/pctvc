"use client";

import Image from "next/image";
import Slider from "react-slick";

interface EventPhotoSliderProps {
    fotos: string[];
    sliderSettings?: any; // opcional para personalizar slick
    className?: string; // opcional por si quieres ajustar tamaños desde afuera
}

export default function PhotoSlider({
    fotos,
    sliderSettings,
    className = "w-full",
}: EventPhotoSliderProps) {
    const defaultSettings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: fotos.length > 1,
        autoplaySpeed: 2000,
        ...sliderSettings,
    };

    return (
        <div className={`${className} relative ${fotos.length === 0 ? "h-0" : "h-64"}`}>
            {fotos && fotos.length > 1 ? (
                <Slider {...defaultSettings} className="h-full">
                    {fotos.map((foto, index) => (
                        <div key={index} className="relative h-64">
                            <Image
                                src={foto}
                                alt={`Imagen ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </Slider>
            ) : (
                fotos.length === 0 ? null : (
                    <Image
                        src={fotos?.[0] || "/placeholder.png"}
                        alt="Imagen"
                        fill
                        className="object-cover"
                    />
                ))}
        </div>
    );
}