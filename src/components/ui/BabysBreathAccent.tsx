"use client";

import { motion } from "framer-motion";

interface BabysBreathAccentProps {
  className?: string;
  size?: number;
}

export function BabysBreathAccent({ className = "", size = 40 }: BabysBreathAccentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { duration: 0.6 },
        scale: { duration: 0.6 },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }}
      className={`inline-flex items-center justify-center text-rose-300/60 pointer-events-none ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        {/* Delicate Stems */}
        <path d="M50 90 Q50 60 50 30" />
        <path d="M50 65 Q35 50 25 45" />
        <path d="M50 50 Q65 40 75 35" />
        <path d="M50 40 Q40 25 35 15" />
        <path d="M50 35 Q60 20 68 12" />

        {/* Tiny Baby's Breath Blossoms (Cluster Dots) */}
        <g fill="currentColor" stroke="none">
          <circle cx="50" cy="25" r="3.5" className="text-rose-200" />
          <circle cx="47" cy="22" r="2.5" />
          <circle cx="53" cy="23" r="2.5" />

          <circle cx="23" cy="43" r="3" className="text-rose-200" />
          <circle cx="21" cy="46" r="2" />
          <circle cx="26" cy="41" r="2" />

          <circle cx="77" cy="33" r="3" className="text-amber-200/80" />
          <circle cx="74" cy="31" r="2" />
          <circle cx="79" cy="36" r="2" />

          <circle cx="33" cy="13" r="2.5" className="text-rose-200" />
          <circle cx="35" cy="10" r="1.8" />

          <circle cx="70" cy="10" r="2.5" className="text-amber-200/80" />
          <circle cx="67" cy="9" r="1.8" />
        </g>
      </svg>
    </motion.div>
  );
}