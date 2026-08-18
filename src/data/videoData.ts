export interface VideoItem {
  id: string;
  title: string;
  platform: string;
  views: string;
  watchTime: string;
  retention: string;
  description: string;
  format: string;
  screenshotProofLabel: string;
  highlights: string[];
}

export const videoShowcaseData: VideoItem[] = [
  {
    id: "reel-walkaround",
    title: "Dynamic Model Walk-Arounds",
    platform: "Instagram Reels & Meta Suite",
    views: "11.5K+ Views",
    watchTime: "9h 48m Watch Time",
    retention: "10s Avg Retention",
    description: "Scripted, filmed, and edited fast-paced vehicle walkthroughs highlighting key EV features with Andreea's warm, engaging presenter style.",
    format: "9:16 Vertical Video (Mobile Optimised)",
    screenshotProofLabel: "Meta Business Suite Reels Insights & Watch Time Analytics Proof",
    highlights: [
      "Outperformed static dealership imagery by 2x in organic reach.",
      "High hook rate within the first 2 seconds to combat scroll fatigue.",
      "Integrated local dealership personalities to build trust and regional rapport."
    ]
  },
  {
    id: "multichannel-views",
    title: "Multi-Channel Video Aggregate",
    platform: "Meta Ads & Organic Feed",
    views: "1.4M+ Total Views",
    watchTime: "High Engagement Index",
    retention: "Consistent Drop-Off Mitigation",
    description: "Scaled video distribution across paid ad campaigns and organic reels to maximize top-of-funnel brand awareness across Westmeath.",
    format: "Multi-Format Video Suite",
    screenshotProofLabel: "Meta Ads Manager Video View Campaign Performance Proof",
    highlights: [
      "Drove significant brand recall across Westmeath and Midlands catchment areas.",
      "Captured active car buyers during consideration phases via targeted video view campaigns.",
      "Refined editing pacing through rigorous comparative format benchmarking."
    ]
  }
];