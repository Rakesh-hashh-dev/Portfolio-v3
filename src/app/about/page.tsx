import type { Metadata } from "next";
import About from "@/components/sections/About";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "About | Rakesh Kumar Behera",
  description: "MBA profile, education, and operating style for Rakesh Kumar Behera.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen text-white">
      <PageIntro
        eyebrow="About"
        title={
          <>
            44 months of Fortune 500 delivery,{" "}
            <span className="text-gradient-cyan">now deepened with MBA strategy.</span>
          </>
        }
      >
        Systems Engineer turned MBA candidate — combining enterprise IT delivery experience from TCS with IIM Sambalpur
        training in strategy, consulting frameworks, and product management.
      </PageIntro>
      <About />
    </main>
  );
}
