import { Container } from "@/components/ui/Container";
import { Building2, Mail, ArrowUpRight, Heart } from "lucide-react";
import { BabysBreathAccent } from "@/components/ui/BabysBreathAccent";

export function Footer() {
  return (
    <footer className="py-20 bg-zinc-950 border-t border-zinc-900 text-zinc-400 relative overflow-hidden">
      <div className="absolute right-10 bottom-10 opacity-20 pointer-events-none">
        <BabysBreathAccent size={120} />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-zinc-900">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="w-5 h-5 text-rose-400" />
              <span className="text-xl font-serif text-zinc-100">Andreea&apos;s Growth & Marketing Portfolio</span>
            </div>
            <p className="text-sm text-zinc-300 max-w-md leading-relaxed">
              Crafted with heart, relentless ambition, and baby&apos;s breath grace. Showcasing multi-channel digital transformation for Volkswagen & ŠKODA in Ireland.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="mailto:andreea@mullingarautos-portfolio.ie"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-rose-500 to-amber-500 text-zinc-950 text-sm font-semibold hover:opacity-95 transition-all shadow-lg shadow-rose-500/20 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-zinc-950" />
              <span>Get in Touch with Andreea</span>
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors px-2 py-2.5 cursor-pointer"
            >
              <span>Back to Top Scrapbook</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-mono">
          <p className="flex items-center gap-1.5">
            Built with Next.js 16, Tailwind CSS v4 & endless joy <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 inline" />
          </p>
          <div className="flex items-center gap-6">
            <span>Mullingar Autos Main Dealer</span>
            <span>Westmeath, Ireland</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}