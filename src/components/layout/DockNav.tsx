"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BriefcaseBusiness, FileText, Home, Mail, Presentation, UserRound } from "lucide-react";
import { motion } from "framer-motion";

const mainDockItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: UserRound, label: "About", href: "/about" },
  { icon: BriefcaseBusiness, label: "Experience", href: "/experience" },
  { icon: Presentation, label: "Cases", href: "/case-studies" },
  { icon: Mail, label: "Contact", href: "/contact" },
];

const socialItems = [
  {
    icon: UserRound,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rakesh-kumar-behera-rk821604",
  },
  { icon: Mail, label: "Email", href: "mailto:rk821604@gmail.com" },
  { icon: FileText, label: "Resume", href: "/Profile.pdf" },
];

export default function DockNav() {
  const pathname = usePathname();

  return (
    <>
      <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 lg:hidden">
        <div className="glass-card flex items-center gap-2 rounded-lg px-3 py-2 shadow-2xl shadow-black/25">
          {mainDockItems.map((item) => {
            const active = pathname === item.href;

            return (
              <motion.div key={item.label} whileHover={{ scale: 1.06, y: -2 }}>
                <Link
                  href={item.href}
                  className={`group relative block rounded-lg p-2 transition-colors ${
                    active ? "bg-white/10 text-white" : "text-white/60 hover:text-white"
                  }`}
                  aria-label={item.label}
                >
                  <item.icon size={20} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 xl:flex">
        {socialItems.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            whileHover={{ scale: 1.08, x: -4 }}
            className="glass-card rounded-lg p-3 text-white/60 transition-colors hover:text-white"
            aria-label={item.label}
          >
            <item.icon size={18} />
          </motion.a>
        ))}
      </div>
    </>
  );
}
