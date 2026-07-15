"use client";

import { motion } from "framer-motion";
// 1. Importamos los estilos SCSS
import "./ParticleOrb.scss";

export default function Hero() {
    // Generar un array de 300 elementos para renderizar las partículas
    const totalParticulas = 300;
    const particulasArray = Array.from({ length: totalParticulas });

    return (
        <section className="flex min-h-[90vh] items-center justify-center px-6 lg:px-10 relative overflow-hidden bg-slate-950 text-white">

            {/* Fondo con un sutil gradiente moderno (mantenido) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.12),transparent_60%)]" />

            {/* 2. Contenedor Principal: Cambia a 2 columnas en Desktop (lg) */}
            <div className="z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl">

                {/* --- COLUMNA IZQUIERDA: TEXTO (Casi igual, alineado a la izquierda en desktop) --- */}
                <div className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
                    {/* Badge animado */}
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-3 py-1.5 text-xs font-atkinson tracking-widest text-purple-300 bg-purple-900/30 rounded-full border border-purple-500/20 backdrop-blur-md"
                    >
                        Ingeniero de Sistemas y Computación
                    </motion.span>

                    {/* Título principal */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white via-purple-200 to-purple-400 leading-tight"
                    >
                        Hola, soy
                        <br />
                        Samir Molinares
                    </motion.h1>


                    {/* Descripción */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-base sm:text-lg font-atkinson text-slate-400 max-w-xl lg:max-w-none leading-relaxed"
                    >
                        Transformo ideas en soluciones de software escalables, seguras y de alto impacto.
                    </motion.p>

                    {/* Botones de acción */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6 pt-4 w-full sm:w-auto"
                    >
                        {/* Botón Principal*/}
                        <motion.a
                            whileHover={{ scale: 1.02 }} /* Reducido a 1.02 para que sea más sutil y elegante */
                            whileTap={{ scale: 0.98 }}
                            href="#projects"
                            onClick={(event) => {
                                event.preventDefault();
                                document.getElementById("projects")?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            }}
                            className="px-6 py-3 bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-atkinson font-medium rounded-sm shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all duration-300 text-center"
                        >
                            Ver mis proyectos &rarr;
                        </motion.a>

                        {/* Botón Secundario*/}
                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="#contact"
                            className="px-6 py-3 bg-purple-950/20 hover:bg-purple-900/40 backdrop-blur-md border border-purple-500/30 hover:border-purple-400 text-purple-200 hover:text-white font-atkinson font-medium rounded-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 text-center"
                        >
                            Contáctame
                        </motion.a>
                    </motion.div>

                </div>

                {/* --- COLUMNA DERECHA: ANIMACIÓN --- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="flex justify-center items-center h-75 lg:h-125 order-1 lg:order-2 relative"
                >
                    {/* Este div es el contenedor '.wrap' del código original, posicionado en el centro */}
                    <div className="wrapParticles">
                        {particulasArray.map((_, index) => (
                            <div key={index} className="particula" />
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}