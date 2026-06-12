"use client";

import { m } from "framer-motion";
import { Check } from "lucide-react";
import { certifications, skillGroups } from "@/lib/profile";
import StatCounter from "@/components/ui/StatCounter";

const internshipDeliverables = [
  "Market research: competitive analysis, supply-chain mapping & strategic recommendations for leadership",
  "Evaluated CRM platforms, productivity suites & customer-engagement tools for tech stack decisions",
  "Designed marketing performance dashboards to surface key decision-making metrics",
  "Built & shipped a production website — React · Vite · TailwindCSS with custom no-code CMS",
  "Designed an automated sales-visit management system to streamline field operations",
];

export default function Skills() {
  const isOdd = skillGroups.length % 2 !== 0;

  return (
    <section className="content-section section-raised relative mx-auto max-w-7xl px-6 py-8 pb-24">
      <div className="grid gap-12 border-t border-[var(--theme-hairline)] pt-12 md:grid-cols-[1fr_0.66fr]">

        {/* ── Skill groups ─────────────────────────────── */}
        <div>
          <p className="eyebrow mb-8">Capabilities</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group, i) => {
              const lastOdd = isOdd && i === skillGroups.length - 1;
              const isCore = group.title === "Business Strategy" || group.title === "Operations & Process";
              return (
                <m.div
                  key={group.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className={`group rounded-lg border bg-surface p-6 transition-colors ${
                    isCore
                      ? "border-accent-purple/30 hover:border-accent-purple/50"
                      : "border-[var(--theme-hairline)] hover:border-accent-cyan/30"
                  } ${lastOdd ? "sm:col-span-2" : ""}`}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-md border transition-colors ${
                      isCore
                        ? "border-accent-purple/35 text-accent-purple group-hover:border-accent-purple/55"
                        : "border-[var(--theme-hairline)] text-accent-cyan group-hover:border-accent-cyan/40"
                    }`}>
                      <group.icon size={20} />
                    </div>
                    {isCore ? (
                      <span className="rounded-full border border-accent-purple/35 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-accent-purple">
                        Core
                      </span>
                    ) : (
                      <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/55">
                        {group.skills.length} skills
                      </span>
                    )}
                  </div>

                  <h3 className="display text-xl text-white">{group.title}</h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="cursor-default rounded-md border border-[var(--theme-hairline)] px-3 py-1.5 text-sm text-white/60 transition-colors hover:border-accent-cyan/35 hover:text-accent-cyan"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>

        {/* ── Certifications ───────────────────────────── */}
        <m.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow mb-8">Certifications</p>
          <div className="rounded-lg border border-[var(--theme-hairline)] bg-surface p-6">
            <div className="mb-6 flex items-baseline gap-3 border-b border-[var(--theme-hairline)] pb-5">
              <p className="num text-4xl text-white"><StatCounter value={String(certifications.length)} /></p>
              <p className="text-sm text-white/60">credentials earned</p>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <m.div
                  key={cert}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.35 }}
                  className="flex items-start gap-3 text-sm leading-6 text-white/75"
                >
                  <Check size={15} className="mt-0.5 shrink-0 text-accent-cyan" />
                  {cert}
                </m.div>
              ))}
            </div>
          </div>
        </m.div>
      </div>

      {/* ── Summer Internship ────────────────────────── */}
      <m.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="mt-12 border-t border-[var(--theme-hairline)] pt-12"
      >
        <p className="eyebrow mb-8">Applied Experience</p>
        <div className="card-glow rounded-xl border border-accent-cyan/25 bg-gradient-to-br from-surface to-accent-cyan/[0.03] p-7 md:p-8">
          <div className="md:grid md:grid-cols-[1fr_300px] md:gap-10 md:items-start">

            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
                Summer Internship · Apr – Jun 2026
              </p>
              <h3 className="display text-2xl text-white md:text-3xl">
                Strategy, Marketing & Product Management Intern
              </h3>
              <p className="mt-1.5 text-base font-semibold text-accent-cyan">
                Mr Gardenr · Ahmedabad, Gujarat
              </p>
              <p className="mt-5 text-sm leading-[1.88] text-white/65">
                Covered the full spectrum of a growing premium landscaping business — from strategy to shipping.
                End-to-end responsibility across market research, tech stack evaluation, marketing analytics,
                and production engineering.
              </p>
            </div>

            <div className="mt-6 rounded-lg border border-accent-cyan/20 bg-accent-cyan/[0.04] p-5 md:mt-0">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">
                Key deliverables
              </p>
              <div className="space-y-3">
                {internshipDeliverables.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-[1.75] text-white/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </m.div>
    </section>
  );
}
