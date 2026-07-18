"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    SiReact,
    SiVuedotjs,
    SiHtml5,
    SiTailwindcss,
    SiOpenjdk,
    SiSpringboot,
    SiNodedotjs,
    SiJavascript,
    SiTypescript,
    SiPython,
    SiFastapi,
    SiPostgresql,
    SiMongodb,
    SiMysql,
    SiMariadb,
    SiDocker,
    SiGit,
    SiLinux,
    SiGithubactions,
} from "react-icons/si";
import { HiShieldCheck } from "react-icons/hi";

const TECH_CATEGORIES = [
    {
        name: "Backend & APIs",
        items: [
            { name: "Java", icon: SiOpenjdk, color: "#F89820" },
            { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "FastAPI", icon: SiFastapi, color: "#009688" },
        ],

    },
    {
        name: "Frontend",
        items: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Vue.js", icon: SiVuedotjs, color: "#42B883" },
            { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        ],
    },
    {
        name: "DevSecOps & Cybersecurity",
        items: [
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "Linux", icon: SiLinux, color: "#FCC624" },
            { name: "CI/CD", icon: SiGithubactions, color: "#2088D9" },
            { name: "Cybersecurity", icon: HiShieldCheck, color: "#00CED1" },
        ],
    },
    {
        name: "Databases",
        items: [
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "MariaDB", icon: SiMariadb, color: "#003545" },
        ],

    },
];

export default function Skills() {
    const sectionRef = useRef<HTMLDivElement>(null);

    // Captura el progreso de scroll de la sección para el efecto parallax
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // El título se desplazará sutilmente de 40px a -40px en su eje Y al scrollear
    const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="py-20 lg:py-26 px-6 lg:px-10 bg-slate-950 text-white relative overflow-hidden"
        >
            {/* Fondo decorativo sutil */}
            <div className="absolute right-1/4 top-1/3 w-[400px] h-[400px] bg-indigo-900/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* --- ENCABEZADO CON EFECTO PARALLAX --- */}
                <motion.div style={{ y }} className="text-center mb-20 flex flex-col items-center">

                    {/* Eyebrow / Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-18 px-4 py-2 text-xs font-atkinson tracking-widest text-purple-300 bg-purple-900/30 rounded-full border border-purple-500/20 backdrop-blur-md"
                    >
                        Tecnologías con las que trabajo
                    </motion.div>

                    {/* Título Principal */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-indigo-400 leading-tight"
                    >
                        Tech Stack
                    </motion.h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2" />
                </motion.div>

                {/* --- GRID DE CATEGORÍAS (Responsivo) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {TECH_CATEGORIES.map((category, catIndex) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                            className="p-6 sm:p-8 rounded-sm border border-slate-900 bg-slate-950/40 backdrop-blur-md flex flex-col space-y-6"
                        >
                            {/* Nombre de la categoría */}
                            <h3 className="text-lg tracking-wider text-slate-400 border-b border-slate-900 pb-3">
                                {category.name}
                            </h3>

                            {/* Tecnologías dentro de la categoría */}
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((tech, techIndex) => {
                                    const Icon = tech.icon;
                                    return (
                                        <motion.div
                                            key={tech.name}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.3,
                                                // delay: catIndex * 0.1 + techIndex * 0.04,
                                            }}
                                            whileHover={{
                                                scale: 1.05,
                                                y: -3,
                                            }}
                                            className="flex items-center gap-2.5 px-4 py-2.5 rounded-sm border border-slate-700/50 bg-slate-900/50 text-white hover:border-[var(--tech-color)] hover:shadow-[0_0_5px_var(--tech-color)] transition-all duration-300 cursor-default"
                                            // Agrega color dinámico al borde y fondo al hacer hover
                                            style={{
                                                borderColor: tech.color + "60",
                                                backgroundColor: tech.color + "08",
                                                // Pasamos el color de la tecnología como variable CSS para usarla en el hover del icono
                                                ["--tech-color" as any]: tech.color,
                                            }}
                                        >
                                            {/* El icono se colorea usando la variable CSS solo al hacer hover en el componente padre */}
                                            <Icon
                                                className="w-5 h-5 transition-colors duration-300 text-[var(--tech-color)]"
                                            />
                                            <span className="text-sm font-medium tracking-wide">
                                                {tech.name}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}