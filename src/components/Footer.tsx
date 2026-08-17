import { Container } from "@/components/ui/Container";
import { Building2, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 bg-zinc-950 border-t border-zinc-900 text-zinc-400">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-zinc-900">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="w-5 h-5 text-zinc-200" />
              <span className="text-lg font-bold text-zinc-100">Mullingar Autos Growth Portfolio</span>
            </div>
            <p className="text-sm text-zinc-400 max-w-md">
              Showcasing multi-channel digital transformation, campaign execution, and full-stack business operations for Volkswagen & ŠKODA in Ireland.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="mailto:contact@mullingarautos-portfolio.ie"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm font-medium hover:bg-zinc-800 transition-colors"
            >
              <Mail className="w-4 h-4 text-zinc-400" />
              <span>Get in Touch</span>
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors px-2 py-2.5"
            >
              <span>Back to Top Modules</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-mono">
          <p>© {new Date().getFullYear()} Digital Marketing & Growth Portfolio. Built with Next.js 16 & Tailwind CSS v4.</p>
          <div className="flex items-center gap-6">
            <span>Volkswagen & ŠKODA Dealer Case Study</span>
            <span>Westmeath, Ireland</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}