import { Facebook, Twitter, MapPin } from "lucide-react"
import Link from "next/link"
import Logo from "./logo"

const footerLinks = {
  enlaces: [
    { name: "Inicio", href: "/" },
    { name: "Quiénes Somos", href: "/quienes-somos" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Servicios", href: "/servicios" },
    { name: "Contacto", href: "/contacto" },
    { name: "Mapa del Sitio", href: "#" },
  ],
  sitios: [
    { name: "Universidad Central «Marta Abreu» de Las Villas", href: "https://www.uclv.edu.cu/" },
    { name: "GESIME", href: "https://www.sime.cu/" },
    { name: "CEDAI", href: "https://www.cedai.com.cu/" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className=" rounded-xl  flex items-center justify-center">
                <Logo width={100} height={100} />
              </div>
              <div>
                <span className="font-bold text-sm">
                  Parque <span className="text-accent">Científico</span>
                </span>
                <span className="block text-sm">
                  <span className="text-accent">Tecnológico</span>
                </span>
                <span className="block text-sm text-background/60">Villa Clara</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <Facebook className="h-5 w-5 text-background/70 group-hover:text-accent-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <Twitter className="h-5 w-5 text-background/70 group-hover:text-accent-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces</h4>
            <ul className="space-y-3">
              {footerLinks.enlaces.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Sitios de Interés</h4>
            <ul className="space-y-3">
              {footerLinks.sitios.map((link) => (
                <li key={link.name}>
                  <a href={link.href} target="_blank" className="text-background/70 hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Ubicación</h4>
            <div className="rounded-lg overflow-hidden bg-background/10  flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.5!2d-79.95!3d22.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI1JzM0LjciTiA3OcKwNTcnMDAuMCJX!5e0!3m2!1ses!2scu!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Parque Científico Tecnológico - Desarrollado Por Sitrans Villa Clara
          </p>
        </div>
      </div>
    </footer>
  )
}
