"use client";
import Banner from "@/components/layout/Banner";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    SiReact,
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
    SiDocker,
    SiGit,
    SiLinux,
    SiGithubactions,
} from "react-icons/si";

const ROW_1_TECH = [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    { name: "Java", icon: SiOpenjdk, color: "#F89820" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
];

const ROW_2_TECH = [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
];

const ROW_3_TECH = [
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Linux", icon: SiLinux, color: "#FCC624" },
    { name: "CI/CD", icon: SiGithubactions, color: "#2088D9" },
];

const ROW_4_TECH = [
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

// Helper para crear un bloque único perfectamente medible
function TechBlock({
    techList,
    bannerText,
    rowKeyPrefix,
}: {
    techList: typeof ROW_1_TECH;
    bannerText: string;
    rowKeyPrefix: string;
}) {
    const midIndex = Math.floor(techList.length / 2);
    const firstHalf = techList.slice(0, midIndex);
    const secondHalf = techList.slice(midIndex);

    return (
        <div className="flex items-center gap-4 shrink-0 pr-4">
            {firstHalf.map((tech, index) => {
                const Icon = tech.icon;
                return (
                    <div
                        key={`${rowKeyPrefix}-1-${tech.name}-${index}`}
                        className="flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-800/80 bg-slate-900/80 text-white hover:border-[var(--tech-color)] hover:shadow-[0_0_15px_var(--tech-color)] transition-all duration-300 cursor-pointer shrink-0 group"
                        style={{
                            borderColor: tech.color + "30",
                            backgroundColor: tech.color + "0D",
                            "--tech-color": tech.color,
                        } as React.CSSProperties}
                    >
                        <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 text-[var(--tech-color)]" />
                        <span className="text-sm font-semibold tracking-wide whitespace-nowrap text-slate-200 group-hover:text-white">
                            {tech.name}
                        </span>
                    </div>
                );
            })}

            <Banner text={bannerText} />

            {secondHalf.map((tech, index) => {
                const Icon = tech.icon;
                return (
                    <div
                        key={`${rowKeyPrefix}-2-${tech.name}-${index}`}
                        className="flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-800/80 bg-slate-900/80 text-white hover:border-[var(--tech-color)] hover:shadow-[0_0_15px_var(--tech-color)] transition-all duration-300 cursor-pointer shrink-0 group"
                        style={{
                            borderColor: tech.color + "30",
                            backgroundColor: tech.color + "0D",
                            "--tech-color": tech.color,
                        } as React.CSSProperties}
                    >
                        <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 text-[var(--tech-color)]" />
                        <span className="text-sm font-semibold tracking-wide whitespace-nowrap text-slate-200 group-hover:text-white">
                            {tech.name}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

export default function Skills() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 85%", "end 25%"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [25, -25]);

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="py-22 lg:py-28 bg-slate-950 text-white relative overflow-hidden space-y-12"
        >
            <div className="absolute right-1/4 top-1/3 w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
                {/* --- ENCABEZADO --- */}
                <motion.div style={{ y }} className="text-center flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-16 px-4 py-2 text-xs tracking-widest text-purple-300 bg-purple-900/30 rounded-full border border-purple-500/30 backdrop-blur-md shadow-lg"
                    >
                        Tecnologías con las que trabajo
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-indigo-400 leading-tight"
                    >
                        Tech Stack
                    </motion.h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-3 mb-6" />
                </motion.div>
            </div>

            {/* --- CONTENEDOR LIMITADO Y CENTRADO EN PANTALLAS GRANDES --- */}
            <div className="w-full max-w-[95vw] lg:max-w-5xl xl:max-w-6xl mx-auto overflow-hidden relative space-y-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

                {/* FILA 1: Backend */}
                <div className="animate-marquee py-1">
                    <TechBlock techList={ROW_1_TECH} bannerText="Backend" rowKeyPrefix="r1-a" />
                    <TechBlock techList={ROW_1_TECH} bannerText="Backend" rowKeyPrefix="r1-b" />
                </div>

                {/* FILA 2: Frontend */}
                <div className="animate-marquee-reverse py-1">
                    <TechBlock techList={ROW_2_TECH} bannerText="Frontend" rowKeyPrefix="r2-a" />
                    <TechBlock techList={ROW_2_TECH} bannerText="Frontend" rowKeyPrefix="r2-b" />
                </div>

                {/* FILA 3: DevOps */}
                <div className="animate-marquee py-1">
                    <TechBlock techList={ROW_3_TECH} bannerText="DevSecOps" rowKeyPrefix="r3-a" />
                    <TechBlock techList={ROW_3_TECH} bannerText="DevSecOps" rowKeyPrefix="r3-b" />
                </div>

                {/* FILA 4: Databases */}
                <div className="animate-marquee-reverse py-1">
                    <TechBlock techList={ROW_4_TECH} bannerText="Databases" rowKeyPrefix="r4-a" />
                    <TechBlock techList={ROW_4_TECH} bannerText="Databases" rowKeyPrefix="r4-b" />
                </div>

            </div>
        </section>
    );
}