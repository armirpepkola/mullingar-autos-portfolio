"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Heart, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { StatCounter } from "@/components/ui/StatCounter";
import { BabysBreathAccent } from "@/components/ui/BabysBreathAccent";
import { EnergyPulse } from "@/components/ui/EnergyPulse";
import { KineticHeading } from "@/components/ui/KineticHeading";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-zinc-900">
      {/* Living breathing background glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-rose-500/15 blur-[160px] rounded-full pointer-events-none animate-heartbeat" />
      <div className="absolute top-1/3 right-1/4 w-150 h-100 bg-amber-500/10 blur-[160px] rounded-full pointer-events-none animate-heartbeat" style={{ animationDelay: "3s" }} />

      {/* Floating Baby's Breath Botanical Canvas */}
      <div className="absolute top-24 right-16 hidden lg:block">
        <BabysBreathAccent size={80} />
      </div>
      <div className="absolute bottom-16 left-12 hidden lg:block -rotate-45">
        <BabysBreathAccent size={70} />
      </div>

      <Container className="relative z-10">
        {/* Top Meta Tag & Energy Pulse Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <EnergyPulse />
          <Badge variant="outline" className="py-1.5 px-3.5 flex items-center gap-1.5 border-zinc-800">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>UCD Certified (2025)</span>
          </Badge>
        </motion.div>

        {/* Main Kinetic Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mb-8"
        >
          <KineticHeading 
            text="Marketing with Andreea." 
            accentWords={["Andreea"]} 
          />
          <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mt-6">
            I connect data driven marketing to customer journeys that scale revenue. Driving customer engagement through multiple channels and keeping operations  as smooth as a new Skoda (which I also marketed).
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center gap-4 mb-16"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-rose-500 to-amber-500 text-zinc-950 font-semibold text-sm transition-all shadow-lg shadow-rose-500/20 cursor-pointer"
          >
            View Marketing Campaigns
            <ArrowUpRight className="w-4 h-4 text-zinc-950" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#operator-journey"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium text-sm transition-all hover:bg-zinc-800 hover:text-zinc-100 cursor-pointer"
          >
            The Full-Stack Operator Story
          </motion.a>
        </motion.div>

        {/* Core Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-6 rounded-3xl bg-zinc-900/60 border border-rose-500/20 max-w-2xl mb-16 backdrop-blur-md relative overflow-hidden group rotate-1"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 tape-strip z-20 pointer-events-none rounded-xs" />
          <p className="text-sm sm:text-base italic text-zinc-200">
            Great marketing isn&apos;t just about clicks and impressions; it&apos;s about building genuine trust, elevating every customer touchpoint, and turning online attention into physical dealership visits.
          </p>
          <div className="mt-3 flex items-center justify-between text-xs font-mono text-rose-400">
            <span className="flex items-center gap-2">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 animate-pulse" />
              Andreea • Digital Marketing & Multi-Channel Growth
            </span>
            <span className="handwritten text-rose-300 text-base">Always with a smile :)</span>
          </div>
        </motion.div>

        {/* Stat Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 pt-6 border-t border-zinc-900"
        >
          <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-rose-500/40 transition-all">
            <div className="flex items-center gap-1.5 text-xs text-rose-400 mb-1 font-mono uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" /> Ad Impressions
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
              <StatCounter value={7.02} decimals={2} suffix="M+" />
            </div>
            <p className="text-xs text-zinc-400 mt-1">DoneDeal 252 & Marketplace Ads</p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-amber-500/40 transition-all">
            <div className="flex items-center gap-1.5 text-xs text-amber-400 mb-1 font-mono uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" /> Active Users
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
              <StatCounter value={40} suffix="K+" />
            </div>
            <p className="text-xs text-zinc-400 mt-1">GA4 Verified Web Visitors</p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-violet-500/40 transition-all">
            <div className="flex items-center gap-1.5 text-xs text-violet-400 mb-1 font-mono uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" /> Local Interactions
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
              <StatCounter value={11.4} decimals={1} suffix="K+" />
            </div>
            <p className="text-xs text-zinc-400 mt-1">Direct Calls, Maps & Enquiries</p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-rose-400/40 transition-all">
            <div className="flex items-center gap-1.5 text-xs text-rose-300 mb-1 font-mono uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" /> Social Views & CTR
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
              1.4M<span className="text-zinc-500 text-lg font-normal"> / </span>72.6%
            </div>
            <p className="text-xs text-zinc-400 mt-1">Meta Content Views & Linktree CTR</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}