export default function VideoIcon({ isActive }: { isActive: boolean }) {
    const rectClass = isActive ? "fill-teal-100 stroke-teal-600" : "fill-transparent stroke-white/60";
    const pathClass = isActive ? "fill-teal-200 stroke-teal-600" : "fill-transparent stroke-white/60";
    const circleClass = isActive ? "fill-red-500" : "fill-white/40";

    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="transition-all duration-300">
            <rect
                x="2"
                y="7"
                width="16"
                height="14"
                rx="2"
                className={`transition-all duration-500 ${rectClass}`}
                strokeWidth="2"
            />
            <path
                d="M18 10L24 7V21L18 18V10Z"
                className={`transition-all duration-500 ${pathClass}`}
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <circle
                cx="7"
                cy="11"
                r="2"
                className={`transition-all duration-300 ${circleClass}`}
            >
                {isActive && <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />}
            </circle>
            {isActive && (
                <>
                    <path d="M24 11C25.5 12 25.5 16 24 17" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
                        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.2s" repeatCount="indefinite" />
                    </path>
                    <path d="M26 9C28 11 28 17 26 19" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" opacity="0.4">
                        <animate attributeName="opacity" values="0.1;0.6;0.1" dur="1.2s" repeatCount="indefinite" begin="0.3s" />
                    </path>
                </>
            )}
        </svg>
    )
}