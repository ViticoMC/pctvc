import { HomePageInfo } from "@/type/home_page";

export function WelcomeSection({ welcome_section }: { welcome_section: HomePageInfo["welcome_section"] }) {
  const title = welcome_section.title.split(" ");

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent font-semibold text-md tracking-wider uppercase"
              data-usal="fade-r duration-600  once"
            >{welcome_section.small_title}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight"
              data-usal="fade-r duration-500 delay-200  once"
            >
              {title[0]} <span className="text-blue-500">{title[1] + " " + title[2]}</span> {title[3] + " " + title[4] + " " + title[5]}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6"
              data-usal="fade-r duration-500 delay-300  once"

            >
              {welcome_section.text_1}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {welcome_section.text_2}
            </p>

            {/* <div className="mt-10 flex items-center gap-6">
              <div className="w-16 h-1 bg-accent rounded-full" />
              <span className="text-sm text-muted-foreground">Transformando ideas en realidad desde 2008</span>
            </div> */}
          </div>

          <div
          >
            <div className="relative"
              data-usal="fade-l duration-900  once"
            >
              <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={welcome_section.image}
                  alt="Centro de innovación"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
