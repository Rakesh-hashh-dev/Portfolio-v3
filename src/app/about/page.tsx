import type { Metadata } from "next";
import About from "@/components/sections/About";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "About | Rakesh Kumar Behera",
  description: "MBA profile, education, and operating style for Rakesh Kumar Behera.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface text-white">
      <PageIntro eyebrow="About" title="A business profile shaped by engineering, MBA training, and execution leadership.">
        Rakesh brings together technical depth, structured problem solving, and MBA learning across operations,
        marketing, and strategy.
      </PageIntro>
      <About />
    </main>
  );
}
