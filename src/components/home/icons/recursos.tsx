export default function RecursosIcon() {
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