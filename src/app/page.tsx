import Hero from "@/components/sections/Hero";
// Stitch `02` Skills Radar — parked, decide later. Component lives in
// src/components/sections/SkillsRadar.tsx. To re-enable: uncomment both lines.
// import SkillsRadar from "@/components/sections/SkillsRadar";
import HomeFeatures from "@/components/sections/HomeFeatures";

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-primary/30 selection:text-white">
      <Hero />
      {/* <SkillsRadar /> */}
      <HomeFeatures />
    </main>
  );
}
