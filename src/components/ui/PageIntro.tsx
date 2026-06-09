"use client";

import { m, type Variants } from "framer-motion";
import { ReactNode } from "react";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const up: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.22, 0.61, 0.36, 1] } },
};

type PageIntroProps = {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
};

export function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <m.header
      variants={stagger}
      initial="hidden"
      animate="show"
      className="relative px-6 pt-32 pb-12 md:pt-40 md:pb-16"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Masthead row */}
        <m.div
          variants={up}
          className="mb-10 flex items-center justify-between border-b border-[var(--theme-hairline)] pb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55"
        >
          <span>{eyebrow}</span>
          <span className="hidden sm:inline">Rakesh Kumar Behera</span>
        </m.div>

        <m.h1
          variants={up}
          className="display max-w-5xl text-[clamp(2.5rem,6vw,5rem)] text-white"
        >
          {title}
        </m.h1>

        <m.p
          variants={up}
          className="mt-8 max-w-2xl border-l-2 border-accent-cyan/40 pl-6 text-lg leading-[1.85] text-white/70"
        >
          {children}
        </m.p>
      </div>
    </m.header>
  );
}
