import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-purple-500/30 selection:text-purple-200">
      {/* Aquí iremos colocando las secciones de tu portafolio */}
      <Hero />
      <About />
      {/* La sección de proyectos irá aquí abajo en el futuro */}
    </main>
  );
}