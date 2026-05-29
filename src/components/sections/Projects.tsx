"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Lumina Engine",
    category: "Web Apps",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Aura Design System",
    category: "Design Systems",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "SynthAI Platform",
    category: "AI Tools",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Neon Mobile",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2564&auto=format&fit=crop",
  },
];

const categories = ["All", "Web Apps", "Mobile", "AI Tools", "Design Systems"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <section id="work" className="py-32 relative z-10 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Selected <span className="text-gradient">Works</span>
          </h2>
          <p className="text-white/60 max-w-xl text-lg">
            A curated collection of projects that blend creative design with technical engineering.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat 
                  ? "bg-primary text-white neon-glow" 
                  : "glass-card text-white/60 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            key={project.id}
          >
            <GlassCard className="p-2 group cursor-pointer overflow-hidden">
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-4">
                <div className="absolute inset-0 bg-surface/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="px-4 pb-4">
                <span className="text-accent-cyan text-sm font-mono mb-1 block">{project.category}</span>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
