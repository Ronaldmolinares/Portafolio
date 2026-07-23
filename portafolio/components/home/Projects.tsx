"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { MAIN_PROJECTS } from "@/data/projects/mainProjects";
import { Project } from "@/types/project";
import ProjectDetailModal from "../projects/ProjectDetailModal";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="py-20 lg:py-26 px-6 lg:px-10 bg-slate-950 text-white">
            <div className="max-w-7xl mx-auto">
                {/* Badge Superior */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-16"
                >
                    <span className="inline-block mb-4 px-4 py-2 text-xs font-atkinson tracking-widest text-purple-300 bg-purple-900/30 rounded-full border border-purple-500/20 backdrop-blur-md">
                        Algunos de mis trabajos destacados
                    </span>
                </motion.div>

                {/* Título de la Sección */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-indigo-400 leading-tight">
                        Proyectos
                    </h2>
                    <div className="w-24 m-auto h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2" />
                </motion.div>

                {/* Lista de Proyectos en Tarjetas */}
                <div className="space-y-12 mb-20">
                    {MAIN_PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id || index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group card-premium grid grid-cols-1 lg:grid-cols-12"
                        >
                            {/* COLUMNA IZQUIERDA: Imagen Fija */}
                            <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-[420px] w-full overflow-hidden bg-slate-900 group">
                                {/* Badge Flotante */}
                                {(project as any).badgeText && (
                                    <div className="absolute top-4 left-4 z-20 bg-emerald-300/90 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-full tracking-wider uppercase shadow-md">
                                        {(project as any).badgeText}
                                    </div>
                                )}

                                {/* Imagen encajada con absolute inset-0 para obligar a respet el contenedor */}
                                <img
                                    src={project.coverImage}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* COLUMNA DERECHA: Información y Acciones */}
                            <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-2xl sm:text-3xl text-white tracking-tight">
                                        {project.title}
                                    </h3>

                                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-atkinson">
                                        {project.shortDescription}
                                    </p>

                                    {/* Chips de Tecnologías */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tags?.map((tech, tIndex) => {
                                            return (
                                                <span
                                                    key={tIndex}
                                                    className="px-3 py-1 text-xs bg-indigo-950/40 text-indigo-300 border border-indigo-500/30 rounded-sm font-medium transition-all duration-300 hover:border-indigo-400/40"
                                                >
                                                    {tech}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Botones de Acción */}
                                <div className="flex flex-wrap items-center gap-4 pt-4">

                                    {/* Botón Explorar Proyecto (Sustituye al Demo) */}
                                    <a
                                        href={project.demo || `/proyectos/${project.id}`}
                                        target={project.demo ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border border-slate-700 bg-slate-900/60 hover:bg-slate-800 hover:border-slate-500 text-slate-200 text-sm font-atkinson font-medium transition-all duration-300 cursor-pointer"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        <span>Conoce el proyecto</span>
                                    </a>

                                    {/* Botón Código (GitHub) */}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border border-slate-700 bg-slate-900/60 hover:bg-slate-800 hover:border-slate-500 text-slate-200 text-sm font-medium transition-all duration-300"
                                        >
                                            <FaGithub className="w-4 h-4" />
                                            <span>Código</span>
                                        </a>
                                    )}


                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Botón "Otros Proyectos" Centrado */}
                <div className="">
                    <motion.a
                        id="end-of-projects"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href="/otros-proyectos"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-atkinson font-medium rounded-sm shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all duration-300 text-center"
                    >
                        Más Proyectos &rarr;
                    </motion.a>
                </div>
            </div>

            {/* Modal en caso de que aún quieras usarlo */}
            {selectedProject && (
                <ProjectDetailModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}