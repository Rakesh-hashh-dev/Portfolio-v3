import Navigation from "@/components/layout/Navigation";
import DockNav from "@/components/layout/DockNav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface text-white selection:bg-primary/30 selection:text-white">
      <Navigation />
      
      <div className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

      <DockNav />
      
      <footer className="py-8 text-center text-white/40 text-sm">
        <p>© {new Date().getFullYear()} Rakesh Kumar Behera. Built with Next.js & Three.js</p>
      </footer>
    </main>
  );
}
