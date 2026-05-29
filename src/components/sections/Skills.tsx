"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { certifications, skillGroups } from "@/lib/profile";

export default function Skills() {
  return (
    <section className="content-section relative z-10 mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <GlassCard className="h-full p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-accent-cyan/10 text-accent-cyan">
                  <group.icon size={22} />
                </div>
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-lg bg-white/[0.07] px-3 py-2 text-sm text-white/72">
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <GlassCard className="p-6">
          <h3 className="text-xl font-semibold text-white">Certifications</h3>
          <div className="mt-5 space-y-3">
            {certifications.map((cert) => (
              <div key={cert} className="rounded-lg border border-white/10 bg-white/[0.055] px-4 py-3 text-sm text-white/72">
                {cert}
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
