"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, BarChart3, Download, MapPin, Sparkles } from "lucide-react";
import { highlights, impactMetrics, profile } from "@/lib/profile";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-32 md:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-cyan/25 bg-accent-cyan/8 px-3.5 py-1.5 text-sm font-medium text-accent-cyan">
            <MapPin size={14} />
            {profile.location}
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
            {profile.name}
            <span className="mt-3 block text-gradient">
              MBA talent for roles that need strategy, execution, and measurable growth.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">{profile.summary}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["MBA Candidate", "Business Strategy", "Data-Driven Execution", "Lean Six Sigma Green Belt"].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-sm text-white/68"
              >
                <Sparkles size={12} className="text-accent-purple" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-[var(--theme-primary-hover)] hover:shadow-xl hover:shadow-primary/30"
            >
              View Case Studies
              <ArrowRight size={17} />
            </Link>
            <a
              href={profile.resume}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.05] px-6 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/[0.09]"
            >
              Resume
              <Download size={17} />
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="relative overflow-hidden rounded-xl border border-white/8 bg-white/[0.035] p-4 transition-colors hover:border-white/14"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-purple/35 to-transparent" />
                <p className="text-xs font-bold uppercase tracking-wider text-accent-cyan">{item.label}</p>
                <p className="mt-2 text-base font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-white/52">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/5] max-w-[520px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-black/35">
            <Image
              src="/DP-optimized.webp"
              alt="Rakesh Kumar Behera"
              fill
              priority
              quality={88}
              sizes="(min-width: 1024px) 520px, 92vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface via-surface/70 to-transparent p-5 pt-28">
              <div className="glass-card rounded-xl p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/45">Impact Snapshot</p>
                    <p className="mt-0.5 font-semibold text-white">Leadership and execution</p>
                  </div>
                  <div className="rounded-lg bg-accent-purple/15 p-2 text-accent-purple">
                    <BarChart3 size={20} />
                  </div>
                </div>
                <div className="space-y-3">
                  {impactMetrics.slice(0, 3).map((metric) => (
                    <div key={metric.label}>
                      <div className="mb-1.5 flex items-center justify-between text-xs">
                        <span className="text-white/55">{metric.label}</span>
                        <span className="font-semibold text-white">{metric.value}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: metric.width }}
                          transition={{ duration: 1.1, delay: 0.4, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mx-auto mt-16 flex max-w-7xl justify-center pb-8 lg:justify-start"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 text-white/30"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
