'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();

    return (
        <main className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden flex items-center justify-center pt-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient orbs */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />

                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)',
                            backgroundSize: '50px 50px',
                        }}
                    />
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-20 w-full max-w-3xl pt-8">
                <div className="text-center">
                    {/* 404 Illustration - Behind */}
                    <div className="absolute inset-0 top-0 left-1/2 transform -translate-x-1/2 h-80 flex items-center justify-center pointer-events-none z-0">
                        <div className="relative w-64 h-64">
                            {/* Broken link icon simulation */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg
                                    className="w-48 h-48 text-blue-400/20 animate-bounce"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={0.5}
                                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>

                            {/* Floating elements */}
                            <div className="absolute top-0 right-0 w-20 h-20 border-2 border-blue-500/20 rounded-lg animate-spin" style={{ animationDuration: '20s' }} />
                            <div className="absolute bottom-0 left-0 w-16 h-16 border-2 border-purple-500/20 rounded-full animate-pulse" />
                        </div>
                    </div>

                    {/* Error Code */}
                    <div className="mb-8 relative z-10">
                        <h1 className="text-9xl sm:text-[150px] font-black text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-300 to-purple-400 mb-4 leading-none">
                            404
                        </h1>
                        <div className="h-1 w-24 bg-linear-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 relative z-10">
                        Página no encontrada
                    </h2>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-slate-300 mb-10 leading-relaxed relative z-10">
                        Lo sentimos, la página que buscas no existe o ha sido movida.
                        <br className="hidden sm:block" />
                        Pero no te preocupes, aquí hay algunas opciones para continuar.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 relative z-10">
                        <Button
                            asChild
                            className="bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold px-6 sm:px-8 py-4 sm:py-6 rounded-lg text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 group w-full sm:w-auto"
                        >
                            <Link href="/" className="flex items-center justify-center gap-2">
                                <Home className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                                Volver al inicio
                            </Link>
                        </Button>

                        <Button
                            onClick={() => router.back()}
                            variant="outline"
                            className="border-2 border-slate-500 hover:border-slate-300 text-slate-300 hover:text-white font-semibold px-6 sm:px-8 py-4 sm:py-6 rounded-lg text-sm sm:text-base transition-all duration-300 transform hover:scale-105 bg-slate-800/50 hover:bg-slate-700/50 group w-full sm:w-auto"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                            Atrás
                        </Button>
                    </div>

                    {/* Quick Links */}
                    <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-xl p-6 sm:p-8 border-l-2 border-l-blue-500 relative z-10">
                        <h3 className="text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-widest mb-6">
                            Ir a secciones principales
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                            {[
                                { href: '/quienes-somos', label: 'Quiénes Somos' },
                                { href: '/servicios', label: 'Servicios' },
                                { href: '/eventos', label: 'Eventos' },
                                { href: '/galeria', label: 'Galería' },
                                { href: '/noticias', label: 'Noticias' },
                                { href: '/contacto', label: 'Contacto' },
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-xs sm:text-sm text-slate-300 hover:text-blue-400 transition-colors py-2 px-2 sm:px-3 rounded-lg hover:bg-slate-700/50 font-medium"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Footer message */}
                    <p className="text-slate-500 text-xs sm:text-sm mt-6 sm:mt-8 relative z-10">
                        Si crees que esto es un error, por favor{' '}
                        <Link href="/contacto" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                            contáctanos
                        </Link>
                    </p>
                </div>
            </div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    />
                ))}
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
          }
        }
      `}</style>
        </main>
    );
}
