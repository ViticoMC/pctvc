"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ConvergenciaParque() {
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
                    Un ecosistema donde la innovación converge
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
                            <motion.div onHoverStart={() => setHovered("empresas")} onHoverEnd={() => setHovered(null)} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col items-center text-center cursor-pointer">
                                <motion.svg animate={{ scale: hovered === "empresas" ? 1.15 : 1 }} className="w-16 h-16 mb-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M6 3h12v4H6V3zm0 8h12v10H6V11z" /></motion.svg>
                                <p className="">Empresas</p>
                            </motion.div>

                            {/* Centro */}
                            <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative flex flex-col items-center z-10">
                                <motion.div animate={{ boxShadow: hovered ? "0 0 40px rgba(16,185,129,0.6)" : "0 0 0 rgba(0,0,0,0)" }} className="relative w-36 h-36 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                                    <svg className="w-16 h-16 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M4 21V7l8-4 8 4v14" /></svg>
                                </motion.div>
                                <p className="mt-4  font-medium">Parque Tecnológico</p>
                            </motion.div>

                            {/* Universidad */}
                            <motion.div onHoverStart={() => setHovered("universidad")} onHoverEnd={() => setHovered(null)} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col items-center text-center cursor-pointer">
                                <motion.svg animate={{ scale: hovered === "universidad" ? 1.15 : 1 }} className="w-16 h-16 mb-4 text-violet-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M5 13v4c0 1.1 3.134 2 7 2s7-.9 7-2v-4" /></motion.svg>
                                <p className="">Universidad</p>
                            </motion.div>
                        </div>

                        {/* Instituciones */}
                        <motion.div onHoverStart={() => setHovered("instituciones")} onHoverEnd={() => setHovered(null)} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16 flex flex-col items-center text-center cursor-pointer">
                            <motion.svg animate={{ scale: hovered === "instituciones" ? 1.15 : 1 }} className="w-16 h-16 mb-4 text-amber-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6V3m0 3a6 6 0 100 12m0-12a6 6 0 010 12m0 0v3" /></motion.svg>
                            <p className="">Sectores institucionales</p>
                        </motion.div>
                    </div>

                    {/* Columna derecha: Texto descriptivo */}
                    <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className=" leading-relaxed space-y-6">
                        <h3 className="text-2xl font-semibold ">Un modelo de colaboración para un futuro sostenible</h3>
                        <p>
                            El Parque Tecnológico funciona como un espacio de articulación donde confluyen el talento, el conocimiento y la gestión institucional. En este entorno, las empresas incubadas desarrollan soluciones innovadoras alineadas con las prioridades del desarrollo económico y social.
                        </p>
                        <p>
                            La universidad aporta investigación, formación y capital humano, mientras que los sectores institucionales garantizan el marco, la coordinación y el respaldo necesario para transformar ideas en impacto real.
                        </p>
                        <p>
                            Esta convergencia permite trabajar de forma integrada, fomentando la innovación, la transferencia de conocimiento y la construcción de un futuro sostenible basado en la cooperación y el desarrollo tecnológico.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
