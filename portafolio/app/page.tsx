import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-purple-500/30 selection:text-purple-200">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
    </main>
  );
}