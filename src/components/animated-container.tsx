import { AnimatedDirection } from "@/type/animated-direction";

interface AnimatedContainerProps {
    children: React.ReactNode;
    direction?: AnimatedDirection;
    animation?: "fade" | "slide" | "zoomin" | "flip"
    duration?: number;
    delay?: number;
    className?: string;
    etiqueta?: React.HTMLElementType
}

export default function AnimatedContainer({ children, direction = "u", duration = 500, delay = 0, animation = "fade", className, etiqueta = "div" }: AnimatedContainerProps) {
    const Container = etiqueta
    return (
        <Container className={className}
            data-usal={`${animation}-${direction} duration-${duration} delay-${delay}  `}
        >
            {children}
        </Container>
    );
}