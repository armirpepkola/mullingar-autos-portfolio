"use client";

import { ReactNode, useState, MouseEvent } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className, onClick }: CardProps) {
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
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={twMerge(
        "group relative bg-zinc-900/40 border border-zinc-800/80 rounded-[28px] p-6 sm:p-8 overflow-hidden",
        "backdrop-blur-md transition-all duration-500",
        "hover:border-rose-500/40 hover:bg-zinc-900/70 hover:shadow-2xl hover:shadow-rose-500/5",
        onClick && "cursor-pointer",
        className
      )}
    >
      {/* Dynamic Mouse Spotlight Glow */}
      {isHovered && (
        <div
          className="absolute pointer-events-none -inset-px rounded-[28px] transition-opacity duration-300 opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(244, 63, 94, 0.12), transparent 80%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}