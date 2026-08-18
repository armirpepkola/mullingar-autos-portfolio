"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, CheckCircle2, Image as ImageIcon, RefreshCw, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrapbookCard } from "@/components/ui/ScrapbookCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { caseStudyModules, CaseStudyModule } from "@/data/caseStudies";
import Image from "next/image";

const scrapbookRotations = ["rotate-1", "-rotate-1", "rotate-0", "-rotate-0.5", "rotate-0.5", "-rotate-1", "rotate-1"];

// Unique front marginalia note for each card
const customFrontNotes = [
  "7.02M impressions! 🔥",
  "Low CPC Bidding ⚡️",
  "40K+ active users 📈",
  "Local Search Dominance! 🔍",
  "High conversion CTR 🎯",
  "2x static reach! 🎬",
  "72.6% bio CTR! ✨"
];

// Unique bespoke backstage polaroid reflection for each card's backside
const customBackstageNotes = [
  "Pushing 7M+ impressions on DoneDeal took relentless optimization across budgeting and regional targeting. Seeing Westmeath car buyers engage at this scale was unforgettable!",
  "Structuring our PPC campaign into distinct intent tiers brand defense, model launches, and high volume regional terms, allowed us to capture peak buyer intent while driving CPCs down to an ultra efficient €0.24!",
  "Diving deep into GA4 analytics allowed us to track every single user journey. Turning raw data into actionable growth insights is where strategy meets art.",
  "Structuring clean HTML landing pages and dynamic regional tags ('%town%') allowed us to capture high intent local buyers searching for Volkswagen and ŠKODA models right across Westmeath.",
  "Dominating local map packs and search intent across Westmeath turned online browsers into physical forecourt visitors. Every phone call and direction request represents a high intent local buyer walking through our doors.",
  "Scripting, filming, and editing content full of energy brought our cars to life. Showing genuine personality on camera completely outperformed static dealership ads and built instant trust with local buyers!",
  "Social media reach is only as good as its conversion path. Designing a streamlined Linktree hub ensured that every profile view turned into traffic routed straight to our Approved Cars and active sales offers!"
];

export function CaseStudiesGrid() {
  const [selectedModule, setSelectedModule] = useState<CaseStudyModule | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="case-studies" className="py-24 border-b border-zinc-900 relative">
      <Container>
        <SectionHeader
          badge="Featured Case Study: Mullingar Autos"
          title="Multi Channel Growth Scrapbook"
          description="Select any module below to inspect full campaign data, strategic execution frameworks, and verified performance proof."
        />

        {/* Living Scrapbook Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudyModules.map((module, index) => {
            const isFeatured = index === 0 || index === 5;
            const rotation = scrapbookRotations[index % scrapbookRotations.length];
            const note = customFrontNotes[index % customFrontNotes.length];

            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={isFeatured ? "lg:col-span-2" : "lg:col-span-1"}
              >
                <ScrapbookCard
                  onClick={() => {
                    setSelectedIndex(index);
                    setIsFlipped(false);
                    setSelectedModule(module);
                  }}
                  rotation={rotation}
                  note={note}
                  className="h-full flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <Badge variant="outline">{module.category}</Badge>
                    </div>

                    <h3 className="text-2xl font-serif tracking-wide text-zinc-100 mb-1 group-hover:text-white transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-xs font-mono text-rose-300/80 mb-4">{module.subtitle}</p>

                    <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                      {module.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-200">
                      <BarChart3 className="w-4 h-4 text-rose-400" />
                      <span>{module.metricBadge}</span>
                    </div>
                    <span className="text-xs font-medium text-rose-400 group-hover:underline">
                      View Proof &rarr;
                    </span>
                  </div>
                </ScrapbookCard>
              </motion.div>
            );
          })}
        </div>
      </Container>

      {/* Self-Contained Built-in Modal with Unique Backstage Notes */}
      <AnimatePresence>
        {selectedModule && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedModule(null);
                setIsFlipped(false);
              }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-4xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setSelectedModule(null);
                  setIsFlipped(false);
                }}
                className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors cursor-pointer z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                {/* Subtle Editorial Header with Inline Flip Button */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-800/80 pr-10">
                  <div className="flex items-center gap-2.5">
                    <Badge variant="glow" className="border-rose-500/30 text-rose-200 bg-rose-950/30">
                      {selectedModule.category}
                    </Badge>
                    <span className="text-xs font-mono text-zinc-400 hidden sm:inline">{selectedModule.subtitle}</span>
                  </div>

                  <button
                    onClick={() => setIsFlipped(!isFlipped)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-rose-300 text-xs font-mono hover:border-rose-500/40 hover:bg-zinc-800 transition-all cursor-pointer shadow-xs"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-rose-400" />
                    <span>{isFlipped ? "Flip" : "Flip"}</span>
                  </button>
                </div>

                {/* 3D Flipping Container */}
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, type: "spring", damping: 20 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="relative w-full"
                >
                  {/* FRONT SIDE */}
                  <div style={{ backfaceVisibility: "hidden" }} className={isFlipped ? "hidden" : "space-y-6"}>
                    <div>
                      <h4 className="text-3xl font-serif text-zinc-100 mb-2">{selectedModule.title}</h4>
                      <p className="text-zinc-300 text-base leading-relaxed">{selectedModule.fullDetails}</p>
                    </div>

                    {/* Screenshot Proof Frame using next/image */}
                    <div className="rounded-[28px] bg-zinc-900 border border-zinc-800 p-6 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
                      <div className="flex items-center gap-2 mb-3 text-xs font-mono text-rose-400">
                        <ImageIcon className="w-4 h-4" />
                        <span>VERIFIABLE SCREENSHOT PROOF</span>
                      </div>
                      
                      <div className="w-full h-48 sm:h-64 rounded-2xl bg-zinc-950 border border-zinc-800/80 overflow-hidden relative">
                        <Image 
                          src={selectedModule.imageSrc} 
                          alt={`Screenshot proof for ${selectedModule.title}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/80">
                      {selectedModule.highlights.map((h, i) => (
                        <div key={i} className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/60">
                          <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
                            {h.label}
                          </span>
                          <span className="text-lg font-bold text-zinc-100 tracking-tight">{h.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Strategy & Data Points */}
                    <div>
                      <h5 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3 font-mono">
                        Key Performance & Execution Strategy
                      </h5>
                      <ul className="space-y-2.5">
                        {selectedModule.strategyPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                            <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* BACK SIDE (Unique Backstage Reflections for Each Card) */}
                  <div
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                    className={isFlipped ? "space-y-6 p-8 rounded-[28px] bg-amber-950/20 border border-amber-500/30 text-zinc-200" : "hidden"}
                  >
                    <div className="flex items-center gap-2 text-xs font-mono text-amber-300 mb-2">
                      <span>✍️ NOTES FROM ANDREEA</span>
                    </div>
                    <h4 className="text-3xl font-serif text-amber-200 mb-4">Behind the Scenes: {selectedModule.title}</h4>
                    <p className="handwritten text-2xl text-amber-100/90 leading-relaxed">
                      &ldquo;{customBackstageNotes[selectedIndex % customBackstageNotes.length]}&rdquo;
                    </p>
                    <div className="pt-6 border-t border-amber-500/20 flex items-center justify-between text-xs font-mono text-zinc-400">
                      <span>Mullingar Autos Marketing Executive</span>
                      <span className="text-amber-300">Volkswagen & ŠKODA Ireland</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}