"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/profile";

export default function Experience() {
  return (
    <section className="content-section relative z-10 mx-auto max-w-7xl px-6 py-16">
      <div className="relative space-y-5 border-l-2 border-white/8 pl-8">
        {experience.map((item, index) => {
          const isCurrent = item.period.includes("Present");
          return (
            <motion.div
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="glass-card relative rounded-xl p-6 shadow-xl shadow-black/10"
            >
              <div
                className={`absolute -left-[41px] top-6 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                  isCurrent
                    ? "border-accent-cyan bg-surface"
                    : "border-white/20 bg-surface"
                }`}
              >
                {isCurrent && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-cyan" />}
              </div>

              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-medium text-accent-cyan">{item.period}</p>
                    {isCurrent && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-cyan/10 px-2.5 py-0.5 text-xs font-semibold text-accent-cyan ring-1 ring-accent-cyan/25">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-white md:text-2xl">{item.role}</h3>
                  <p className="mt-0.5 font-medium text-white/55">{item.company}</p>
                </div>
                <span className="w-fit shrink-0 rounded-full bg-white/[0.06] px-3.5 py-1 text-sm text-white/50 ring-1 ring-white/10">
                  {item.location}
                </span>
              </div>

              <p className="mt-4 max-w-3xl leading-7 text-white/58">{item.detail}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
