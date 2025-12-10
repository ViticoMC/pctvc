"use client";

import Slider from "react-slick";
import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CalendarEvent {
    id: number
    title: string
    description: string
    date: string
    images: string[]
}

const eventsData: CalendarEvent[] = [
    {
        id: 1,
        title: "Lanzamiento Web",
        description: "Publicación de la web oficial.",
        date: "2025-12-23",
        images: ["/eventos/main-page.png"],
    },
    {
        id: 2,
        title: "Sesión de Fotos",
        description: "Producción visual para redes sociales.",
        date: "2025-02-04",
        images: ["/professional-photo-session.jpg", "/creative-photography-studio.jpg"],
    },
    {
        id: 3,
        title: "Reunión Creativa",
        description: "Brainstorming para la campaña de marzo.",
        date: "2025-02-12",
        images: ["/creative-meeting-brainstorm.jpg"],
    },
    {
        id: 4,
        title: "Entrega de Proyecto",
        description: "Presentación final al cliente.",
        date: "2025-02-21",
        images: ["/project-presentation-meeting.jpg"],
    },
]

const DAYS_OF_WEEK = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
const MONTHS = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
]

export default function InteractiveCalendar() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [currentDate, setCurrentDate] = useState(new Date(2025, 1, 1)) // Feb 2025
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const getDaysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    }

    const getFirstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    }

    const getEventsForDay = (day: number) => {
        const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
        return eventsData.filter((event) => event.date === dateStr)
    }

    const goToPreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
    }

    const goToNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
    }

    const openEventModal = (event: CalendarEvent) => {
        setSelectedEvent(event)
        setCurrentSlide(0)
    }

    const closeModal = () => {
        setSelectedEvent(null)
        setCurrentSlide(0)
    }

    const nextSlide = () => {
        if (selectedEvent) {
            setCurrentSlide((prev) => (prev + 1) % selectedEvent.images.length)
        }
    }

    const prevSlide = () => {
        if (selectedEvent) {
            setCurrentSlide((prev) => (prev - 1 + selectedEvent.images.length) % selectedEvent.images.length)
        }
    }

    const daysInMonth = getDaysInMonth(currentDate)
    const firstDayOfMonth = getFirstDayOfMonth(currentDate)
    const totalCells = Math.ceil((daysInMonth + firstDayOfMonth) / 7) * 7

    const calendarDays = []
    for (let i = 0; i < totalCells; i++) {
        const dayNumber = i - firstDayOfMonth + 1
        if (dayNumber > 0 && dayNumber <= daysInMonth) {
            calendarDays.push(dayNumber)
        } else {
            calendarDays.push(null)
        }
    }

    return (
        <section ref={sectionRef} id="calendario" className="pb-10 pt-22  bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-4">
                    <span
                        className={`inline-block text-accent font-semibold text-sm tracking-wider uppercase  transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                    >
                        Calendario
                    </span>
                    <h2
                        className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                    >
                        Eventos del Mes
                    </h2>
                </div>

                {/* Calendar Container */}
                <div
                    className={`bg-card rounded-3xl shadow-xl border border-border overflow-hidden transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    {/* Month Navigation */}
                    <div className="flex items-center justify-between px-6 py-5 bg-primary text-primary-foreground">
                        <button
                            onClick={goToPreviousMonth}
                            className="p-2 rounded-full hover:bg-white/20 transition-colors"
                            aria-label="Mes anterior"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                        <h3 className="text-xl sm:text-2xl font-semibold">
                            {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
                        </h3>
                        <button
                            onClick={goToNextMonth}
                            className="p-2 rounded-full hover:bg-white/20 transition-colors"
                            aria-label="Mes siguiente"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Days of Week Header */}
                    <div className="grid grid-cols-7 bg-muted/50">
                        {DAYS_OF_WEEK.map((day) => (
                            <div
                                key={day}
                                className="py-3 text-center text-sm font-semibold text-muted-foreground border-b border-border"
                            >
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7">
                        {calendarDays.map((day, index) => {
                            const events = day ? getEventsForDay(day) : []
                            const isToday =
                                day === new Date().getDate() &&
                                currentDate.getMonth() === new Date().getMonth() &&
                                currentDate.getFullYear() === new Date().getFullYear()

                            return (
                                <div
                                    key={index}
                                    className={`min-h-[100px] sm:min-h-[120px] p-2 border-b border-r  last:border-r-0 ${day ? "bg-card" : "bg-muted/30"
                                        } ${index % 7 === 0 ? "border-l-0" : ""}  ${events.length > 0 ? "border-l-4 border-l-accent" : ""}`}
                                >
                                    {day && (
                                        <>
                                            <div
                                                className={`text-sm font-medium mb-1 w-7 h-7 flex items-center justify-center rounded-full ${isToday ? "bg-accent text-accent-foreground" : "text-foreground"
                                                    }`}
                                            >
                                                {day}
                                            </div>
                                            <div className="space-y-1">
                                                {events.slice(0, 2).map((event) => (
                                                    <button
                                                        key={event.id}
                                                        onClick={() => openEventModal(event)}
                                                        className="cursor-pointer w-full text-left px-2 py-1 text-xs rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors truncate font-medium"
                                                    >
                                                        {event.title}
                                                    </button>
                                                ))}
                                                {events.length > 2 && (
                                                    <span className="text-xs text-muted-foreground px-2">+{events.length - 2} más</span>
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Legend */}
                <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-accent"></div>
                        <span>Hoy</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-primary/10"></div>
                        <span>Evento</span>
                    </div>
                </div>
            </div>

            {/* Event Modal */}
            {selectedEvent && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div
                        className="bg-card rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header Slider */}
                        <div className="relative h-56 sm:h-64 bg-muted">
                            {selectedEvent.images.length > 1 ? (
                                <Slider
                                    infinite={true}
                                    slidesToShow={1}
                                    slidesToScroll={1}
                                    autoplay={true}
                                    autoplaySpeed={3500}
                                    pauseOnHover={true}
                                    arrows={false}
                                    dots={true}
                                    customPaging={() => (
                                        <div className="w-2 h-2 bg-white/50 rounded-full" />
                                    )}
                                    dotsClass="slick-dots !bottom-3"
                                >
                                    {selectedEvent.images.map((img, index) => (
                                        <div key={index} className="relative h-56 sm:h-64">
                                            <img
                                                src={img || "/placeholder.svg"}
                                                alt={`${selectedEvent.title} - ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            ) : (
                                <img
                                    src={selectedEvent.images[0] || "/placeholder.svg"}
                                    alt={selectedEvent.title}
                                    className="w-full h-full object-cover"
                                />
                            )}

                            {/* Cerrar */}
                            <button
                                onClick={closeModal}
                                className="absolute top-3 right-3 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
                                aria-label="Cerrar modal"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="mb-3">
                                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                                    {new Date(selectedEvent.date).toLocaleDateString("es-ES", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-foreground mb-3">{selectedEvent.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{selectedEvent.description}</p>

                            <div className="mt-6 flex gap-3">
                                <Button variant="outline" onClick={closeModal}>
                                    Cerrar
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </section>
    )
}
