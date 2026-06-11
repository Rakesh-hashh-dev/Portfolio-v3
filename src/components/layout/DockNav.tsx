"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BriefcaseBusiness, FileText, Home, Mail, Presentation, UserRound, LineChart } from "lucide-react";
import { m } from "framer-motion";

const mainDockItems = [
  { icon: Home,              label: "Home",       href: "/" },
  { icon: UserRound,         label: "About",      href: "/about" },
  { icon: BriefcaseBusiness, label: "Experience", href: "/experience" },
  { icon: Presentation,      label: "Cases",      href: "/case-studies" },
  { icon: LineChart,         label: "Skills",     href: "/skills" },
  { icon: Mail,              label: "Contact",    href: "/contact" },
];

const socialItems = [
  { icon: UserRound, label: "LinkedIn", href: "https://www.linkedin.com/in/rakesh-kumar-behera-rk821604" },
  { icon: Mail,      label: "Email",    href: "mailto:rk821604@gmail.com" },
  { icon: FileText,  label: "Resume",   href: "/Profile.pdf" },
];

export default function DockNav() {
  const pathname = usePathname();

  return (
    <>
      {/* ── Mobile bottom dock ────────────────────────── */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 lg:hidden"
      >
        <div className="relative flex items-end gap-0.5 overflow-hidden rounded-xl border border-[var(--theme-hairline)] bg-surface/90 px-2.5 py-2 shadow-xl shadow-black/15 backdrop-blur-2xl">
          {/* Top accent line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />

          {mainDockItems.map((item) => {
            const active = pathname === item.href;
            return (
              <m.div
                key={item.label}
                whileHover={{ scale: 1.18, y: -5 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 420, damping: 20 }}
              >
                <Link
                  href={item.href}
                  className={`relative flex flex-col items-center gap-1 rounded-xl px-3 py-2.5 transition-colors duration-150 ${
                    active ? "text-accent-cyan" : "text-white/60 hover:text-white/85"
                  }`}
                  aria-label={item.label}
                >
                  {active && (
                    <m.div
                      layoutId="dock-active"
                      className="absolute inset-0 rounded-xl bg-accent-cyan/10"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                  {active && (
                    <span className="absolute inset-x-2 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-accent-cyan/55 to-transparent" />
                  )}
                  <item.icon size={19} className="relative z-10" />
                  <span
                    className={`relative z-10 text-[9px] font-bold leading-none ${
                      active ? "text-accent-cyan" : ""
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </m.div>
            );
          })}
        </div>
      </m.div>

      {/* ── Desktop right sidebar ─────────────────────── */}
      <m.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-2 xl:flex"
      >
        <div className="relative overflow-hidden rounded-xl border border-[var(--theme-hairline)] bg-surface/82 p-2 shadow-lg shadow-black/12 backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
          {socialItems.map((item) => (
            <m.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.94 }}
              className="group relative flex items-center justify-center rounded-xl p-3.5 text-white/55 transition-colors hover:text-accent-cyan"
              aria-label={item.label}
              title={item.label}
            >
              <span className="absolute inset-0 rounded-xl bg-white/0 transition-colors group-hover:bg-accent-cyan/8" />
              <item.icon size={16} className="relative z-10" />
            </m.a>
          ))}
        </div>
      </m.div>
    </>
  );
}
