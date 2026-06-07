"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Download } from "lucide-react";
import { impactMetrics, profile, stats } from "@/lib/profile";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-24 pb-20 md:pt-32 md:pb-24">

      {/* Section-level spotlight */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute top-40 right-1/4 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-accent-purple/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

          {/* ── Left: text ──────────────────────────────────── */}
          <motion.div variants={container} initial="hidden" animate="show">

            <motion.p variants={fadeUp} className="eyebrow mb-8">
              MBA Candidate · IIM Sambalpur · 2025–2027
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-6xl font-black leading-[1.0] tracking-tight md:text-7xl lg:text-[5.75rem]"
            >
              Rakesh<br />
              <span className="text-gradient">Kumar Behera</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-xl font-semibold text-white/75 md:text-2xl"
            >
              Strategy · Execution · Measurable Growth
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-[1.0625rem] leading-[1.85] text-white/48"
            >
              {profile.summary}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/case-studies"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-[var(--theme-primary-hover)] hover:shadow-xl hover:shadow-primary/40"
              >
                View Case Studies
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={profile.resume}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-semibold text-white/80 transition-all hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/[0.07] hover:text-white"
              >
                Resume
                <Download size={17} />
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={fadeUp}
              className="mt-14 grid grid-cols-2 gap-y-8 gap-x-8 border-t border-white/8 pt-10 sm:grid-cols-4"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-gradient-cyan text-3xl font-black tracking-tight">{stat.value}</p>
                  <p className="mt-2 text-xs leading-5 text-white/38">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: photo ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Ambient glow behind photo */}
            <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-primary/18 via-transparent to-accent-purple/14 blur-2xl" />

            {/* Photo */}
            <div className="relative mx-auto aspect-[3/4] max-w-[390px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/60">
              <Image
                src="/DP-optimized.webp"
                alt="Rakesh Kumar Behera"
                fill
                priority
                quality={88}
                sizes="(min-width: 1024px) 390px, 90vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-surface via-surface/65 to-transparent" />

              {/* Floating impact card */}
              <div className="absolute inset-x-4 bottom-4 glass-card rounded-2xl p-4">
                <div className="mb-3.5 flex items-center justify-between">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/32">Impact Snapshot</p>
                  <div className="rounded-lg bg-accent-purple/15 p-1.5 text-accent-purple">
                    <BarChart3 size={14} />
                  </div>
                </div>
                <div className="space-y-2.5">
                  {impactMetrics.slice(0, 3).map((metric) => (
                    <div key={metric.label}>
                      <div className="mb-1.5 flex justify-between text-[11px]">
                        <span className="text-white/40">{metric.label}</span>
                        <span className="font-bold text-white/85">{metric.value}</span>
                      </div>
                      <div className="h-1 rounded-full bg-white/8">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: metric.width }}
                          transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
