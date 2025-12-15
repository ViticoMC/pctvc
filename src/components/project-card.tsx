"use client"

import Slider from "react-slick";
import Image from "next/image";
import PhotoSlider from "./photo-slider";

interface ProjectCardProp {
    titulo: string,
    descripcion: string,
    estado: string,
    fotos: string[]
}

export default function ProjectCard({ titulo, descripcion, estado, fotos }: ProjectCardProp) {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: fotos.length > 1,
        autoplaySpeed: 2000,
        arrows: false,
    };

    return (
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden w-full">

            {/* CABECERA CON SLIDER */}
            <PhotoSlider fotos={fotos} />

            {/* CONTENIDO */}
            <div className="p-6">

                {/* TÍTULO */}
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                    {titulo}
                </h3>

                {/* DESCRIPCIÓN */}
                <p className="text-gray-700 leading-relaxed mb-3">
                    {descripcion}
                </p>

                {/* ESTADO ACTUAL */}
                <p className="text-sm">
                    <span className="font-bold text-blue-900">Estado Actual: </span>
                    <span
                        className={`font-semibold ${estado === "En ejecución"
                            ? "text-green-600"
                            : estado === "En planificación"
                                ? "text-yellow-600"
                                : "text-gray-600"
                            }`}
                    >
                        {estado}
                    </span>
                </p>
            </div>
        </div>
    );
}
