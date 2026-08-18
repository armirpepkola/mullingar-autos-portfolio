"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, CheckCircle2, Smartphone, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function VideoShowcase() {
  const [isInstagramModalOpen, setIsInstagramModalOpen] = useState(false);

  return (
    <section className="py-24 border-b border-zinc-900 relative overflow-hidden bg-zinc-950/40">
      {/* Background warm glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-125 h-87.5 bg-rose-500/5 blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeader
          badge="Omnichannel Execution & Brand Storytelling"
          title="Live Events, Direct Outreach & Content Production"
          description="Humanizing the brand through experiential event leadership, targeted email/SMS campaigns, face-to-face customer engagement, and high retention video storytelling."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
          
          {/* Left: Mobile Reel Mockup Preview with Thumbnail Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div 
              onClick={() => setIsInstagramModalOpen(true)}
              className="relative w-full max-w-70 h-130 bg-zinc-900 rounded-[36px] border-4 border-zinc-800 shadow-2xl p-4 flex flex-col justify-between overflow-hidden group cursor-pointer hover:border-rose-500/50 transition-all"
            >
              {/* Phone Notch & Status Bar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-zinc-950 rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-12 h-1 bg-zinc-800 rounded-full" />
              </div>

              {/* Thumbnail Image & Play Overlay */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src="/proof/reel-thumbnail.png"
                  alt="Instagram Reel Thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/80" />
                
                {/* Centered Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-rose-500/90 text-zinc-950 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform shadow-lg shadow-rose-500/30">
                    <Play className="w-7 h-7 fill-zinc-950 ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Top Meta Tag on Phone */}
              <div className="relative z-10 pt-4 flex items-center justify-between">
                <Badge variant="glow" className="text-[10px] py-1 px-2.5 border-rose-500/30 text-rose-200 bg-zinc-950/60 backdrop-blur-md">
                  <Smartphone className="w-3 h-3 mr-1" /> Tap to Watch Reel
                </Badge>
                {/* <span className="text-[11px] font-mono text-zinc-300 bg-zinc-950/80 px-2 py-0.5 rounded-full border border-zinc-800 backdrop-blur-md">
                  11.5K Views
                </span> */}
              </div>

              {/* Bottom Overlay on Phone */}
              <div className="relative z-10 bg-zinc-950/90 backdrop-blur-md p-4 rounded-2xl border border-rose-500/20 shadow-xl">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  <span className="text-xs font-bold text-zinc-100">Mullingar Autos</span>
                </div>
                <p className="text-[11px] text-zinc-300 mb-2">Two 252 Volkswagen T-Roc R-Lines.</p>
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 border-t border-zinc-800 pt-2">
                  {/* <span>Energy: High</span> */}
                  <span className="text-rose-300">Made by Andreea</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Detailed Story & Execution Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Card 1: Live Events */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 rounded-4xl bg-zinc-900/60 border border-zinc-800 hover:border-rose-500/40 transition-all shadow-xl"
            >
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline">Live Events & Relationship Marketing</Badge>
                <span className="text-xs font-mono text-rose-400">Direct & Experiential</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif text-zinc-100 mb-2">Live Event Orchestration & Client Relations</h3>
              <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
                Organised and led major dealership launch events, fostering genuine rapport with customers and staff while driving physical footfall directly to the showroom floor.
              </p>

              <ul className="space-y-2.5 pt-4 border-t border-zinc-800/80">
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Orchestrated live dealership launch events, ensuring seamless guest reception and VIP hospitality.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Cultivated deep face-to-face customer relationships, translating casual visitors into loyal brand advocates.</span>
                </li>
              </ul>
            </motion.div>

            {/* Card 2: Direct Outreach & Print Design */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 sm:p-8 rounded-4xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/40 transition-all shadow-xl"
            >
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline">Direct Marketing & Design</Badge>
                <span className="text-xs font-mono text-amber-400">Email, SMS & Print Collateral</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif text-zinc-100 mb-2">Direct Outreach & Brochure Design</h3>
              <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
                Crafted targeted email and text message marketing campaigns alongside custom promotional brochure designs, ensuring clear, persuasive messaging across both digital and physical touchpoints.
              </p>

              <ul className="space-y-2.5 pt-4 border-t border-zinc-800/80">
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Developed and scheduled high conversion email and SMS text campaigns to reactivate dormant database leads.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Designed compelling promotional brochures and print media highlighting seasonal offers and new vehicle specifications.</span>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </Container>

      {/* INSTAGRAM REEL EMBED PLAYER MODAL */}
      <AnimatePresence>
        {isInstagramModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsInstagramModalOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-sm aspect-9/16 bg-zinc-950 border border-zinc-800 rounded-[36px] p-4 shadow-2xl z-10 flex flex-col items-center justify-center overflow-hidden"
            >
              <button
                onClick={() => setIsInstagramModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors z-30 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-full h-full flex items-center justify-center pt-8">
                <iframe
                  src="https://www.instagram.com/reel/DPPGcRTAhDk/embed"
                  className="w-full h-full rounded-2xl border-0"
                  allow="encrypted-media"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}