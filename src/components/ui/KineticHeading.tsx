"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface KineticHeadingProps {
  text: string;
  className?: string;
  accentWords?: string[];
}

export function KineticHeading({ text, className = "", accentWords = [] }: KineticHeadingProps) {
  const [isHovered, setIsHovered] = useState(false);
  const words = text.split(" ");

  return (
    <h1
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100 leading-[1.1] cursor-pointer ${className}`}
    >
      {words.map((word, wIdx) => {
        // Clean word to check for accent matches
        const cleanWord = word.toLowerCase().replace(/[^a-z&]/g, "");
        const isAccented = accentWords.some(aw => 
          cleanWord.includes(aw.toLowerCase().replace(/[^a-z&]/g, ""))
        );

        return (
          // Added pb-2 to give descenders space; removed overflow-hidden
          <span key={wIdx} className="inline-block mr-3 pb-2">
            <motion.span
              animate={isHovered ? { y: [0, -4, 0], scale: [1, 1.02, 1] } : { y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: wIdx * 0.05, ease: "easeInOut" }}
              className={`inline-block ${
                isAccented
                  ? "font-serif italic font-normal text-transparent bg-clip-text bg-linear-to-r from-rose-400 to-amber-300"
                  : ""
              }`}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </h1>
  );
}