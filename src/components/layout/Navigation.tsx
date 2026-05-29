"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import Image from "next/image";

const links = [
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full px-4 py-3 md:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-lg border border-white/10 bg-surface/90 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg neon-glow">
            <Image src="/logo.png" alt="RK Logo" width={40} height={40} className="object-cover" />
          </div>
          <div className="hidden min-w-0 leading-tight sm:block">
            <p className="truncate text-sm font-semibold text-white">Rakesh Kumar Behera</p>
            <p className="truncate text-xs text-white/50">MBA | Strategy, Analytics, Execution</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <motion.a
          href="mailto:rk821604@gmail.com"
          whileHover={{ y: -2 }}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6fa4ff]"
        >
          Connect
          <ArrowUpRight size={16} />
        </motion.a>
      </div>
    </nav>
  );
}
