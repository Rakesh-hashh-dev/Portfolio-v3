"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";

const timeline = [
  {
    year: "2023 - Present",
    role: "Senior Creative Developer",
    company: "TechNova",
    desc: "Leading frontend engineering with WebGL and React.",
  },
  {
    year: "2021 - 2023",
    role: "Frontend Engineer",
    company: "Studio 3D",
    desc: "Built award-winning interactive websites.",
  },
  {
    year: "2019 - 2021",
    role: "UI/UX Designer",
    company: "Digital Edge",
    desc: "Designed interfaces with high focus on micro-interactions.",
  },
];

export default function About() {
  return (
    <section id="expertise" className="py-32 relative z-10 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-gradient">Experience</span> & Journey
        </h2>
        <p className="text-white/60 max-w-2xl text-lg">
          My path in digital creation is defined by a constant push to bridge the gap between technical engineering and aesthetic design.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Timeline */}
        <div className="relative pl-8 border-l border-white/10 space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-surface border-2 border-primary neon-glow" />
              <span className="text-accent-cyan font-mono text-sm mb-2 block">{item.year}</span>
              <h3 className="text-2xl font-semibold text-white mb-1">{item.role}</h3>
              <h4 className="text-lg text-white/80 mb-3">{item.company}</h4>
              <p className="text-white/50">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 h-fit">
          <GlassCard glowOnHover className="flex flex-col items-center justify-center text-center p-8">
            <span className="text-4xl font-bold text-white mb-2">5+</span>
            <span className="text-sm text-white/50 uppercase tracking-wider">Years Exp.</span>
          </GlassCard>
          <GlassCard glowOnHover className="flex flex-col items-center justify-center text-center p-8">
            <span className="text-4xl font-bold text-white mb-2">40+</span>
            <span className="text-sm text-white/50 uppercase tracking-wider">Projects</span>
          </GlassCard>
          <GlassCard glowOnHover className="flex flex-col items-center justify-center text-center p-8">
            <span className="text-4xl font-bold text-white mb-2">12</span>
            <span className="text-sm text-white/50 uppercase tracking-wider">Awards</span>
          </GlassCard>
          <GlassCard glowOnHover className="flex flex-col items-center justify-center text-center p-8">
            <span className="text-4xl font-bold text-white mb-2">100%</span>
            <span className="text-sm text-white/50 uppercase tracking-wider">Passion</span>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
