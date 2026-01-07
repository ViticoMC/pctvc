"use client";

import { HomePageInfo } from "@/type/home_page";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ConvergenciaParque({ confluencia_section }: { confluencia_section: HomePageInfo["confluencia_section"] }) {
    const [hovered, setHovered] = useState<null | "empresas" | "universidad" | "instituciones">(null);

    return (
        <section className="relative w-full py-24 bg-background overflow-hidden text-foreground">
            <div className="max-w-6xl mx-auto px-6 relative">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-semibold text-center  mb-24"
                >
                    {confluencia_section.title}
                </motion.h2>


                {/* Layout en dos columnas */}
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Columna izquierda: Visual */}
                    <div className="relative">
                        {/* SVG de conexiones */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            <motion.line x1="10%" y1="45%" x2="50%" y2="45%" stroke="rgb(34,211,238)" strokeWidth={hovered === "empresas" ? 3 : 1.5} strokeDasharray="6 6" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.6 }} animate={{ opacity: hovered === "empresas" ? 1 : 0.5 }} transition={{ duration: 0.8 }} />
                            <motion.line x1="90%" y1="45%" x2="50%" y2="45%" stroke="rgb(167,139,250)" strokeWidth={hovered === "universidad" ? 3 : 1.5} strokeDasharray="6 6" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.6 }} animate={{ opacity: hovered === "universidad" ? 1 : 0.5 }} transition={{ duration: 0.8 }} />
                            <motion.line x1="50%" y1="85%" x2="50%" y2="50%" stroke="rgb(251,191,36)" strokeWidth={hovered === "instituciones" ? 3 : 1.5} strokeDasharray="6 6" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.6 }} animate={{ opacity: hovered === "instituciones" ? 1 : 0.5 }} transition={{ duration: 0.8 }} />
                        </svg>

                        <div className="relative grid grid-cols-3 gap-12 items-center">
                            {/* Empresas */}
                            <motion.div onHoverStart={() => setHovered("empresas")} onHoverEnd={() => setHovered(null)} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className=" flex flex-col items-center text-center cursor-pointer">
                                <motion.svg animate={{ scale: hovered === "empresas" ? 1.15 : 1 }} className="w-16 h-16 mb-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M6 3h12v4H6V3zm0 8h12v10H6V11z" /></motion.svg>
                                <p className="tex-sm">{confluencia_section.empresa_text}</p>
                            </motion.div>

                            {/* Centro */}
                            <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative flex flex-col items-center z-10">
                                <p className="mt-4  font-medium text-center">{confluencia_section.parque_text}</p>
                                <motion.div animate={{ boxShadow: hovered ? "0 0 40px rgba(16,185,129,0.6)" : "0 0 0 rgba(0,0,0,0)" }} className="relative w-36 h-36 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                                    <svg className="w-16 h-16 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M4 21V7l8-4 8 4v14" /></svg>
                                </motion.div>
                            </motion.div>

                            {/* Universidad */}
                            <motion.div onHoverStart={() => setHovered("universidad")} onHoverEnd={() => setHovered(null)} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col items-center text-center cursor-pointer">
                                <motion.svg animate={{ scale: hovered === "universidad" ? 1.15 : 1 }} className="w-16 h-16 mb-4 text-violet-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M5 13v4c0 1.1 3.134 2 7 2s7-.9 7-2v-4" /></motion.svg>
                                <p className="text-sm">{confluencia_section.escuela_text}</p>
                            </motion.div>
                        </div>

                        {/* Instituciones */}
                        <motion.div onHoverStart={() => setHovered("instituciones")} onHoverEnd={() => setHovered(null)} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16 flex flex-col items-center text-center cursor-pointer">
                            <motion.svg animate={{ scale: hovered === "instituciones" ? 1.15 : 1 }} className="w-16 h-16 mb-4 text-amber-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6V3m0 3a6 6 0 100 12m0-12a6 6 0 010 12m0 0v3" /></motion.svg>
                            <p className="text-sm">{confluencia_section.sector_institucional_text}</p>
                        </motion.div>
                    </div>

                    {/* Columna derecha: Texto descriptivo */}
                    <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className=" leading-relaxed space-y-6">
                        <h3 className="text-2xl font-semibold ">
                            {confluencia_section.title_info}
                        </h3>
                        <p>
                            {confluencia_section.text_info1}
                        </p>
                        <p>
                            {confluencia_section.text_info2}
                        </p>
                        <p>
                            {confluencia_section.text_info3}
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
