import { Hero } from "@/components/Hero";
import { CaseStudiesGrid } from "@/components/CaseStudiesGrid";
import { VideoShowcase } from "@/components/VideoShowcase";
import { OperatorJourney } from "@/components/OperatorJourney";
import { Footer } from "@/components/Footer";
import { FloatingBotanicalGarden } from "@/components/ui/FloatingBotanicalGarden";
import { ScrollBloomingFlower } from "@/components/ui/ScrollBloomingFlower";
import { PetalCursor } from "@/components/ui/PetalCursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-hidden">
      <PetalCursor />
      <FloatingBotanicalGarden />
      <ScrollBloomingFlower />
      <Hero />
      <CaseStudiesGrid />
      <VideoShowcase />
      <OperatorJourney />
      <Footer />
    </main>
  );
}