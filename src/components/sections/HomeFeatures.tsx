"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { homeCards, profile, recruiterFit } from "@/lib/profile";

const credentials = [
  { org: "TCS", label: "44 months · Fortune 500 delivery" },
  { org: "IIM Sambalpur", label: "MBA · 2025 – 27" },
  { org: "Grant Thornton", label: "Lean Six Sigma Green Belt" },
  { org: "Microsoft", label: "Azure Certified · AZ-104" },
];

const signals = [
  "Résumé and LinkedIn accessible in one click",
  "Pages structured around recruiter review flow",
  "Final Placements 2027 · IIM Sambalpur MBA",
];

export default function HomeFeatures() {
  return (
    <>
      {/* ── Credential trust strip ───────────────────── */}
      <section className="content-section section-raised">
        <div className="mx-auto flex max-w-7xl items-center gap-5 overflow-x-auto px-6 py-7 md:py-8">
          <span className="hidden shrink-0 items-center gap-3 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.22em] text-white/45 md:inline-flex after:h-3 after:w-px after:bg-[var(--theme-hairline)]">
            Backed by
          </span>
          <m.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex min-w-max items-center gap-2.5 md:min-w-0 md:flex-wrap"
          >
            {credentials.map((c, i) => (
              <div key={c.org} className="flex items-center gap-2.5">
                {i > 0 && <span className="hidden h-3 w-px bg-white/15 md:block" />}
                <div className="flex items-center gap-2 rounded-full border border-[var(--theme-hairline)] bg-surface/50 px-4 py-1.5 backdrop-blur-sm">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-cyan">{c.org}</span>
                  <span className="h-2.5 w-px bg-white/20" />
                  <span className="whitespace-nowrap text-[11px] text-white/65">{c.label}</span>
                </div>
              </div>
            ))}
          </m.div>
        </div>
      </section>

      {/* ── What I bring ─────────────────────────────── */}
      <section className="content-section section-band mx-auto max-w-7xl px-6 pb-24 pt-16">

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 border-t border-[var(--theme-hairline)] pt-10"
        >
          <h2 className="display max-w-xl text-4xl text-white md:text-5xl">
            What I bring to the table.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
            Engineering foundations, MBA training, and hands-on execution across
            consulting, operations, and marketing.
          </p>
        </m.div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-[var(--theme-hairline)] bg-[var(--theme-hairline)] md:grid-cols-2">
          {recruiterFit.map((item, i) => (
            <m.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="group relative bg-surface p-8 transition-[background-color,border-color] duration-200 hover:bg-white/[0.05] hover:border-accent-cyan/20"
            >
              <div className="mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--theme-hairline)] text-accent-cyan transition-colors duration-200 group-hover:border-accent-cyan/40 group-hover:bg-accent-cyan/[0.06]">
                  <item.icon size={18} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-[1.85] text-white/55">{item.text}</p>
            </m.div>
          ))}
        </div>
      </section>

      {/* ── Explore by area ──────────────────────────── */}
      <section className="section-band content-section py-20">
        <div className="mx-auto max-w-7xl px-6">

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <h2 className="display text-4xl text-white md:text-5xl">Explore by area.</h2>
            </div>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-white/65 hover:text-white"
            >
              LinkedIn Profile
              <ArrowUpRight size={15} />
            </a>
          </m.div>

          <div className="grid gap-5 md:grid-cols-3">
            {homeCards.map((card, i) => (
              <m.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
              >
                <Link
                  href={card.href}
                  className="card-glow group relative flex h-full flex-col rounded-lg border border-[var(--theme-hairline)] bg-surface p-7 cursor-pointer"
                >
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-md border border-[var(--theme-hairline)] text-accent-cyan transition-all duration-200 group-hover:border-accent-cyan/45 group-hover:bg-accent-cyan/[0.06]">
                    <card.icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-white/55">{card.text}</p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-cyan">
                    {card.href === "/experience" ? "View timeline" : card.href === "/case-studies" ? "Read studies" : "See skills"}
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              </m.div>
            ))}
          </div>

          {/* Signal strip */}
          <m.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.45 }}
            className="mt-5 grid divide-y divide-[var(--theme-hairline)] overflow-hidden rounded-lg border border-[var(--theme-hairline)] md:grid-cols-3 md:divide-x md:divide-y-0"
          >
            {signals.map((text) => (
              <div key={text} className="flex items-center gap-3 px-6 py-4 text-sm text-white/65">
                <Check size={15} className="shrink-0 text-accent-cyan" />
                {text}
              </div>
            ))}
          </m.div>
        </div>
      </section>
    </>
  );
}
