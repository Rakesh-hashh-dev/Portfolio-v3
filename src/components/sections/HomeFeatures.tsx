"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { homeCards, profile, recruiterFit } from "@/lib/profile";

const cardAccent = [
  { line: "via-accent-cyan/55",   bar: "from-accent-cyan via-accent-cyan/35 to-transparent",   icon: "bg-accent-cyan/10 text-accent-cyan ring-1 ring-accent-cyan/22"   },
  { line: "via-accent-purple/55", bar: "from-accent-purple via-accent-purple/35 to-transparent", icon: "bg-accent-purple/10 text-accent-purple ring-1 ring-accent-purple/22" },
  { line: "via-accent-cyan/55",   bar: "from-accent-cyan via-accent-cyan/35 to-transparent",   icon: "bg-accent-cyan/10 text-accent-cyan ring-1 ring-accent-cyan/22"   },
  { line: "via-accent-purple/55", bar: "from-accent-purple via-accent-purple/35 to-transparent", icon: "bg-accent-purple/10 text-accent-purple ring-1 ring-accent-purple/22" },
];

const signals = [
  "Available for internships and live projects",
  "Resume and LinkedIn one click away",
  "Pages structured by recruiter review flow",
];

export default function HomeFeatures() {
  return (
    <>
      {/* ── What I Bring ─────────────────────────────── */}
      <section className="content-section mx-auto max-w-7xl px-6 pb-24">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="eyebrow mb-5">Why hire this profile</p>
            <h2 className="max-w-lg text-4xl font-black leading-tight md:text-5xl">
              What I bring{" "}
              <span className="text-gradient-cyan">to the table.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-white/38 md:text-right">
            Engineering foundations, MBA training, and hands-on execution across consulting, operations, and marketing.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {recruiterFit.map((item, i) => {
            const a = cardAccent[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative cursor-default overflow-hidden rounded-2xl border border-white/8 bg-white/[0.028] p-7 transition-colors hover:border-white/14 hover:bg-white/[0.04]"
              >
                <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${a.line} to-transparent`} />
                <div className={`absolute inset-y-0 left-0 w-[3px] rounded-l-2xl bg-gradient-to-b ${a.bar}`} />
                <span className="pointer-events-none absolute right-5 top-2 select-none text-[6rem] font-black leading-none text-white/[0.03]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${a.icon} transition-transform duration-200 group-hover:scale-110`}>
                    <item.icon size={21} />
                  </div>
                  <h3 className="text-xl font-bold text-white/92">{item.title}</h3>
                  <p className="mt-3 text-sm leading-[1.88] text-white/42">{item.text}</p>
                </div>
              </motion.div>
            );
          })}
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
              <p className="eyebrow mb-5">Full profile</p>
              <h2 className="text-4xl font-black md:text-5xl">
                Explore{" "}
                <span className="text-gradient-cyan">by area.</span>
              </h2>
            </div>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/8 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white/65 transition-all hover:-translate-y-0.5 hover:border-white/14 hover:text-white"
            >
              LinkedIn Profile
              <ArrowRight size={14} />
            </a>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {homeCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
              >
                <Link
                  href={card.href}
                  className="card-glow group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] p-7"
                >
                  {/* Animated top accent line */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/0 to-transparent transition-all duration-500 group-hover:via-accent-cyan/55" />
                  {/* Hover background tint */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/0 via-transparent to-transparent transition-all duration-500 group-hover:from-accent-cyan/[0.04]" />

                  <div className="relative flex flex-1 flex-col">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-cyan/8 text-accent-cyan ring-1 ring-accent-cyan/18 transition-all duration-200 group-hover:scale-110 group-hover:bg-accent-cyan/14 group-hover:shadow-lg group-hover:shadow-accent-cyan/12">
                      <card.icon size={22} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-white/45">{card.text}</p>
                    <div className="mt-6 flex items-center gap-1.5 text-sm font-bold text-accent-cyan">
                      Open
                      <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1.5" />
                    </div>
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
            transition={{ delay: 0.28, duration: 0.45 }}
            className="mt-5 overflow-hidden rounded-2xl border border-white/6 bg-white/[0.015]"
          >
            <div className="divide-y divide-white/6 md:divide-x md:divide-y-0 grid md:grid-cols-3">
              {signals.map((text) => (
                <div key={text} className="flex items-center gap-3 px-6 py-4 text-sm text-white/40">
                  <CheckCircle2 size={14} className="shrink-0 text-accent-cyan/60" />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
