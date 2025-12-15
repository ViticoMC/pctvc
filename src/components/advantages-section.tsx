

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

function TaxIcon() {
  return (
    <svg viewBox="0 0 80 80" className="w-16 h-16">

      {/* Document */}
      <rect
        x="15"
        y="10"
        width="50"
        height="60"
        rx="4"
        fill="white"
        stroke="#0d6a6a"
        strokeWidth="2"
        className="transition-all duration-500 group-hover:scale-105 origin-center"
      />

      {/* Lines */}
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x="22"
          y={24 + i * 12}
          height="4"
          rx="2"
          fill="#0d6a6a"
          opacity="0.3"
          className={`transition-all duration-500`}
          style={{
            '--final-width': `${20 + i * 8}px`,
            animationDelay: `${i * 100}ms`
          } as any}
          width="0"
        />
      ))}

      {/* Check Circle */}
      <circle
        cx="55"
        cy="55"
        r="12"
        fill="#0d6a6a"
        className="transition-all duration-500 group-hover:scale-110"
      />

      {/* Checkmark */}
      <path
        d="M48 55 L53 60 L62 50"
        stroke="white"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="[stroke-dasharray:20] [stroke-dashoffset:20] group-hover:animate-[draw-check_0.6s_ease_forwards]"
      />

      {/* Floating Coins */}
      <circle
        cx="12" cy="30" r="6" fill="#fbbf24"
        className="opacity-0 group-hover:opacity-100 group-hover:animate-[float-coin_1.2s_infinite]"
      />
      <circle
        cx="68" cy="25" r="5" fill="#fbbf24"
        className="opacity-0 group-hover:opacity-100 group-hover:animate-[float-coin_1.2s_infinite] [animation-delay:150ms]"
      />
      <circle
        cx="10" cy="50" r="4" fill="#fbbf24"
        className="opacity-0 group-hover:opacity-100 group-hover:animate-[float-coin_1.2s_infinite] [animation-delay:300ms]"
      />
    </svg>
  );
}


function ImportIcon() {
  return (
    <svg viewBox="0 0 80 80" className="w-16 h-16">

      {/* Box */}
      <path
        d="M15 35 L40 20 L65 35 L65 60 L40 75 L15 60 Z"
        fill="white"
        stroke="#1a5f7a"
        strokeWidth="2"
        className="transition-transform duration-500 group-hover:-translate-y-1"
      />

      {/* Box top */}
      <path d="M15 35 L40 50 L65 35" stroke="#1a5f7a" strokeWidth="2" fill="none" />

      {/* Center line */}
      <path d="M40 50 L40 75" stroke="#1a5f7a" strokeWidth="2" fill="none" />

      {/* Arrow */}
      <g className="opacity-50 group-hover:opacity-100 group-hover:animate-[arrow-drop_0.6s_ease_forwards]">
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

      {/* Sparkles */}
      <circle cx="20" cy="25" r="2" fill="#1a5f7a"
        className="opacity-0 group-hover:opacity-100 group-hover:animate-[sparkle_1.3s_infinite]"
      />
      <circle cx="60" cy="28" r="2" fill="#1a5f7a"
        className="opacity-0 group-hover:opacity-100 group-hover:animate-[sparkle_1.3s_infinite] [animation-delay:200ms]"
      />
      <circle cx="70" cy="50" r="2" fill="#1a5f7a"
        className="opacity-0 group-hover:opacity-100 group-hover:animate-[sparkle_1.3s_infinite] [animation-delay:400ms]"
      />
    </svg>
  )
}

function InnovationIcon() {
  return (
    <svg viewBox="0 0 80 80" className="w-16 h-16">

      {/* Base */}
      <path
        d="M30 50 L30 58 Q30 65 40 65 Q50 65 50 58 L50 50"
        fill="white"
        stroke="#2d4a3e"
        strokeWidth="2"
      />

      {/* Glass */}
      <path
        d="M30 50 Q20 40 25 28 Q30 15 40 15 Q50 15 55 28 Q60 40 50 50"
        className="transition-all duration-500 group-hover:fill-[#fef3c7]"
        fill="white"
        stroke="#2d4a3e"
        strokeWidth="2"
      />

      {/* Filament */}
      <path
        d="M35 45 Q40 35 45 45"
        strokeWidth="2"
        fill="none"
        className="transition-colors duration-300 group-hover:stroke-[#f59e0b]"
        stroke="#2d4a3e"
      />

      {/* Rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <line
          key={angle}
          x1="40"
          y1="35"
          x2={40 + Math.cos((angle * Math.PI) / 180) * 28}
          y2={35 + Math.sin((angle * Math.PI) / 180) * 28}
          stroke="#f59e0b"
          strokeWidth="2"
          strokeLinecap="round"
          className="opacity-0 group-hover:animate-[rays_0.5s_ease_forwards]"
          style={{ animationDelay: `${i * 50}ms` }}
        />
      ))}

      {/* Gears */}
      <circle
        cx="12" cy="35" r="8"
        stroke="#2d4a3e"
        strokeWidth="2"
        className="opacity-0 group-hover:opacity-100 group-hover:animate-[spin-gear_3s_linear_infinite]"
        strokeDasharray="4 2"
        fill="none"
      />
      <circle
        cx="68" cy="40" r="6"
        stroke="#2d4a3e"
        strokeWidth="2"
        className="opacity-0 group-hover:opacity-100 group-hover:animate-[spin-gear_2s_linear_reverse_infinite]"
        strokeDasharray="3 2"
        fill="none"
      />
    </svg>
  )
}


function AdvantageCard({ advantage, index }: any) {
  const Icon =
    advantage.icon === "tax" ? TaxIcon :
      advantage.icon === "import" ? ImportIcon :
        InnovationIcon

  return (
    <div
      className="group relative"
      data-usal={`fade slide-up duration-600 delay-${index * 150}`}
    >
      <div
        className="relative bg-white rounded-2xl p-8 transition-all duration-500 group-hover:-translate-y-2 overflow-hidden"
        style={{
          boxShadow: `0 4px 20px rgba(0,0,0,0.08)`
        }}
      >

        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(135deg, ${advantage.color}05, ${advantage.color}10)` }}
        />

        <div
          className="absolute top-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
          style={{ background: advantage.color }}
        />

        <div className="relative z-10">

          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500"
            style={{ background: `#f8fafc` }}
          >
            <Icon />
          </div>

          <h3
            className="text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-(--color)"
            style={{ '--color': advantage.color } as any}
          >
            {advantage.title}
          </h3>

          <p className="text-slate-600 mb-6 leading-relaxed text-md">
            {advantage.description}
          </p>

          <div className="space-y-3">
            {advantage.benefits.map((benefit: string, i: number) => (
              <div
                key={benefit}
                className="flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-2"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                {/* Animated check circle */}
                <div
                  className="relative w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: `${advantage.color}20`,
                  }}
                >
                  {/* Check SVG always present, but stroke animates on group hover */}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5"
                    style={{ overflow: "visible" }}
                  >
                    <path
                      d="M5 12l5 5L19 7"
                      fill="none"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke={advantage.color}
                      className="[stroke-dasharray:24] [stroke-dashoffset:24] group-hover:animate-[draw-check_0.4s_ease_forwards]"
                      // cada path recibe su propio delay para escalonar el dibujo del check
                      style={{ animationDelay: `${i * 100 + 200}ms` }}
                    />
                  </svg>

                  {/* Ripple (opcional) que aparece al hacer hover */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30"
                    style={{
                      background: advantage.color,
                      transitionDelay: `${i * 100 + 200}ms`,
                    }}
                  />
                </div>

                <span
                  className="font-medium transition-colors duration-300"
                  style={{
                    color: advantage.color,
                  }}
                >
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          <div
            className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full transition-transform duration-500 group-hover:scale-150"
            style={{ background: `${advantage.color}08` }}
          />
        </div>

      </div>
    </div>
  );
}


export function AdvantagesSection() {
  return (
    <section className="py-24 px-6 bg-linear-to-b from-slate-50 to-white relative overflow-hidden">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-16">
          <span className="inline-block text-teal-700 font-semibold tracking-wider text-sm uppercase mb-4"
            data-usal="fade slide-up duration-600"
          >
            ¿Por qué elegirnos?
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            data-usal="fade slide-up duration-600 delay-100"
          >
            Principales Ventajas
          </h2>

          <div className="w-24 h-1 bg-linear-to-r from-teal-600 to-blue-600 mx-auto rounded-full"
            data-usal="fade slide-up duration-600 delay-200"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((adv, index) => (
            <AdvantageCard key={adv.id} advantage={adv} index={index} />
          ))}
        </div>

      </div>

    </section>
  );
}

