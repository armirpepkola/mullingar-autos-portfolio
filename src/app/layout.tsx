import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andreea | Digital Marketing Portfolio & Mullingar Autos Growth Engine",
  description: "Data-driven campaign execution, local SEO optimization, short-form video production, and high-performance advertising scaling regional automotive sales.",
  keywords: ["Digital Marketing", "Growth Strategist", "Volkswagen", "ŠKODA", "Mullingar Autos", "Full-Stack Operator"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} dark`}>
      <body className="bg-zinc-950 text-zinc-100 min-h-screen selection:bg-rose-500/30 selection:text-rose-200">
        {children}
      </body>
    </html>
  );
}