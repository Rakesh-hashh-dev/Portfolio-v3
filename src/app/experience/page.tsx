import type { Metadata } from "next";
import Experience from "@/components/sections/Experience";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Experience | Rakesh Kumar Behera",
  description: "Professional and leadership experience across TCS, consulting, marketing, and IIM Sambalpur clubs.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen text-white">
      <PageIntro
        eyebrow="Experience"
        title={
          <>
            Professional and leadership roles with{" "}
            <span className="text-gradient-cyan">measurable execution</span>{" "}
            responsibility.
          </>
        }
      >
        From Team Lead at a $29B Fortune 500 client (TCS) to Strategy & Product Intern at Mr Gardenr — this timeline
        shows enterprise delivery, consulting, and MBA leadership in sequence.
      </PageIntro>
      <Experience />
    </main>
  );
}
