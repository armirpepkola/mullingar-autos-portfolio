"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Sparkles, Heart, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { StatCounter } from "@/components/ui/StatCounter";
import { BabysBreathAccent } from "@/components/ui/BabysBreathAccent";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-zinc-900">
      {/* Animated background multi-color glows */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-125 h-87.5 bg-rose-500/10 blur-[140px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 w-125 h-87.5 bg-amber-500/10 blur-[140px] rounded-full pointer-events-none"
      />

      {/* Floating Baby's Breath Floral Accents */}
      <div className="absolute top-20 right-12 hidden lg:block">
        <BabysBreathAccent size={70} />
      </div>
      <div className="absolute bottom-10 left-12 hidden lg:block -rotate-45">
        <BabysBreathAccent size={60} />
      </div>

      <Container className="relative z-10">
        {/* Top Meta Tag & Personal Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <Badge variant="glow" className="flex items-center gap-2 py-1.5 px-3.5 border-rose-500/30 text-rose-200 bg-rose-950/30 shadow-lg shadow-rose-500/5">
            <Sparkles className="w-3.5 h-3.5 text-rose-400 animate-spin" style={{ animationDuration: "6s" }} />
            <span>Hi, I&apos;m Andreea 👋</span>
          </Badge>
          <Badge variant="outline" className="py-1.5 px-3.5 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Mullingar Autos Growth Engine (Volkswagen & ŠKODA)</span>
          </Badge>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100 leading-[1.1] mb-6">
            Digital Marketing with <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-linear-to-r from-rose-400 via-amber-300 to-violet-400">
              Heart, Energy & Pizzazz.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mb-8">
            I turn data-driven campaigns, local SEO, and short-form video into joyful, high-converting customer experiences that scale regional automotive sales.
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-rose-500 to-amber-500 text-zinc-950 font-semibold text-sm transition-all shadow-lg shadow-rose-500/20"
          >
            Explore Case Study Modules
            <ArrowUpRight className="w-4 h-4 text-zinc-950" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#operator-journey"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium text-sm transition-all hover:bg-zinc-800 hover:text-zinc-100"
          >
            Full-Stack Operator Story
          </motion.a>
        </motion.div>

        {/* Core Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 max-w-2xl mb-16 backdrop-blur-sm relative overflow-hidden group hover:border-rose-500/30 transition-colors"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
          <p className="text-sm sm:text-base italic text-zinc-200">
            &ldquo;Great marketing isn&apos;t just about clicks and impressions—it&apos;s about building genuine connections, bringing cheerful energy to every customer touchpoint, and making car buying an exciting journey.&rdquo;
          </p>
          <div className="mt-3 flex items-center justify-between text-xs font-mono text-rose-400">
            <span className="flex items-center gap-2">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 animate-pulse" />
              Andreea • Digital Marketing & Multi-Channel Growth Strategist
            </span>
            <BabysBreathAccent size={24} className="opacity-70" />
          </div>
        </motion.div>

        {/* Stat Strip with Stagger Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 pt-6 border-t border-zinc-900"
        >
          {/* Stat 1 */}
          <motion.div whileHover={{ y: -3 }} className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-rose-500/40 transition-all">
            <div className="flex items-center gap-1.5 text-xs text-rose-400 mb-1 font-mono uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" />
              Ad Impressions
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
              <StatCounter value={7.02} decimals={2} suffix="M+" />
            </div>
            <p className="text-xs text-zinc-400 mt-1">DoneDeal 252 Campaign</p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div whileHover={{ y: -3 }} className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-amber-500/40 transition-all">
            <div className="flex items-center gap-1.5 text-xs text-amber-400 mb-1 font-mono uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" />
              Active Users
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
              <StatCounter value={40} suffix="K+" />
            </div>
            <p className="text-xs text-zinc-400 mt-1">GA4 Monitored Traffic</p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div whileHover={{ y: -3 }} className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-violet-500/40 transition-all">
            <div className="flex items-center gap-1.5 text-xs text-violet-400 mb-1 font-mono uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" />
              Local Interactions
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
              <StatCounter value={11387} />
            </div>
            <p className="text-xs text-zinc-400 mt-1">Google Business Profile</p>
          </motion.div>

          {/* Stat 4 */}
          <motion.div whileHover={{ y: -3 }} className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-rose-400/40 transition-all">
            <div className="flex items-center gap-1.5 text-xs text-rose-300 mb-1 font-mono uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" />
              Social Views & CTR
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
              1.4M<span className="text-zinc-500 text-lg font-normal"> / </span>72.6%
            </div>
            <p className="text-xs text-zinc-400 mt-1">Meta Views & Linktree CTR</p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}