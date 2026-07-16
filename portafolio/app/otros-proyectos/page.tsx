"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import OtherProjects from "@/components/OtherProjects";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

export default function OtrosProyectosPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-purple-500/30 selection:text-purple-200">
      {/* Botón de retorno premium */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-0 pt-16">
        <MotionLink
          href="/#end-of-projects"
          whileHover={{ x: -4 }}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 font-mono text-sm cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-purple-500" />
          Volver al Portafolio
        </MotionLink>
      </div>

      {/* Contenido de otros proyectos */}
      <OtherProjects />
    </main>
  );
}
