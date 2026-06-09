// ─────────────────────────────────────────────────────────────
// PARKED — Stitch `05` "Connect for Opportunities" contact design.
// Form (mailto-backed) + channels + OpenStreetMap embed.
// Not currently imported anywhere. To use it, swap the import in
// src/app/contact/page.tsx from "@/components/sections/Contact"
// to this file.
// ─────────────────────────────────────────────────────────────
"use client";

import { useState } from "react";
import { m, type Variants } from "framer-motion";
import { ArrowUpRight, FileText, Mail, MapPin, Send, UserRound } from "lucide-react";
import { profile } from "@/lib/profile";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const up: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const channels = [
  {
    label: "LinkedIn",
    value: "rakesh-kumar-behera",
    href: profile.linkedin,
    icon: UserRound,
    external: true,
  },
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "Résumé",
    value: "Download PDF",
    href: profile.resume,
    icon: FileText,
    external: false,
  },
];

// Keyless OpenStreetMap embed centred on Bhubaneswar.
const MAP_SRC =
  "https://www.openstreetmap.org/export/embed.html?bbox=85.7445%2C20.2361%2C85.9045%2C20.3561&layer=mapnik&marker=20.2961%2C85.8245";
const MAP_LINK = "https://www.openstreetmap.org/?mlat=20.2961&mlon=85.8245#map=12/20.2961/85.8245";

const inputClass =
  "w-full rounded-md border border-[var(--theme-hairline)] bg-surface/60 px-4 py-3 text-sm text-white/90 placeholder:text-white/35 transition-colors focus:border-accent-cyan/50 focus:outline-none";
const labelClass =
  "mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-white/55";

export default function ContactStitch05() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = form.subject.trim() || "Portfolio enquiry";
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section className="content-section section-raised relative mx-auto max-w-6xl px-6 py-8 pb-28">
      <m.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="grid gap-12 border-t border-[var(--theme-hairline)] pt-12 lg:grid-cols-2"
      >
        {/* ── Form ─────────────────────────────────────── */}
        <m.form
          variants={up}
          onSubmit={handleSubmit}
          className="rounded-lg border border-[var(--theme-hairline)] bg-surface p-6 md:p-8"
        >
          <div className="grid gap-5">
            <div>
              <label htmlFor="c-name" className={labelClass}>Full name</label>
              <input id="c-name" name="name" required value={form.name} onChange={set("name")}
                placeholder="Your name" className={inputClass} />
            </div>
            <div>
              <label htmlFor="c-email" className={labelClass}>Email address</label>
              <input id="c-email" name="email" type="email" required value={form.email} onChange={set("email")}
                placeholder="you@example.com" className={inputClass} />
            </div>
            <div>
              <label htmlFor="c-subject" className={labelClass}>Subject</label>
              <input id="c-subject" name="subject" value={form.subject} onChange={set("subject")}
                placeholder="What's this about?" className={inputClass} />
            </div>
            <div>
              <label htmlFor="c-message" className={labelClass}>Message</label>
              <textarea id="c-message" name="message" required rows={5} value={form.message} onChange={set("message")}
                placeholder="A few lines about the opportunity…" className={`${inputClass} resize-none`} />
            </div>
            <button type="submit" className="btn-primary w-full justify-center">
              <Send size={16} />
              Send message
            </button>
            <p className="text-center text-[11px] text-white/40">
              Opens in your email client — no data is stored.
            </p>
          </div>
        </m.form>

        {/* ── Info + map ───────────────────────────────── */}
        <m.div variants={up} className="flex flex-col">
          <h2 className="display text-4xl text-white md:text-5xl">
            Let&rsquo;s talk{" "}
            <em className="italic text-gradient-cyan">strategy.</em>
          </h2>
          <p className="mt-5 max-w-md text-base leading-[1.85] text-white/65">
            Open to consulting, strategy &amp; operations, and product roles — and to live projects,
            case competitions, and internships before Final Placements 2027.
          </p>

          {/* Channels */}
          <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-[var(--theme-hairline)] bg-[var(--theme-hairline)]">
            {channels.map(({ label, value, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 bg-surface p-4 transition-colors hover:bg-white/[0.02]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[var(--theme-hairline)] text-accent-cyan transition-colors group-hover:border-accent-cyan/40">
                  <Icon size={17} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">{label}</p>
                  <p className="mt-0.5 truncate text-sm font-semibold text-white/80">{value}</p>
                </div>
                <ArrowUpRight size={15} className="shrink-0 text-white/40 transition-colors group-hover:text-accent-cyan" />
              </a>
            ))}
          </div>

          {/* Location + map */}
          <div className="mt-6">
            <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-white/70">
              <MapPin size={15} className="text-accent-purple" />
              Currently based in {profile.location}
            </p>
            <div className="overflow-hidden rounded-lg border border-[var(--theme-hairline)]">
              <iframe
                title="Map showing Bhubaneswar, India"
                src={MAP_SRC}
                loading="lazy"
                className="h-[220px] w-full"
                style={{ border: 0, filter: "grayscale(0.25) contrast(1.05)" }}
              />
            </div>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-2 inline-flex items-center gap-1 text-xs font-semibold text-white/55 hover:text-white"
            >
              View larger map
              <ArrowUpRight size={12} />
            </a>
          </div>
        </m.div>
      </m.div>
    </section>
  );
}
