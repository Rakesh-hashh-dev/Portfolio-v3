"use client";

import { motion } from "framer-motion";
import { Building2, MapPin } from "lucide-react";
import { experience } from "@/lib/profile";

export default function Experience() {
  return (
    <section className="content-section section-raised relative mx-auto max-w-4xl px-6 py-8 pb-28">
      <div className="relative border-t border-[var(--theme-hairline)] pt-12">
        {experience.map((item, index) => {
          const isCurrent = item.period.includes("Present");
          const isLast = index === experience.length - 1;

          return (
            <motion.div
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
              className="group grid gap-3 border-b border-[var(--theme-hairline)] pb-9 last:border-b-0 md:grid-cols-[120px_1fr] md:gap-0 md:border-b-0"
            >
              {/* Left rail: index + period */}
              <div className="flex items-start justify-between md:block md:pt-0.5">
                <span className="num text-2xl text-accent-cyan/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium tabular-nums text-white/60 md:mt-2 md:block">
                  {item.period}
                </span>
              </div>

              {/* Timeline line + node + detail */}
              <div
                className={`relative md:border-l md:border-[var(--theme-hairline)] md:pl-9 ${
                  isLast ? "md:pb-2" : "md:pb-12"
                }`}
              >
                {/* Node marker (md+) */}
                <span className="absolute left-0 top-1.5 hidden -translate-x-1/2 md:block">
                  {isCurrent ? (
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-purple opacity-60" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-accent-purple ring-4 ring-surface" />
                    </span>
                  ) : (
                    <span className="block h-2.5 w-2.5 rounded-full bg-accent-cyan/45 ring-4 ring-surface" />
                  )}
                </span>

                {/* Terminal cap on the last entry */}
                {isLast && (
                  <span className="absolute -bottom-px left-0 hidden h-px w-3 -translate-x-1/2 bg-[var(--theme-hairline)] md:block" />
                )}

                {isCurrent && (
                  <span className="mb-2.5 inline-block text-[10px] font-bold uppercase tracking-[0.22em] text-accent-purple">
                    Currently active
                  </span>
                )}

                <h3 className="display text-2xl text-white md:text-[1.7rem]">{item.role}</h3>

                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5">
                  <span className="flex items-center gap-2 text-sm font-semibold text-white/80">
                    <Building2 size={14} className="text-white/55" />
                    {item.company}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-white/60">
                    <MapPin size={14} className="text-white/50" />
                    {item.location}
                  </span>
                </div>

                <p className="mt-3.5 max-w-2xl text-[0.9375rem] leading-[1.85] text-white/70">{item.detail}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
