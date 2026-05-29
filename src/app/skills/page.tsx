import type { Metadata } from "next";
import Skills from "@/components/sections/Skills";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Skills | Rakesh Kumar Behera",
  description: "Operations, marketing, strategy, analytics, and certification profile.",
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-surface text-white">
      <PageIntro eyebrow="Skills" title="MBA capabilities supported by analytical and technical foundations.">
        The profile is organized around business strategy, execution, analytics, and certifications that support
        structured problem solving.
      </PageIntro>
      <Skills />
    </main>
  );
}
