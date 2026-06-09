"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { impactMetrics, profile, stats } from "@/lib/profile";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-12 md:pt-32 md:pb-14">
      <div className="relative mx-auto max-w-7xl">

        {/* ── Masthead row ─────────────────────────────── */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center justify-between border-b border-[var(--theme-hairline)] pb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55"
        >
          <span>Portfolio — MBA 2025/27</span>
          <span className="hidden sm:inline">Bhubaneswar · India</span>
        </m.div>

        <div className="grid gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">

          {/* ── Left: editorial lede ─────────────────────── */}
          <m.div variants={container} initial="hidden" animate="show">

            {/* Availability */}
            <m.div variants={fadeUp} className="mb-7">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[var(--theme-hairline)] px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-white/60">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
                </span>
                Open to Final Placements · 2027
              </span>
            </m.div>

            {/* Name kicker */}
            <m.p
              variants={fadeUp}
              className="mb-5 text-[12px] font-bold uppercase tracking-[0.32em] text-accent-cyan"
            >
              Rakesh Kumar Behera
            </m.p>

            {/* Headline */}
            <m.h1
              variants={fadeUp}
              className="display text-5xl text-white md:text-6xl lg:text-[4.4rem]"
            >
              Strategy that ships{" "}
              <em className="italic text-gradient-cyan">measurable results.</em>
            </m.h1>

            {/* Role line */}
            <m.p
              variants={fadeUp}
              className="mt-7 text-lg font-medium text-white/70"
            >
              MBA Candidate at IIM Sambalpur · Ex-TCS Team Lead · Fortune 500 delivery
            </m.p>

            {/* Lede */}
            <m.p
              variants={fadeUp}
              className="mt-4 max-w-[52ch] text-[1.0625rem] leading-[1.85] text-white/55"
            >
              {profile.summary}
            </m.p>

            {/* CTAs */}
            <m.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/case-studies" className="btn-accent group">
                View Case Studies
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a href={profile.resume} className="btn-ghost group">
                Download Résumé
                <Download size={16} className="transition-transform group-hover:translate-y-0.5" />
              </a>
            </m.div>

            {/* Stat strip */}
            <m.div variants={fadeUp} className="mt-14 border-t border-[var(--theme-hairline)] pt-9">
              <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={i > 0 ? "sm:border-l sm:border-[var(--theme-hairline)] sm:pl-6" : ""}
                  >
                    <p className="num text-4xl text-accent-purple md:text-5xl">{stat.value}</p>
                    <p className="mt-2 text-xs leading-5 text-white/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </m.div>
          </m.div>

          {/* ── Right: framed portrait ───────────────────── */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[400px] lg:max-w-none"
          >
            <div className="relative mx-auto max-w-[400px]">
              {/* Editorial offset frame */}
              <div className="pointer-events-none absolute -bottom-4 -right-4 h-full w-full rounded-sm border border-primary/30" />

              {/* Registration ticks (diagonal pair) */}
              <span className="pointer-events-none absolute -right-2 -top-2 z-20 h-4 w-4 border-r border-t border-accent-cyan/90" />
              <span className="pointer-events-none absolute -bottom-2 -left-2 z-20 h-4 w-4 border-b border-l border-accent-cyan/90" />

              {/* Portrait */}
              <div className="group relative aspect-[4/5] overflow-hidden rounded-sm border border-[var(--theme-hairline)] shadow-xl shadow-black/10">
                <Image
                  src="/DP-optimized.webp"
                  alt="Rakesh Kumar Behera"
                  fill
                  priority
                  sizes="(min-width: 1024px) 400px, 90vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                {/* Bottom vignette for depth */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-surface/70 to-transparent" />
              </div>

              {/* Credential chip — top-right */}
              <m.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.45 }}
                className="absolute -left-6 top-8 z-10 hidden md:block"
              >
                <div style={{ animation: "float-badge-a 5s ease-in-out infinite 1.2s" }}>
                  <div className="glass-card flex items-center gap-2.5 rounded-lg px-3.5 py-2.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md bg-[#ffffff] p-1">
                      <Image
                        src="/iim-sambalpur-logo.webp"
                        alt="IIM Sambalpur"
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/55">Program</p>
                      <p className="text-[13px] font-semibold text-white/90">IIM Sambalpur</p>
                    </div>
                  </div>
                </div>
              </m.div>

              {/* Selected impact card — overlapping bottom */}
              <m.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.55 }}
                className="glass-card relative z-10 -mt-10 ml-4 mr-[-0.5rem] rounded-lg p-5"
              >
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">
                    Selected Impact
                  </p>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-cyan">
                    2024 — 26
                  </span>
                </div>
                <div className="divide-y divide-[var(--theme-hairline)]">
                  {impactMetrics.slice(0, 3).map((metric) => (
                    <div key={metric.label} className="flex items-baseline justify-between py-2.5">
                      <span className="text-[13px] text-white/70">{metric.label}</span>
                      <span className="num text-lg text-accent-purple">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </m.div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
