import { Badge } from "./Badge";
import { BabysBreathAccent } from "./BabysBreathAccent";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 sm:mb-16 relative ${align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}>
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-40 pointer-events-none hidden sm:block">
        <BabysBreathAccent size={36} />
      </div>
      <Badge variant="glow" className="mb-4 border-rose-500/20 text-rose-200 bg-rose-950/20">
        {badge}
      </Badge>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 mb-4">
        {title}
      </h2>
      <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
}