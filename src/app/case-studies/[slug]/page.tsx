import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Building2, Calendar, CheckCircle2 } from "lucide-react";
import { caseStudies } from "@/lib/profile";

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return { title: "Not Found" };
  return {
    title: `${cs.title} | Rakesh Kumar Behera`,
    description: cs.summary,
  };
}

const STAR_STEPS = [
  { key: "S", label: "Situation" },
  { key: "T", label: "Task" },
  { key: "A", label: "Action" },
  { key: "R", label: "Result" },
] as const;

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = caseStudies.findIndex((c) => c.slug === slug);
  if (idx === -1) notFound();

  const cs = caseStudies[idx];
  const prev = idx > 0 ? caseStudies[idx - 1] : null;
  const next = idx < caseStudies.length - 1 ? caseStudies[idx + 1] : null;
  const Icon = cs.icon;

  return (
    <main className="min-h-screen text-white">
      {/* ── Top nav ── */}
      <div className="mx-auto max-w-4xl px-6 pt-24 pb-2">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-accent-cyan"
        >
          <ArrowLeft size={14} />
          All case studies
        </Link>
      </div>

      {/* ── Header card ── */}
      <div className="mx-auto max-w-4xl px-6 py-8">
        <div className="card-glow rounded-xl border border-[var(--theme-hairline)] bg-surface p-8">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex h-12 w-12 items-center justify-center rounded-md border border-accent-cyan/30 text-accent-cyan shrink-0">
              <Icon size={22} />
            </div>
            <span className="rounded-full border border-accent-purple/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-purple">
              {cs.category}
            </span>
          </div>
          <h1 className="display mt-5 text-3xl text-white md:text-4xl">{cs.title}</h1>
          <p className="mt-2 text-base font-semibold text-accent-cyan">{cs.outcome}</p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/55">
            <span className="flex items-center gap-1.5">
              <Building2 size={13} />
              {cs.org}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {cs.duration}
            </span>
          </div>
          <p className="mt-5 text-sm leading-[1.88] text-white/70 border-t border-[var(--theme-hairline)] pt-5">
            {cs.summary}
          </p>
        </div>
      </div>

      {/* ── STAR sections ── */}
      <div className="mx-auto max-w-4xl px-6 pb-8 space-y-5">
        {/* Situation */}
        <STARSection step="S" label="Situation" accent="accent-cyan">
          <p className="text-sm leading-[1.9] text-white/70">{cs.star.situation}</p>
        </STARSection>

        {/* Task */}
        <STARSection step="T" label="Task" accent="accent-purple">
          <p className="text-sm leading-[1.9] text-white/70">{cs.star.task}</p>
        </STARSection>

        {/* Action */}
        <STARSection step="A" label="Actions taken" accent="accent-cyan">
          <ul className="space-y-3">
            {cs.star.action.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-[1.8] text-white/70">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                {item}
              </li>
            ))}
          </ul>
        </STARSection>

        {/* Result */}
        <STARSection step="R" label="Results achieved" accent="accent-purple">
          <ul className="space-y-3">
            {cs.star.result.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-[1.8] text-white/70">
                <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-accent-cyan" />
                {item}
              </li>
            ))}
          </ul>
        </STARSection>
      </div>

      {/* ── Prev / Next nav ── */}
      <div className="mx-auto max-w-4xl px-6 pb-24">
        <div className="flex items-center justify-between gap-4 border-t border-[var(--theme-hairline)] pt-8">
          {prev ? (
            <Link
              href={`/case-studies/${prev.slug}`}
              className="group flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-accent-cyan"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
              <span>{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/case-studies/${next.slug}`}
              className="group flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-accent-cyan"
            >
              <span>{next.title}</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </main>
  );
}

function STARSection({
  step,
  label,
  accent,
  children,
}: {
  step: string;
  label: string;
  accent: "accent-cyan" | "accent-purple";
  children: React.ReactNode;
}) {
  const borderColor =
    accent === "accent-cyan" ? "border-accent-cyan/25" : "border-accent-purple/25";
  const stepColor =
    accent === "accent-cyan" ? "text-accent-cyan" : "text-accent-purple";

  return (
    <div className={`card-glow rounded-xl border ${borderColor} bg-surface p-7`}>
      <div className="flex items-center gap-3 mb-5">
        <span className={`display text-4xl font-bold ${stepColor} leading-none`}>{step}</span>
        <div className={`h-px flex-1 border-t border-dashed ${borderColor}`} />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}
