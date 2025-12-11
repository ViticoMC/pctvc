"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Logo from "./logo"

const navItems = [
  { name: "Inicio", href: "/" },
  {
    name: "Información",
    href: "/quienes-somos",
    submenu: [
      { name: "Proyectos", href: "/proyectos" },
      { name: "Eventos", href: "/eventos" },
      { name: "Noticias", href: "/noticias" },
      { name: "Galería", href: "/galeria" },
      { name: "Contacto", href: "/contacto" },
    ]
  },
  // { name: "Proyectos", href: "/proyectos" },
  {
    name: "Servicios",
    href: "/servicios",
    submenu: [
      { name: "Todos los Servicios", href: "/servicios" },
      { name: "Producciones Cooperadas", href: "/producciones-cooperadas" },
      { name: "Incubación de Empresas", href: "/incubacion-empresas" },
    ],
  },
  {
    name: "Colaboración", href: "/colaboracion",
    submenu: [
      { name: "Vinculación Academica", href: "/vinculacion-academica" },
      // { name: "Colaboración", href: "/colaboracion" },
    ]
  },
  // { name: "Galería", href: "/galeria" },
  // { name: "Eventos", href: "/eventos" },
  // { name: "Vinculación Academica", href: "/vinculacion-academica" },
  // { name: "Contacto", href: "/contacto" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setMobileSubmenuOpen(null)
  }, [pathname])

  const showTransparent = isHomePage && !isScrolled && !isMobileMenuOpen

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ",

        showTransparent ? "bg-transparent backdrop-blur-sm" : "bg-background/95 backdrop-blur-md shadow-lg ",

      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 ">
            {/* <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-base lg:text-lg">PC</span>
            </div>
            <div className="hidden sm:block">
              <span
                className={cn(
                  "font-bold text-lg transition-colors",
                  showTransparent ? "text-white" : "text-foreground",
                )}
              >
                PCTVC
              </span>
            </div> */}
            <Logo width={150} height={150} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.submenu && setOpenSubmenu(item.name)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 text-md font-bold transition-colors hover:text-gray-700 hover:bg-accent/70 rounded-2xl p-2 text-foreground text-bold",
                    // showTransparent ? "text-white/90" : "text-foreground",
                    pathname === item.href && "text-white bg-accent/80",
                  )}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="h-4 w-4" />}
                </Link>

                {item.submenu && openSubmenu === item.name && (
                  <div className="absolute top-full left-0 pt-2 w-48">
                    <div className="bg-background rounded-lg shadow-xl border border-border py-2 animate-in fade-in-0 slide-in-from-top-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={cn(
                            "block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-accent transition-colors",
                            pathname === subItem.href && "text-accent bg-muted",
                          )}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {/* <Link href="/contacto">
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Contáctanos
              </Button>
            </Link> */}
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <div className="relative w-6 h-6">
              <span
                className={cn(
                  "absolute left-0 w-6 h-0.5 rounded-full transition-all duration-300",
                  showTransparent ? "bg-white" : "bg-foreground",
                  isMobileMenuOpen ? "top-[11px] rotate-45" : "top-1",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[11px] w-6 h-0.5 rounded-full transition-all duration-300",
                  showTransparent ? "bg-white" : "bg-foreground",
                  isMobileMenuOpen ? "opacity-0 scale-0" : "opacity-100",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 w-6 h-0.5 rounded-full transition-all duration-300",
                  showTransparent ? "bg-white" : "bg-foreground",
                  isMobileMenuOpen ? "top-[11px] -rotate-45" : "top-[19px]",
                )}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="bg-background/98 backdrop-blur-md border-t border-border shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === item.name ? null : item.name)}
                        className={cn(
                          "flex items-center justify-between w-full py-2.5 px-3 rounded-lg text-sm font-medium transition-colors",
                          "hover:bg-muted text-foreground",
                          pathname.startsWith(item.href) && "text-accent bg-accent/10",
                        )}
                      >
                        {item.name}
                        <ChevronRight
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            mobileSubmenuOpen === item.name && "rotate-90",
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-200 ease-in-out",
                          mobileSubmenuOpen === item.name ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
                        )}
                      >
                        <div className="pl-3 py-1 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={cn(
                                "block py-2 px-3 rounded-lg text-sm transition-colors",
                                "text-muted-foreground hover:text-accent hover:bg-muted",
                                pathname === subItem.href && "text-accent bg-accent/10",
                              )}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors",
                        "hover:bg-muted text-foreground",
                        pathname === item.href && "text-accent bg-accent/10",
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-2 mt-2 border-t border-border">
                <Link href="/contacto">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-10 text-sm">
                    Contáctanos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
