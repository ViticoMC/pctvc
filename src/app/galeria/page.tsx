"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import PhotoIcon from "@/animated-icons/photo-icon"
import VideoIcon from "@/animated-icons/video-icon"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

const fotosData = [
    {
        src: "/slide/01.jpg",
        title: "Portada del PCTVC",
        descriptions: "Entrada al PCTVC",
    },
    {
        src: "/slide/07.jpg",
        title: "Reuniones de Cooperadoras",
        descriptions: "Reuniones de cooperadoras",
    },
    {
        src: "/slide/02.jpg",
        title: "Salón de recibimiento",
        descriptions: "Interiores de la empresa",
    },
    {
        src: "/noticias/embG3.jpg",
        title: "Visita del embajador de Guyana ",
        descriptions: "El embajador de Guyana visita Villa Clara",
    },
    {
        src: "/noticias/unidos.jpg",
        title: "Unidos por el Futuro",
        descriptions: "Visita el PCT Villa Clara Grecio Miguel Lorenzo Rodríguez , Coordinador del Proyecto “Resiliencia climática en ecosistemas agrícolas de Villa Clara (IRES)” y Laritza Torres Niebla ,Directora de Comercio Exterior ,Inversión Extranjera y Cooperación Internacional del Gobierno Provincial",
    },
    {
        src: "/eventos/CCI1.jpg",
        title: "CT Villa Clara en la V Convención Científica Internacional UCLV 2025",
        descriptions: "CT Villa Clara en la V Convención Científica Internacional UCLV 2025",
    },
    {
        src: "/eventos/feriaC2.jpg",
        title: "Expoventa de Camajuaní",
        descriptions: "Expoventa de Camajuaní",
    },
    {
        src: "/eventos/innova1.jpg",
        title: "El PCT Villa Clara en INNOVA",
        descriptions: "El PCT Villa Clara en INNOVA",
    },
    {
        src: "/eventos/feriaC4.jpg",
        title: "Expoventa de Camajuaní",
        descriptions: "Expoventa de Camajuaní",
    },
];


const videosData = [
    // {
    //     id: 1,
    //     src: "/videos/parque-presentacion.mp4",
    //     // poster: "/interview-directors-office.jpg",
    //     titulo: "Presentacion del Parque",
    //     fecha: "2024-06-01",
    // },
    {
        id: 2,
        src: "/videos/parque-video-anual.mp4",
        // poster: "/project-presentation-stage.jpg",
        titulo: "Video anuel del PCTVC",
        fecha: "2025-12-1",
    },
    // {
    //     id: 3,
    //     src: "/videos/video3.mp4",
    //     poster: "/modern-facility-tour.jpg",
    //     titulo: "Tour por las instalaciones",
    //     fecha: "2024-07-01",
    // },
]


export default function MediaSection() {
    const [activeTab, setActiveTab] = useState<"fotos" | "videos">("fotos")
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)


    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    return (
        <section className="w-full max-w-7xl mx-auto pt-24 px-4">
            {/* <Navbar /> */}
            {/* Header elegante */}
            <div className="text-center mb-8">
                <span className="text-teal-600 font-semibold tracking-widest text-md uppercase">Galería</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Nuestra Historia Visual</h2>
                <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-teal-500 mx-auto mt-4 rounded-full" />
            </div>

            {/* Contenedor principal con sombra elegante */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="relative">
                    {/* Fondo con patrón sutil */}
                    <div className="absolute inset-0 bg-linear-to-r from-blue-700 via-blue-600 to-teal-500">
                        <div className="absolute inset-0 opacity-10">
                            <svg width="100%" height="100%">
                                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <circle cx="20" cy="20" r="1" fill="white" />
                                </pattern>
                                <rect width="100%" height="100%" fill="url(#grid)" />
                            </svg>
                        </div>
                    </div>

                    {/* Contenido del header */}
                    <div className="relative flex flex-col items-center py-8 px-4">
                        {/* Tabs container */}
                        <div className="flex gap-2 p-1.5 bg-white/10 backdrop-blur-sm rounded-2xl">
                            {/* Tab Fotos */}
                            <button
                                onClick={() => setActiveTab("fotos")}
                                className={`
                  relative flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg
                  transition-all duration-500 ease-out overflow-hidden
                  ${activeTab === "fotos"
                                        ? "bg-white text-blue-700 shadow-xl scale-105"
                                        : "text-white hover:bg-white/10"
                                    }
                `}
                            >
                                {activeTab === "fotos" && (
                                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                                        <div
                                            className="absolute -inset-full bg-linear-to-r from-transparent via-blue-100/50 to-transparent"
                                            style={{ animation: "shimmer 2s infinite" }}
                                        />
                                    </div>
                                )}
                                <PhotoIcon isActive={activeTab === "fotos"} />
                                <span className="relative z-10">Fotos</span>
                                {activeTab === "fotos" && (
                                    <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-600 text-xs font-bold rounded-full">
                                        {fotosData.length}
                                    </span>
                                )}
                            </button>

                            {/* Tab Videos */}
                            <button
                                onClick={() => setActiveTab("videos")}
                                className={`
                  relative flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg
                  transition-all duration-500 ease-out overflow-hidden
                  ${activeTab === "videos"
                                        ? "bg-white text-teal-600 shadow-xl scale-105"
                                        : "text-white hover:bg-white/10"
                                    }
                `}
                            >
                                {activeTab === "videos" && (
                                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                                        <div
                                            className="absolute -inset-full bg-linear-to-r from-transparent via-teal-100/50 to-transparent"
                                            style={{ animation: "shimmer 2s infinite" }}
                                        />
                                    </div>
                                )}
                                <VideoIcon isActive={activeTab === "videos"} />
                                <span className="relative z-10">Videos</span>
                                {activeTab === "videos" && (
                                    <span className="ml-2 px-2 py-0.5 bg-teal-100 text-teal-600 text-xs font-bold rounded-full">
                                        {videosData.length}
                                    </span>
                                )}
                            </button>
                        </div>

                        {/* Indicador decorativo */}
                        <div className="flex gap-1.5 mt-6">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${i === 2 ? "w-8 bg-white" : "w-1.5 bg-white/40"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>


                <div className="p-8 bg-gray-50">

                    {/* ================== */}
                    {/* GRID DE FOTOS     */}
                    {/* ================== */}
                    {activeTab === "fotos" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {fotosData.map((foto, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-xl shadow hover:shadow-xl transition cursor-pointer"
                                    onClick={() => openLightbox(index)}
                                >
                                    <div className="relative aspect-4/3">
                                        <Image
                                            src={foto.src}
                                            alt={foto.descriptions}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="absolute bottom-0 w-full p-3 bg-linear-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition">
                                        <p className="font-semibold text-sm">{foto.descriptions}</p>
                                        {/* <span className="text-xs opacity-80">{foto.fecha}</span> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* ================== */}
                    {/* GRID DE VIDEOS     */}
                    {/* ================== */}
                    {activeTab === "videos" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {videosData.map((video) => (
                                <div key={video.id} className="bg-white p-4 rounded-xl shadow">
                                    <video
                                        className="w-full rounded-xl"
                                        // poster={video.poster}
                                        controls
                                        preload="metadata"
                                    >
                                        <source src={video.src} type="video/mp4" />
                                    </video>
                                    <h3 className="mt-2 font-bold">{video.titulo}</h3>
                                    <p className="text-sm text-gray-500">{video.fecha}</p>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>

            {/* ======================= */}
            {/* LIGHTBOX INTEGRADO     */}
            {/* ======================= */}
            {lightboxIndex !== null && (
                <Lightbox
                    open={lightboxIndex !== null}
                    index={lightboxIndex}
                    close={closeLightbox}
                    slides={fotosData}
                    plugins={[Thumbnails, Captions, Zoom]}
                    captions={{
                        showToggle: true,
                        descriptionTextAlign: "center",
                        descriptionMaxLines: 3,
                    }}
                />
            )}
            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
        </section>
    )
}



