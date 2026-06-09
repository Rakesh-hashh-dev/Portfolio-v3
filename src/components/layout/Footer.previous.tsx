// ─────────────────────────────────────────────────────────────
// PARKED — previous footer design (CTA block + credential chips +
// availability badge + nav/connect columns). Replaced by the Stitch
// `07` footer in Footer.tsx. Not imported anywhere.
// To restore: copy this back into Footer.tsx (rename the export to
// `Footer`), or import this file in src/app/layout.tsx instead.
// ─────────────────────────────────────────────────────────────
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, FileText, Mail, UserRound } from "lucide-react";

const navLinks = [
  { label: "About",        href: "/about" },
  { label: "Experience",   href: "/experience" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Skills",       href: "/skills" },
  { label: "Contact",      href: "/contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rakesh-kumar-behera-rk821604", icon: UserRound, external: true },
  { label: "Email",    href: "mailto:rk821604@gmail.com",                                 icon: Mail,      external: false },
  { label: "Résumé",   href: "/Profile.pdf",                                              icon: FileText,  external: false },
];

const credentials = [
  { value: "44 mo",        label: "TCS" },
  { value: "Fortune 500",  label: "Delivery" },
  { value: "IIM SBP",      label: "MBA 2027" },
];

export default function FooterPrevious() {
  return (
    <footer className="footer-band relative overflow-hidden pb-8">
      {/* Top gradient accent rule */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-cyan/35 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pt-14">

        {/* ── CTA block ────────────────────────────────────── */}
        <div className="mb-14 grid gap-8 border-b border-[var(--theme-hairline)] pb-14 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow mb-5">Get in touch</p>
            <h2 className="display text-4xl text-white md:text-5xl leading-[1.08]">
              Ready to<br className="hidden sm:block" /> connect?
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-[1.85] text-white/55">
              MBA Candidate open to Final Placements 2027.
              Consulting · Strategy · Operations · Product.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:flex-col md:items-end">
            <a href="mailto:rk821604@gmail.com" className="btn-accent">
              <Mail size={15} />
              Get in touch
            </a>
            <a href="/Profile.pdf" className="btn-ghost">
              <Download size={15} />
              Download Résumé
            </a>
          </div>
        </div>

        {/* ── Info grid ────────────────────────────────────── */}
        <div className="grid gap-10 md:grid-cols-[1.55fr_1fr_1fr] md:gap-8">

          {/* Brand column */}
          <div>
            {/* Logo + name */}
            <Link href="/" className="group mb-5 flex items-center gap-3 w-fit">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md ring-1 ring-[var(--theme-hairline)] transition-all group-hover:ring-accent-cyan/45">
                <Image src="/logo.webp" alt="RK" width={36} height={36} className="object-cover" />
              </div>
              <div className="leading-tight">
                <p className="display text-[15px] text-white transition-colors group-hover:text-accent-cyan">
                  Rakesh Kumar Behera
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  MBA · IIM Sambalpur
                </p>
              </div>
            </Link>

            <p className="max-w-[28ch] text-sm leading-[1.85] text-white/50">
              Fortune 500 delivery experience meets MBA strategic frameworks — creating measurable outcomes.
            </p>

            {/* Credential chips */}
            <div className="mt-5 flex flex-wrap gap-2">
              {credentials.map((c) => (
                <span
                  key={c.value}
                  className="rounded-md border border-[var(--theme-hairline)] px-2.5 py-1 text-[11px] font-semibold text-white/65"
                >
                  {c.value}
                  <span className="ml-1 text-white/30">· {c.label}</span>
                </span>
              ))}
            </div>

            {/* Availability badge */}
            <div className="mt-5">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wide text-white/50">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
                </span>
                Open to Final Placements · 2027
              </span>
            </div>
          </div>

          {/* Navigate column */}
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.26em] text-white/35">
              Navigate
            </p>
            <nav className="flex flex-col gap-1">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="group flex w-fit items-center gap-1.5 rounded px-0 py-1.5 text-sm text-white/55 transition-colors hover:text-white"
                >
                  <span className="link-underline">{label}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect column */}
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.26em] text-white/35">
              Connect
            </p>
            <div className="flex flex-col gap-1.5">
              {socialLinks.map(({ label, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex cursor-pointer items-center gap-3 rounded-md border border-transparent px-3 py-2.5 text-sm text-white/55 transition-all duration-150 hover:border-[var(--theme-hairline)] hover:bg-white/[0.03] hover:text-white"
                >
                  <Icon size={14} className="shrink-0 text-accent-cyan" />
                  <span>{label}</span>
                  {external && (
                    <ArrowUpRight
                      size={11}
                      className="ml-auto opacity-0 transition-opacity group-hover:opacity-55"
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────────────── */}
        <div className="mt-12 flex flex-col items-start gap-2 border-t border-[var(--theme-hairline)] pt-6 text-[11px] text-white/35 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Rakesh Kumar Behera · All rights reserved</p>
          <p className="font-semibold uppercase tracking-[0.2em] text-white/25">
            Strategy · Execution · Measurable Growth
          </p>
        </div>
      </div>
    </footer>
  );
}
