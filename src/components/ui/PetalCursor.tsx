"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  targetX: number;
}

export function PetalCursor() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle particle creation for butter-smooth performance
      if (Math.random() > 0.3) return;

      const colors = ["#f43f5e", "#fbbf24", "#fda4af", "#fbcfe8"];
      const newParticle: Particle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 6 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        targetX: e.clientX + (Math.random() * 40 - 20),
      };

      setParticles((prev) => [...prev.slice(-25), newParticle]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden hidden sm:block">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ opacity: 0.8, scale: 1, x: p.x - 4, y: p.y - 4 }}
          animate={{ opacity: 0, scale: 0.2, y: p.y + 40, x: p.targetX }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 8px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}