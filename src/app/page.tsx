import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Hero from "@/components/sections/Hero";
import { homeCards, profile, recruiterFit, stats } from "@/lib/profile";

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-primary/30 selection:text-white">
      <Hero />

      {/* Stats band */}
      <section className="section-band content-section py-14">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-xl border border-white/8 bg-surface/50 p-5 shadow-xl shadow-black/10 transition-all hover:-translate-y-0.5 hover:border-white/14 hover:shadow-2xl hover:shadow-black/20"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent" />
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-white/55">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recruiter snapshot */}
      <section className="content-section mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-cyan/25 bg-accent-cyan/8 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-cyan">Recruiter Snapshot</span>
          </div>
          <h2 className="text-3xl font-bold md:text-5xl">Why this profile is worth a closer look.</h2>
          <p className="mt-4 text-lg leading-8 text-white/60">
            Role fit, execution proof, and direct actions — structured so a recruiter can evaluate the profile quickly.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {recruiterFit.map((item) => (
            <div
              key={item.title}
              className="glass-card group relative overflow-hidden rounded-xl p-5 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-purple/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-purple/12 text-accent-purple ring-1 ring-accent-purple/20 transition-colors group-hover:bg-accent-purple/18">
                <item.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/60">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio nav */}
      <section className="content-section mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-cyan/25 bg-accent-cyan/8 px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-cyan">Portfolio</span>
            </div>
            <h2 className="text-3xl font-bold md:text-5xl">Explore the full profile by area.</h2>
          </div>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/[0.09]"
          >
            LinkedIn Profile
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {homeCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="glass-card group relative overflow-hidden rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/25"
            >
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/0 to-transparent transition-all duration-300 group-hover:via-accent-cyan/40" />
              <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-cyan/10 text-accent-cyan ring-1 ring-accent-cyan/20 transition-colors group-hover:bg-accent-cyan/16">
                <card.icon size={22} />
              </div>
              <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 min-h-[5rem] leading-7 text-white/58">{card.text}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-cyan">
                Open page
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-white/8 bg-white/[0.03]">
          <div className="grid gap-px bg-white/8 md:grid-cols-3">
            {[
              "Available for internships and live projects",
              "Resume and LinkedIn one click away",
              "Pages structured by recruiter review flow",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-surface/60 px-5 py-4 text-sm text-white/65">
                <CheckCircle2 size={17} className="shrink-0 text-accent-cyan" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
