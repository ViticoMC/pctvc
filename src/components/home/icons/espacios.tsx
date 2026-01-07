export default function EspaciosIcon() {
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