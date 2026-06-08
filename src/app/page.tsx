import Hero from "@/components/sections/Hero";
import HomeFeatures from "@/components/sections/HomeFeatures";

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-primary/30 selection:text-white">
      <Hero />
      <HomeFeatures />
    </main>
  );
}
