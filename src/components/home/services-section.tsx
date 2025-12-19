
import { cn } from "@/lib/utils"

function FinanciacionIcon() {
  return (
    <div className="relative w-16 h-16">
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <circle
          cx="32"
          cy="32"
          r="14"
          className="fill-amber-400 stroke-amber-500 stroke-2 transition-all duration-500 group-hover:fill-amber-300"
        />
        <text x="32" y="37" textAnchor="middle" className="fill-amber-700 text-sm font-bold">
          $
        </text>

        <g className="transition-all duration-700 opacity-60 group-hover:opacity-100">
          <circle
            cx="18"
            cy="20"
            r="8"
            className="fill-amber-300 stroke-amber-400 stroke-1 floating-1"
          />
          <circle
            cx="48"
            cy="18"
            r="6"
            className="fill-amber-200 stroke-amber-300 stroke-1 floating-2"
          />
          <circle
            cx="50"
            cy="44"
            r="7"
            className="fill-amber-300 stroke-amber-400 stroke-1 floating-3"
          />
        </g>

        <path
          d="M10 50 L10 40 L16 46"
          className="fill-none stroke-emerald-500 stroke-2 transition-all duration-500 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

function RecursosIcon() {
  return (
    <div className="relative w-16 h-16">
      <svg viewBox="0 0 64 64" className="w-full h-full overflow-visible">
        <g className="origin-center" style={{ transformOrigin: "32px 32px" }}>
          <path
            d="M32 18 L35 22 L40 22 L42 26 L46 28 L46 32 L46 36 L42 38 L40 42 L35 42 L32 46 L29 42 L24 42 L22 38 L18 36 L18 32 L18 28 L22 26 L24 22 L29 22 Z"
            className="fill-emerald-500 stroke-emerald-600 stroke-1 transition-all duration-300"
          />
          <circle cx="32" cy="32" r="6" className="fill-emerald-700" />
        </g>

        <g className="origin-center transform" style={{ transformOrigin: "50px 18px" }}>
          <path
            d="M50 12 L52 14 L55 14 L56 16 L58 17 L58 19 L58 21 L56 22 L55 24 L52 24 L50 26 L48 24 L45 24 L44 22 L42 21 L42 19 L42 17 L44 16 L45 14 L48 14 Z"
            className="fill-teal-400 stroke-teal-500 stroke-1 transition-opacity duration-300 opacity-50 group-hover:opacity-100"
          />
          <circle cx="50" cy="18" r="3" className="fill-teal-600" />
        </g>

        <circle cx="14" cy="28" r="2" className="fill-yellow-400 pulse-hidden" />
        <circle cx="54" cy="40" r="1.5" className="fill-yellow-300 pulse-hidden" />
        <circle cx="20" cy="50" r="1.5" className="fill-yellow-400 pulse-hidden" />
      </svg>
    </div>
  )
}

function EspaciosIcon() {
  return (
    <div className="relative w-16 h-16">
      <svg viewBox="0 0 64 64" className="w-full h-full overflow-visible">
        <rect
          x="20"
          y="20"
          width="24"
          height="30"
          rx="2"
          className="fill-slate-600 stroke-slate-700 stroke-1 transition-all duration-500 group-hover:fill-slate-500"
        />

        {[
          { x: 24, y: 24, d: 0 },
          { x: 34, y: 24, d: 0.1 },
          { x: 24, y: 32, d: 0.2 },
          { x: 34, y: 32, d: 0.3 },
          { x: 24, y: 40, d: 0.4 },
          { x: 34, y: 40, d: 0.5 },
        ].map((w, i) => (
          <rect
            key={i}
            x={w.x}
            y={w.y}
            width="6"
            height="5"
            rx="1"
            className="transition-all duration-300 fill-slate-400 group-hover:fill-amber-300 window-glow"
            style={{ animationDelay: `${w.d}s` }}
          />
        ))}

        <rect x="29" y="44" width="6" height="6" rx="1" className="fill-slate-800" />

        <g className="transition-all duration-700 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
          <circle cx="16" cy="46" r="3" className="fill-blue-500" />
          <rect x="14" y="49" width="4" height="6" rx="1" className="fill-blue-500" />
        </g>

        <g className="transition-all duration-700 delay-200 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
          <circle cx="50" cy="46" r="3" className="fill-violet-500" />
          <rect x="48" y="49" width="4" height="6" rx="1" className="fill-violet-500" />
        </g>

        <g className="connection-hidden">
          <path d="M28 14 Q32 8 36 14" className="fill-none stroke-cyan-400 stroke-2" strokeLinecap="round" />
          <path d="M25 10 Q32 2 39 10" className="fill-none stroke-cyan-300 stroke-1.5" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  )
}

function RiesgosIcon() {
  return (
    <div className="relative w-16 h-16">
      <svg viewBox="0 0 64 64" className="w-full h-full overflow-visible">
        <path
          d="M32 8 L50 16 L50 32 C50 44 42 52 32 56 C22 52 14 44 14 32 L14 16 Z"
          className="fill-indigo-500 stroke-indigo-600 stroke-2 transition-all duration-500 group-hover:fill-indigo-400"
        />

        <path
          d="M24 32 L30 38 L42 26"
          className="checkmark"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <g className="waves-hidden">
          <path d="M32 4 L54 14 L54 32 C54 46 44 56 32 60" className="fill-none stroke-indigo-300 stroke-1" strokeLinecap="round" />
          <path d="M32 4 L10 14 L10 32 C10 46 20 56 32 60" className="fill-none stroke-indigo-300 stroke-1" strokeLinecap="round" />
        </g>

        <circle cx="8" cy="24" r="2" className="ping-hidden" />
        <circle cx="56" cy="24" r="2" className="ping-hidden" />
        <circle cx="32" cy="62" r="2" className="ping-hidden" />
      </svg>

    </div>
  )
}

const services = [
  {
    id: "financiacion",
    title: "Financiación",
    description: "Fondos e inversión",
    Icon: FinanciacionIcon,
    gradient: "from-amber-500 to-orange-500",
    bgGlow: "bg-amber-500/20",
  },
  {
    id: "recursos",
    title: "Recursos",
    description: "Equipos y materiales",
    Icon: RecursosIcon,
    gradient: "from-emerald-500 to-teal-500",
    bgGlow: "bg-emerald-500/20",
  },
  {
    id: "espacios",
    title: "Espacios",
    description: "Oficinas compartidas",
    Icon: EspaciosIcon,
    gradient: "from-slate-500 to-slate-700",
    bgGlow: "bg-slate-500/20",
  },
  {
    id: "riesgos",
    title: "Riesgos",
    description: "Inversiones seguras",
    Icon: RiesgosIcon,
    gradient: "from-indigo-500 to-violet-500",
    bgGlow: "bg-indigo-500/20",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden lg:max-h-[80vh] min-h-[80vh] shadow-2xl">
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          width="100"
          height="100"
          src="/soluciones-bg.jpg"
          alt="Fondo"
          className="min-w-screen min-h-screen"
          style={{ animationDelay: "1s" }}
          data-usal="fade-u duration-1000 delay-200"
        />
      </div> */}
      {/* <div className="bg-linear-to-t from-white via-gray-200 to-transparent w-full h-20 absolute bottom-0" /> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center w-full mb-20">
          <h2 className="text-4xl md:text-5xl font-bold p-2  rounded-2xl w-fit backdrop-blur-lg">Soluciones Integrales</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.Icon
            return (
              <div
                key={service.id}
                className={cn("relative group cursor-pointer transition-all duration-700 ease-out")}
                data-usal={`zoomin duration-300 delay-${index * 200}  once`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={cn("absolute inset-0 rounded-3xl blur-2xl transition-all duration-500", service.bgGlow, "opacity-70 scale-100 group-hover:opacity-100 group-hover:scale-110")} />

                <div className={cn("relative flex flex-col items-center py-10 px-6 rounded-3xl bg-card/80 backdrop-blur-sm border border-border/50 transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:-translate-y-3 group-hover:border-transparent group-hover:bg-card")}>
                  <div className="mb-4">
                    <Icon />
                  </div>

                  <h3 className="font-semibold text-lg text-foreground transition-all duration-300 group-hover:scale-105">
                    {service.title}
                  </h3>
                  <p
                    className={cn(
                      "text-md text-muted-foreground mt-2 transition-all duration-300 overflow-hidden group-hover:max-h-10 group-hover:opacity-100 max-h-0 opacity-0",
                    )}
                  >
                    {service.description}
                  </p>

                  <div className={cn("absolute bottom-0 left-1/2 -translate-x-1/2 h-1 rounded-full bg-linear-to-r transition-all duration-500", service.gradient, "w-0 opacity-0 group-hover:w-20 group-hover:opacity-100")} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
