"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { useState } from "react";
import { caseStudies } from "@/lib/profile";

const categories = ["All", "Operations", "Marketing", "Strategy", "Leadership"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = caseStudies.filter((project) => filter === "All" || project.category === filter);

  return (
    <section className="content-section relative z-10 mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
              filter === cat ? "bg-primary text-white" : "glass-card text-white/60 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            key={project.id}
          >
            <GlassCard glowOnHover className="h-full p-6">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="rounded-lg bg-accent-cyan/10 p-3 text-accent-cyan">
                  <project.icon size={24} />
                </div>
                <span className="rounded-lg bg-accent-purple/15 px-3 py-1 text-sm text-accent-purple">{project.category}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-sm font-semibold text-accent-purple">{project.outcome}</p>
              <p className="mt-4 leading-7 text-white/60">{project.summary}</p>
              <div className="mt-6 grid gap-2">
                {project.points.map((point) => (
                  <div key={point} className="rounded-lg border border-white/10 bg-white/[0.055] px-3 py-2 text-sm text-white/70">
                    {point}
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
