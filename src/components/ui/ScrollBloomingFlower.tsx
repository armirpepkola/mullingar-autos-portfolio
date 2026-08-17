"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollBloomingFlower() {
  const { scrollYProgress } = useScroll();

  // Smooth path drawing across the entire document
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Sequential bloom stages
  const bloom1 = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);
  const bloom2 = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
  const bloom3 = useTransform(scrollYProgress, [0.45, 0.65], [0, 1]);
  const bloom4 = useTransform(scrollYProgress, [0.65, 0.85], [0, 1]);
  const bloomFinal = useTransform(scrollYProgress, [0.85, 1], [0, 1]);

  // Floating pollen opacity
  const pollenOpacity = useTransform(scrollYProgress, [0.1, 0.9], [0.2, 1]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden hidden lg:block">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 3200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
        strokeLinecap="round"
        preserveAspectRatio="none"
      >
        {/* SVG Defs for Gradients and High-End Glow Filters */}
        <defs>
          <linearGradient id="vineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f43f5e" /> {/* Rose */}
            <stop offset="35%" stopColor="#fbbf24" /> {/* Amber */}
            <stop offset="70%" stopColor="#f43f5e" /> {/* Rose */}
            <stop offset="100%" stopColor="#8b5cf6" /> {/* Violet */}
          </linearGradient>

          <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur1" />
            <feGaussianBlur stdDeviation="15" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main Double-Helix Interwoven Tendrils */}
        <motion.path
          d="M 80 100 C 160 400, 20 700, 90 1100 C 150 1500, 30 1900, 90 2300 C 140 2600, 50 2900, 100 3150"
          stroke="url(#vineGradient)"
          strokeWidth="2.5"
          filter="url(#neonGlow)"
          style={{ pathLength }}
        />
        <motion.path
          d="M 95 120 C 135 420, 45 720, 105 1120 C 125 1520, 55 1920, 105 2320 C 120 2620, 70 2920, 110 3170"
          stroke="url(#vineGradient)"
          strokeWidth="1"
          strokeOpacity="0.6"
          style={{ pathLength }}
        />

        {/* Extravagant Side Branches */}
        <motion.path d="M 90 400 Q 30 360 10 320" stroke="url(#vineGradient)" strokeWidth="1.5" style={{ pathLength: bloom1 }} />
        <motion.path d="M 95 1150 Q 170 1100 210 1060" stroke="url(#vineGradient)" strokeWidth="1.5" style={{ pathLength: bloom2 }} />
        <motion.path d="M 80 1850 Q 20 1800 5 1750" stroke="url(#vineGradient)" strokeWidth="1.5" style={{ pathLength: bloom3 }} />
        <motion.path d="M 100 2450 Q 180 2390 220 2340" stroke="url(#vineGradient)" strokeWidth="1.5" style={{ pathLength: bloom4 }} />
        <motion.path d="M 100 3150 Q 40 3090 15 3050" stroke="url(#vineGradient)" strokeWidth="1.5" style={{ pathLength: bloomFinal }} />

        {/* Floating Glowing Pollen Particles */}
        <motion.g style={{ opacity: pollenOpacity }}>
          <circle cx="120" cy="700" r="2.5" fill="#fbbf24" filter="url(#neonGlow)" />
          <circle cx="50" cy="1400" r="2" fill="#f43f5e" filter="url(#neonGlow)" />
          <circle cx="160" cy="2100" r="3" fill="#8b5cf6" filter="url(#neonGlow)" />
          <circle cx="70" cy="2800" r="2" fill="#fbbf24" filter="url(#neonGlow)" />
        </motion.g>

        {/* Blossom Cluster 1 (Luminous Rose & Gold) */}
        <motion.g style={{ scale: bloom1, transformOrigin: "10px 320px" }} transform="translate(10, 320)">
          <circle cx="0" cy="0" r="7" fill="#fbbf24" filter="url(#neonGlow)" />
          <circle cx="-8" cy="-8" r="4.5" fill="#f43f5e" />
          <circle cx="8" cy="-8" r="4.5" fill="#fbbf24" />
          <circle cx="-8" cy="8" r="4.5" fill="#f43f5e" />
          <circle cx="8" cy="8" r="4.5" fill="#fff" />
        </motion.g>

        {/* Blossom Cluster 2 (Grand Amber Bloom) */}
        <motion.g style={{ scale: bloom2, transformOrigin: "210px 1060px" }} transform="translate(210, 1060)">
          <circle cx="0" cy="0" r="8" fill="#f43f5e" filter="url(#neonGlow)" />
          <circle cx="-10" cy="-7" r="5" fill="#fbbf24" />
          <circle cx="10" cy="7" r="5" fill="#fff" />
          <circle cx="-10" cy="7" r="4" fill="#8b5cf6" />
          <circle cx="10" cy="-7" r="4" fill="#f43f5e" />
        </motion.g>

        {/* Blossom Cluster 3 */}
        <motion.g style={{ scale: bloom3, transformOrigin: "5px 1750px" }} transform="translate(5, 1750)">
          <circle cx="0" cy="0" r="7" fill="#fbbf24" filter="url(#neonGlow)" />
          <circle cx="-9" cy="-9" r="4.5" fill="#f43f5e" />
          <circle cx="9" cy="-9" r="4.5" fill="#fff" />
          <circle cx="0" cy="11" r="5" fill="#8b5cf6" />
        </motion.g>

        {/* Blossom Cluster 4 */}
        <motion.g style={{ scale: bloom4, transformOrigin: "220px 2340px" }} transform="translate(220, 2340)">
          <circle cx="0" cy="0" r="7.5" fill="#8b5cf6" filter="url(#neonGlow)" />
          <circle cx="-9" cy="-7" r="4.5" fill="#f43f5e" />
          <circle cx="9" cy="7" r="4.5" fill="#fbbf24" />
          <circle cx="0" cy="-10" r="4" fill="#fff" />
        </motion.g>

        {/* Grand Final Luminous Masterpiece at Footer */}
        <motion.g style={{ scale: bloomFinal, transformOrigin: "15px 3050px" }} transform="translate(15, 3050)">
          <circle cx="0" cy="0" r="10" fill="#fbbf24" filter="url(#neonGlow)" />
          <circle cx="-14" cy="-12" r="6" fill="#f43f5e" filter="url(#neonGlow)" />
          <circle cx="14" cy="-12" r="6" fill="#8b5cf6" filter="url(#neonGlow)" />
          <circle cx="-16" cy="12" r="6" fill="#fff" />
          <circle cx="16" cy="12" r="6" fill="#fbbf24" filter="url(#neonGlow)" />
          <circle cx="0" cy="-18" r="5.5" fill="#f43f5e" />
        </motion.g>
      </svg>
    </div>
  );
}