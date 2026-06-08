"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";

const links = [
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
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      {/* Background — separate layer so centering math stays clean */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          scrolled
            ? "bg-surface/90 backdrop-blur-2xl border-b border-white/8 shadow-sm shadow-black/12"
            : ""
        }`}
      />

      {/* Bottom accent line on scroll */}
      {scrolled && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/18 to-transparent" />
      )}

      {/* Content — h-16 keeps everything aligned */}
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* ── Logo ──────────────────────────────────── */}
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg ring-1 ring-white/12 transition-all duration-200 group-hover:ring-accent-cyan/35 group-hover:shadow-sm group-hover:shadow-accent-cyan/14">
            <Image src="/logo.png" alt="RK" width={32} height={32} className="object-cover" />
          </div>
          <div className="hidden leading-tight sm:block">
            <p className="text-sm font-semibold text-white/85 transition-colors group-hover:text-white">
              Rakesh Kumar Behera
            </p>
            <p className="text-[11px] text-white/32">MBA · IIM Sambalpur</p>
          </div>
        </Link>

        {/* ── Nav links — absolutely centered ──────── */}
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-150 ${
                  active ? "text-white" : "text-white/46 hover:text-white/82"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-line"
                    className="absolute inset-x-3 bottom-0.5 h-[2px] rounded-full bg-accent-cyan"
                    transition={{ type: "spring", stiffness: 500, damping: 42 }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* ── Right actions ─────────────────────────── */}
        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <motion.a
            href="mailto:rk821604@gmail.com"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-[white] shadow-md shadow-primary/20 transition-all hover:bg-[var(--theme-primary-hover)] hover:shadow-lg hover:shadow-primary/30"
          >
            Connect
            <ArrowUpRight
              size={13}
              className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
