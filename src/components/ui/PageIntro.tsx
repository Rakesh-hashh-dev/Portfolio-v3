import { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <header className="relative overflow-hidden px-6 pt-32 md:pt-40">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/15 md:p-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-cyan">{eyebrow}</p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">{children}</p>
        </div>
      </div>
    </header>
  );
}
