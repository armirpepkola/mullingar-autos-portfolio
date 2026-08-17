"use client";

import { ReactNode, useState, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface ScrapbookCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  rotation?: string;
  note?: string;
}

export function ScrapbookCard({ children, className, onClick, rotation = "rotate-0", note }: ScrapbookCardProps) {
  // 3D Motion Values for smooth spring tilt physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
    setCursorPos({ x: mouseX, y: mouseY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative group/scrapbook py-3" style={{ perspective: "1000px" }}>
      {/* Handwritten Marginalia Note */}
      {note && (
        <div className="absolute -top-1 right-6 z-30 handwritten text-rose-300 text-xl rotate-2 bg-zinc-900/95 px-3 py-1 rounded-md border border-rose-500/30 shadow-2xl pointer-events-none transition-transform group-hover/scrapbook:scale-110 group-hover/scrapbook:rotate-3">
          {note} ✍️
        </div>
      )}

      {/* Realistic Washi Tape Graphic */}
      {/* <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-6 tape-strip z-30 pointer-events-none rounded-xs shadow-md opacity-90" /> */}

      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        className={twMerge(
          "relative bg-zinc-900/95 border border-zinc-800/90 rounded-4xl p-6 sm:p-8 overflow-hidden",
          "transition-shadow duration-500 shadow-xl",
          "hover:border-rose-500/60 hover:shadow-[0_20px_50px_rgba(244,63,94,0.15)]",
          rotation,
          onClick && "cursor-pointer",
          className
        )}
      >
        {/* Studio Specular Light Gloss Reflection Sheen */}
        {isHovered && (
          <div
            className="absolute pointer-events-none -inset-px rounded-4xl transition-opacity duration-300 opacity-100 z-20"
            style={{
              background: `radial-gradient(400px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(255, 255, 255, 0.12), rgba(244, 63, 94, 0.06) 40%, transparent 80%)`,
            }}
          />
        )}

        {/* Content layer optimized with crisp subpixel antialiasing */}
        <div className="relative z-10 antialiased" style={{ transform: "translateZ(20px)", backfaceVisibility: "hidden" }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}