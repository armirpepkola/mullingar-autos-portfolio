"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, CheckCircle2, Image as ImageIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Modal } from "@/components/ui/Modal";
import { caseStudyModules, CaseStudyModule } from "@/data/caseStudies";

export function CaseStudiesGrid() {
  const [selectedModule, setSelectedModule] = useState<CaseStudyModule | null>(null);

  return (
    <section id="case-studies" className="py-24 border-b border-zinc-900 relative">
      <Container>
        <SectionHeader
          badge="Mullingar Autos Case Study"
          title="Multi-Channel Growth Modules"
          description="Click any module below to inspect Andreea's full campaign data, strategic execution frameworks, and verified screenshot proof."
        />

        {/* Asymmetric Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudyModules.map((module, index) => {
            // Make flagship modules span 2 columns on desktop for editorial asymmetry
            const isFeatured = index === 0 || index === 5;

            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={isFeatured ? "lg:col-span-2" : "lg:col-span-1"}
              >
                <Card
                  onClick={() => setSelectedModule(module)}
                  className="h-full flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <Badge variant="outline">{module.category}</Badge>
                      <span className="text-xs font-mono text-zinc-400 group-hover:text-rose-400 transition-colors flex items-center gap-1">
                        Inspect Proof <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
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
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>

      {/* Detail Modal with Organic Screenshot Proof Frame */}
      <Modal
        isOpen={!!selectedModule}
        onClose={() => setSelectedModule(null)}
        title={selectedModule?.title}
      >
        {selectedModule && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="glow" className="border-rose-500/30 text-rose-200 bg-rose-950/30">
                  {selectedModule.category}
                </Badge>
                <span className="text-xs font-mono text-zinc-400">{selectedModule.subtitle}</span>
              </div>
              <h4 className="text-3xl font-serif text-zinc-100 mb-2">{selectedModule.title}</h4>
              <p className="text-zinc-300 text-base leading-relaxed">{selectedModule.fullDetails}</p>
            </div>

            {/* Organic Soft-Edged Screenshot Proof Frame */}
            <div className="rounded-[28px] bg-zinc-950 border border-rose-500/30 p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-2 mb-3 text-xs font-mono text-rose-400">
                <ImageIcon className="w-4 h-4" />
                <span>VERIFIED SCREENSHOT PROOF / CAMPAIGN ARTIFACT</span>
              </div>
              <div className="w-full h-48 sm:h-64 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col items-center justify-center p-4 text-center">
                <ImageIcon className="w-10 h-10 text-zinc-600 mb-2" />
                <p className="text-sm font-medium text-zinc-300 mb-1">{selectedModule.screenshotProofLabel}</p>
                <p className="text-xs text-zinc-500 max-w-md">
                  Drop your real screenshot image files here or in `public/proof/` to display live verification for this module.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-zinc-950/50 p-4 rounded-2xl border border-zinc-800">
              {selectedModule.highlights.map((h, i) => (
                <div key={i} className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/60">
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
        )}
      </Modal>
    </section>
  );
}