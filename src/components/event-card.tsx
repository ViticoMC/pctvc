"use client"

import { Evento } from "@/type/eventos";
import Slider from "react-slick";
import { Clock, MapPin } from "lucide-react";
import PhotoSlider from "./photo-slider";

interface Props {
    event: Evento;
    index: number;
    isVisible: boolean;
}

export default function EventoCard({ event, index, isVisible }: Props) {
    const sliderSettings = {
        dots: event.fotos && event.fotos.length > 1,
        infinite: event.fotos && event.fotos.length > 1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: event.fotos && event.fotos.length > 1,
        autoplaySpeed: 4000,
        arrows: event.fotos && event.fotos.length > 1,
        pauseOnHover: true,
    };

    return (
        <div
            key={event.id}
            className={`
        group bg-card rounded-2xl shadow-md border border-border
        hover:shadow-xl hover:border-accent/40
        transition-all duration-500
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
            style={{ transitionDelay: `${(index + 3) * 100}ms` }}
        >
            {/* CARRUSEL DE FOTOS */}
            <PhotoSlider fotos={event.fotos || []} />


            <div className="p-6 sm:p-8 flex flex-col gap-4">
                {/* TAG */}
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium tracking-wide shadow-sm w-fit">
                    {event.categoria}
                </span>

                {/* TITLE */}
                <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {event.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed  line-clamp-3">
                    {event.descripcion}
                </p>

                {/* METADATA */}
                <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-6 text-sm text-muted-foreground mt-2">
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary/70" />
                        <span className="font-medium">{event.fecha}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary/70" />
                        <span className="font-medium">{event.direccion}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
