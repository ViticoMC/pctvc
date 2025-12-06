
export function WelcomeSection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent font-semibold text-md tracking-wider uppercase"
              data-usal="fade-r duration-500"
            >Bienvenidos</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight"
              data-usal="fade-r duration-500 delay-500"

            >
              Un Espacio Diseñado para la <span className="text-primary">Innovación</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6"
              data-usal="fade-r duration-500 delay-800"

            >
              El Parque Científico Tecnológico de Villa Clara es un centro de innovación que promueve la colaboración
              entre gobierno,  el sector del conocimiento y el sector empresarial
              para impulsar el desarrollo científico-tecnológico en Cuba. Ofrece
              un entorno dinámico para crear y hacer crecer empresas tecnológicas, facilitando la transferencia de
              conocimientos y tecnologías.
              Alianza Oportunidad y Desarrollo
            </p>
            {/* <p className="text-muted-foreground leading-relaxed">
              Nuestro compromiso es ser el puente entre la academia, la industria y el gobierno, facilitando la
              transferencia de conocimiento y tecnología que genere impacto positivo en la sociedad.
            </p> */}

            {/* <div className="mt-10 flex items-center gap-6">
              <div className="w-16 h-1 bg-accent rounded-full" />
              <span className="text-sm text-muted-foreground">Transformando ideas en realidad desde 2008</span>
            </div> */}
          </div>

          <div
          >
            <div className="relative"
              data-usal="fade-l duration-900 delay-400"
            >
              <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/modern-technology-office-with-professionals-workin.jpg"
                  alt="Centro de innovación"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent text-xl font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Certificación</div>
                    <div className="text-sm text-muted-foreground">ISO 9001:2015</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
