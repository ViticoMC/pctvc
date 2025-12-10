"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import PhotoIcon from "@/animated-icons/photo-icon"
import { VideoIcon } from "lucide-react"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";



const fotosData = [
    {
        src: "/slide/slide_1.jpg",
        title: "Modern Interface",
        descriptions: "A sleek and responsive UI designed for optimal user experience.",
    },
    {
        src: "/slide/slide_1.jpg",

        title: "High Performance",
        descriptions: "Optimized for speed with efficient data loading and caching.",
    },
    {
        src: "/slide/slide_1.jpg",

        title: "Secure Access",
        descriptions: "Advanced authentication mechanisms to keep user data protected.",
    },
    {
        src: "/images/asset4.jpg",
        title: "Cloud Integration",
        descriptions: "Seamless connectivity with cloud services for scalable workflows.",
    },
    {
        src: "/images/asset5.jpg",
        title: "Smart Analytics",
        descriptions: "Real-time insights powered by dynamic data visualization tools.",
    },
    {
        src: "/images/asset6.jpg",
        title: "Mobile Ready",
        descriptions: "Fully responsive layout crafted for all modern mobile devices.",
    },
    {
        src: "/images/asset7.jpg",
        title: "Customizable Themes",
        descriptions: "Multiple theme options to match your brand identity and style.",
    },
    {
        src: "/images/asset8.jpg",
        title: "API Connectivity",
        descriptions: "Robust API support enabling third-party integrations effortlessly.",
    },
    {
        src: "/images/asset9.jpg",
        title: "Optimized Storage",
        descriptions: "Efficient management of files and media with cloud support.",
    },
    {
        src: "/images/asset10.jpg",
        title: "Scalable Architecture",
        descriptions: "Designed to grow with your application and increased traffic.",
    },
];


const videosData = [
    {
        id: 1,
        src: "/videos/video1.mp4",
        poster: "/interview-directors-office.jpg",
        titulo: "Entrevista a Directores",
        fecha: "2024-06-01",
    },
    {
        id: 2,
        src: "/videos/video2.mp4",
        poster: "/project-presentation-stage.jpg",
        titulo: "Presentación del Proyecto X",
        fecha: "2024-06-15",
    },
    {
        id: 3,
        src: "/videos/video3.mp4",
        poster: "/modern-facility-tour.jpg",
        titulo: "Tour por las instalaciones",
        fecha: "2024-07-01",
    },
]



export default function MediaSection() {
    const [activeTab, setActiveTab] = useState<"fotos" | "videos">("fotos");
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);


    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    return (
        <section className="w-full max-w-7xl mx-auto my-16 px-4">

            {/* HEADER */}
            <div className="text-center mb-8">
                <span className="text-teal-600 font-semibold tracking-widest text-sm uppercase">Galería</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Nuestra Historia Visual</h2>
                <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-teal-500 mx-auto mt-4 rounded-full" />
            </div>

            {/* CONTENEDOR */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="relative py-8 px-4 flex justify-center">

                    {/* TABS */}
                    <div className="flex gap-2 p-1.5 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <button
                            onClick={() => setActiveTab("fotos")}
                            className={`
                                px-6 py-3 rounded-xl font-semibold text-lg
                                transition-all duration-300 
                                ${activeTab === "fotos" ? "bg-white text-blue-700 shadow-xl" : "text-white"}
                            `}
                        >
                            Fotos ({fotosData.length})
                        </button>

                        <button
                            onClick={() => setActiveTab("videos")}
                            className={`
                                px-6 py-3 rounded-xl font-semibold text-lg
                                transition-all duration-300 
                                ${activeTab === "videos" ? "bg-white text-teal-700 shadow-xl" : "text-white"}
                            `}
                        >
                            Videos ({videosData.length})
                        </button>
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

                                    <div className="absolute bottom-0 w-full p-3 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition">
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
                                        poster={video.poster}
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
        </section>
    );
}




