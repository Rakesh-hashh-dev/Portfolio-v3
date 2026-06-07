"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { certifications, skillGroups } from "@/lib/profile";
import { CheckCircle2 } from "lucide-react";

export default function Skills() {
  return (
    <section className="content-section relative z-10 mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
            >
              <GlassCard className="h-full p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-cyan/10 text-accent-cyan ring-1 ring-accent-cyan/20">
                  <group.icon size={22} />
                </div>
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-1.5 text-sm text-white/68 transition-colors hover:border-accent-cyan/30 hover:text-white/90"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.45 }}
        >
          <GlassCard className="p-6">
            <h3 className="mb-1 text-xl font-semibold text-white">Certifications</h3>
            <p className="mb-5 text-sm text-white/45">{certifications.length} credentials</p>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-start gap-3 rounded-lg border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-white/68 transition-colors hover:border-accent-cyan/25 hover:text-white/85"
                >
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent-cyan" />
                  {cert}
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
