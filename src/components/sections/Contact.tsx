"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink, Mail, MapPin, Send, UserRound } from "lucide-react";
import { profile } from "@/lib/profile";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const up: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Contact() {
  return (
    <section className="content-section relative mx-auto max-w-3xl px-6 py-12 pb-28">

      {/* Layered ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 -top-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent-cyan/7 blur-[160px]" />
        <div className="absolute left-1/2 top-20 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-accent-purple/5 blur-[110px]" />
        <div className="absolute left-1/2 bottom-0 h-[200px] w-[600px] -translate-x-1/2 rounded-full bg-primary/4 blur-[90px]" />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative text-center"
      >
        {/* Availability badge */}
        <motion.div variants={up} className="mb-10 flex justify-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-accent-cyan/25 bg-accent-cyan/8 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-accent-cyan shadow-lg shadow-accent-cyan/8">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-55" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-cyan" />
            </span>
            Available — Summer 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={up}
          className="text-[clamp(3.5rem,10vw,7rem)] font-black leading-none tracking-tight"
        >
          <span className="text-gradient">Let's talk.</span>
        </motion.h2>

        <motion.p
          variants={up}
          className="mx-auto mt-6 max-w-md text-lg leading-[1.85] text-white/40"
        >
          Open to consulting, operations, strategy, and marketing roles where disciplined execution matters.
        </motion.p>

        {/* Divider */}
        <motion.div variants={up} className="my-10 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-l from-accent-cyan/25 to-transparent" />
          <div className="h-1 w-1 rounded-full bg-accent-cyan/40" />
          <div className="h-px flex-1 bg-gradient-to-r from-accent-cyan/25 to-transparent" />
        </motion.div>

        {/* Email link */}
        <motion.a
          variants={up}
          href={`mailto:${profile.email}`}
          className="group mb-10 inline-flex items-center gap-3 text-2xl font-bold text-white/75 transition-colors hover:text-accent-cyan md:text-3xl"
        >
          {profile.email}
          <ExternalLink
            size={22}
            className="text-white/20 transition-all group-hover:text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </motion.a>

        {/* Contact cards */}
        <motion.div variants={up} className="mt-8 mb-10 grid gap-3 sm:grid-cols-2">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="card-glow group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] p-5 text-left"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/38 to-transparent" />
            <div className="rounded-xl bg-accent-cyan/9 p-3 text-accent-cyan ring-1 ring-accent-cyan/20 transition-all group-hover:bg-accent-cyan/16 group-hover:shadow-md group-hover:shadow-accent-cyan/12">
              <UserRound size={19} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/28">LinkedIn</p>
              <p className="mt-0.5 truncate text-sm font-semibold text-white/72">
                linkedin.com/in/rakesh-kumar-behera-rk821604
              </p>
            </div>
            <ExternalLink
              size={13}
              className="shrink-0 text-white/18 transition-all group-hover:text-white/55 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <div className="relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] p-5 text-left">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-purple/38 to-transparent" />
            <div className="rounded-xl bg-accent-purple/9 p-3 text-accent-purple ring-1 ring-accent-purple/20">
              <MapPin size={19} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/28">Location</p>
              <p className="mt-0.5 text-sm font-semibold text-white/72">{profile.location}</p>
            </div>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div variants={up} className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={`mailto:${profile.email}?subject=Portfolio%20Conversation&body=Hi%20Rakesh%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding...`}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 font-semibold text-white shadow-lg shadow-primary/28 transition-all hover:-translate-y-0.5 hover:bg-[var(--theme-primary-hover)] hover:shadow-xl hover:shadow-primary/38"
          >
            <Mail size={16} />
            Send a message
          </a>
          <a
            href={profile.resume}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-8 py-3.5 font-semibold text-white/72 transition-all hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/[0.07] hover:text-white"
          >
            <Send size={16} />
            Download resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
