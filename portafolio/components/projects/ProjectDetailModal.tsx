"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, Calendar, Users, Cpu, Tag } from "lucide-react";
import { FaGithub } from 'react-icons/fa6';
import { Project } from "@/types/project";
import ProjectImageCarousel from "./ProjectImageCarousel";

interface ProjectDetailModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
    // Evita que la página principal haga scroll mientras el modal esté abierto
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
            {/* Fondo oscuro traslúcido con clic para cerrar */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Contenedor del Modal */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-full max-w-5xl max-h-[90vh] lg:max-h-[85vh] bg-slate-900/90 border border-slate-800 rounded-md overflow-y-auto shadow-2xl flex flex-col z-10"
            >
                {/* Botón Flotante para Cerrar */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/50 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition duration-200 z-30 cursor-pointer"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Contenido en Grid: 1 Columna en móvil/médium y 12 Columnas en LG */}
                <div className="grid grid-cols-1 lg:grid-cols-12 h-full">

                    {/* --- SECCIÓN IZQUIERDA: VISUAL & COLABORADORES / TECH --- */}
                    {/* En móvil y tablet (hasta md): order-2 para que aparezca después del texto */}
                    <div className="order-2 lg:order-1 lg:col-span-5 p-6 sm:p-8 lg:bg-slate-950/40 border-t lg:border-t-0 lg:border-r border-slate-800 flex flex-col justify-between space-y-8">
                        <div className="space-y-6">
                            {/* Carrusel de Imágenes */}
                            <div className="aspect-16/10 w-full rounded-md overflow-hidden border border-slate-800 bg-slate-900 shadow-md">
                                <ProjectImageCarousel key={project.title} images={project.images} alt={project.title} intervalMs={4000} />
                            </div>

                            {/* Equipo de Trabajo o Tecnologías flotantes */}
                            {project.collaborators.length > 0 ? (
                                <div className="space-y-3">
                                    <h4 className="text-sm font-atkinson font-semibold tracking-wider text-slate-400 uppercase flex items-center gap-2">
                                        <Users className="w-4 h-4 text-purple-400" />
                                        Equipo de Trabajo
                                    </h4>
                                    <div className="space-y-2 bg-slate-900/50 p-4 rounded-sm border border-slate-800/60">
                                        {project.collaborators.map((member) => (
                                            <a
                                                key={member.github}
                                                href={member.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-between gap-3 rounded-lg border border-slate-800/60 bg-slate-950/40 px-3 py-2 text-left transition duration-200 hover:border-slate-700 hover:bg-slate-900"
                                            >
                                                <span className="text-sm font-medium text-slate-200">{member.name}</span>
                                                <FaGithub className="h-4 w-4 text-slate-500" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    <h4 className="text-sm font-atkinson font-semibold tracking-wider text-slate-400 uppercase flex items-center gap-2">
                                        <Cpu className="w-4 h-4 text-purple-400" />
                                        Tecnologías y herramientas utilizadas
                                    </h4>
                                    <div className="flex flex-wrap gap-2 bg-slate-900/50 p-4 rounded-sm border border-slate-800/60">
                                        {project.tags.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1.5 text-xs font-mono bg-slate-950 border border-slate-800 rounded-md text-slate-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Enlace a GitHub */}
                        <div className="pt-4">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-atkinson font-medium rounded-sm shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all duration-300 text-center"
                            >
                                <FaGithub className="w-5 h-5" />
                                Ver Proyecto en GitHub
                            </a>
                        </div>
                    </div>

                    {/* --- SECCIÓN DERECHA: DESCRIPCIÓN PROFUNDA --- */}
                    {/* En móvil y tablet (hasta md): order-1 para que el título y la descripción aparezcan primero arriba */}
                    <div className="order-1 lg:order-2 lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                        <div className="space-y-6">
                            {/* Palabras Clave */}
                            <div className="flex flex-wrap gap-2">
                                {project.category.split(' • ').map((kw) => (
                                    <span
                                        key={kw}
                                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-purple-950/30 border border-purple-500/20 text-purple-300"
                                    >
                                        <Tag className="w-3 h-3" />
                                        {kw}
                                    </span>
                                ))}
                            </div>

                            {/* Título y Año */}
                            <div className="space-y-1">
                                <div className="flex items-center gap-3 mb-4 text-slate-500 font-mono text-xs">
                                    <Calendar className="w-4 h-4" />
                                    <span>Año de desarrollo: {project.year}</span>
                                </div>
                                <h3 className="text-3xl sm:text-4xl font-atkinson text-slate-100">
                                    {project.title}
                                </h3>
                            </div>

                            {/* Descripción Detallada */}
                            <div className="space-y-4 text-slate-300 text-base leading-relaxed whitespace-pre-line">
                                <p>{project.longDescription}</p>
                            </div>
                        </div>

                        {/* Tecnologías Usadas en la derecha (Solo si SÍ hubo equipo de trabajo) */}
                        {project.collaborators.length > 0 && (
                            <div className="space-y-3 pt-6 border-t border-slate-800">
                                <h4 className="text-sm font-atkinson font-semibold tracking-wider text-slate-500 uppercase flex items-center gap-2">
                                    <Cpu className="w-4 h-4 text-purple-400" />
                                    Tecnologías y herramientas utilizadas
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 text-xs font-mono bg-slate-950 border border-slate-800 rounded-md text-slate-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </motion.div>
        </div>
    );
}