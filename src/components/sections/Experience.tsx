"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/profile";

export default function Experience() {
  return (
    <section className="content-section relative z-10 mx-auto max-w-7xl px-6 py-16">
      <div className="relative space-y-5 border-l border-white/10 pl-6">
        {experience.map((item, index) => (
          <motion.div
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: index * 0.08 }}
            className="relative rounded-lg border border-white/12 bg-white/[0.065] p-5 shadow-xl shadow-black/10"
          >
            <div className="absolute -left-[33px] top-6 h-3 w-3 rounded-full bg-accent-cyan" />
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
              <div>
                <p className="text-sm font-medium text-accent-cyan">{item.period}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{item.role}</h3>
                <p className="text-white/75">{item.company}</p>
              </div>
              <span className="w-fit rounded-lg bg-accent-cyan/10 px-3 py-1 text-sm text-accent-cyan">{item.location}</span>
            </div>
            <p className="mt-4 max-w-3xl leading-7 text-white/60">{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
