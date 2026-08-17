"use client";

import { motion } from "framer-motion";
import { Users, Megaphone, ShoppingCart, BarChart, ArrowRight, Heart, Smile } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

const operatorPillars = [
  {
    icon: Users,
    title: "Customer Service & Warmth",
    description: "Making everyone instantly comfortable with an infectious laugh, down-to-earth presence, and genuine care for every single customer.",
  },
  {
    icon: Megaphone,
    title: "Ambitious Digital Marketing",
    description: "Multi-channel ad execution, social growth, short-form video production, and local SEO driven by relentless drive and creativity.",
  },
  {
    icon: ShoppingCart,
    title: "Sales Conversion",
    description: "Bridging online interest with showroom footfall, guiding prospective buyers seamlessly through vehicle financing with exceptional care.",
  },
  {
    icon: BarChart,
    title: "Data Analytics (Future Focus)",
    description: "Leveraging GA4 attribution, ad performance metrics, and consumer insights to ensure every campaign delivers the best possible results.",
  },
];

export function OperatorJourney() {
  return (
    <section id="operator-journey" className="py-24 border-b border-zinc-900 relative bg-zinc-950/60">
      <Container>
        <SectionHeader
          badge="Full-Stack Business Operator"
          title="Unmatched Energy, Care & Results"
          description="True marketing excellence isn't just about strategy—it's about Andreea's warm, welcoming spirit, addictive laugh, and fierce ambition to deliver the absolute best results."
        />

        {/* Personal Touch Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-3xl bg-linear-to-r from-rose-950/30 via-zinc-900/60 to-amber-950/30 border border-rose-500/20 flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center shrink-0">
            <Smile className="w-7 h-7 text-rose-400" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-zinc-100 mb-1 flex items-center justify-center sm:justify-start gap-2">
              Recognized a mile away <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Whether she&apos;s lighting up the showroom floor or optimizing a 7-million impression digital campaign, Andreea brings a cheerful laugh and genuine dedication that makes everyone around her feel valued and excited.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {operatorPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col justify-between group hover:border-rose-500/40">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-rose-500/50 transition-colors">
                      <Icon className="w-5 h-5 text-rose-400" />
                    </div>
                    <h3 className="text-lg font-bold text-zinc-100 mb-2">{pillar.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{pillar.description}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center text-xs font-mono text-zinc-400 group-hover:text-rose-400 transition-colors">
                    <span>Operator Pillar {index + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}