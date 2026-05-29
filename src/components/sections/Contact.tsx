"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { Mail, MapPin, Send, UserRound } from "lucide-react";
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
    href: "/",
  },
];

export default function Contact() {
  return (
    <section className="content-section relative z-10 mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="glass-card flex items-center gap-4 rounded-lg p-5 transition-colors hover:bg-white/10"
            >
              <div className="rounded-lg bg-accent-cyan/10 p-3 text-accent-cyan">
                <item.icon size={22} />
              </div>
              <div>
                <p className="text-sm text-white/45">{item.label}</p>
                <p className="break-all font-medium text-white">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <GlassCard className="p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-accent-purple/15 p-3 text-accent-purple">
                <Send size={22} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">Quick message</h3>
                <p className="text-sm text-white/50">This opens your email client with a prepared message.</p>
              </div>
            </div>

            <a
              href={`mailto:${profile.email}?subject=Portfolio%20Conversation&body=Hi%20Rakesh%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding...`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 font-semibold text-white transition-colors hover:bg-[var(--theme-primary-hover)]"
            >
              Email Rakesh
              <Send size={18} />
            </a>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
