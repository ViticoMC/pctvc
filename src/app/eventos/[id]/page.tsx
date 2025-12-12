
import { eventosData } from '@/moock-data/eventos';
import { Evento } from '@/type/eventos';
import { BackButton } from '@/components/back-button';
import { PageHeader } from '@/components/page-header';
import Image from 'next/image';
import { Calendar, MapPin } from 'lucide-react';
import { notFound } from 'next/navigation';
import Slider from "react-slick";
import PhotoSlider from '@/components/photo-slider';


interface EventoDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const formatFecha = (fechaStr: string): string => {
    // Convierte "15/01/2025" a "15 de enero de 2025"
    const [dia, mes, año] = fechaStr.split('/');
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    return `${parseInt(dia)} de ${meses[parseInt(mes) - 1]} de ${año}`;
};

export default async function EventoDetailsPage({
    params,
}: EventoDetailsPageProps) {
    const { id } = await params;
    const evento: Evento | undefined = eventosData.find(
        (item: Evento) => item.id === parseInt(id)
    );

    if (!evento) {
        notFound();
    }

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: evento.fotos && evento.fotos.length > 1,
        autoplaySpeed: 2000,
        arrows: false,
    };

    return (
        <main className="min-h-screen bg-linear-to-b from-white to-gray-50">
            {/* Header */}
            <PageHeader
                title={evento.title}
                subtitle={evento.categoria}
            />

            <div className="container mx-auto px-4 py-8 max-w-4xl">
                {/* Back Button */}
                <BackButton />

                {/* Galería de Fotos */}
                <PhotoSlider fotos={evento.fotos || []} />

                {/* Contenido Principal */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    {/* Información Meta */}
                    <div className="flex flex-wrap gap-6 mb-8 pb-6 border-b border-gray-200">
                        <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="w-5 h-5 text-blue-600" />
                            <span className="font-medium">{formatFecha(evento.fecha)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-5 h-5 text-blue-600" />
                            <span className="font-medium">{evento.direccion}</span>
                        </div>
                        <div className="inline-block">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                                {evento.categoria}
                            </span>
                        </div>
                    </div>

                    {/* Descripción */}
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">Detalles del Evento</h2>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                            {evento.descripcion}
                        </p>
                    </div>
                </div>

                {/* Información Adicional */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Categoría */}
                    <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Categoría</h3>
                        <p className="text-blue-700 font-semibold">{evento.categoria}</p>
                    </div>

                    {/* Fecha */}
                    <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Fecha del Evento</h3>
                        <p className="text-green-700 font-semibold">{formatFecha(evento.fecha)}</p>
                    </div>
                </div>

                {/* Botón de Volver */}
                {/* <div className="mb-8">
                    <BackButton />
                </div> */}
            </div>
        </main>
    );
}
