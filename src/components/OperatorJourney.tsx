"use client";

import { motion } from "framer-motion";
import { Users, Megaphone, ShoppingCart, BarChart, Smile } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrapbookCard } from "@/components/ui/ScrapbookCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BabysBreathAccent } from "@/components/ui/BabysBreathAccent";

const operatorPillars = [
  {
    icon: Users,
    title: "Customer Service & Warmth",
    description: "I love making people feel instantly welcome. Whether it's sharing a laugh, bringing a humble presence, or simply listening, I care deeply about every person who walks through our doors.",
    note: "Here to help 😊",
    rotation: "-rotate-1",
  },
  {
    icon: Megaphone,
    title: "Digital Growth & Marketing",
    description: "I combine multi channel campaign execution, local SEO, and content production. I bring curiosity, creativity, and steady energy to every project I take on.",
    note: "Always learning 📚",
    rotation: "rotate-1",
  },
  {
    icon: ShoppingCart,
    title: "Sales & Customer Journeys",
    description: "I enjoy bridging online interest with real forecourt visits. By guiding buyers smoothly through vehicle financing and enquiries, I try to make car buying feel clear, exciting, and personal.",
    note: "Closing with heart 🤝",
    rotation: "-rotate-0.5",
  },
  {
    icon: BarChart,
    title: "Data Analytics & Results",
    description: "I rely on GA4 attribution, ad metrics, and consumer insights to learn what works. For me, data isn't just about numbers—it's a tool to help us serve our customers and business better every single day.",
    note: "Data + Soul = Success",
    rotation: "rotate-0.5",
  },
];

export function OperatorJourney() {
  return (
    <section id="operator-journey" className="py-24 border-b border-zinc-900 relative bg-zinc-950/60 overflow-hidden">
      <div className="absolute -left-20 top-1/2 opacity-20 pointer-events-none">
        <BabysBreathAccent size={150} />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          badge="Full-Stack Business Operator"
          title="Energy, Care & Results"
          description="I believe great marketing goes beyond strategy;it starts with genuine warmth, positive energy, and a real commitment to making people feel valued."
        />

        {/* Personal Touch Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-8 rounded-4xl bg-linear-to-r from-rose-950/30 via-zinc-900/80 to-amber-950/30 border border-rose-500/30 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="w-16 h-16 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center shrink-0 shadow-lg shadow-rose-500/10">
            <Smile className="w-8 h-8 text-rose-300 animate-bounce" />
          </div>
          <div className="text-center sm:text-left relative z-10">
            <h3 className="text-xl font-serif text-zinc-100 mb-2 flex items-center justify-center sm:justify-start gap-2">
              The Best Marketing Strategy: Care
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              If you visit any environment I work in, chances are you&apos;ll hear me before you see me! I&apos;ve always believed that a cheerful workspace and genuine care change everything, turning daily customer touchpoints into lasting relationships with both my team and our costumers.
            </p>
          </div>
        </motion.div>

        {/* Scrapbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {operatorPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ScrapbookCard
                  rotation={pillar.rotation}
                  note={pillar.note}
                  className="h-full flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-rose-500/50 transition-colors shadow-sm">
                      <Icon className="w-5 h-5 text-rose-400" />
                    </div>
                    <h3 className="text-xl font-serif text-zinc-100 mb-2">{pillar.title}</h3>
                    <p className="text-sm text-zinc-300 leading-relaxed">{pillar.description}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center text-xs font-mono text-zinc-400 group-hover:text-rose-400 transition-colors">
                    <span>Pillar {index + 1} of 4</span>
                  </div>
                </ScrapbookCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}