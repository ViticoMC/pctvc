"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

function FinanciacionIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-16 h-16"

    >
      {/* Monedas cayendo animadas */}
      <svg viewBox="0 0 64 64" className="w-full h-full">
        {/* Moneda principal */}
        <circle
          cx="32"
          cy="32"
          r="14"
          className={cn(
            "fill-amber-400 stroke-amber-500 stroke-2 transition-all duration-500",
            isHovered && "fill-amber-300",
          )}
        />
        <text x="32" y="37" textAnchor="middle" className="fill-amber-700 text-sm font-bold">
          $
        </text>

        {/* Monedas flotantes */}
        <g className={cn("transition-all duration-700", isHovered ? "opacity-100" : "opacity-60")}>
          <circle
            cx="18"
            cy="20"
            r="8"
            className="fill-amber-300 stroke-amber-400 stroke-1"
            style={{
              animation: isHovered ? "float 1.5s ease-in-out infinite" : "none",
            }}
          />
          <circle
            cx="48"
            cy="18"
            r="6"
            className="fill-amber-200 stroke-amber-300 stroke-1"
            style={{
              animation: isHovered ? "float 1.8s ease-in-out infinite 0.3s" : "none",
            }}
          />
          <circle
            cx="50"
            cy="44"
            r="7"
            className="fill-amber-300 stroke-amber-400 stroke-1"
            style={{
              animation: isHovered ? "float 1.6s ease-in-out infinite 0.5s" : "none",
            }}
          />
        </g>

        {/* Flechas de crecimiento */}
        <path
          d="M10 50 L10 40 L16 46"
          className={cn(
            "fill-none stroke-emerald-500 stroke-2 transition-all duration-500",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          )}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  )
}

function RecursosIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-16 h-16"

    >
      <svg viewBox="0 0 64 64" className="w-full h-full overflow-visible">
        {/* Engranaje principal */}
        <g
          className="origin-center"
          style={{
            animation: isHovered ? "spin 3s linear infinite" : "none",
            transformOrigin: "32px 32px",
          }}
        >
          <path
            d="M32 18 L35 22 L40 22 L42 26 L46 28 L46 32 L46 36 L42 38 L40 42 L35 42 L32 46 L29 42 L24 42 L22 38 L18 36 L18 32 L18 28 L22 26 L24 22 L29 22 Z"
            className="fill-emerald-500 stroke-emerald-600 stroke-1"
          />
          <circle cx="32" cy="32" r="6" className="fill-emerald-700" />
        </g>

        {/* Engranaje pequeño 1 */}
        <g
          className="origin-center"
          style={{
            animation: isHovered ? "spinReverse 2s linear infinite" : "none",
            transformOrigin: "50px 18px",
          }}
        >
          <path
            d="M50 12 L52 14 L55 14 L56 16 L58 17 L58 19 L58 21 L56 22 L55 24 L52 24 L50 26 L48 24 L45 24 L44 22 L42 21 L42 19 L42 17 L44 16 L45 14 L48 14 Z"
            className={cn(
              "fill-teal-400 stroke-teal-500 stroke-1 transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-50",
            )}
          />
          <circle cx="50" cy="18" r="3" className="fill-teal-600" />
        </g>

        {/* Chispas/partículas de energía */}
        {isHovered && (
          <>
            <circle cx="14" cy="28" r="2" className="fill-yellow-400 animate-pulse" />
            <circle
              cx="54"
              cy="40"
              r="1.5"
              className="fill-yellow-300 animate-pulse"
              style={{ animationDelay: "0.2s" }}
            />
            <circle
              cx="20"
              cy="50"
              r="1.5"
              className="fill-yellow-400 animate-pulse"
              style={{ animationDelay: "0.4s" }}
            />
          </>
        )}
      </svg>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  )
}

function EspaciosIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-16 h-16"

    >
      <svg viewBox="0 0 64 64" className="w-full h-full overflow-visible">
        {/* Edificio principal */}
        <rect
          x="20"
          y="20"
          width="24"
          height="30"
          rx="2"
          className={cn(
            "fill-slate-600 stroke-slate-700 stroke-1 transition-all duration-500",
            isHovered && "fill-slate-500",
          )}
        />

        {/* Ventanas animadas */}
        <g>
          {[
            { x: 24, y: 24, delay: 0 },
            { x: 34, y: 24, delay: 0.1 },
            { x: 24, y: 32, delay: 0.2 },
            { x: 34, y: 32, delay: 0.3 },
            { x: 24, y: 40, delay: 0.4 },
            { x: 34, y: 40, delay: 0.5 },
          ].map((window, i) => (
            <rect
              key={i}
              x={window.x}
              y={window.y}
              width="6"
              height="5"
              rx="1"
              className={cn("transition-all duration-300", isHovered ? "fill-amber-300" : "fill-slate-400")}
              style={{
                animation: isHovered ? `windowGlow 1.5s ease-in-out infinite ${window.delay}s` : "none",
              }}
            />
          ))}
        </g>

        {/* Puerta */}
        <rect x="29" y="44" width="6" height="6" rx="1" className="fill-slate-800" />

        {/* Personas entrando/saliendo */}
        <g
          className={cn(
            "transition-all duration-700",
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4",
          )}
        >
          <circle cx="16" cy="46" r="3" className="fill-blue-500" />
          <rect x="14" y="49" width="4" height="6" rx="1" className="fill-blue-500" />
        </g>
        <g
          className={cn(
            "transition-all duration-700 delay-200",
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4",
          )}
        >
          <circle cx="50" cy="46" r="3" className="fill-violet-500" />
          <rect x="48" y="49" width="4" height="6" rx="1" className="fill-violet-500" />
        </g>

        {/* Señales de conexión */}
        {isHovered && (
          <g className="animate-pulse">
            <path d="M28 14 Q32 8 36 14" className="fill-none stroke-cyan-400 stroke-2" strokeLinecap="round" />
            <path d="M25 10 Q32 2 39 10" className="fill-none stroke-cyan-300 stroke-1.5" strokeLinecap="round" />
          </g>
        )}
      </svg>

      <style jsx>{`
        @keyframes windowGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; filter: brightness(1.2); }
        }
      `}</style>
    </div>
  )
}

function RiesgosIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-16 h-16"
    >
      <svg viewBox="0 0 64 64" className="w-full h-full overflow-visible">
        {/* Escudo principal */}
        <path
          d="M32 8 L50 16 L50 32 C50 44 42 52 32 56 C22 52 14 44 14 32 L14 16 Z"
          className={cn(
            "fill-indigo-500 stroke-indigo-600 stroke-2 transition-all duration-500",
            isHovered && "fill-indigo-400",
          )}
        />

        {/* Check mark animado */}
        <path
          d="M24 32 L30 38 L42 26"
          className={cn(
            "fill-none stroke-white stroke-3 transition-all duration-500",
            isHovered ? "stroke-dashoffset-0" : "",
          )}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: isHovered ? "30" : "30",
            strokeDashoffset: isHovered ? "0" : "30",
            transition: "stroke-dashoffset 0.6s ease-out",
          }}
        />

        {/* Ondas de protección */}
        {isHovered && (
          <g>
            <path
              d="M32 4 L54 14 L54 32 C54 46 44 56 32 60"
              className="fill-none stroke-indigo-300 stroke-1 animate-pulse opacity-50"
              strokeLinecap="round"
            />
            <path
              d="M32 4 L10 14 L10 32 C10 46 20 56 32 60"
              className="fill-none stroke-indigo-300 stroke-1 animate-pulse opacity-50"
              strokeLinecap="round"
            />
          </g>
        )}

        {/* Partículas de seguridad */}
        {isHovered && (
          <>
            <circle
              cx="8"
              cy="24"
              r="2"
              className="fill-green-400 animate-ping"
              style={{ animationDuration: "1.5s" }}
            />
            <circle
              cx="56"
              cy="24"
              r="2"
              className="fill-green-400 animate-ping"
              style={{ animationDuration: "1.5s", animationDelay: "0.3s" }}
            />
            <circle
              cx="32"
              cy="62"
              r="2"
              className="fill-green-400 animate-ping"
              style={{ animationDuration: "1.5s", animationDelay: "0.6s" }}
            />
          </>
        )}
      </svg>
    </div>
  )
}

const services = [
  {
    id: "financiacion",
    title: "Financiación",
    Icon: FinanciacionIcon,
    gradient: "from-amber-500 to-orange-500",
    bgGlow: "bg-amber-500/20",
  },
  {
    id: "recursos",
    title: "Recursos",
    Icon: RecursosIcon,
    gradient: "from-emerald-500 to-teal-500",
    bgGlow: "bg-emerald-500/20",
  },
  {
    id: "espacios",
    title: "Espacios",
    Icon: EspaciosIcon,
    gradient: "from-slate-500 to-slate-700",
    bgGlow: "bg-slate-500/20",
  },
  {
    id: "riesgos",
    title: "Protección",
    Icon: RiesgosIcon,
    gradient: "from-indigo-500 to-violet-500",
    bgGlow: "bg-indigo-500/20",
  },
]

export function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-24 bg-linear-to-b from-slate-50 to-background relative overflow-hidden">
      {/* Fondo decorativo animado */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header minimalista */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Soluciones Integrales</h2>
        </div>

        {/* Grid de servicios animados */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const isHovered = hoveredId === service.id
            return (
              <div
                key={service.id}
                data-usal={`zoomin  duration-300 delay-${index * 200}`}

                className={cn(
                  "relative group cursor-pointer",
                  "transition-all duration-700 ease-out",
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Glow de fondo */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-3xl blur-2xl transition-all duration-500",
                    service.bgGlow,
                    isHovered ? "opacity-100 scale-110" : "opacity-0 scale-100",
                  )}
                />

                {/* Card */}
                <div
                  className={cn(
                    "relative flex flex-col items-center py-10 px-6 rounded-3xl",
                    "bg-card/80 backdrop-blur-sm border border-border/50",
                    "transition-all duration-500 ease-out",
                    isHovered && "shadow-2xl shadow-black/10 -translate-y-3 border-transparent bg-card",
                  )}
                >
                  {/* Icono animado */}
                  <div className="mb-4">
                    <service.Icon isHovered={isHovered} />
                  </div>

                  {/* Título */}
                  <h3
                    className={cn(
                      "font-semibold text-lg text-foreground transition-all duration-300",
                      isHovered && "scale-105",
                    )}
                  >
                    {service.title}
                  </h3>

                  {/* Línea decorativa */}
                  <div
                    className={cn(
                      "absolute bottom-0 left-1/2 -translate-x-1/2 h-1 rounded-full",
                      "bg-linear-to-r transition-all duration-500",
                      service.gradient,
                      isHovered ? "w-20 opacity-100" : "w-0 opacity-0",
                    )}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
