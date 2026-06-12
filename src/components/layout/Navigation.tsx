"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";

const links = [
  { name: "Home",         href: "/" },
  { name: "About",        href: "/about" },
  { name: "Experience",   href: "/experience" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Skills",       href: "/skills" },
  { name: "Contact",      href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <m.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      {/* Background layer */}
      <div
        className={`absolute inset-0 transition-[background-color,backdrop-filter,box-shadow,border-color] duration-200 ${
          scrolled
            ? "bg-surface/90 backdrop-blur-xl border-b border-[var(--theme-hairline)] shadow-sm shadow-black/20"
            : "bg-surface/20 backdrop-blur-md border-b border-[var(--theme-hairline)]/50"
        }`}
      />

      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* ── Wordmark ──────────────────────────────── */}
        <Link
          href="/"
          aria-label="Rakesh Kumar Behera — home"
          className="group flex shrink-0 flex-col justify-center leading-none"
        >
          <span className="display text-[15px] tracking-[-0.01em] text-white transition-colors duration-200 group-hover:text-accent-cyan sm:text-[17px]">
            Rakesh Kumar Behera
          </span>
          <span className="mt-1.5 hidden items-center gap-2 sm:flex">
            <span className="h-px w-4 bg-accent-cyan/60 transition-all duration-200 group-hover:w-6" />
            <span className="text-[9.5px] font-semibold uppercase tracking-[0.22em] text-white/45">
              MBA · IIM Sambalpur
            </span>
          </span>
        </Link>

        {/* ── Center links ──────────────────────────── */}
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`group relative px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors duration-150 ${
                  active ? "text-white" : "text-white/65 hover:text-white"
                }`}
              >
                {active ? (
                  <m.span
                    layoutId="nav-line"
                    className="absolute inset-x-3.5 -bottom-0.5 h-px bg-accent-cyan"
                    transition={{ type: "spring", stiffness: 500, damping: 42 }}
                  />
                ) : (
                  <span className="absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-white/30 transition-transform duration-200 ease-out group-hover:scale-x-100" />
                )}
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* ── Right actions ─────────────────────────── */}
        <div className="flex shrink-0 items-center gap-2.5">
          <ThemeToggle />
          <a
            href="mailto:rk821604@gmail.com"
            className="btn-accent group !px-4 !py-2 !text-[13px]"
          >
            Connect
            <ArrowUpRight
              size={13}
              className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </m.nav>
  );
}
