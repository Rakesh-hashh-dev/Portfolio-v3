"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const up: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } },
};

type PageIntroProps = {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
};

export function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <motion.header
      variants={stagger}
      initial="hidden"
      animate="show"
      className="relative px-6 pt-32 pb-12 md:pt-40 md:pb-16"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Masthead row */}
        <motion.div
          variants={up}
          className="mb-10 flex items-center justify-between border-b border-[var(--theme-hairline)] pb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40"
        >
          <span>{eyebrow}</span>
          <span className="hidden sm:inline">Rakesh Kumar Behera</span>
        </motion.div>

        <motion.h1
          variants={up}
          className="display max-w-5xl text-[clamp(2.5rem,6vw,5rem)] text-white"
        >
          {title}
        </motion.h1>

        <motion.p
          variants={up}
          className="mt-8 max-w-2xl border-l-2 border-accent-cyan/40 pl-6 text-lg leading-[1.85] text-white/55"
        >
          {children}
        </motion.p>
      </div>
    </motion.header>
  );
}
