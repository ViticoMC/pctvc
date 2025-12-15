"use client";

import Slider from "react-slick";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { eventosData } from "@/moock-data/eventos";
import Link from "next/link";

interface CalendarEvent {
    id: number;
    title: string;
    descripcion: string;
    fecha: string;
    fotos: string[] | null;
    categoria: string;
    direccion: string;
}

const eventsData: CalendarEvent[] = eventosData.map((evento) => ({
    id: evento.id,
    title: evento.title,
    descripcion: evento.descripcion,
    fecha: evento.fecha,
    fotos: evento.fotos,
    categoria: evento.categoria,
    direccion: evento.direccion,
}));

const formatFechaLargo = (fechaStr: string): string => {
    const [dia, mes, año] = fechaStr.split("/");
    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    return `${parseInt(dia)} de ${meses[parseInt(mes) - 1]} de ${año}`;
};

const DAYS_OF_WEEK = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const MONTHS = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

export default function InteractiveCalendar() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) setIsVisible(true);
        }, { threshold: 0.1 });

        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    const getDaysInMonth = (date: Date) =>
        new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const getFirstDayOfMonth = (date: Date) =>
        new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    const getEventsForDay = (day: number) => {
        const dateStr = `${String(day).padStart(2, "0")}/${String(
            currentDate.getMonth() + 1
        ).padStart(2, "0")}/${currentDate.getFullYear()}`;

        return eventsData.filter((ev) => ev.fecha === dateStr);
    };

    const goToPreviousMonth = () =>
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
        );

    const goToNextMonth = () =>
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
        );

    const totalDays = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const totalCells = Math.ceil((totalDays + firstDay) / 7) * 7;

    const calendarDays: (number | null)[] = [];

    for (let i = 0; i < totalCells; i++) {
        const dayNumber = i - firstDay + 1;
        calendarDays.push(dayNumber > 0 && dayNumber <= totalDays ? dayNumber : null);
    }

    return (
        <section ref={sectionRef} id="calendario" className="pb-16 pt-20 bg-background">

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-6">
                    <span
                        className={`inline-block text-accent font-semibold text-sm uppercase tracking-wide transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                    >
                        Calendario
                    </span>

                    <h2
                        className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                    >
                        Eventos Programados
                    </h2>
                </div>

                {/* Month Navigation */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-primary text-primary-foreground rounded-2xl mb-6 shadow-lg">
                    <button onClick={goToPreviousMonth} className="p-2 rounded-full hover:bg-white/20 transition">
                        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>

                    <h3 className="text-lg sm:text-2xl font-semibold tracking-wide text-center">
                        {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </h3>

                    <button onClick={goToNextMonth} className="p-2 rounded-full hover:bg-white/20 transition">
                        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                </div>

                {/* -------------------- */}
                {/* GOOGLE CALENDAR MOBILE VIEW */}
                {/* -------------------- */}

                <div className="sm:hidden space-y-4">
                    {Array.from({ length: totalDays }).map((_, i) => {
                        const day = i + 1;
                        const events = getEventsForDay(day);

                        return (
                            <div
                                key={day}
                                className="bg-card shadow-md rounded-xl p-4 border border-border"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-xl font-bold text-foreground">
                                        {day}
                                    </h4>
                                    {events.length > 0 && (
                                        <span className="text-xs bg-accent/20 px-2 py-1 rounded-full text-accent">
                                            {events.length} evento(s)
                                        </span>
                                    )}
                                </div>

                                {events.length === 0 ? (
                                    <p className="text-sm text-muted-foreground">Sin eventos este día.</p>
                                ) : (
                                    <div className="space-y-4">
                                        {events.map((ev) => (
                                            <div
                                                key={ev.id}
                                                className="rounded-xl border border-primary/20 bg-primary/5 p-3 shadow-sm"
                                            >
                                                <h3 className="text-lg font-semibold text-primary">
                                                    {ev.title}
                                                </h3>

                                                <p className="text-sm text-muted-foreground leading-snug mt-1">
                                                    {ev.descripcion}
                                                </p>

                                                <div className="flex items-center gap-2 mt-2">
                                                    <span className="px-2 py-1 rounded-full text-xs bg-primary/20 text-primary">
                                                        {ev.categoria}
                                                    </span>
                                                    <span className="px-2 py-1 rounded-full text-xs bg-accent/20 text-accent">
                                                        {ev.direccion}
                                                    </span>
                                                </div>

                                                <Link
                                                    href={`/eventos/${ev.id}`}
                                                    className="text-primary underline text-sm mt-2 inline-block"
                                                >
                                                    Ver más detalles
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* -------------------- */}
                {/* DESKTOP CALENDAR GRID */}
                {/* -------------------- */}

                <div
                    className={`hidden sm:block bg-card rounded-3xl shadow-2xl border border-border overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    {/* Days of Week */}
                    <div className="grid grid-cols-7 bg-muted/40 border-b border-border">
                        {DAYS_OF_WEEK.map((day) => (
                            <div key={day} className="py-3 text-center font-semibold text-muted-foreground">
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-7">
                        {calendarDays.map((day, index) => {
                            const events = day ? getEventsForDay(day) : [];

                            return (
                                <div
                                    key={index}
                                    className={`min-h-[100px] border-2 p-2 ${events.length > 0 ? `border-l-4 border-l-green-500 bg-green-100 ` : ""} ${day ? "bg-background" : "bg-muted/20"
                                        }`}
                                >
                                    {day && (
                                        <div >
                                            <div className="w-8 h-8 flex items-center justify-center rounded-full font-semibold mb-2">
                                                {day}
                                            </div>

                                            {/* Mini events */}
                                            <div className="space-y-2">
                                                {events.slice(0, 2).map((ev) => (
                                                    <Link
                                                        key={ev.id}
                                                        href={`/eventos/${ev.id}`}
                                                        className="block bg-primary/10 text-primary px-2 py-1 rounded-md truncate text-sm hover:bg-primary/20 transition"
                                                    >
                                                        {ev.title}
                                                    </Link>
                                                ))}

                                                {events.length > 2 && (
                                                    <span className="text-xs text-muted-foreground">
                                                        +{events.length - 2} más
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
