import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Hero from "@/components/sections/Hero";
import { homeCards, profile, recruiterFit, stats } from "@/lib/profile";

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-primary/30 selection:text-white">
      <Hero />

      <section className="section-band content-section py-16">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-white/10 bg-surface/55 p-5 shadow-xl shadow-black/10">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-white/62">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-cyan">Recruiter Snapshot</p>
          <h2 className="text-3xl font-bold md:text-5xl">Why this profile is worth a closer look.</h2>
          <p className="mt-4 text-lg leading-8 text-white/64">
            The site now foregrounds role fit, execution proof, and direct actions so a recruiter can evaluate the profile quickly.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {recruiterFit.map((item) => (
            <div key={item.title} className="glass-card rounded-lg p-5">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-accent-purple/15 text-accent-purple">
                <item.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/62">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-cyan">Portfolio</p>
            <h2 className="text-3xl font-bold md:text-5xl">Explore the full profile by area.</h2>
          </div>
          <a
            href={profile.linkedin}
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
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
              className="glass-card group rounded-lg p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.1]"
            >
              <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-lg bg-accent-cyan/10 text-accent-cyan">
                <card.icon size={22} />
              </div>
              <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 min-h-20 leading-7 text-white/60">{card.text}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-cyan">
                Open page
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.045] p-5">
          <div className="grid gap-3 md:grid-cols-3">
            {["Available for internships and live projects", "Resume and LinkedIn one click away", "Pages structured by recruiter review flow"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-white/70">
                <CheckCircle2 size={18} className="shrink-0 text-accent-cyan" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
