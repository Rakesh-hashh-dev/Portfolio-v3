"use client";

import { AnimatePresence, m } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/profile";
import { Skeleton } from "@/components/ui/skeleton";

const categories = ["All", "Operations", "Marketing", "Strategy", "Leadership"];

const SKELETON_MS = 220;

function CardSkeleton() {
  return (
    <div className="flex flex-col rounded-lg border border-[var(--theme-hairline)] bg-surface p-7">
      {/* Icon + category row */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <Skeleton className="h-11 w-11 rounded-md" />
        <Skeleton className="h-6 w-24 rounded-full" />
      </div>
      {/* Title */}
      <Skeleton className="h-7 w-[70%] rounded" />
      {/* Outcome */}
      <Skeleton className="mt-2 h-4 w-[42%] rounded" />
      {/* Summary lines */}
      <div className="mt-4 space-y-2">
        <Skeleton className="h-3 w-full rounded" />
        <Skeleton className="h-3 w-full rounded" />
        <Skeleton className="h-3 w-[80%] rounded" />
      </div>
      {/* Points */}
      <div className="mt-6 space-y-2.5 border-t border-[var(--theme-hairline)] pt-5">
        <Skeleton className="h-3 w-[55%] rounded" />
        <Skeleton className="h-3 w-[65%] rounded" />
        <Skeleton className="h-3 w-[48%] rounded" />
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const filtered = caseStudies.filter((p) => filter === "All" || p.category === filter);

  function handleFilter(cat: string) {
    if (cat === filter) return;
    setFilter(cat);
    if (!reducedMotion) {
      setTransitioning(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setTransitioning(false), SKELETON_MS);
    }
  }

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const skeletonCount = Math.min(Math.max(filtered.length, 2), 6);

  return (
    <section className="content-section section-raised relative mx-auto max-w-7xl px-6 py-8 pb-28">

      {/* ── Filter bar ─────────────────────────────────── */}
      <div className="mb-10 flex flex-wrap items-center gap-2 border-t border-[var(--theme-hairline)] pt-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-[background-color,border-color,color,transform] duration-150 active:scale-[0.96] ${
              filter === cat
                ? "border-primary bg-primary text-[var(--theme-on-primary)]"
                : "border-[var(--theme-hairline)] text-white/55 hover:border-accent-cyan/40 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
        <m.span
          key={filtered.length}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="ml-auto text-xs font-medium uppercase tracking-[0.18em] text-white/55"
        >
          {filtered.length} {filtered.length === 1 ? "study" : "studies"}
        </m.span>
      </div>

      {/* ── Skeleton grid (filter transition) ─────────── */}
      {transitioning ? (
        <div className="grid gap-5 md:grid-cols-2">
          {Array.from({ length: skeletonCount }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      ) : (
        /* ── Cards ──────────────────────────────────────── */
        <m.div layout className="grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => {
              const isFeatured = project.id === 1;
              return (
                <m.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.2 } }}
                  transition={{ delay: idx * 0.06, duration: 0.28 }}
                  className={`card-glow group flex flex-col rounded-lg border p-7 ${
                    isFeatured
                      ? "md:col-span-2 border-accent-cyan/25 bg-gradient-to-br from-surface to-accent-cyan/[0.04]"
                      : "border-[var(--theme-hairline)] bg-surface"
                  }`}
                >
                  {isFeatured ? (
                    /* ── Featured layout (Fortune 500) ── */
                    <div className="md:grid md:grid-cols-[1fr_260px] md:gap-8 md:items-start">
                      <div>
                        <div className="mb-6 flex items-start justify-between gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-md border border-accent-cyan/30 text-accent-cyan">
                            <project.icon size={22} />
                          </div>
                          <span className="rounded-full border border-accent-purple/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-purple">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="display text-3xl text-white md:text-4xl">{project.title}</h3>
                        <p className="mt-2 text-base font-semibold text-accent-cyan">{project.outcome}</p>
                        <p className="mt-4 text-sm leading-[1.88] text-white/65 md:max-w-lg">{project.summary}</p>
                        <Link
                          href={`/case-studies/${project.slug}`}
                          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan transition-opacity hover:opacity-75"
                        >
                          Read full case study <ArrowRight size={13} />
                        </Link>
                      </div>
                      <div className="mt-6 rounded-lg border border-[var(--theme-hairline)] bg-white/[0.03] p-5 md:mt-0">
                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">Key outcomes</p>
                        <div className="space-y-3">
                          {project.points.map((point) => (
                            <div key={point} className="flex items-start gap-3 text-sm text-white/70">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                              {point}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* ── Standard layout ── */
                    <>
                      <div className="mb-6 flex items-start justify-between gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-md border border-[var(--theme-hairline)] text-accent-cyan transition-colors group-hover:border-accent-cyan/40">
                          <project.icon size={20} />
                        </div>
                        <span className="rounded-full border border-[var(--theme-hairline)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="display text-2xl text-white">{project.title}</h3>
                      <p className="mt-2 text-sm font-semibold text-accent-cyan">{project.outcome}</p>
                      <p className="mt-4 text-sm leading-[1.88] text-white/65">{project.summary}</p>
                      <div className="mt-6 space-y-2.5 border-t border-[var(--theme-hairline)] pt-5">
                        {project.points.map((point) => (
                          <div key={point} className="flex items-center gap-3 text-sm text-white/70">
                            <span className="h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                            {point}
                          </div>
                        ))}
                      </div>
                      <Link
                        href={`/case-studies/${project.slug}`}
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan/75 transition-[color,opacity] group-hover:text-accent-cyan"
                      >
                        Read case study <ArrowRight size={12} />
                      </Link>
                    </>
                  )}
                </m.div>
              );
            })}
          </AnimatePresence>
        </m.div>
      )}
    </section>
  );
}
