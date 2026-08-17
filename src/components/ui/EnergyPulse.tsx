"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

export function EnergyPulse() {
  const [isActive, setIsActive] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setRipples((prev) => [...prev, { id: Date.now(), x, y }]);
    setIsActive(true);
    setTimeout(() => setIsActive(false), 2000);
  };

  return (
    <div className="relative inline-block">
      {/* Full-Page Ambient Resonance Flash when triggered */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center bg-radial from-rose-500/20 via-amber-500/10 to-transparent"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900/90 border border-rose-500 text-rose-200 text-sm font-mono shadow-2xl backdrop-blur-xl"
              >
                <Heart className="w-4 h-4 text-rose-400 fill-rose-400 animate-bounce" />
                <span>*Infectious laughter fills the room!* ✨</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={handleClick}
        className="relative group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-rose-950/40 border border-rose-500/30 text-rose-200 text-xs font-mono overflow-hidden transition-all hover:border-rose-500/60 shadow-lg shadow-rose-500/5 cursor-pointer"
        title="Tap to feel Andreea's energy & laughter!"
      >
        <span className="absolute inset-0 bg-linear-to-r from-rose-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Expanding Ripples */}
        <AnimatePresence>
          {ripples.map((r) => (
            <motion.span
              key={r.id}
              initial={{ width: 0, height: 0, opacity: 0.9, x: r.x, y: r.y }}
              animate={{ width: 400, height: 400, opacity: 0, x: r.x - 200, y: r.y - 200 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute rounded-full bg-linear-to-r from-rose-400/40 to-amber-400/40 pointer-events-none blur-sm"
            />
          ))}
        </AnimatePresence>

        <Sparkles className="w-3.5 h-3.5 text-rose-400 animate-spin" style={{ animationDuration: "5s" }} />
        <span>[ Tap for Infectious Laughter & Energy ✨ ]</span>
      </button>
    </div>
  );
}