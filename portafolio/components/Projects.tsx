"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from 'react-icons/fa6';
import { PROJECTS, Project } from "./projectsData"; // Ajusta la ruta de importación
import ProjectDetailModal from "./ProjectDetailModal";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [activeImageIndexes, setActiveImageIndexes] = useState<{ [key: number]: number }>({});

    // Funciones para manejar el carrusel de cada proyecto de forma independiente
    const handlePrevImage = (projectId: number, imagesLength: number) => {
        setActiveImageIndexes((prev) => {
            const currentIndex = prev[projectId] ?? 0;
            return {
                ...prev,
                [projectId]: currentIndex === 0 ? imagesLength - 1 : currentIndex - 1,
            };
        });
    };

    const handleNextImage = (projectId: number, imagesLength: number) => {
        setActiveImageIndexes((prev) => {
            const currentIndex = prev[projectId] ?? 0;
            return {
                ...prev,
                [projectId]: currentIndex === imagesLength - 1 ? 0 : currentIndex + 1,
            };
        });
    };

    return (
        <section id="projects" className="py-20 lg:py-32 px-6 lg:px-10 bg-slate-950 text-white border-t border-slate-900">
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
                    <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white via-purple-200 to-indigo-400 leading-tight">
                        Proyectos
                    </h2>
                </motion.div>

                {/* Lista de Proyectos */}
                <div className="space-y-32">
                    {PROJECTS.map((project, index) => {
                        const currentImgIndex = activeImageIndexes[project.id] ?? 0;

                        return (
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
                                    <div className="flex items-center gap-4 text-slate-500 font-mono text-xs sm:text-sm tracking-widest uppercase">
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
                                            <span className="px-2 py-1 text-xs font-mono text-slate-500">
                                                +{project.tags.length - 5}
                                            </span>
                                        )}
                                    </div>

                                    {/* Botones de acción */}
                                    <div className="flex items-center gap-4 pt-4">
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-sm font-atkinson rounded-lg flex items-center gap-2 transition duration-200"
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
                                <div className="lg:col-span-5 w-full relative group">
                                    <div className="relative aspect-16/10 w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                                        {/* Renderizado de la Imagen Activa con transición suave */}
                                        <AnimatePresence mode="wait">
                                            <motion.img
                                                key={currentImgIndex}
                                                src={project.images[currentImgIndex]}
                                                alt={`${project.title} screenshot`}
                                                initial={{ opacity: 0, scale: 1.02 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="w-full h-full object-cover"
                                            />
                                        </AnimatePresence>

                                        {/* Overlay de degradado para los botones laterales */}
                                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/45 via-transparent to-transparent pointer-events-none" />

                                        {/* Botones de Navegación del Carrusel */}
                                        {project.images.length > 1 && (
                                            <>
                                                <button
                                                    onClick={() => handlePrevImage(project.id, project.images.length)}
                                                    className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-slate-800/80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                                >
                                                    <ChevronLeft className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={() => handleNextImage(project.id, project.images.length)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-slate-800/80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                                >
                                                    <ChevronRight className="w-5 h-5" />
                                                </button>
                                            </>
                                        )}

                                        {/* Indicadores de Puntos (Bullets) en la parte inferior */}
                                        {project.images.length > 1 && (
                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                                                {project.images.map((_, dotIndex) => (
                                                    <button
                                                        key={dotIndex}
                                                        onClick={() =>
                                                            setActiveImageIndexes((prev) => ({ ...prev, [project.id]: dotIndex }))
                                                        }
                                                        className={`h-1.5 rounded-full transition-all duration-300 ${currentImgIndex === dotIndex
                                                                ? "w-4 bg-purple-500"
                                                                : "w-1.5 bg-slate-500/60 hover:bg-slate-400"
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* --- MODAL DETALLADO (Portal animado) --- */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectDetailModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}