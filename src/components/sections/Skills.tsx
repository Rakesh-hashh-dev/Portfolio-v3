"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { certifications, skillGroups } from "@/lib/profile";

const iconClass = [
  "bg-accent-cyan/10 text-accent-cyan ring-1 ring-accent-cyan/22",
  "bg-accent-purple/10 text-accent-purple ring-1 ring-accent-purple/22",
  "bg-accent-cyan/10 text-accent-cyan ring-1 ring-accent-cyan/22",
  "bg-accent-purple/10 text-accent-purple ring-1 ring-accent-purple/22",
  "bg-accent-cyan/10 text-accent-cyan ring-1 ring-accent-cyan/22",
];

const topLine = [
  "via-accent-cyan/55",
  "via-accent-purple/55",
  "via-accent-cyan/55",
  "via-accent-purple/55",
  "via-accent-cyan/55",
];

const leftBar = [
  "from-accent-cyan via-accent-cyan/35 to-transparent",
  "from-accent-purple via-accent-purple/35 to-transparent",
  "from-accent-cyan via-accent-cyan/35 to-transparent",
  "from-accent-purple via-accent-purple/35 to-transparent",
  "from-accent-cyan via-accent-cyan/35 to-transparent",
];

export default function Skills() {
  const isOdd = skillGroups.length % 2 !== 0;

  return (
    <section className="content-section relative mx-auto max-w-7xl px-6 py-12 pb-24">

      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 top-16 h-80 w-80 rounded-full bg-accent-cyan/4 blur-[100px]" />
        <div className="absolute -right-10 bottom-1/3 h-72 w-72 rounded-full bg-accent-purple/4 blur-[88px]" />
      </div>

      <div className="relative grid gap-10 lg:grid-cols-[1fr_0.68fr]">

        {/* ── Skill groups ─────────────────────────────── */}
        <div>
          <p className="eyebrow mb-8">Capabilities</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group, i) => {
              const lastOdd = isOdd && i === skillGroups.length - 1;
              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.028] p-6 transition-all duration-300 hover:border-white/14 hover:bg-white/[0.04] ${lastOdd ? "sm:col-span-2" : ""}`}
                >
                  <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${topLine[i]} to-transparent`} />
                  <div className={`absolute inset-y-0 left-0 w-[3px] rounded-l-2xl bg-gradient-to-b ${leftBar[i]}`} />

                  {/* Icon + count badge */}
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconClass[i]} transition-transform duration-200 group-hover:scale-110`}
                    >
                      <group.icon size={22} />
                    </div>
                    <span className="rounded-lg border border-white/8 bg-white/[0.04] px-2.5 py-1 text-[10px] font-black text-white/30">
                      {group.skills.length} skills
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white/90">{group.title}</h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/8 bg-white/[0.04] px-3 py-1.5 text-sm text-white/55 transition-all duration-150 hover:border-accent-cyan/25 hover:bg-accent-cyan/[0.06] hover:text-accent-cyan cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Certifications ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mb-8">Certifications</p>
          <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] p-6">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/35 to-transparent" />

            {/* Count display */}
            <div className="mb-6 border-b border-white/6 pb-5">
              <p className="text-gradient-cyan text-4xl font-black">
                {certifications.length}
              </p>
              <p className="mt-1 text-sm text-white/32">credentials earned</p>
            </div>

            <div className="space-y-2.5">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.38 }}
                  className="flex items-start gap-3 rounded-xl border border-white/6 bg-white/[0.03] px-4 py-3.5 text-sm text-white/52 transition-all duration-200 hover:border-accent-cyan/22 hover:bg-accent-cyan/[0.04] hover:text-white/78 cursor-default"
                >
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-accent-cyan/70" />
                  {cert}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
