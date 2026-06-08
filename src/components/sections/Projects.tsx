"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { caseStudies } from "@/lib/profile";

const categories = ["All", "Operations", "Marketing", "Strategy", "Leadership"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = caseStudies.filter((p) => filter === "All" || p.category === filter);

  return (
    <section className="content-section relative mx-auto max-w-7xl px-6 py-8 pb-28">

      {/* ── Filter bar ─────────────────────────────────── */}
      <div className="mb-10 flex flex-wrap items-center gap-2 border-t border-[var(--theme-hairline)] pt-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
              filter === cat
                ? "bg-primary text-[var(--theme-on-primary)]"
                : "border border-[var(--theme-hairline)] text-white/55 hover:border-accent-cyan/40 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
        <motion.span
          key={filtered.length}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="ml-auto text-xs font-medium uppercase tracking-[0.18em] text-white/35"
        >
          {filtered.length} {filtered.length === 1 ? "study" : "studies"}
        </motion.span>
      </div>

      {/* ── Cards ──────────────────────────────────────── */}
      <motion.div layout className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.2 } }}
              transition={{ delay: idx * 0.06, duration: 0.38 }}
              className="card-glow group flex flex-col rounded-lg border border-[var(--theme-hairline)] bg-surface p-7"
            >
              {/* Icon + category */}
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-md border border-[var(--theme-hairline)] text-accent-cyan transition-colors group-hover:border-accent-cyan/40">
                  <project.icon size={20} />
                </div>
                <span className="rounded-full border border-[var(--theme-hairline)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                  {project.category}
                </span>
              </div>

              <h3 className="display text-2xl text-white">{project.title}</h3>
              <p className="mt-2 text-sm font-semibold text-accent-cyan">{project.outcome}</p>
              <p className="mt-4 text-sm leading-[1.88] text-white/50">{project.summary}</p>

              <div className="mt-6 space-y-2.5 border-t border-[var(--theme-hairline)] pt-5">
                {project.points.map((point) => (
                  <div key={point} className="flex items-center gap-3 text-sm text-white/55">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
