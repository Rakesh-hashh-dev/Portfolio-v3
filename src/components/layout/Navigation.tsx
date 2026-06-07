"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";

const links = [
  { name: "About",      href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Cases",      href: "/case-studies" },
  { name: "Skills",     href: "/skills" },
  { name: "Contact",    href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 flex w-full justify-center px-4 pt-3"
    >
      <div
        className={`relative flex items-center gap-0.5 rounded-full border px-2 py-1.5 transition-all duration-300 ${
          scrolled
            ? "border-white/14 bg-surface/94 shadow-2xl shadow-black/28 backdrop-blur-2xl"
            : "border-white/7 bg-surface/52 shadow-lg shadow-black/12 backdrop-blur-xl"
        }`}
      >
        {/* Top glow line on scroll */}
        {scrolled && (
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent" />
        )}

        {/* ── Logo avatar ───────────────────────────── */}
        <Link href="/" className="group mr-0.5 flex items-center">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-white/12 transition-all duration-200 group-hover:ring-accent-cyan/35 group-hover:shadow-sm group-hover:shadow-accent-cyan/18">
            <Image src="/logo.png" alt="RK" width={32} height={32} className="object-cover" />
          </div>
        </Link>

        {/* Divider */}
        <div className="mx-2 h-3.5 w-px shrink-0 bg-white/12" />

        {/* ── Nav links ─────────────────────────────── */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 ${
                  active ? "text-white" : "text-white/40 hover:text-white/72"
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="island-pill"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Divider */}
        <div className="mx-2 hidden h-3.5 w-px shrink-0 bg-white/12 lg:block" />

        {/* ── Theme toggle ──────────────────────────── */}
        <ThemeToggle />

        {/* ── Mail dot CTA ──────────────────────────── */}
        <motion.a
          href="mailto:rk821604@gmail.com"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="ml-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[white] shadow-md shadow-primary/22 transition-shadow duration-200 hover:shadow-lg hover:shadow-primary/32"
          style={{ background: "linear-gradient(140deg, var(--theme-primary) 0%, #6ab0ff 100%)" }}
          aria-label="Connect via email"
          title="Connect"
        >
          <Mail size={13} />
        </motion.a>
      </div>
    </motion.nav>
  );
}
