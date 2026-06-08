"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { homeCards, profile, recruiterFit } from "@/lib/profile";

const signals = [
  "Available for internships and live projects",
  "Résumé and LinkedIn one click away",
  "Pages structured around recruiter review flow",
];

export default function HomeFeatures() {
  return (
    <>
      {/* ── What I bring ─────────────────────────────── */}
      <section className="content-section section-band mx-auto max-w-7xl px-6 pb-24 pt-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col gap-5 border-t border-[var(--theme-hairline)] pt-10 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="eyebrow mb-5">Why this profile</p>
            <h2 className="display max-w-xl text-4xl text-white md:text-5xl">
              What I bring to the table.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-white/50 md:text-right">
            Engineering foundations, MBA training, and hands-on execution across
            consulting, operations, and marketing.
          </p>
        </motion.div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-[var(--theme-hairline)] bg-[var(--theme-hairline)] md:grid-cols-2">
          {recruiterFit.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="group relative bg-surface p-8 transition-colors hover:bg-white/[0.02]"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="num text-3xl text-accent-cyan/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--theme-hairline)] text-accent-cyan transition-colors group-hover:border-accent-cyan/40">
                  <item.icon size={18} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-[1.85] text-white/55">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Explore by area ──────────────────────────── */}
      <section className="section-band content-section py-20">
        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <p className="eyebrow mb-5">The full profile</p>
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
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {homeCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
              >
                <Link
                  href={card.href}
                  className="card-glow group relative flex h-full flex-col rounded-lg border border-[var(--theme-hairline)] bg-surface p-7"
                >
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-md border border-[var(--theme-hairline)] text-accent-cyan transition-all duration-200 group-hover:border-accent-cyan/45 group-hover:bg-accent-cyan/[0.06]">
                    <card.icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-white/55">{card.text}</p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-cyan">
                    Open
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Signal strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.45 }}
            className="mt-5 grid divide-y divide-[var(--theme-hairline)] overflow-hidden rounded-lg border border-[var(--theme-hairline)] md:grid-cols-3 md:divide-x md:divide-y-0"
          >
            {signals.map((text) => (
              <div key={text} className="flex items-center gap-3 px-6 py-4 text-sm text-white/55">
                <Check size={15} className="shrink-0 text-accent-cyan" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
