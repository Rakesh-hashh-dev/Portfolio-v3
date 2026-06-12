"use client";

import { m, type Variants } from "framer-motion";
import { GraduationCap, MapPin, Quote, Target } from "lucide-react";
import { education, impactMetrics, philosophy, profile, stats } from "@/lib/profile";
import StatCounter from "@/components/ui/StatCounter";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const up: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const quickFacts = [
  { icon: GraduationCap, label: "Program", value: "MBA · IIM Sambalpur", sub: "2025 – 2027" },
  { icon: Target, label: "Background", value: "TCS System Engineer", sub: "44 months · Fortune 500" },
  { icon: MapPin, label: "Location", value: "Bhubaneswar, India", sub: null },
];

export default function About() {
  return (
    <div className="content-section section-raised relative pb-24">

      {/* ── Profile + quick facts ───────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-8 pb-16">
        <div className="grid gap-12 border-t border-[var(--theme-hairline)] pt-12 md:grid-cols-[1fr_260px] md:items-start lg:grid-cols-[1fr_340px]">
          {/* Left: headline + summary */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <p className="eyebrow mb-6">Profile</p>
            <h2 className="display text-5xl text-white md:text-[3.5rem]">
              Fortune 500 delivery experience meets{" "}
              <em className="italic text-gradient-cyan">MBA strategy.</em>
            </h2>
            <p className="mt-7 max-w-xl text-[1.0625rem] leading-[1.85] text-white/60">
              {profile.summary}
            </p>
            <p className="mt-4 max-w-xl text-base leading-[1.85] text-white/65">
              Targeting management consulting, strategy & operations, and product management roles —
              where enterprise delivery experience and MBA analytical frameworks create measurable business impact.
            </p>
          </m.div>

          {/* Right: quick fact rows */}
          <m.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="divide-y divide-[var(--theme-hairline)] overflow-hidden rounded-lg border border-[var(--theme-hairline)]"
          >
            {quickFacts.map((f) => (
              <m.div key={f.label} variants={up} className="flex items-center gap-4 bg-surface p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[var(--theme-hairline)] text-accent-cyan">
                  <f.icon size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">{f.label}</p>
                  <p className="mt-0.5 font-semibold text-white/90">{f.value}</p>
                  {f.sub && <p className="text-xs text-white/60">{f.sub}</p>}
                </div>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* ── Personal philosophy ────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <m.figure
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative overflow-hidden rounded-lg border border-[var(--theme-hairline)] bg-surface p-8 md:p-12"
        >
          <m.span
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute -right-4 -top-6"
            aria-hidden
          >
            <Quote size={120} className="text-accent-cyan/[0.06]" />
          </m.span>
          <blockquote className="display max-w-3xl text-2xl leading-[1.5] text-white/90 md:text-[2rem] md:leading-[1.45]">
            &ldquo;{philosophy.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-7 flex items-center gap-3 text-sm font-semibold text-white/70">
            <span className="h-px w-8 bg-accent-cyan/60" />
            {profile.name}
          </figcaption>
        </m.figure>
      </section>

      {/* ── Stats band ─────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-[var(--theme-hairline)] bg-[var(--theme-hairline)] md:grid-cols-4">
          {stats.map((stat, i) => (
            <m.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className="bg-surface p-6"
            >
              <p className="num text-4xl text-accent-purple"><StatCounter value={stat.value} /></p>
              <p className="mt-2 text-xs leading-5 text-white/60">{stat.label}</p>
            </m.div>
          ))}
        </div>
      </section>

      {/* ── Education + Impact metrics ─────────────────── */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] lg:grid-cols-[1.15fr_0.85fr]">

          {/* Education */}
          <div>
            <p className="eyebrow mb-8">Education</p>
            <div className="space-y-4">
              {education.map((item, i) => (
                <m.div
                  key={item.program}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="card-glow rounded-lg border border-[var(--theme-hairline)] bg-surface p-6"
                >
                  <p className="text-sm font-semibold text-accent-cyan">{item.period}</p>
                  <h4 className="mt-3 text-xl font-semibold text-white">{item.program}</h4>
                  <p className="mt-1 font-medium text-white/70">{item.school}</p>
                  <p className="mt-3 text-sm leading-[1.8] text-white/60">{item.detail}</p>
                </m.div>
              ))}
            </div>
          </div>

          {/* Impact metrics */}
          <div>
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="rounded-lg border border-[var(--theme-hairline)] bg-surface"
            >
              <div className="grid grid-cols-2 gap-px bg-[var(--theme-hairline)] overflow-hidden rounded-lg">
                {impactMetrics.map((metric, i) => (
                  <m.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.08, duration: 0.45 }}
                    className="bg-surface p-6"
                  >
                    <p className="num text-3xl text-accent-purple">{metric.value}</p>
                    <p className="mt-2 text-xs leading-5 text-white/60">{metric.label}</p>
                  </m.div>
                ))}
              </div>
            </m.div>
          </div>
        </div>
      </section>
    </div>
  );
}
