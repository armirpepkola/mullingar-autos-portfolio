"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

export function EnergyPulse() {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipples((prev) => [...prev, { id: Date.now(), x, y }]);
  };

  return (
    <button
      onClick={handleClick}
      className="relative group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-rose-950/40 border border-rose-500/30 text-rose-200 text-xs font-mono overflow-hidden transition-all hover:border-rose-500/60 shadow-lg shadow-rose-500/5 cursor-pointer"
      title="Tap to feel Andreea's energy!"
    >
      <span className="absolute inset-0 bg-linear-to-r from-rose-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Ripples */}
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            initial={{ width: 0, height: 0, opacity: 0.8, x: r.x, y: r.y }}
            animate={{ width: 300, height: 300, opacity: 0, x: r.x - 150, y: r.y - 150 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onAnimationComplete={() => {
              setRipples((prev) => prev.filter((item) => item.id !== r.id));
            }}
            className="absolute rounded-full bg-rose-400/30 pointer-events-none"
          />
        ))}
      </AnimatePresence>

      <Sparkles className="w-3.5 h-3.5 text-rose-400 animate-spin" style={{ animationDuration: "5s" }} />
      <span>[ Tap for Infectious Energy ✨ ]</span>
    </button>
  );
}