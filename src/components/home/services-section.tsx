
import { cn } from "@/lib/utils"
import { HomePageInfo } from "@/service/home_page"
import FinanciacionIcon from "./icons/financiacion"
import RecursosIcon from "./icons/recursos"
import EspaciosIcon from "./icons/espacios"
import RiesgosIcon from "./icons/riesgos"

const icons = [
  FinanciacionIcon,
  RecursosIcon,
  EspaciosIcon,
  RiesgosIcon,
]

export function ServicesSection({ services_section }: { services_section: HomePageInfo["servicios_section"] }) {


  return (
    <section className="py-24 bg-transparent relative overflow-hidden lg:max-h-[80vh] min-h-[80vh] shadow-2xl">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center w-full mb-20">
          <h2 className="text-4xl md:text-5xl font-bold p-2  rounded-2xl w-fit backdrop-blur-lg">{services_section.title}</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {services_section.advantages.map((service, index) => {
            const Icon = icons[index]
            return (
              <div
                key={service.title}
                className={cn("relative group cursor-pointer transition-all duration-700 ease-out")}
                data-usal={`zoomin duration-300 delay-${index * 200}  once`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={cn("absolute inset-0 rounded-3xl blur-2xl transition-all duration-500", service.bgGlow, "opacity-70 scale-100 group-hover:opacity-100 group-hover:scale-110")} />

                <div className={cn("relative flex flex-col items-center py-10 px-6 rounded-3xl bg-card/80 backdrop-blur-sm border border-border/50 transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:-translate-y-3 group-hover:border-transparent group-hover:bg-card")}>
                  <div className="mb-4">
                    <Icon />
                  </div>

                  <h3 className="font-semibold text-lg text-foreground transition-all duration-300 group-hover:scale-105">
                    {service.title}
                  </h3>
                  <p
                    className={cn(
                      "text-md text-muted-foreground mt-2 transition-all duration-300 overflow-hidden group-hover:max-h-10 group-hover:opacity-100 max-h-0 opacity-0",
                    )}
                  >
                    {service.description}
                  </p>

                  <div className={cn("absolute bottom-0 left-1/2 -translate-x-1/2 h-1 rounded-full bg-linear-to-r transition-all duration-500", service.gradient, "w-0 opacity-0 group-hover:w-20 group-hover:opacity-100")} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
