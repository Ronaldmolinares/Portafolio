"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowUpRight, Image as ImageIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import { OTHER_PROJECTS, Project } from "./projectsData";
import ProjectDetailModal from "./ProjectDetailModal";

export default function OtherProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="OtherProjects" className="py-16 px-6 lg:px-10 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* --- ENCABEZADO --- */}
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-atkinson bg-clip-text text-transparent bg-linear-to-r from-white via-purple-200 to-indigo-400 leading-tight">
            Otros Proyectos
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-6xl leading-relaxed">
            Una selección de proyectos desarrollados durante mi formación académica y personal, donde he aplicado diferentes tecnologías, metodologías y enfoques.
          </p>
        </div>

        {/* --- GRID DE TARJETAS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OTHER_PROJECTS.map((project, index) => {
            // Manejamos si el proyecto tiene imagen en su array o si usamos fallback
            const coverImage = project.images && project.images.length > 0 ? project.images[0] : null;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group flex flex-col bg-[#16161a] border border-slate-800/80 rounded-sm overflow-hidden hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-950/20"
              >
                {/* 1. Header de Imagen / Placeholder */}
                <div className="group relative w-full h-48 bg-slate-800/50 flex items-center justify-center overflow-hidden border-b border-slate-800/60">
                  {coverImage ? (
                    <Image
                      src={coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-slate-600">
                      <div className="w-12 h-12 rounded-full border border-slate-700/50 flex items-center justify-center bg-slate-900/50">
                        <ImageIcon className="w-5 h-5 text-slate-500" />
                      </div>
                    </div>
                  )}

                  {/* Círculo decorativo superior derecho tipo indicador */}
                  <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-slate-600/80 group-hover:bg-purple-600 transition-colors duration-300 ease-in-out" />
                </div>

                {/* 2. Cuerpo del Contenido */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Tech Badges (Píldoras redondeadas estilo la imagen) */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-slate-800/60 text-slate-300 rounded-sm border border-slate-700/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 3. Footer de la Tarjeta */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    {/* Botón Code / GitHub */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors py-2 px-1"
                    >
                      <FaGithub className="w-4 h-4" />
                      Code
                    </a>

                    {/* Botón Live Demo / Modal Details */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs rounded-sm transition-all duration-200 active:scale-95 cursor-pointer shadow-sm shadow-purple-900/50"
                    >
                      <span>Conoce más</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* --- MODAL DETALLADO --- */}
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