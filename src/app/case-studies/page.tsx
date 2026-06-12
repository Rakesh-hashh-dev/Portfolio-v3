import { Suspense } from "react";
import type { Metadata } from "next";
import Projects from "@/components/sections/Projects";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Case Studies | Rakesh Kumar Behera",
  description: "Selected case studies across operations, marketing, leadership, and strategy.",
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen text-white">
      <PageIntro
        eyebrow="Case Studies"
        title={
          <>
            Business execution examples across{" "}
            <span className="text-gradient-cyan">operations, marketing,</span>{" "}
            and strategy.
          </>
        }
      >
        These case studies summarize the kind of work that best represents the profile: structured planning,
        cross-functional coordination, promotional execution, and measurable outcomes.
      </PageIntro>
      <Suspense>
        <Projects />
      </Suspense>
    </main>
  );
}
