
import { AnimatedDirection } from "@/type/animated-direction";

interface AnimatedListProps {
    children: React.ReactNode;
    direction?: AnimatedDirection;
    animation?: "fade" | "slide" | "zoomin" | "flip"
    duration?: number;
    delay?: number;
    className?: string;
}

export default function AnimatedList({ children, direction = "u", delay = 100, animation = "fade", className, }: AnimatedListProps) {
    return (
        <ul className={className}
            data-usal={`split-item split-${animation}-${direction} split-delay-${delay}`}
        >
            {children}
        </ul>
    );
}