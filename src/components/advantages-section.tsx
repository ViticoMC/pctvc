"use client"

import { useState } from "react"

const advantages = [
  {
    id: "exencion",
    title: "Exención",
    description: "Beneficio fiscal que elimina el pago de tributos durante los primeros cinco años",
    benefits: ["Ahorro", "Crecimiento", "Estabilidad", "Incentivo"],
    color: "#0d6a6a",
    icon: "tax",
  },
  {
    id: "importacion",
    title: "Importación",
    description: "Eliminación del pago de aranceles por importación de equipos necesarios",
    benefits: ["Equipamiento", "Aceleración", "Reducción", "Facilidad"],
    color: "#1a5f7a",
    icon: "import",
  },
  {
    id: "innovacion",
    title: "Innovación",
    description: "Entorno de ciencia e innovación que impulsa productividad y desarrollo",
    benefits: ["Creatividad", "Avance", "Colaboración", "Producción"],
    color: "#2d4a3e",
    icon: "innovation",
  },
]

function TaxIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <svg viewBox="0 0 80 80" className="w-16 h-16">
      {/* Document base */}
      <rect
        x="15"
        y="10"
        width="50"
        height="60"
        rx="4"
        fill="white"
        stroke="#0d6a6a"
        strokeWidth="2"
        className="transition-all duration-500"
        style={{
          transform: isHovered ? "scale(1.05)" : "scale(1)",
          transformOrigin: "center",
        }}
      />

      {/* Lines on document */}
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x="22"
          y={24 + i * 12}
          width={isHovered ? 36 : 20 + i * 8}
          height="4"
          rx="2"
          fill="#0d6a6a"
          opacity={0.3}
          className="transition-all duration-500"
          style={{ transitionDelay: `${i * 100}ms` }}
        />
      ))}

      {/* Checkmark circle */}
      <circle cx="55" cy="55" r={isHovered ? 14 : 12} fill="#0d6a6a" className="transition-all duration-500" />

      {/* Animated checkmark */}
      <path
        d="M48 55 L53 60 L62 50"
        stroke="white"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 20,
          strokeDashoffset: isHovered ? 0 : 20,
          transition: "stroke-dashoffset 0.6s ease",
        }}
      />

      {/* Floating coins when hovered */}
      {isHovered && (
        <>
          <circle cx="12" cy="30" r="6" fill="#fbbf24" className="animate-bounce" style={{ animationDelay: "0ms" }} />
          <circle cx="68" cy="25" r="5" fill="#fbbf24" className="animate-bounce" style={{ animationDelay: "150ms" }} />
          <circle cx="10" cy="50" r="4" fill="#fbbf24" className="animate-bounce" style={{ animationDelay: "300ms" }} />
        </>
      )}
    </svg>
  )
}

function ImportIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <svg viewBox="0 0 80 80" className="w-16 h-16">
      {/* Box base */}
      <path
        d="M15 35 L40 20 L65 35 L65 60 L40 75 L15 60 Z"
        fill="white"
        stroke="#1a5f7a"
        strokeWidth="2"
        className="transition-all duration-500"
        style={{
          transform: isHovered ? "translateY(-3px)" : "translateY(0)",
        }}
      />

      {/* Box top */}
      <path d="M15 35 L40 50 L65 35" stroke="#1a5f7a" strokeWidth="2" fill="none" />

      {/* Box center line */}
      <path d="M40 50 L40 75" stroke="#1a5f7a" strokeWidth="2" fill="none" />

      {/* Arrow coming down */}
      <g
        style={{
          transform: isHovered ? "translateY(0)" : "translateY(-10px)",
          opacity: isHovered ? 1 : 0.5,
          transition: "all 0.5s ease",
        }}
      >
        <path d="M40 5 L40 30" stroke="#1a5f7a" strokeWidth="3" strokeLinecap="round" />
        <path
          d="M32 22 L40 30 L48 22"
          stroke="#1a5f7a"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Sparkles when hovered */}
      {isHovered && (
        <>
          <circle cx="20" cy="25" r="2" fill="#1a5f7a" className="animate-ping" />
          <circle cx="60" cy="28" r="2" fill="#1a5f7a" className="animate-ping" style={{ animationDelay: "200ms" }} />
          <circle cx="70" cy="50" r="2" fill="#1a5f7a" className="animate-ping" style={{ animationDelay: "400ms" }} />
        </>
      )}
    </svg>
  )
}

function InnovationIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <svg viewBox="0 0 80 80" className="w-16 h-16">
      {/* Lightbulb base */}
      <path d="M30 50 L30 58 Q30 65 40 65 Q50 65 50 58 L50 50" fill="white" stroke="#2d4a3e" strokeWidth="2" />

      {/* Lightbulb glass */}
      <path
        d="M30 50 Q20 40 25 28 Q30 15 40 15 Q50 15 55 28 Q60 40 50 50"
        fill={isHovered ? "#fef3c7" : "white"}
        stroke="#2d4a3e"
        strokeWidth="2"
        className="transition-all duration-500"
      />

      {/* Filament */}
      <path
        d="M35 45 Q40 35 45 45"
        stroke="#2d4a3e"
        strokeWidth="2"
        fill="none"
        className="transition-all duration-300"
        style={{
          stroke: isHovered ? "#f59e0b" : "#2d4a3e",
        }}
      />

      {/* Rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <line
          key={angle}
          x1="40"
          y1="35"
          x2={40 + Math.cos((angle * Math.PI) / 180) * (isHovered ? 28 : 0)}
          y2={35 + Math.sin((angle * Math.PI) / 180) * (isHovered ? 28 : 0)}
          stroke="#f59e0b"
          strokeWidth="2"
          strokeLinecap="round"
          className="transition-all duration-500"
          style={{
            transitionDelay: `${i * 50}ms`,
            opacity: isHovered ? 0.8 : 0,
          }}
        />
      ))}

      {/* Gears around */}
      {isHovered && (
        <>
          <circle
            cx="12"
            cy="35"
            r="8"
            fill="none"
            stroke="#2d4a3e"
            strokeWidth="2"
            strokeDasharray="4 2"
            className="animate-spin"
            style={{ transformOrigin: "12px 35px", animationDuration: "3s" }}
          />
          <circle
            cx="68"
            cy="40"
            r="6"
            fill="none"
            stroke="#2d4a3e"
            strokeWidth="2"
            strokeDasharray="3 2"
            className="animate-spin"
            style={{ transformOrigin: "68px 40px", animationDuration: "2s", animationDirection: "reverse" }}
          />
        </>
      )}
    </svg>
  )
}

function AdvantageCard({
  advantage,
  index,
}: {
  advantage: (typeof advantages)[0]
  index: number
}) {
  const [isHovered, setIsHovered] = useState(false)

  const IconComponent =
    {
      tax: TaxIcon,
      import: ImportIcon,
      innovation: InnovationIcon,
    }[advantage.icon] || TaxIcon

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `fadeSlideUp 0.6s ease forwards`,
        animationDelay: `${index * 150}ms`,
        opacity: 0,
      }}
    >
      {/* Card */}
      <div
        className="relative bg-white rounded-2xl p-8 transition-all duration-500 overflow-hidden"
        style={{
          boxShadow: isHovered
            ? `0 25px 50px -12px ${advantage.color}30, 0 0 0 1px ${advantage.color}20`
            : "0 4px 20px rgba(0,0,0,0.08)",
          transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        }}
      >
        {/* Background gradient on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${advantage.color}05 0%, ${advantage.color}10 100%)`,
          }}
        />

        {/* Top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1 transition-all duration-500"
          style={{
            background: advantage.color,
            transform: isHovered ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500"
            style={{
              background: isHovered ? `${advantage.color}15` : "#f8fafc",
            }}
          >
            <IconComponent isHovered={isHovered} />
          </div>

          {/* Title */}
          <h3
            className="text-2xl font-bold mb-3 transition-colors duration-300"
            style={{ color: isHovered ? advantage.color : "#1e293b" }}
          >
            {advantage.title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 mb-6 leading-relaxed text-md">{advantage.description}</p>

          {/* Benefits list */}
          <div className="space-y-3">
            {advantage.benefits.map((benefit, i) => (
              <div
                key={benefit}
                className="flex items-center gap-3 transition-all duration-300"
                style={{
                  transform: isHovered ? "translateX(8px)" : "translateX(0)",
                  transitionDelay: `${i * 75}ms`,
                }}
              >
                {/* Animated check circle */}
                <div
                  className="relative w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: isHovered ? advantage.color : `${advantage.color}20`,
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5 transition-all duration-300"
                    style={{
                      stroke: isHovered ? "white" : advantage.color,
                    }}
                  >
                    <path
                      d="M5 12l5 5L19 7"
                      fill="none"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        strokeDasharray: 24,
                        strokeDashoffset: isHovered ? 0 : 24,
                        transition: "stroke-dashoffset 0.4s ease",
                        transitionDelay: `${i * 100 + 200}ms`,
                      }}
                    />
                  </svg>

                  {/* Ripple effect */}
                  {isHovered && (
                    <div
                      className="absolute inset-0 rounded-full animate-ping"
                      style={{
                        background: advantage.color,
                        opacity: 0.3,
                        animationDelay: `${i * 150}ms`,
                        animationDuration: "1s",
                      }}
                    />
                  )}
                </div>

                <span
                  className="font-medium transition-colors duration-300"
                  style={{
                    color: isHovered ? advantage.color : "#475569",
                  }}
                >
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Corner decoration */}
        <div
          className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full transition-all duration-500"
          style={{
            background: `${advantage.color}08`,
            transform: isHovered ? "scale(1.5)" : "scale(1)",
          }}
        />
      </div>
    </div>
  )
}

export function AdvantagesSection() {
  return (
    <section className="py-24 px-6 bg-linear-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-teal-700 font-semibold tracking-wider text-sm uppercase mb-4">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Principales Ventajas</h2>
          <div className="w-24 h-1 bg-linear-to-r from-teal-600 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageCard key={advantage.id} advantage={advantage} index={index} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
