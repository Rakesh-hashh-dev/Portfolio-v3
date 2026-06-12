// Stitch `07` footer design — brand + Explore / Connect columns + copyright,
// finished with a gold (accent-purple) rule. The previous footer design is
// parked in Footer.previous.tsx.
import Link from "next/link";
import { FileText, Mail, UserRound } from "lucide-react";
import { profile } from "@/lib/profile";

const exploreLinks = [
  { label: "About",        href: "/about" },
  { label: "Experience",   href: "/experience" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Skills",       href: "/skills" },
  { label: "Contact",      href: "/contact" },
];

const connectLinks = [
  { label: "LinkedIn", href: profile.linkedin,            icon: UserRound, external: true },
  { label: "Résumé",   href: profile.resume,              icon: FileText,  external: false },
  { label: "Email",    href: `mailto:${profile.email}`,   icon: Mail,      external: false },
];

export default function Footer() {
  return (
    <footer className="footer-band relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.7fr_1fr_1fr] lg:grid-cols-[2fr_1fr_1fr_1.1fr]">

          {/* ── Brand ──────────────────────────────────── */}
          <div>
            <Link href="/" className="display text-3xl text-white transition-colors hover:text-accent-purple md:text-[2rem]">
              Rakesh Kumar Behera
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-[1.8] text-white/55">
              MBA Candidate &amp; Strategic Leader. Bridging Business &amp; Innovation.
            </p>
            <div className="mt-6 h-px w-44 bg-gradient-to-r from-accent-purple/70 to-transparent" />
          </div>

          {/* ── Explore ────────────────────────────────── */}
          <nav>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.24em] text-accent-purple/80">
              Explore
            </p>
            <ul className="space-y-3">
              {exploreLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="link-underline text-sm text-white/60 transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Connect ────────────────────────────────── */}
          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.24em] text-accent-purple/80">
              Connect
            </p>
            <ul className="space-y-3">
              {connectLinks.map(({ label, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    <Icon size={14} className="shrink-0 text-accent-purple transition-transform duration-200 group-hover:-translate-y-0.5" />
                    <span className="link-underline">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Copyright ──────────────────────────────── */}
          <div className="md:col-span-3 lg:col-span-1 lg:text-right">
            <p className="text-sm leading-[1.7] text-white/45">
              &copy; {new Date().getFullYear()} Rakesh Kumar Behera.
              <br className="hidden lg:block" /> All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Gold accent rule */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-purple/55 to-transparent" />
    </footer>
  );
}
