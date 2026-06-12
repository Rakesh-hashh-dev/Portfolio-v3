"use client";

import { m, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Building2, Calendar, CheckCircle2 } from "lucide-react";
import { caseStudies } from "@/lib/profile";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const up: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

function STARSection({
  step,
  label,
  accent,
  children,
}: {
  step: string;
  label: string;
  accent: "accent-cyan" | "accent-purple";
  children: React.ReactNode;
}) {
  const borderColor =
    accent === "accent-cyan" ? "border-accent-cyan/25" : "border-accent-purple/25";
  const accentLeft =
    accent === "accent-cyan" ? "border-l-accent-cyan/55" : "border-l-accent-purple/55";
  const stepColor =
    accent === "accent-cyan" ? "text-accent-cyan" : "text-accent-purple";

  return (
    <m.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`card-glow rounded-xl border border-l-2 ${borderColor} ${accentLeft} bg-surface p-7`}
    >
      <div className="flex items-center gap-3 mb-5">
        <span className={`display text-4xl font-bold ${stepColor} leading-none`}>{step}</span>
        <div className={`h-px flex-1 border-t border-dashed ${borderColor}`} />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
          {label}
        </span>
      </div>
      {children}
    </m.div>
  );
}

export function CaseStudyContent({ slug }: { slug: string }) {
  const idx = caseStudies.findIndex((c) => c.slug === slug);
  if (idx === -1) return null;

  const cs = caseStudies[idx];
  const prev = idx > 0 ? caseStudies[idx - 1] : null;
  const next = idx < caseStudies.length - 1 ? caseStudies[idx + 1] : null;
  const Icon = cs.icon;

  return (
    <>
      {/* ── Back nav ── */}
      <m.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="mx-auto max-w-4xl px-6 pt-24 pb-2"
      >
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-accent-cyan"
        >
          <ArrowLeft size={14} />
          All case studies
        </Link>
      </m.div>

      {/* ── Header card ── */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        className="mx-auto max-w-4xl px-6 py-8"
      >
        <div className="card-glow rounded-xl border border-[var(--theme-hairline)] bg-surface p-8">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex h-12 w-12 items-center justify-center rounded-md border border-accent-cyan/30 text-accent-cyan shrink-0">
              <Icon size={22} />
            </div>
            <span className="rounded-full border border-accent-purple/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-purple">
              {cs.category}
            </span>
          </div>
          <h1 className="display mt-5 text-3xl text-white md:text-4xl">{cs.title}</h1>
          <p className="mt-2 text-base font-semibold text-accent-cyan">{cs.outcome}</p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/55">
            <span className="flex items-center gap-1.5">
              <Building2 size={13} />
              {cs.org}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {cs.duration}
            </span>
          </div>
          <p className="mt-5 text-sm leading-[1.88] text-white/70 border-t border-[var(--theme-hairline)] pt-5">
            {cs.summary}
          </p>
          {cs.points.length > 0 && (
            <div className="mt-5 grid gap-2.5 border-t border-[var(--theme-hairline)] pt-5 sm:grid-cols-2">
              {cs.points.map((point) => (
                <div key={point} className="flex items-start gap-2.5 text-sm leading-[1.7] text-white/70">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-accent-cyan" />
                  {point}
                </div>
              ))}
            </div>
          )}
        </div>
      </m.div>

      {/* ── STAR sections ── */}
      <m.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-4xl px-6 pb-8 space-y-5"
      >
        <STARSection step="S" label="Situation" accent="accent-cyan">
          <p className="text-sm leading-[1.9] text-white/70">{cs.star.situation}</p>
        </STARSection>

        <STARSection step="T" label="Task" accent="accent-purple">
          <p className="text-sm leading-[1.9] text-white/70">{cs.star.task}</p>
        </STARSection>

        <STARSection step="A" label="Actions taken" accent="accent-cyan">
          <ul className="space-y-3">
            {cs.star.action.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-[1.8] text-white/70">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                {item}
              </li>
            ))}
          </ul>
        </STARSection>

        <STARSection step="R" label="Results achieved" accent="accent-purple">
          <ul className="space-y-3">
            {cs.star.result.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-[1.8] text-white/70">
                <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-accent-cyan" />
                {item}
              </li>
            ))}
          </ul>
        </STARSection>
      </m.div>

      {/* ── Prev / Next nav ── */}
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-4xl px-6 pb-24"
      >
        <div className="flex items-center justify-between gap-4 border-t border-[var(--theme-hairline)] pt-8">
          {prev ? (
            <Link
              href={`/case-studies/${prev.slug}`}
              className="group flex min-w-0 items-center gap-2 text-sm text-white/55 transition-colors hover:text-accent-cyan"
            >
              <ArrowLeft size={14} className="shrink-0 transition-transform group-hover:-translate-x-0.5" />
              <span className="truncate max-w-[180px]">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/case-studies/${next.slug}`}
              className="group flex min-w-0 items-center gap-2 text-sm text-white/55 transition-colors hover:text-accent-cyan"
            >
              <span className="truncate max-w-[180px]">{next.title}</span>
              <ArrowRight size={14} className="shrink-0 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </m.div>
    </>
  );
}
