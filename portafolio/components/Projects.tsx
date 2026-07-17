"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FaGithub } from 'react-icons/fa6';
import { PROJECTS, Project } from "./projectsData"; // Ajusta la ruta de importación
import ProjectDetailModal from "./ProjectDetailModal";
import ProjectImageCarousel from "./ProjectImageCarousel";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="py-20 lg:py-14 px-6 lg:px-10 bg-slate-950 text-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-16"
                >
                    <span className="inline-block mb-4 px-4 py-2 text-xs font-atkinson tracking-widest text-purple-300 bg-purple-900/30 rounded-full border border-purple-500/20 backdrop-blur-md">
                        Algunos de mis trabajos recientes
                    </span>
                </motion.div>
                {/* Título de la Sección */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-indigo-400 leading-tight">
                        Proyectos
                    </h2>
                </motion.div>

                {/* Lista de Proyectos */}
                <div className="space-y-32">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                        >
                            {/* --- COLUMNA IZQUIERDA: DETALLES BÁSICOS (7 Columnas) --- */}
                            <div className="lg:col-span-7 space-y-6">
                                {/* Número de proyecto e Info de categoría */}
                                <div className="flex items-center gap-4 text-slate-500  text-xs sm:text-sm tracking-widest uppercase">
                                    <span className="text-purple-500/80 font-bold">#{String(project.id).padStart(2, "0")}</span>
                                    <span>•</span>
                                    <span>{project.category}</span>
                                    <span>•</span>
                                    <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800 text-slate-400">
                                        {project.year}
                                    </span>
                                </div>

                                {/* Título */}
                                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-atkinson tracking-tight text-slate-100">
                                    {project.title}
                                </h3>

                                {/* Descripción corta */}
                                <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                                    {project.shortDescription}
                                </p>

                                {/* Tecnologías en etiquetas semitransparentes */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tags.slice(0, 5).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs font-mono bg-slate-900/60 border border-slate-800 rounded-md text-slate-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tags.length > 5 && (
                                        <span className="px-2 py-1 font-mono text-xs text-slate-500">
                                            +{project.tags.length - 5}
                                        </span>
                                    )}
                                </div>

                                {/* Botones de acción */}
                                <div className="flex items-center gap-4 pt-4">
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-sm font-atkinson rounded-lg flex items-center gap-2 transition duration-200 cursor-pointer"
                                    >
                                        <Plus className="w-4 h-4 text-purple-400" />
                                        Conoce más
                                    </button>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg transition duration-200"
                                        title="Ver repositorio"
                                    >
                                        <FaGithub className="w-5 h-5 text-slate-300 hover:text-white" />
                                    </a>
                                </div>
                            </div>

                            {/* --- COLUMNA DERECHA: CARRUSEL VISUAL (5 Columnas) --- */}
                            <div className="lg:col-span-5 w-full">
                                <div className="relative aspect-16/10 w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                                    <ProjectImageCarousel images={project.images} alt={`${project.title} screenshot`} />
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Botón otros proyectos*/}

                    <motion.a
                        id="end-of-projects"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href="/otros-proyectos"
                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-atkinson font-medium rounded-sm shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all duration-300 text-center"
                    >
                        Otros Proyectos &rarr;
                    </motion.a>
                </div>
            </div>

            {/* --- MODAL DETALLADO (Portal animado) --- */}
            {selectedProject && (
                <ProjectDetailModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}