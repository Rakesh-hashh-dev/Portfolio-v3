"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { radarMethodology, skillGroups } from "@/lib/profile";

/* ── Geometry helpers ─────────────────────────────── */
const SIZE = 360;
const C = SIZE / 2;          // center
const R = 128;               // max radius (leaves room for labels)
const N = skillGroups.length;
const RINGS = [0.25, 0.5, 0.75, 1];

const angleFor = (i: number) => -Math.PI / 2 + (i * 2 * Math.PI) / N;
const point = (r: number, a: number): [number, number] => [
  C + r * Math.cos(a),
  C + r * Math.sin(a),
];
const polygon = (radii: number[]) =>
  radii.map((r, i) => point(r, angleFor(i)).join(",")).join(" ");

export default function SkillsRadar() {
  const [selected, setSelected] = useState(0);
  const active = skillGroups[selected];

  // Data polygon at each axis scaled by that domain's level.
  const dataRadii = skillGroups.map((g) => (g.level / 100) * R);

  return (
    <section className="content-section section-band">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col gap-5 border-t border-[var(--theme-hairline)] pt-10 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="eyebrow mb-5">Competency map</p>
            <h2 className="display text-4xl text-white md:text-5xl">Skills radar.</h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-white/65 md:text-right">
            Select a domain to explore the sub-skills behind it.
          </p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">

          {/* ── Radar chart ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            className="mx-auto w-full max-w-[460px] text-white"
          >
            <svg
              viewBox={`0 0 ${SIZE} ${SIZE}`}
              className="h-auto w-full overflow-visible"
              role="img"
              aria-label="Radar chart of competency across five domains"
            >
              {/* Grid rings */}
              {RINGS.map((ring) => (
                <polygon
                  key={ring}
                  points={polygon(skillGroups.map(() => ring * R))}
                  fill="none"
                  stroke="var(--theme-hairline)"
                  strokeWidth={1}
                />
              ))}

              {/* Axes */}
              {skillGroups.map((g, i) => {
                const [x, y] = point(R, angleFor(i));
                return (
                  <line
                    key={g.title}
                    x1={C}
                    y1={C}
                    x2={x}
                    y2={y}
                    stroke="var(--theme-hairline)"
                    strokeWidth={1}
                  />
                );
              })}

              {/* Data polygon */}
              <motion.polygon
                points={polygon(dataRadii)}
                fill="var(--color-accent-cyan)"
                fillOpacity={0.16}
                stroke="var(--color-accent-cyan)"
                strokeWidth={2}
                strokeLinejoin="round"
                style={{ transformBox: "view-box", transformOrigin: `${C}px ${C}px` }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1], delay: 0.15 }}
              />

              {/* Vertices + axis labels */}
              {skillGroups.map((g, i) => {
                const a = angleFor(i);
                const [px, py] = point(dataRadii[i], a);
                const [lx, ly] = point(R + 22, a);
                const cos = Math.cos(a);
                const anchor = cos > 0.25 ? "start" : cos < -0.25 ? "end" : "middle";
                const isSel = i === selected;
                return (
                  <g
                    key={g.title}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isSel}
                    aria-label={`Show sub-skills for ${g.title}`}
                    onClick={() => setSelected(i)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelected(i);
                      }
                    }}
                    className="cursor-pointer outline-none"
                  >
                    {/* Vertex marker */}
                    <circle
                      cx={px}
                      cy={py}
                      r={isSel ? 6 : 4}
                      fill={isSel ? "var(--color-accent-purple)" : "var(--color-accent-cyan)"}
                      stroke="var(--theme-surface)"
                      strokeWidth={2}
                    />
                    {/* Label */}
                    <text
                      x={lx}
                      y={ly}
                      textAnchor={anchor}
                      dominantBaseline="middle"
                      fill="currentColor"
                      className={`text-[12px] font-semibold transition-opacity ${
                        isSel ? "opacity-100" : "opacity-55"
                      }`}
                    >
                      {g.short}
                    </text>
                  </g>
                );
              })}
            </svg>
          </motion.div>

          {/* ── Methodology + sub-skills panel ───────── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-lg border border-[var(--theme-hairline)] bg-surface p-7 md:p-8"
          >
            <p className="eyebrow mb-5">Methodology &amp; sub-skills</p>
            <p className="text-sm leading-[1.85] text-white/60">{radarMethodology}</p>

            <div className="mt-7 flex items-center gap-3 border-t border-[var(--theme-hairline)] pt-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-accent-purple/35 text-accent-purple">
                <active.icon size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">
                  Selected domain
                </p>
                <p className="font-semibold text-white/90">{active.title}</p>
              </div>
              <span className="num ml-auto text-2xl text-accent-purple">{active.level}</span>
            </div>

            <motion.div
              key={active.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {active.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-[var(--theme-hairline)] px-3 py-1.5 text-sm text-white/65"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
