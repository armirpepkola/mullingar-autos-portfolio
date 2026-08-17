"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface KineticHeadingProps {
  text: string;
  className?: string;
  italicWord?: string;
}

export function KineticHeading({ text, className = "", italicWord }: KineticHeadingProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Split text into words or characters for fluid kinetic motion
  const words = text.split(" ");

  return (
    <h1
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100 leading-[1.1] cursor-pointer ${className}`}
    >
      {words.map((word, wIdx) => {
        const isItalic = word.toLowerCase().includes(italicWord?.toLowerCase() || "");
        return (
          <span key={wIdx} className="inline-block mr-3 overflow-hidden">
            <motion.span
              animate={isHovered ? { y: [0, -4, 0], scale: [1, 1.02, 1] } : { y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: wIdx * 0.05, ease: "easeInOut" }}
              className={`inline-block ${isItalic ? "font-serif italic font-normal text-transparent bg-clip-text bg-linear-to-r from-rose-400 via-amber-300 to-violet-400" : ""}`}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </h1>
  );
}