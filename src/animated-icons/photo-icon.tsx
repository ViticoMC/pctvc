export default function PhotoIcon({ isActive }: { isActive: boolean }) {
    const rectClass = isActive ? "fill-blue-100 stroke-blue-600" : "fill-transparent stroke-white/60";
    const circleClass = isActive ? "fill-blue-600 stroke-blue-600" : "fill-transparent stroke-white/60";
    const pathClass = isActive ? "fill-amber-400" : "fill-white/40";

    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="transition-all duration-300">
            <rect
                x="2"
                y="4"
                width="22"
                height="20"
                rx="2"
                className={`transition-all duration-500 ${rectClass}`}
                strokeWidth="2"
            />
            <circle
                cx="8"
                cy="10"
                r="2"
                className={`transition-all duration-500 ${circleClass}`}
                strokeWidth="2"
            >
                {isActive && <animate attributeName="r" values="4;4.5;4" dur="1.5s" repeatCount="indefinite" />}
            </circle>
            <circle
                cx="20"
                cy="10"
                r="1.5"
                className={`transition-all duration-300 ${pathClass}`}
            >
                {isActive && <animate attributeName="opacity" values="1;0.5;1" dur="0.8s" repeatCount="indefinite" />}
            </circle>
            {isActive && (
                <>
                    <line x1="20" y1="6" x2="20" y2="4" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round">
                        <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" />
                    </line>
                    <line x1="23" y1="10" x2="25" y2="10" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round">
                        <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" begin="0.3s" />
                    </line>
                </>
            )}
        </svg>
    )
}