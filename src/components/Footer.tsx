"use client";

import { motion } from "framer-motion";
import { Mail, ContactRound, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-100 relative overflow-hidden py-24">
      {/* Background warm glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-rose-500/5 blur-[160px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          

          {/* Footer Header / Main Sign-off */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-6xl font-serif tracking-tight text-zinc-100">
              Let&apos;s build something great together.
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Whether it&apos;s scaling regional campaigns, organizing community events, or turning data into real human connection, I&apos;d love to connect.
            </p>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <a
              href="mailto:andreeaciolacc@gmail.com"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm font-medium hover:border-rose-500/50 hover:bg-zinc-800 transition-all shadow-lg group cursor-pointer"
            >
              <Mail className="w-4 h-4 text-rose-400" />
              <span>andreeaciolacc@gmail.com</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-rose-400 transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/in/andreea-c-336a73216/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm font-medium hover:border-rose-500/50 hover:bg-zinc-800 transition-all shadow-lg group cursor-pointer"
            >
              <ContactRound className="w-4 h-4 text-rose-400" />
              <span>in/andreea</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-rose-400 transition-colors" />
            </a>
          </motion.div>

          {/* Bottom Legal & Copyright Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-16 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500"
          >
            <p>Designed & developed with care.</p>
            <p>&copy; 2026 Andreea Ciolac. All rights reserved. London, UK</p>
          </motion.div>

        </div>
      </Container>
    </footer>
  );
}