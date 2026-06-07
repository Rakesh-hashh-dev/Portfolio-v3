"use client";

import { motion, type Variants } from "framer-motion";
import { GraduationCap, MapPin, Target } from "lucide-react";
import { education, impactMetrics, profile, stats } from "@/lib/profile";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const up: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const quickFacts = [
  {
    icon: GraduationCap,
    label: "Program",
    value: "MBA · IIM Sambalpur",
    sub: "2025 – 2027",
    color: "cyan" as const,
  },
  {
    icon: Target,
    label: "Background",
    value: "TCS System Engineer",
    sub: "3 yrs 9 months",
    color: "purple" as const,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bhubaneswar, India",
    sub: null,
    color: "cyan" as const,
  },
];

export default function About() {
  return (
    <div className="content-section relative pb-24">

      {/* Page-level ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-accent-cyan/4 blur-[130px]" />
        <div className="absolute right-[-5%] top-1/2 h-[400px] w-[400px] rounded-full bg-accent-purple/4 blur-[110px]" />
      </div>

      {/* ── Profile feature card ────────────────────────── */}
      <section className="relative mx-auto max-w-7xl px-6 pt-4 pb-14">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-8 md:p-12"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/55 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-accent-cyan/45 via-accent-cyan/10 to-transparent" />
          {/* Decorative background text */}
          <span className="pointer-events-none absolute right-6 top-2 select-none text-[9rem] font-black leading-none text-white/[0.02]">
            MBA
          </span>

          <div className="relative grid gap-12 lg:grid-cols-[1fr_320px] lg:items-start">
            {/* Left: headline + summary */}
            <div>
              <p className="eyebrow mb-6">Profile</p>
              <h2 className="text-4xl font-black leading-tight md:text-5xl xl:text-6xl">
                Business generalist with{" "}
                <span className="text-gradient-cyan">technical depth.</span>
              </h2>
              <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.85] text-white/55">
                {profile.summary}
              </p>
              <p className="mt-4 max-w-xl text-base leading-[1.85] text-white/35">
                Seeking consulting, operations, strategy, marketing, and analytics roles where structured execution and
                data-driven thinking create measurable value.
              </p>
            </div>

            {/* Right: quick fact cards */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="grid gap-3"
            >
              {quickFacts.map((f) => (
                <motion.div
                  key={f.label}
                  variants={up}
                  className={`flex items-center gap-4 rounded-2xl border p-4 ${
                    f.color === "cyan"
                      ? "border-accent-cyan/16 bg-accent-cyan/[0.045]"
                      : "border-accent-purple/16 bg-accent-purple/[0.045]"
                  }`}
                >
                  <div
                    className={`rounded-xl p-2.5 ring-1 ${
                      f.color === "cyan"
                        ? "bg-accent-cyan/10 text-accent-cyan ring-accent-cyan/22"
                        : "bg-accent-purple/10 text-accent-purple ring-accent-purple/22"
                    }`}
                  >
                    <f.icon size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/28">{f.label}</p>
                    <p className="mt-0.5 font-semibold text-white/85">{f.value}</p>
                    {f.sub && <p className="text-xs text-white/38">{f.sub}</p>}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── Stats band ─────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="card-glow relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] p-6"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/38 to-transparent" />
              <p className="text-gradient-cyan text-4xl font-black tracking-tight">{stat.value}</p>
              <p className="mt-3 text-xs leading-5 text-white/38">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Education + Impact metrics ─────────────────── */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Education */}
          <div>
            <p className="eyebrow mb-8">Education</p>
            <div className="space-y-4">
              {education.map((item, i) => (
                <motion.div
                  key={item.program}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="card-glow relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] p-6"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-purple/55 to-transparent" />
                  <div className="absolute inset-y-0 left-0 w-[3px] rounded-l-2xl bg-gradient-to-b from-accent-purple via-accent-purple/35 to-transparent" />
                  <p className="text-sm font-semibold text-accent-purple">{item.period}</p>
                  <h4 className="mt-3 text-xl font-bold text-white">{item.program}</h4>
                  <p className="mt-0.5 font-medium text-white/48">{item.school}</p>
                  <p className="mt-3 text-sm leading-[1.8] text-white/38">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Impact metrics */}
          <div>
            <p className="eyebrow mb-8">Impact Metrics</p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] p-7"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/35 to-transparent" />
              <div className="space-y-7">
                {impactMetrics.map((metric, i) => (
                  <div key={metric.label}>
                    <div className="mb-2.5 flex items-baseline justify-between gap-3">
                      <span className="text-sm text-white/42">{metric.label}</span>
                      <span className="text-gradient-cyan text-lg font-black">{metric.value}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/6">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: metric.width }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 + i * 0.12, duration: 1.0, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
