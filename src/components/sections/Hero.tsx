"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Download, MapPin, Sparkles } from "lucide-react";
import { highlights, impactMetrics, profile } from "@/lib/profile";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-32 md:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm font-medium text-accent-cyan shadow-lg shadow-black/10">
            <MapPin size={16} />
            {profile.location}
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            {profile.name}
            <span className="mt-3 block text-gradient">MBA talent for roles that need strategy, execution, and measurable growth.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">{profile.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["MBA Candidate", "Business Strategy", "Data-Driven Execution", "Lean Six Sigma Green Belt"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.07] px-3 py-2 text-sm text-white/72">
                <Sparkles size={14} className="text-accent-purple" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--theme-primary-hover)]"
            >
              View Case Studies
              <ArrowRight size={18} />
            </Link>
            <a
              href={profile.resume}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Resume
              <Download size={18} />
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">{item.label}</p>
                <p className="mt-2 text-base font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-white/58">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/5] max-w-[520px] overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-2xl shadow-black/35">
            <Image
              src="/DP-optimized.webp"
              alt="Rakesh Kumar Behera"
              fill
              priority
              quality={88}
              sizes="(min-width: 1024px) 520px, 92vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface via-surface/65 to-transparent p-5 pt-24">
              <div className="glass-card rounded-lg p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/50">Impact Snapshot</p>
                    <p className="font-semibold text-white">Leadership and execution</p>
                  </div>
                  <BarChart3 className="text-accent-purple" size={22} />
                </div>
                <div className="space-y-3">
                  {impactMetrics.slice(0, 3).map((metric) => (
                    <div key={metric.label}>
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="text-white/60">{metric.label}</span>
                        <span className="font-semibold text-white">{metric.value}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: metric.width }}
                          transition={{ duration: 1, delay: 0.35 }}
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
    </section>
  );
}
