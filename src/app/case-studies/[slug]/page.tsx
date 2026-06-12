import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/profile";
import { CaseStudyContent } from "@/components/sections/CaseStudyContent";

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return { title: "Not Found" };
  return {
    title: `${cs.title} | Rakesh Kumar Behera`,
    description: cs.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <main className="min-h-screen text-white">
      <CaseStudyContent slug={slug} />
    </main>
  );
}
