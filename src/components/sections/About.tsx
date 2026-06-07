"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { education, profile, stats } from "@/lib/profile";

export default function About() {
  return (
    <section className="content-section relative z-10 mx-auto max-w-7xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"
      >
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-cyan/25 bg-accent-cyan/8 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-cyan">Profile</span>
          </div>
          <h2 className="text-3xl font-bold leading-tight md:text-5xl">Business generalist with technical depth.</h2>
        </div>
        <p className="rounded-xl border border-white/8 bg-white/[0.04] p-5 text-lg leading-8 text-white/65">
          {profile.summary} I am actively seeking opportunities in consulting, operations, strategy, marketing, and
          business analytics where structured execution and data-driven thinking create measurable value.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h3 className="mb-5 text-2xl font-semibold text-white">Education</h3>
          <div className="grid gap-4">
            {education.map((item, index) => (
              <motion.div
                key={item.program}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.1, duration: 0.45 }}
              >
                <GlassCard className="relative overflow-hidden p-5">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-purple/40 to-transparent" />
                  <p className="text-sm font-medium text-accent-purple">{item.period}</p>
                  <h4 className="mt-2 text-xl font-semibold text-white">{item.program}</h4>
                  <p className="font-medium text-white/60">{item.school}</p>
                  <p className="mt-3 text-sm leading-6 text-white/55">{item.detail}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-2xl font-semibold text-white">Operating Style</h3>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <GlassCard glowOnHover className="relative overflow-hidden p-5">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-white/55">{stat.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
