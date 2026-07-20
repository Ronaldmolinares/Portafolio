"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { Home, User, FolderGit2, Terminal, Medal, Mail, Menu, X } from "lucide-react";

const NAV_ITEMS = [
    { name: "Inicio", href: "#", icon: Home },
    { name: "Sobre Mí", href: "#about", icon: User },
    { name: "Proyectos", href: "#projects", icon: FolderGit2 },
    { name: "Tech Stack", href: "#skills", icon: Terminal },
    { name: "Certificaciones", href: "#certifications", icon: Medal },
    { name: "Contacto", href: "#contact", icon: Mail },
];

export default function Navbar() {
    const { scrollY, scrollYProgress } = useScroll();
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Transformamos el progreso de scroll (0 a 1) en un porcentaje de ancho para la barra superior (0% a 100%)
    const widthProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    // Mostrar la barra flotante al pasar la sección de Inicio y mantenerla fija
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
            // Cerramos el menú móvil si volvemos al inicio para que no quede abierto
            if (isMobileMenuOpen) setIsMobileMenuOpen(false);
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
                className="fixed top-4 right-4 sm:top-6 sm:right-8 z-40 flex flex-col items-end"
            >
                <nav className="bg-slate-900/50 border border-white/10 backdrop-blur-md rounded-sm sm:rounded-full p-2 sm:py-2 sm:px-6 flex items-center justify-center shadow-lg shadow-purple-500/10">

                    {/* Botón de Menú Hamburguesa (Solo Móvil) */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="sm:hidden p-1.5 text-slate-300 hover:text-white transition-colors flex items-center justify-center"
                        aria-label="Alternar menú"
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>

                    {/* Lista de Navegación principal (Escritorio siempre visible) */}
                    <ul className="hidden sm:flex items-center gap-2">
                        {NAV_ITEMS.map((item) => {
                            const Icon = item.icon;
                            return (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="group relative flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors rounded-full"
                                    >
                                        <span className="text-xs tracking-wider">
                                            {item.name}
                                        </span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Menú Desplegable (Solo Móvil) */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="sm:hidden mt-2 p-2 bg-slate-900/90 border border-slate-700/50 backdrop-blur-xl rounded-sm flex flex-col gap-1 w-48 shadow-2xl"
                    >
                        {NAV_ITEMS.map((item) => {
                            const Icon = item.icon;
                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors rounded-lg"
                                >
                                    <Icon className="w-4 h-4 text-purple-400" />
                                    <span>{item.name}</span>
                                </a>
                            );
                        })}
                    </motion.div>
                )}
            </motion.header>
        </>
    );
}