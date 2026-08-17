"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";

interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export function StatCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) =>
    latest.toFixed(decimals)
  );

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}