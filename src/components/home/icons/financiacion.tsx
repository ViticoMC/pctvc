export default function FinanciacionIcon() {
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