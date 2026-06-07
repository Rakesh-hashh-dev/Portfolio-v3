"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative overflow-hidden px-6 pt-32 pb-10 md:pt-40 md:pb-14"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-cyan/25 bg-accent-cyan/8 px-3.5 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-cyan">{eyebrow}</span>
        </div>
        <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl border-l-2 border-accent-cyan/30 pl-5 text-lg leading-8 text-white/60">
          {children}
        </p>
      </div>
    </motion.header>
  );
}
