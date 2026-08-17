"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { BabysBreathAccent } from "./BabysBreathAccent";

export function FloatingBotanicalGarden() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top Right Drifting Blossom */}
      <motion.div style={{ y: y1, rotate: rotate1 }} className="absolute top-32 right-10 opacity-40">
        <BabysBreathAccent size={80} />
      </motion.div>

      {/* Mid Left Drifting Blossom */}
      <motion.div style={{ y: y2, rotate: rotate2 }} className="absolute top-[45%] left-6 opacity-30">
        <BabysBreathAccent size={100} />
      </motion.div>

      {/* Lower Right Drifting Blossom */}
      <motion.div style={{ y: y1 }} className="absolute top-[75%] right-16 opacity-35">
        <BabysBreathAccent size={90} />
      </motion.div>

      {/* Center Atmospheric Shimmer */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60%] left-1/2 -translate-x-1/2 w-200 h-100 bg-rose-500/10 blur-[180px] rounded-full pointer-events-none"
      />
    </div>
  );
}