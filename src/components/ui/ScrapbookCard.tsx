"use client";

import { ReactNode, useState, MouseEvent } from "react";
import { twMerge } from "tailwind-merge";

interface ScrapbookCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  rotation?: string; // e.g. "rotate-1" or "-rotate-1"
  note?: string;     // Handwritten marginalia note
}

export function ScrapbookCard({ children, className, onClick, rotation = "rotate-0", note }: ScrapbookCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="relative group/scrapbook">
      {/* Optional Handwritten Marginalia Note */}
      {note && (
        <div className="absolute -top-4 right-6 z-20 handwritten text-rose-300 text-lg rotate-2 bg-zinc-900/90 px-3 py-0.5 rounded-md border border-rose-500/20 shadow-lg pointer-events-none transition-transform group-hover/scrapbook:scale-105">
          {note} ✍️
        </div>
      )}

      {/* Top Tape Graphic */}
      {/* <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 tape-strip z-20 pointer-events-none rounded-xs shadow-xs" /> */}

      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        className={twMerge(
          "relative bg-zinc-900/60 border border-zinc-800/90 rounded-[28px] p-6 sm:p-8 overflow-hidden",
          "backdrop-blur-md transition-all duration-500",
          "hover:border-rose-500/50 hover:bg-zinc-900/90 hover:shadow-2xl hover:shadow-rose-500/10 hover:rotate-0",
          rotation,
          onClick && "cursor-pointer",
          className
        )}
      >
        {/* Dynamic Mouse Spotlight Glow */}
        {isHovered && (
          <div
            className="absolute pointer-events-none -inset-px rounded-[28px] transition-opacity duration-300 opacity-100"
            style={{
              background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(244, 63, 94, 0.15), transparent 80%)`,
            }}
          />
        )}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}