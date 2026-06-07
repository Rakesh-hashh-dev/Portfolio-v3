"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { ExternalLink, Mail, MapPin, Send, UserRound } from "lucide-react";
import { profile } from "@/lib/profile";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: UserRound,
    label: "LinkedIn",
    value: "linkedin.com/in/rakesh-kumar-behera-rk821604",
    href: profile.linkedin,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: null,
  },
];

export default function Contact() {
  return (
    <section className="content-section relative z-10 mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-3">
          {contactLinks.map((item) => {
            const inner = (
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-accent-cyan/10 p-3 text-accent-cyan ring-1 ring-accent-cyan/20 transition-colors group-hover:bg-accent-cyan/15">
                  <item.icon size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/40">{item.label}</p>
                  <p className="mt-0.5 truncate font-medium text-white">{item.value}</p>
                </div>
                {item.href && <ExternalLink size={15} className="shrink-0 text-white/30 transition-colors group-hover:text-white/60" />}
              </div>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass-card group flex items-center gap-4 rounded-xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20"
              >
                {inner}
              </a>
            ) : (
              <div key={item.label} className="glass-card group flex items-center gap-4 rounded-xl p-5">
                {inner}
              </div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.45 }}>
          <GlassCard className="p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-accent-purple/15 p-3 text-accent-purple ring-1 ring-accent-purple/20">
                <Send size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Quick message</h3>
                <p className="text-sm text-white/45">Opens your email client with a prepared draft.</p>
              </div>
            </div>

            <p className="mb-6 text-sm leading-7 text-white/55">
              Open to internships, live projects, case competitions, and opportunities where disciplined execution and business problem-solving matter.
            </p>

            <a
              href={`mailto:${profile.email}?subject=Portfolio%20Conversation&body=Hi%20Rakesh%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding...`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-[var(--theme-primary-hover)] hover:shadow-xl hover:shadow-primary/30"
            >
              Email Rakesh
              <Send size={16} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.05] px-6 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/[0.09]"
            >
              LinkedIn Profile
              <ExternalLink size={16} />
            </a>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
