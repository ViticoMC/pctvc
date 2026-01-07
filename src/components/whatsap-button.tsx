"use client"

import { useState } from "react";

interface WhatsappIconHoverProps {
    text?: string;
    size?: number;
}

export default function WhatsappIcon({
    text = "Contáctanos por WhatsApp",
    size = 40,
}: WhatsappIconHoverProps) {
    const [hover, setHover] = useState(false);

    return (
        <div className="fixed bottom-4 right-4 z-100">
            {/* redirigir a whatsapp */}
            <a href="wame"
                className="relative inline-flex items-center"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {/* Tooltip */}
                <div
                    className={`
          absolute right-full mr-3 whitespace-nowrap
          bg-black text-white text-sm px-3 py-1 rounded
          transition-all duration-200
          ${hover ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}
        `}
                >
                    {text}
                </div>

                {/* Icono WhatsApp */}
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`
          cursor-pointer
          transition-transform duration-300 ease-out
          ${hover ? "scale-110 rotate-6" : "scale-100"}
        `}
                >
                    <path
                        d="M20.52 3.48A11.91 11.91 0 0012.01 0C5.38 0 .01 5.37.01 12c0 2.12.55 4.18 1.6 6.01L0 24l6.2-1.63A11.95 11.95 0 0012 24c6.63 0 12-5.37 12-12a11.9 11.9 0 00-3.48-8.52z"
                        fill="#25D366"
                    />
                    <path
                        d="M17.5 14.6c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.19-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.52s1.08 2.93 1.23 3.13c.15.2 2.12 3.23 5.13 4.53.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"
                        fill="white"
                    />
                </svg>
            </a>
        </div>

    );
}
