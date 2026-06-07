import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Hero from "@/components/sections/Hero";
import { homeCards, profile, recruiterFit } from "@/lib/profile";

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-primary/30 selection:text-white">
      <Hero />

      {/* ── What I Bring ────────────────────────────────── */}
      <section className="content-section mx-auto max-w-7xl px-6 pb-28">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-5">Why hire this profile</p>
            <h2 className="max-w-lg text-4xl font-black leading-tight md:text-5xl">
              What I bring{" "}
              <span className="text-gradient-cyan">to the table.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-white/42 md:text-right">
            Engineering foundations, MBA training, and hands-on execution across consulting, operations, and marketing.
          </p>
        </div>

        <div>
          {recruiterFit.map((item, index) => (
            <div
              key={item.title}
              className="group flex items-start gap-5 border-t border-white/6 py-7 last:border-b hover:bg-white/[0.02] -mx-3 px-3 rounded-xl transition-colors cursor-default"
            >
              <span className="mt-1 w-14 shrink-0 text-5xl font-black leading-none tabular-nums text-gradient-cyan opacity-25 select-none">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-purple/10 text-accent-purple ring-1 ring-accent-purple/20 mt-0.5 transition-all group-hover:bg-accent-purple/16 group-hover:ring-accent-purple/30">
                <item.icon size={19} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white/90">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-7 text-white/45">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Portfolio Nav ───────────────────────────────── */}
      <section className="section-band content-section py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-5">Full profile</p>
              <h2 className="text-4xl font-black md:text-5xl">
                Explore{" "}
                <span className="text-gradient-cyan">by area.</span>
              </h2>
            </div>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/8 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white/70 transition-all hover:-translate-y-0.5 hover:border-white/14 hover:bg-white/[0.06] hover:text-white"
            >
              LinkedIn Profile
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {homeCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="card-glow group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] p-7"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/0 to-transparent transition-all duration-500 group-hover:via-accent-cyan/50" />
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-cyan/8 text-accent-cyan ring-1 ring-accent-cyan/18 transition-all group-hover:bg-accent-cyan/14 group-hover:ring-accent-cyan/30 group-hover:shadow-lg group-hover:shadow-accent-cyan/10">
                  <card.icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                <p className="mt-3 min-h-[4.5rem] text-sm leading-7 text-white/45">{card.text}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-accent-cyan">
                  Open
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/6 bg-white/[0.015]">
            <div className="grid divide-x divide-white/6 md:grid-cols-3">
              {[
                "Available for internships and live projects",
                "Resume and LinkedIn one click away",
                "Pages structured by recruiter review flow",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 px-6 py-4 text-sm text-white/42">
                  <CheckCircle2 size={15} className="shrink-0 text-accent-cyan" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
