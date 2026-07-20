"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FaGithub } from 'react-icons/fa6';
import { OTHER_PROJECTS, Project } from "./projectsData";
import ProjectDetailModal from "./ProjectDetailModal";

export default function OtherProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="OtherProjects" className="py-10 lg:py-10 px-6 lg:px-10 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto">

        {/* --- ENCABEZADO --- */}
        <div className="space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-atkinson bg-clip-text text-transparent bg-linear-to-r from-white via-purple-200 to-indigo-400 leading-tight">
            Otros Proyectos
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-4xl leading-relaxed">
            Una vista un poco más amplia de los proyectos más relevantes que he desarrollado a lo largo de mi aprendizaje.
          </p>
        </div>

        {/* --- LISTA DE PROYECTOS SIN IMAGEN --- */}
        <div className="divide-y divide-slate-900 border-t border-b border-slate-900">
          {OTHER_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-slate-900/10 transition-colors duration-300"
            >
              {/* Columna de Detalles Básicos (md: 9 columnas para dar buen espacio) */}
              <div className="md:col-span-9 space-y-4">
                {/* Categoría y Año */}
                <div className="flex items-center gap-3 text-slate-500 text-xs tracking-wider uppercase">
                  <span className="text-purple-500/80 font-bold">0{index + 1}</span>
                  <span>•</span>
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>

                {/* Título del Proyecto */}
                <h3 className="text-2xl sm:text-3xl lg:text-3xl font-atkinson tracking-tight text-slate-100">
                  {project.title}
                </h3>

                {/* Descripción Corta */}
                <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Tags (Mini píldoras tecnológicas) */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-mono bg-slate-900 border border-slate-800 rounded text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Columna de Botones (md: 3 columnas, alineados a la derecha) */}
              <div className="md:col-span-3 flex justify-start md:justify-end items-center gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="h-9 px-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-atkinson tracking-wider rounded-sm flex items-center justify-center gap-2 transition duration-200 active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Plus className="w-3.5 h-3.5 text-purple-400" />
                  Conoce más
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-sm text-slate-400 hover:text-white transition duration-200 flex items-center justify-center shrink-0"
                  title="Ver repositorio"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- REUTILIZACIÓN DE NUESTRO MODAL DETALLADO --- */}
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