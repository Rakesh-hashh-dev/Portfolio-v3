"use client";

import { m, type Variants } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Send, UserRound } from "lucide-react";
import { profile } from "@/lib/profile";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const up: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Contact() {
  return (
    <section className="content-section section-raised relative mx-auto max-w-4xl px-6 py-8 pb-28">
      <m.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="border-t border-[var(--theme-hairline)] pt-12"
      >
        {/* Availability */}
        <m.div variants={up} className="mb-8">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-[var(--theme-hairline)] px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-white/60">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            Open to Final Placements · 2027
          </span>
        </m.div>

        {/* Headline */}
        <m.h2 variants={up} className="display text-6xl text-white md:text-8xl">
          Let&rsquo;s talk.
        </m.h2>

        <m.p variants={up} className="mt-6 max-w-md text-lg leading-[1.85] text-white/70">
          Targeting management consulting, strategy & operations, and product management. Available for final placements in 2027.
        </m.p>

        {/* Email */}
        <m.a
          variants={up}
          href={`mailto:${profile.email}`}
          className="group mt-10 inline-flex items-center gap-3 text-2xl font-medium text-white/80 transition-colors hover:text-accent-cyan md:text-3xl"
        >
          <span className="link-underline">{profile.email}</span>
          <ArrowUpRight
            size={24}
            className="text-white/50 transition-all group-hover:text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </m.a>

        {/* Contact cards */}
        <m.div variants={up} className="mt-12 grid gap-px overflow-hidden rounded-lg border border-[var(--theme-hairline)] bg-[var(--theme-hairline)] sm:grid-cols-2">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-surface p-5 transition-colors hover:bg-white/[0.05]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[var(--theme-hairline)] text-accent-cyan transition-colors group-hover:border-accent-cyan/40">
              <UserRound size={19} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">LinkedIn</p>
              <p className="mt-0.5 truncate text-sm font-semibold text-white/75">
                rakesh-kumar-behera-rk821604
              </p>
            </div>
            <ArrowUpRight size={15} className="shrink-0 text-white/50 transition-all group-hover:text-accent-cyan" />
          </a>

          <div className="flex items-center gap-4 bg-surface p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[var(--theme-hairline)] text-accent-purple">
              <MapPin size={19} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">Location</p>
              <p className="mt-0.5 text-sm font-semibold text-white/75">{profile.location}</p>
            </div>
          </div>
        </m.div>

        {/* CTAs */}
        <m.div variants={up} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={`mailto:${profile.email}?subject=Portfolio%20Conversation&body=Hi%20Rakesh%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding...`}
            className="btn-primary"
          >
            <Mail size={16} />
            Send a message
          </a>
          <a href={profile.resume} className="btn-ghost">
            <Send size={16} />
            Download résumé
          </a>
        </m.div>
      </m.div>
    </section>
  );
}
