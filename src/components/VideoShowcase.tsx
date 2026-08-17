"use client";

import { motion } from "framer-motion";
import { Play, Eye, Clock, Zap, CheckCircle2, Smartphone, Image as ImageIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { videoShowcaseData } from "@/data/videoData";

export function VideoShowcase() {
  return (
    <section className="py-24 border-b border-zinc-900 relative overflow-hidden bg-zinc-950/40">
      {/* Background warm glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-125 h-87.5 bg-rose-500/5 blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeader
          badge="Short-Form Video & Social Growth"
          title="Reel Benchmarking & Video Production"
          description="Humanizing the dealership experience through scripted, high-retention vertical video content that reflects Andreea's vibrant energy and outperforms traditional static ads 2x."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Mobile Reel Mockup Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-70 h-130 bg-zinc-900 rounded-[36px] border-4 border-zinc-800 shadow-2xl p-4 flex flex-col justify-between overflow-hidden group">
              {/* Phone Notch & Status Bar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-zinc-950 rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-12 h-1 bg-zinc-800 rounded-full" />
              </div>

              {/* Simulated Reel Background Content */}
              <div className="absolute inset-0 bg-linear-to-b from-rose-950/20 via-zinc-900 to-zinc-950 z-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.1)_0,transparent_100%)]" />
                <div className="w-16 h-16 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-rose-300 fill-rose-300 ml-0.5" />
                </div>
              </div>

              {/* Top Meta Tag on Phone */}
              <div className="relative z-10 pt-4 flex items-center justify-between">
                <Badge variant="glow" className="text-[10px] py-1 px-2.5 border-rose-500/30 text-rose-200 bg-rose-950/40">
                  <Smartphone className="w-3 h-3 mr-1" /> 9:16 Reel
                </Badge>
                <span className="text-[11px] font-mono text-zinc-400 bg-zinc-950/60 px-2 py-0.5 rounded-full border border-zinc-800">
                  11.5K Views
                </span>
              </div>

              {/* Bottom Overlay on Phone */}
              <div className="relative z-10 bg-zinc-950/90 backdrop-blur-md p-4 rounded-2xl border border-rose-500/20">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  <span className="text-xs font-bold text-zinc-100">Mullingar Autos Walk-Around</span>
                </div>
                <p className="text-[11px] text-zinc-300 mb-2">9h 48m total watch time with 10s retention.</p>
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 border-t border-zinc-800 pt-2">
                  <span>Energy: High</span>
                  <span className="text-rose-300">2x Static Reach</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Detailed Video Metrics & Screenshot Proof Cards */}
          <div className="lg:col-span-7 space-y-6">
            {videoShowcaseData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="relative overflow-hidden hover:border-rose-500/40 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <Badge variant="outline">{item.platform}</Badge>
                    <span className="text-xs font-mono text-rose-400">{item.format}</span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-100 mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-300 mb-6 leading-relaxed">{item.description}</p>

                  {/* Stat Badges */}
                  <div className="grid grid-cols-3 gap-3 mb-6 bg-zinc-950/60 p-3.5 rounded-2xl border border-zinc-800">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-[11px] font-mono text-rose-400 mb-1">
                        <Eye className="w-3.5 h-3.5" /> Views
                      </div>
                      <span className="text-sm sm:text-base font-bold text-zinc-100">{item.views}</span>
                    </div>
                    <div className="text-center border-x border-zinc-800">
                      <div className="flex items-center justify-center gap-1 text-[11px] font-mono text-amber-400 mb-1">
                        <Clock className="w-3.5 h-3.5" /> Watch Time
                      </div>
                      <span className="text-sm sm:text-base font-bold text-zinc-100">{item.watchTime}</span>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-[11px] font-mono text-rose-300 mb-1">
                        <Zap className="w-3.5 h-3.5" /> Retention
                      </div>
                      <span className="text-sm sm:text-base font-bold text-zinc-100">{item.retention}</span>
                    </div>
                  </div>

                  {/* Screenshot Proof Frame */}
                  <div className="mb-6 rounded-2xl bg-zinc-950 border border-rose-500/20 p-4 relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-2 text-xs font-mono text-rose-400">
                      <ImageIcon className="w-4 h-4" />
                      <span>VERIFIED SCREENSHOT PROOF</span>
                    </div>
                    <div className="w-full h-32 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col items-center justify-center p-3 text-center">
                      <ImageIcon className="w-7 h-7 text-zinc-600 mb-1" />
                      <p className="text-xs font-medium text-zinc-300">{item.screenshotProofLabel}</p>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}