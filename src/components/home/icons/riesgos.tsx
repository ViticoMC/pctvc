export default function RiesgosIcon() {
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