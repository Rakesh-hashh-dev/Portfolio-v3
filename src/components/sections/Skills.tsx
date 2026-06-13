"use client";

import { m } from "framer-motion";
import { BarChart3, Check, Database } from "lucide-react";
import { SiGoogleappsscript, SiReact } from "react-icons/si";
import { TbBrandAws, TbBrandAzure, TbCloud } from "react-icons/tb";
import { certifications, skillGroups } from "@/lib/profile";
import StatCounter from "@/components/ui/StatCounter";


const internshipDeliverables = [
  {
    title: "Market Research",
    bullets: [
      "Profiled 19 competitors in a USD 26B market",
      "Supply-chain mapping across vendor tiers",
      "White-space positioning play for leadership",
    ],
  },
  {
    title: "Tech Stack Evaluation",
    bullets: [
      "Shortlisted CRM platforms for 200-person firm",
      "Compared productivity & engagement suites",
      "Delivered adoption recommendation to founders",
    ],
  },
  {
    title: "Marketing Dashboards",
    bullets: [
      "Built Power BI dashboards for campaign tracking",
      "Surfaced decision-making metrics for leadership",
      "Connected multi-source data into one view",
    ],
  },
  {
    title: "Website Shipped",
    bullets: [
      "15 self-editable pages at ₹0/month infra",
      "Stack: React · Vite · TailwindCSS",
      "Custom no-code CMS for non-technical team",
    ],
  },
  {
    title: "CRM & Pipeline",
    bullets: [
      "Two-tier CRM with live dashboards",
      "₹8L sales pipeline tracked across 69 leads",
      "Role-based views for sales & ops teams",
    ],
  },
  {
    title: "Field Ops Automation",
    bullets: [
      "Automated visit scheduling via Apps Script",
      "Eliminated manual coordination overhead",
      "Integrated with existing sales workflow",
    ],
  },
];

type Tier = "Advanced" | "Proficient" | "Familiar";

interface Tool {
  name: string;
  tier: Tier;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface ToolCategory {
  label: string;
  tools: Tool[];
}

const TIER_DOTS: Record<Tier, number> = {
  Advanced: 3,
  Proficient: 2,
  Familiar: 1,
};

const toolCategories: ToolCategory[] = [
  {
    label: "BI & Analytics",
    tools: [{ name: "Power BI", tier: "Advanced", icon: BarChart3 }],
  },
  {
    label: "Cloud",
    tools: [
      { name: "Microsoft Azure", tier: "Advanced", icon: TbBrandAzure },
      { name: "Oracle Cloud", tier: "Proficient", icon: TbCloud },
      { name: "AWS", tier: "Proficient", icon: TbBrandAws },
    ],
  },
  {
    label: "Dev & Automation",
    tools: [
      { name: "React / Vite / Tailwind", tier: "Proficient", icon: SiReact },
      { name: "Google Apps Script", tier: "Proficient", icon: SiGoogleappsscript },
      { name: "CRM Platforms", tier: "Proficient", icon: Database },
    ],
  },
];

const toolLegend: { tier: Tier; blurb: string }[] = [
  { tier: "Advanced", blurb: "Certified + shipped" },
  { tier: "Proficient", blurb: "Certified / project" },
  { tier: "Familiar", blurb: "Course-level" },
];

function ProficiencyDots({ tier }: { tier: Tier }) {
  const filled = TIER_DOTS[tier];
  return (
    <span
      className="flex items-center gap-1"
      role="img"
      aria-label={`${tier} — ${filled} of 3`}
    >
      {[0, 1, 2].map((d) => (
        <span
          key={d}
          aria-hidden="true"
          className={`h-1.5 w-1.5 rounded-full ${d < filled
            ? tier === "Advanced"
              ? "bg-accent-cyan"
              : "bg-accent-purple"
            : "border border-white/25 bg-transparent"
            }`}
        />
      ))}
    </span>
  );
}

function ToolsProficiency() {
  let rowIndex = -1;

  return (
    <m.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55 }}
      className="mt-6"
    >
      <div className="rounded-lg border border-[var(--theme-hairline)] bg-surface p-6">
        <div className="mb-6 border-b border-[var(--theme-hairline)] pb-4">
          <p className="display text-lg text-white">Tools &amp; Platforms</p>
          <p className="mt-1 text-xs text-white/50">
            Proficiency by hands-on depth
          </p>
        </div>

        <div className="space-y-5">
          {toolCategories.map((category) => (
            <div key={category.label}>
              <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                {category.label}
              </p>
              <div className="space-y-2">
                {category.tools.map((tool) => {
                  rowIndex += 1;
                  return (
                    <m.div
                      key={tool.name}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: rowIndex * 0.05, duration: 0.3 }}
                      className="grid grid-cols-[1fr_auto] items-center gap-3"
                    >
                      <span className="flex items-center gap-2 min-w-0">
                        <tool.icon size={14} className="shrink-0 text-white/35" />
                        <span className="truncate text-sm text-white/75">{tool.name}</span>
                      </span>
                      <ProficiencyDots tier={tool.tier} />
                    </m.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-[var(--theme-hairline)] pt-4">
          {toolLegend.map(({ tier, blurb }) => (
            <div key={tier} className="flex items-center gap-1.5">
              <ProficiencyDots tier={tier} />
              <span className="text-[10px] text-white/45">
                <span className="text-white/65">{tier}</span> · {blurb}
              </span>
            </div>
          ))}
        </div>
      </div>
    </m.div>
  );
}

export default function Skills() {
  const isOdd = skillGroups.length % 2 !== 0;

  return (
    <section className="content-section section-raised relative mx-auto max-w-7xl px-6 py-8 pb-24">
      <div className="grid gap-12 border-t border-[var(--theme-hairline)] pt-12 md:grid-cols-[1fr_0.66fr]">

        {/* ── Skill groups ─────────────────────────────── */}
        <div>
          <p className="eyebrow mb-8">Capabilities</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group, i) => {
              const lastOdd = isOdd && i === skillGroups.length - 1;
              const isCore = group.title === "Business Strategy" || group.title === "Operations & Process";
              return (
                <m.div
                  key={group.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className={`group rounded-lg border bg-surface p-6 transition-colors ${isCore
                    ? "border-accent-purple/30 hover:border-accent-purple/50"
                    : "border-[var(--theme-hairline)] hover:border-accent-cyan/30"
                    } ${lastOdd ? "sm:col-span-2" : ""}`}
                >
                  <div className="mb-5 flex justify-end">
                    {isCore ? (
                      <span className="rounded-full border border-accent-purple/35 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-accent-purple">
                        Core
                      </span>
                    ) : (
                      <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/55">
                        {group.skills.length} skills
                      </span>
                    )}
                  </div>

                  <h3 className="display text-xl text-white">{group.title}</h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="cursor-default rounded-md border border-[var(--theme-hairline)] px-3 py-1.5 text-sm text-white/60 transition-colors hover:border-accent-cyan/35 hover:text-accent-cyan"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </m.div>
              );
            })}
          </div>

        </div>

        {/* ── Certifications + Tools ───────────────────── */}
        <div>
          <m.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55 }}
          >
            <p className="eyebrow mb-8">Certifications</p>
            <div className="rounded-lg border border-[var(--theme-hairline)] bg-surface p-6">
              <div className="mb-6 flex items-baseline gap-3 border-b border-[var(--theme-hairline)] pb-5">
                <p className="num text-4xl text-white"><StatCounter value={String(certifications.length)} /></p>
                <p className="text-sm text-white/60">credentials earned</p>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <m.div
                    key={cert}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.35 }}
                    className="flex items-start gap-3 text-sm leading-6 text-white/75"
                  >
                    <Check size={15} className="mt-0.5 shrink-0 text-accent-cyan" />
                    {cert}
                  </m.div>
                ))}
              </div>
            </div>
          </m.div>
          <ToolsProficiency />
        </div>
      </div>

      {/* ── Summer Internship ────────────────────────── */}
      <m.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="mt-12 border-t border-[var(--theme-hairline)] pt-12"
      >
        <p className="eyebrow mb-8">Applied Experience</p>
        <div className="card-glow rounded-xl border border-accent-cyan/25 bg-gradient-to-br from-surface to-accent-cyan/[0.03] p-7 md:p-8">

          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
                Summer Internship · Apr – Jun 2026
              </p>
              <h3 className="display text-2xl text-white md:text-3xl">
                Strategy, Marketing & Product Management Intern
              </h3>
              <p className="mt-1.5 text-base font-semibold text-accent-cyan">
                Mr Gardenr · Ahmedabad, Gujarat
              </p>
            </div>
            <span className="shrink-0 rounded-full border border-accent-cyan/30 bg-accent-cyan/[0.07] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-accent-cyan">
              MBA Summer Internship · IIM Sambalpur
            </span>
          </div>

          <p className="mt-5 max-w-2xl text-sm leading-[1.88] text-white/65">
            Owned strategy-to-shipping for a 200-person, 11-office premium landscaping firm — covering
            market research, tech stack evaluation, CRM development, marketing analytics, and production
            engineering end-to-end.
          </p>

          {/* Deliverables grid */}
          <div className="mt-7 border-t border-[var(--theme-hairline)] pt-7">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">
              Key deliverables
            </p>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {internshipDeliverables.map(({ title, bullets }) => (
                <div
                  key={title}
                  className="rounded-lg border border-[var(--theme-hairline)] bg-accent-cyan/[0.02] p-4 transition-colors duration-200 hover:border-accent-cyan/25"
                >
                  <p className="mb-3 text-sm font-semibold text-white">{title}</p>
                  <ul className="space-y-1.5">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs leading-[1.65] text-white/55">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </m.div>
    </section>
  );
}
