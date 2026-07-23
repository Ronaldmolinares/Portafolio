"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
// Importamos los iconos oficiales de las plataformas de Simple Icons
import { SiPlatzi } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

interface Certification {
    name: string;
    issuer: string;
    date: string;
    skills: string[];
    url: string;
}

const CERTIFICATIONS: Certification[] = [
    {
        name: "Programación con Python",
        issuer: "Platzi",
        date: "Mar. 2026",
        skills: ["Python"],
        url: "https://platzi.com/p/samironald24gmailcom/ruta/30054-ruta/diploma/detalle/",
    },
    {
        name: "Play It Safe: Manage Security Risks",
        issuer: "Google",
        date: "Jun. 2026",
        skills: ["Security Controls", "Risk Management", "Threat Management", "Risk Analysis"],
        url: "https://coursera.org/share/8fce76b1411a41ec0574126341e606ce",
    },
    {
        name: "Foundations of Cybersecurity",
        issuer: "Google",
        date: "Jun. 2026",
        skills: ["Security Management", "Cyber Attacks", "Data Ethics"],
        url: "https://coursera.org/share/1121fc420ac7bc2d1ff7f91b16b870af",
    },
    {
        name: "Fundamentos de Programación e Ingeniería de Software",
        issuer: "Platzi",
        date: "Jul. 2026",
        skills: ["Pensamiento Lógico", "Git y GitHub", "Terminal y Línea de Comandos"],
        url: "https://platzi.com/p/samironald24gmailcom/ruta/30052-fundamentos-programacion-software/diploma/detalle/",
    },
    {
        name: "Curso de Redes de Internet - Profesional",
        issuer: "Platzi",
        date: "Nov. 2025",
        skills: ["Networking", "TCP/IP", "Routers", "Switches"],
        url: "https://platzi.com/p/samironald24gmailcom/curso/1770-course/diploma/detalle/",
    },
    {
        name: "Curso Profesional de Git y GitHub",
        issuer: "Platzi",
        date: "Jun. 2023",
        skills: ["Git", "GitHub", "Control de Versiones"],
        url: "https://platzi.com/p/samironald24gmailcom/curso/1557-course/diploma/detalle/",
    }
];

export default function Certifications() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

    // Función actualizada para renderizar los logos de marca con sus colores reales
    const getIssuerIcon = (issuer: string) => {
        switch (issuer.toLowerCase()) {
            case "google":
                // Color oficial de Google de Simple Icons (#4285F4)
                return <FcGoogle className="w-5 h-5 text-[#4285F4] transition-transform duration-300 group-hover:scale-110" />;
            case "platzi":
                // Verde oficial de Platzi (#98CA3F)
                return <SiPlatzi className="w-5 h-5 text-[#98CA3F] transition-transform duration-300 group-hover:scale-110" />;
            default:
                return <ExternalLink className="w-5 h-5 text-slate-400" />;
        }
    };

    return (
        <section
            id="certifications"
            ref={sectionRef}
            className="py-20 lg:py-32 px-6 lg:px-10 bg-slate-950 text-white relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto relative z-10">

                {/* --- ENCABEZADO --- */}
                <motion.div style={{ y }} className="text-center mb-20 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-18 px-4 py-2 text-xs font-atkinson tracking-widest text-purple-300 bg-purple-900/30 rounded-full border border-purple-500/20 backdrop-blur-md"
                    >
                        Formación Continua y Logros
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-indigo-400 leading-tight"
                    >
                        Certificaciones
                    </motion.h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 mb-4" />
                </motion.div>

                {/* --- LISTA DE CERTIFICADOS --- */}
                <div className="max-w-4xl mx-auto flex flex-col gap-4">
                    {CERTIFICATIONS.map((cert, index) => (
                        <motion.a
                            key={cert.name}
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{ x: 6, borderColor: "rgba(168, 85, 247, 0.3)" }}
                            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-5 sm:p-6 rounded-md border border-slate-900 bg-slate-950/40 backdrop-blur-xs hover:bg-slate-900/20 transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex items-start gap-4 flex-1">
                                {/* Contenedor del icono con un sutil efecto de luz al hacer hover */}
                                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-slate-700 transition-colors duration-200">
                                    {getIssuerIcon(cert.issuer)}
                                </div>

                                <div className="space-y-2">
                                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                                        <h3 className="text-base sm:text-lg text-slate-200 group-hover:text-purple-300 transition-colors duration-200">
                                            {cert.name}
                                        </h3>
                                        <span className="text-xs text-slate-500 shrink-0">
                                            {cert.date}
                                        </span>
                                    </div>

                                    <p className="text-xs text-purple-400/90 tracking-wide uppercase">
                                        {cert.issuer}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                        {cert.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-2 py-0.5 text-xs font-mono rounded bg-slate-900/60 border border-slate-800 text-slate-400"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-1.5 text-sm text-slate-500 group-hover:text-white transition-colors duration-200 shrink-0 self-start sm:self-center bg-slate-900/40 sm:bg-transparent px-3 py-1.5 sm:p-0 border border-slate-800 sm:border-none ml-[60px] sm:ml-0">
                                <span>Ver credencial</span>
                                <ExternalLink className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}