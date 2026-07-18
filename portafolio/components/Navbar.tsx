"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";

const NAV_ITEMS = [
    { name: "Inicio", href: "#" },
    { name: "Sobre Mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Tech Stack", href: "#skills" },
    { name: "Certificaciones", href: "#certifications" },
    { name: "Contacto", href: "#contact" },
];

export default function Navbar() {
    const { scrollY, scrollYProgress } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    // Transformamos el progreso de scroll (0 a 1) en un porcentaje de ancho para la barra superior (0% a 100%)
    const widthProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    // Mostrar la barra flotante al pasar la sección de Inicio y mantenerla fija
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    });

    return (
        <>
            {/* 1. INDICADOR DE PROGRESO DE DESPLAZAMIENTO (Línea fija superior) */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 z-50 origin-left"
                style={{ width: widthProgress }}
            />

            {/* 2. NAVEGACIÓN FLOTANTE CONTENEDORA */}
            <motion.header
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: -100, opacity: 0 },
                }}
                animate={isVisible ? "visible" : "hidden"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-6 right-4 sm:right-8 z-40"
            >
                <nav className="bg-slate-900/50 border border-white/10 backdrop-blur-md rounded-full p-2 px-3 sm:px-6 flex items-center justify-center">

                    {/* Lista de Navegación principal */}
                    <ul className="flex items-center gap-1 sm:gap-2">
                        {NAV_ITEMS.map((item) => {
                            return (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="group relative flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-full"
                                    >
                                        <span className="hidden sm:inline text-xs tracking-wider">
                                            {item.name}
                                        </span>

                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </motion.header>
        </>
    );
}