import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "glow";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  const baseStyles = "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-colors";
  
  const variants = {
    default: "bg-zinc-900 border border-zinc-800 text-zinc-300",
    outline: "border border-zinc-700 text-zinc-400 bg-transparent",
    glow: "bg-zinc-900/80 border border-zinc-700 text-zinc-200 shadow-sm shadow-zinc-900/50",
  };

  return (
    <span className={twMerge(baseStyles, variants[variant], className)}>
      {children}
    </span>
  );
}