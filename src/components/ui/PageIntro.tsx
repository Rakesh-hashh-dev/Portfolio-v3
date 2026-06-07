"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
};

const up: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
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
      className="relative overflow-hidden px-6 pt-36 pb-16 md:pt-52 md:pb-20"
    >
      {/* Multi-layer glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-[20%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-primary/11 blur-[160px]" />
        <div className="absolute top-0 right-[15%] h-[450px] w-[550px] translate-x-1/4 rounded-full bg-accent-purple/8 blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 h-[200px] w-[800px] -translate-x-1/2 rounded-full bg-accent-cyan/4 blur-[80px]" />
      </div>

      {/* Subtle grid overlay fade */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface/60" />

      <div className="relative mx-auto max-w-7xl">
        <motion.p variants={up} className="eyebrow mb-8">
          {eyebrow}
        </motion.p>

        <motion.h1
          variants={up}
          className="max-w-5xl text-[clamp(2.75rem,7vw,6.5rem)] font-black leading-[1.0] tracking-tight"
        >
          {title}
        </motion.h1>

        <motion.div variants={up} className="mt-4">
          <div className="h-px w-24 bg-gradient-to-r from-accent-cyan/70 to-transparent" />
        </motion.div>

        <motion.p
          variants={up}
          className="mt-6 max-w-xl pl-6 text-lg leading-[1.85] text-white/42 border-l-2 border-white/10"
        >
          {children}
        </motion.p>

        <motion.div
          variants={up}
          className="mt-14 h-px bg-gradient-to-r from-accent-cyan/20 via-accent-cyan/6 to-transparent"
        />
      </div>
    </motion.header>
  );
}
