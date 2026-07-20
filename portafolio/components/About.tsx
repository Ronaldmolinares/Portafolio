"use client";

import { motion } from "framer-motion";
import { User, Mail, MapPin, Briefcase, FileDown } from "lucide-react";

export default function About() {
    return (
        <section
            id="about"
            className="py-20 lg:py-28 px-6 lg:px-10 mb-20 relative overflow-hidden bg-slate-950 text-white"
        >
            {/* Fondo decorativo central */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* --- ENCABEZADO TOTALMENTE CENTRADO --- */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-16"
                >
                    <span className="inline-block mb-10 px-4 py-2 text-xs font-atkinson tracking-widest text-purple-300 bg-purple-900/30 rounded-full border border-purple-500/20 backdrop-blur-md">
                        Conóceme
                    </span>
                </motion.div>

                {/* --- DISEÑO DE DOS COLUMNAS ALINEADAS --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* --- COLUMNA IZQUIERDA: TEXTO --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:pt-4"
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white via-purple-200 to-indigo-400 leading-tight">
                            About Me
                            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 mx-auto md:mx-0" />
                        </h2>
                        {/* Breve biografía */}
                        <div className="space-y-4 font-atkinson text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl lg:max-w-none text-justify lg:text-left">
                            <p>
                                Soy un ingeniero de sistemas apasionado con experiencia en el desarrollo de aplicaciones web y productos digitales. Me enfoco en el desarrollo backend y full stack, diseñando soluciones escalables, mantenibles y eficientes con tecnologías modernas.
                            </p>
                            <p>
                                Mi trayectoria comenzó con una sólida formación en ingeniería de software, participando en proyectos que abarcan aplicaciones web, sistemas de escritorio y soluciones de aprendizaje automático. Cada proyecto me ha permitido fortalecer mis habilidades técnicas, el trabajo en equipo y la capacidad para resolver problemas mediante tecnología.
                            </p>
                        </div>
                    </motion.div>

                    {/* --- COLUMNA DERECHA: FOTO (CENTRADA), TABLA (CENTRADA) Y BOTÓN (DERECHA) --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-6 w-full flex flex-col items-center space-y-8"
                    >
                        {/* 1. Foto de perfil (Centrada gracias al contenedor padre items-center) */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-indigo-600 rounded-full blur opacity-45 group-hover:opacity-75 transition duration-500" />
                            <div className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-slate-800 bg-slate-900">
                                <img
                                    src="/me.png"
                                    alt="Mi Foto de Perfil"
                                    className="w-full h-full object-cover hover:grayscale-0 transition duration-300"
                                />
                            </div>
                        </div>

                        {/* 2. Tabla de datos personales 2x2 (Centrada gracias al contenedor padre items-center) */}
                        <div className="w-full max-w-xl border border-slate-900 bg-slate-950/60 backdrop-blur-md rounded-sm overflow-hidden shadow-xl">
                            {/* Fila 1 */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-900">
                                {/* Nombre */}
                                <div className="p-5 flex items-center gap-4 text-left">
                                    {/* <div className="p-2.5 rounded-xl bg-purple-950/30 border border-purple-500/10 text-purple-400">
                                        <User className="w-5 h-5" />
                                    </div> */}
                                    <div>
                                        <p className="text-xs text-slate-500 mb-1.5 font-atkinson tracking-wider">Nombre</p>
                                        <p className="text-sm font-medium text-slate-200">Ronald Samir Molinares Sanabria</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="p-5 flex items-center gap-4 text-left">
                                    {/* <div className="p-2.5 rounded-xl bg-purple-950/30 border border-purple-500/10 text-purple-400">
                                        <Mail className="w-5 h-5" />
                                    </div> */}
                                    <div>
                                        <p className="text-xs text-slate-500 mb-1.5 font-atkinson tracking-wider">Email</p>
                                        <p className="text-sm font-medium text-slate-200">samirmolinares24@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Fila 2 */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-900 border-t border-slate-900">
                                {/* Ubicación */}
                                <div className="p-5 flex items-center gap-4 text-left">
                                    {/* <div className="p-2.5 rounded-xl bg-purple-950/30 border border-purple-500/10 text-purple-400">
                                        <MapPin className="w-5 h-5" />
                                    </div> */}
                                    <div>
                                        <p className="text-xs text-slate-500 mb-1.5 font-atkinson tracking-wider">Ubicación</p>
                                        <p className="text-sm font-medium text-slate-200">Bogotá, Colombia</p>
                                    </div>
                                </div>

                                {/* Disponibilidad */}
                                <div className="p-5 flex items-center gap-4 text-left">
                                    {/* <div className="p-2.5 rounded-xl bg-purple-950/30 border border-purple-500/10 text-purple-400">
                                        <Briefcase className="w-5 h-5" />
                                    </div> */}
                                    <div>
                                        <p className="text-xs text-slate-500 mb-1.5 font-atkinson tracking-wider">Disponibilidad</p>
                                        <p className="text-sm font-medium text-emerald-400">Abierto a nuevas oportunidades</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Botón de descarga alineado al margen derecho de la tabla (max-w-xl y justify-end) */}
                        <div className="w-full max-w-xl flex justify-center sm:justify-end">
                            <a
                                href="/Ronald_Molinares_CV.pdf" // Ubicación: public/tu-cv.pdf
                                download
                                // 1. Añadimos flex, items-center, justify-center y gap-2
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-atkinson font-medium rounded-sm shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all duration-300 text-center"
                            >
                                <FileDown className="w-5 h-5" />
                                <span>Descargar hoja de vida</span>
                            </a>
                        </div>


                    </motion.div>

                </div>
            </div>
        </section>
    );
}