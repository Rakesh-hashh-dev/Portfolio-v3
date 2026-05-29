"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { education, profile, stats } from "@/lib/profile";

export default function About() {
  return (
    <section className="content-section relative z-10 mx-auto max-w-7xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"
      >
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-cyan">Profile</p>
          <h2 className="text-3xl font-bold md:text-5xl">Business generalist with technical depth.</h2>
        </div>
        <p className="rounded-lg border border-white/10 bg-white/[0.045] p-5 text-lg leading-8 text-white/68">
          {profile.summary} I am actively seeking opportunities in consulting, operations, strategy, marketing, and
          business analytics where structured execution and data-driven thinking create measurable value.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h3 className="mb-4 text-2xl font-semibold text-white">Education</h3>
          <div className="grid gap-4">
            {education.map((item) => (
              <GlassCard key={item.program} className="p-5">
                <p className="text-sm font-medium text-accent-purple">{item.period}</p>
                <h4 className="mt-2 text-xl font-semibold text-white">{item.program}</h4>
                <p className="text-white/75">{item.school}</p>
                <p className="mt-3 text-sm leading-6 text-white/65">{item.detail}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-2xl font-semibold text-white">Operating Style</h3>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <GlassCard key={stat.label} glowOnHover className="p-5">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-white/65">{stat.label}</p>
              </GlassCard>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
