"use client";

import { motion } from "framer-motion";
import { Building2, MapPin } from "lucide-react";
import { experience } from "@/lib/profile";

export default function Experience() {
  return (
    <section className="content-section relative mx-auto max-w-4xl px-6 py-12 pb-28">

      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-12 h-96 w-96 rounded-full bg-accent-cyan/5 blur-[110px]" />
        <div className="absolute -right-10 bottom-1/4 h-80 w-80 rounded-full bg-accent-purple/5 blur-[95px]" />
      </div>

      <div className="relative space-y-5">
        {experience.map((item, index) => {
          const isCurrent = item.period.includes("Present");
          const fromLeft = index % 2 === 0;

          return (
            <motion.div
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, x: fromLeft ? -32 : 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.13, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className={`group relative cursor-default overflow-hidden rounded-2xl border p-7 md:p-8 transition-all duration-300 ${
                isCurrent
                  ? "border-accent-cyan/28 bg-gradient-to-br from-accent-cyan/[0.08] via-accent-cyan/[0.03] to-transparent shadow-lg shadow-accent-cyan/8"
                  : "border-white/8 bg-white/[0.03] hover:border-white/14 hover:bg-white/[0.045]"
              }`}
            >
              {/* Top gradient line */}
              <div
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${
                  isCurrent ? "via-accent-cyan/70" : "via-white/14"
                } to-transparent`}
              />
              {/* Left accent bar */}
              <div
                className={`absolute inset-y-0 left-0 w-[3px] rounded-l-2xl bg-gradient-to-b ${
                  isCurrent
                    ? "from-accent-cyan via-accent-cyan/45 to-transparent"
                    : "from-white/18 via-white/6 to-transparent"
                }`}
              />

              {/* Faint ordinal */}
              <span className="pointer-events-none absolute right-6 top-3 select-none text-[6rem] font-black leading-none text-white/[0.032]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                {/* Active indicator */}
                {isCurrent && (
                  <div className="mb-3.5 flex items-center gap-2.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.22em] text-accent-cyan">
                      Currently active
                    </span>
                  </div>
                )}

                {/* Role title + period */}
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <h3 className={`text-2xl font-bold leading-snug ${isCurrent ? "text-white" : "text-white/88"}`}>
                    {item.role}
                  </h3>
                  <span
                    className={`shrink-0 text-sm font-semibold tabular-nums ${
                      isCurrent ? "text-accent-cyan/80" : "text-white/28"
                    }`}
                  >
                    {item.period}
                  </span>
                </div>

                {/* Company + location */}
                <div className="mb-5 flex flex-wrap items-center gap-5">
                  <span className="flex items-center gap-2 text-sm font-semibold text-white/55">
                    <Building2 size={13} className="text-white/28" />
                    {item.company}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-white/36">
                    <MapPin size={13} className="text-white/22" />
                    {item.location}
                  </span>
                </div>

                {/* Detail */}
                <p className="text-[0.9375rem] leading-[1.92] text-white/42">{item.detail}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
