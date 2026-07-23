"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { OTHER_PROJECTS } from "@/data/projects/otherProjects";
import { Project } from "@/types/project";
import ProjectDetailModal from "./ProjectDetailModal";

export default function OtherProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="OtherProjects" className="py-16 px-6 lg:px-10 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-12">


        {/* Título de la Sección */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white via-purple-200 to-indigo-400 leading-tight">
            Más Proyectos
            <div className="w-24 m-auto h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2" />
          </h2>
          <div className="space-y-4 font-atkinson text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl lg:max-w-none text-justify lg:text-left">
            <p>
              Una selección de proyectos desarrollados durante mi formación académica y personal, donde he aplicado diferentes tecnologías, metodologías y enfoques.
            </p>
          </div>
        </motion.div>

        {/* --- GRID DE TARJETAS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OTHER_PROJECTS.map((project, index) => {

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group card-premium">

                {/* Círculo decorativo superior derecho tipo indicador */}
                <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-slate-600/80 group-hover:bg-emerald-500 transition-colors duration-300 ease-in-out" />

                {/* 2. Cuerpo del Contenido */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">

                  <div className="space-y-2.5">
                    <h3 className="text-xl text-white">
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
                      Código
                    </a>

                    {/* Botón Live Demo / Modal Details */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex text-xs items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-sm shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all duration-300 cursor-pointer"
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