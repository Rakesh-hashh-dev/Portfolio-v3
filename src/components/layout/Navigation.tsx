"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";

const links = [
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full px-4 py-3 md:px-6">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-xl border px-4 py-2.5 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "border-white/15 bg-surface/95 shadow-2xl shadow-black/30"
            : "border-white/8 bg-surface/70 shadow-xl shadow-black/15"
        }`}
      >
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg neon-glow">
            <Image src="/logo.png" alt="RK Logo" width={36} height={36} className="object-cover" />
          </div>
          <div className="hidden min-w-0 leading-tight sm:block">
            <p className="truncate text-sm font-semibold text-white">Rakesh Kumar Behera</p>
            <p className="truncate text-xs text-white/45">MBA | Strategy, Analytics, Execution</p>
          </div>
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  active ? "text-white" : "text-white/55 hover:text-white"
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg bg-white/10"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <motion.a
            href="mailto:rk821604@gmail.com"
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-[var(--theme-primary-hover)]"
          >
            Connect
            <ArrowUpRight size={15} />
          </motion.a>
        </div>
      </div>
    </nav>
  );
}
