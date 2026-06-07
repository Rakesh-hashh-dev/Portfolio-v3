"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { caseStudies } from "@/lib/profile";

const categories = ["All", "Operations", "Marketing", "Strategy", "Leadership"];

const accent = {
  Marketing:  { icon: "bg-accent-cyan/10 text-accent-cyan ring-accent-cyan/22",   badge: "bg-accent-cyan/10 text-accent-cyan ring-accent-cyan/22",   line: "via-accent-cyan/60",   dot: "bg-accent-cyan",   glow: "shadow-accent-cyan/10"  },
  Operations: { icon: "bg-accent-purple/10 text-accent-purple ring-accent-purple/22", badge: "bg-accent-purple/10 text-accent-purple ring-accent-purple/22", line: "via-accent-purple/60", dot: "bg-accent-purple", glow: "shadow-accent-purple/10" },
  Strategy:   { icon: "bg-accent-cyan/10 text-accent-cyan ring-accent-cyan/22",   badge: "bg-accent-cyan/10 text-accent-cyan ring-accent-cyan/22",   line: "via-accent-cyan/60",   dot: "bg-accent-cyan",   glow: "shadow-accent-cyan/10"  },
  Leadership: { icon: "bg-accent-purple/10 text-accent-purple ring-accent-purple/22", badge: "bg-accent-purple/10 text-accent-purple ring-accent-purple/22", line: "via-accent-purple/60", dot: "bg-accent-purple", glow: "shadow-accent-purple/10" },
} as const;

type Category = keyof typeof accent;

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = caseStudies.filter((p) => filter === "All" || p.category === filter);

  return (
    <section className="content-section relative mx-auto max-w-7xl px-6 py-12 pb-28">

      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-8%] top-10 h-80 w-80 rounded-full bg-accent-cyan/4 blur-[100px]" />
        <div className="absolute left-[-6%] bottom-1/4 h-72 w-72 rounded-full bg-accent-purple/4 blur-[85px]" />
      </div>

      {/* ── Filter bar ─────────────────────────────────── */}
      <div className="mb-12 flex flex-wrap items-center gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`relative rounded-xl px-4 py-2 text-sm font-bold transition-all duration-200 ${
              filter === cat
                ? "border border-accent-cyan/38 bg-accent-cyan/10 text-accent-cyan shadow-md shadow-accent-cyan/12"
                : "border border-white/8 bg-white/[0.03] text-white/40 hover:border-white/15 hover:bg-white/[0.055] hover:text-white/72"
            }`}
          >
            {filter === cat && (
              <span className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/55 to-transparent" />
            )}
            {cat}
          </button>
        ))}
        <motion.span
          key={filtered.length}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          className="ml-auto rounded-lg border border-white/8 bg-white/[0.03] px-3 py-1.5 text-xs font-bold text-white/30"
        >
          {filtered.length} {filtered.length === 1 ? "result" : "results"}
        </motion.span>
      </div>

      {/* ── Cards ──────────────────────────────────────── */}
      <motion.div layout className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, idx) => {
            const a = accent[project.category as Category] ?? accent.Marketing;
            return (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ delay: idx * 0.06, duration: 0.38 }}
                whileHover={{ y: -4, transition: { duration: 0.22 } }}
                className={`group relative cursor-default overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] p-7 shadow-xl ${a.glow} transition-shadow duration-300`}
              >
                {/* Top accent line */}
                <div
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${a.line} to-transparent`}
                />
                {/* Hover glow overlay */}
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-white/[0.025] to-transparent" />

                <div className="relative">
                  {/* Icon + badge */}
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className={`rounded-2xl p-3.5 ring-1 ${a.icon} transition-transform duration-200 group-hover:scale-110`}>
                      <project.icon size={22} />
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-[0.18em] ring-1 ${a.badge}`}
                    >
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className={`mt-1.5 text-sm font-bold ${a.icon.split(" ")[1]}`}>{project.outcome}</p>
                  <p className="mt-4 text-sm leading-[1.88] text-white/42">{project.summary}</p>

                  <div className="mt-6 space-y-2.5">
                    {project.points.map((point) => (
                      <div key={point} className="flex items-center gap-3 text-sm text-white/48">
                        <div className={`h-1 w-1 shrink-0 rounded-full ${a.dot}`} />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
