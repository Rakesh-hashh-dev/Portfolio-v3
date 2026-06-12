"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BriefcaseBusiness, FileText, Home, Mail, Presentation, UserRound, LineChart, MoreHorizontal, ExternalLink } from "lucide-react";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
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
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/rakesh-kumar-behera-rk821604", external: true,  brandColor: "#0A66C2" },
  { icon: Mail,         label: "Email",    href: "mailto:rk821604@gmail.com",                                 external: false, brandColor: "#EA4335" },
  { icon: FileText,     label: "Résumé",   href: "/Profile.pdf",                                             external: false, brandColor: "#F59E0B" },
];

function SidebarIcon({ item }: { item: (typeof socialItems)[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <m.a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.1, x: -2 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 420, damping: 20 }}
      className="relative flex items-center justify-center rounded-xl p-3.5"
      aria-label={item.label}
      title={item.label}
    >
      <m.span
        className="absolute inset-0 rounded-xl"
        animate={{ backgroundColor: hovered ? `${item.brandColor}18` : "rgba(0,0,0,0)" }}
        transition={{ duration: 0.15 }}
      />
      <span
        className="relative z-10 transition-[color,filter] duration-150 text-white/55"
        style={hovered ? { color: item.brandColor, filter: `drop-shadow(0 0 7px ${item.brandColor}cc)` } : undefined}
      >
        <item.icon size={16} />
      </span>
    </m.a>
  );
}

export default function DockNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--theme-hairline)] transition-[color,box-shadow] duration-200 group-hover:border-transparent"
                        style={{ color: item.brandColor }}
                      >
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
            <SidebarIcon key={item.label} item={item} />
          ))}
        </div>
      </m.div>
    </>
  );
}
