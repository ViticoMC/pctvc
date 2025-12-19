import AnimatedContainer from "@/components/animated-container";
import { HeroElement } from "@/moock-data/quienes-somos/hero-elements";


// Card del hero de quienes somos 
export const HeroCard = ({
  title,
  description,
  color,
  direction,
  icon,
}: HeroElement) => {
  const Icon = icon
  return (
    <AnimatedContainer
      etiqueta="div"
      animation="zoomin"
      direction={direction}
      className={`bg-linear-to-br from-${color} to-${color}/80 rounded-2xl p-8 text-${color}-foreground `}
    >
      <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
        <Icon className="h-7 w-7 text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-white/90 leading-relaxed">{description}</p>
    </AnimatedContainer>
  );
};
