"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BriefcaseBusiness, FileText, Home, Mail, Presentation, UserRound, LineChart, MoreHorizontal, ExternalLink } from "lucide-react";
import { m } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";

const mainDockItems = [
  { icon: Home,              label: "Home",       href: "/" },
  { icon: UserRound,         label: "About",      href: "/about" },
  { icon: BriefcaseBusiness, label: "Experience", href: "/experience" },
  { icon: Presentation,      label: "Cases",      href: "/case-studies" },
  { icon: LineChart,         label: "Skills",     href: "/skills" },
  { icon: Mail,              label: "Contact",    href: "/contact" },
];

const socialItems = [
  { icon: UserRound, label: "LinkedIn", href: "https://www.linkedin.com/in/rakesh-kumar-behera-rk821604", external: true },
  { icon: Mail,      label: "Email",    href: "mailto:rk821604@gmail.com", external: false },
  { icon: FileText,  label: "Resume",   href: "/Profile.pdf", external: false },
];

export default function DockNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      {/* ── Mobile bottom dock ────────────────────────── */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 24 }}
        className="fixed dock-safe-bottom left-1/2 z-50 -translate-x-1/2 lg:hidden max-w-[calc(100vw-1.5rem)]"
      >
        <div className="relative flex items-end gap-0.5 rounded-xl border border-[var(--theme-hairline)] bg-surface/90 px-2.5 py-2 shadow-xl shadow-black/15 backdrop-blur-2xl">
          {/* Top accent line */}
          <div className="pointer-events-none absolute inset-x-2 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />

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
                  aria-label={item.label}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex min-w-[44px] flex-col items-center gap-1 rounded-xl px-2 py-2.5 sm:px-3 transition-colors duration-150 ${
                    active ? "text-accent-cyan" : "text-white/60 hover:text-white/85"
                  }`}
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
                    className={`relative z-10 hidden text-[9px] font-bold leading-none sm:block ${
                      active ? "text-accent-cyan" : ""
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </m.div>
            );
          })}

          {/* More — opens social/utility drawer */}
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <m.button
                whileHover={{ scale: 1.18, y: -5 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 420, damping: 20 }}
                aria-label="More links"
                className="relative flex min-w-[44px] flex-col items-center gap-1 rounded-xl px-2 py-2.5 sm:px-3 text-white/60 hover:text-white/85 transition-colors duration-150"
              >
                <MoreHorizontal size={19} />
                <span className="hidden text-[9px] font-bold leading-none sm:block">More</span>
              </m.button>
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Connect</DrawerTitle>
              </DrawerHeader>

              <div className="px-4 pb-8 space-y-1">
                {socialItems.map((item) => (
                  <DrawerClose key={item.label} asChild>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-xl px-3 py-3.5 text-white/70 transition-colors hover:bg-accent-cyan/8 hover:text-white"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--theme-hairline)] text-accent-cyan transition-colors group-hover:border-accent-cyan/40">
                        <item.icon size={16} />
                      </span>
                      <span className="flex-1 text-sm font-medium">{item.label}</span>
                      <ExternalLink size={13} className="text-white/30 transition-colors group-hover:text-accent-cyan/60" />
                    </a>
                  </DrawerClose>
                ))}
              </div>
            </DrawerContent>
          </Drawer>
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
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
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
