import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Contact | Rakesh Kumar Behera",
  description: "Contact Rakesh Kumar Behera for consulting, operations, strategy, marketing, and analytics roles.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-surface text-white">
      <PageIntro eyebrow="Contact" title="Open to roles and conversations in consulting, operations, strategy, and marketing.">
        Reach out for internships, live projects, case competitions, or opportunities where disciplined execution and
        business problem solving matter.
      </PageIntro>
      <Contact />
    </main>
  );
}
