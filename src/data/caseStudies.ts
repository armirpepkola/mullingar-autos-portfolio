export interface CaseStudyModule {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  metricBadge: string;
  description: string;
  strategyPoints: string[];
  fullDetails: string;
  screenshotProofLabel: string;
  highlights: { label: string; value: string }[];
}

export const caseStudyModules: CaseStudyModule[] = [
  {
    id: "done-deal",
    category: "Marketplace Advertising",
    title: "DoneDeal 252 Campaign",
    subtitle: "High-Impact Native Units & Regional Inventory Targeting",
    metricBadge: "7.02M+ Impressions",
    description: "Executed high-visibility multi-model campaigns targeting Westmeath and Midlands car buyers across custom buyer segments with Andreea's signature precision.",
    strategyPoints: [
      "4.11M+ impressions generated for Volkswagen inventory.",
      "2.91M+ impressions generated for ŠKODA inventory.",
      "Achieved peak section CTRs reaching up to 0.16% across high-intent search feeds.",
      "Generated 5,969 direct high-intent inventory clicks from targeted display units."
    ],
    fullDetails: "By optimizing ad placement timing and leveraging custom audience segments (EV buyers, family SUV shoppers, and 2020+ registration seekers), the DoneDeal 252 campaign established Mullingar Autos as the dominant regional dealer for both Volkswagen and ŠKODA during peak registration windows.",
    screenshotProofLabel: "DoneDeal Campaign Performance Dashboard & Impression Reports",
    highlights: [
      { label: "Total Impressions", value: "7,028,602" },
      { label: "Direct Clicks", value: "5,969" },
      { label: "Peak CTR", value: "0.16%" },
      { label: "Focus Brands", value: "VW & ŠKODA" }
    ]
  },
  {
    id: "google-ads",
    category: "Search Engine Advertising",
    title: "Google Ads PPC Engine",
    subtitle: "Precision Keyword Bidding & Brand Defense",
    metricBadge: "141K+ Impressions",
    description: "Balanced brand defense, new model search intent, and high-volume regional used car keywords with ultra-low CPC efficiency.",
    strategyPoints: [
      "141,700 total search impressions captured in competitive regional market.",
      "4,980 high-intent click-throughs driven directly to inventory pages.",
      "Optimized average Cost-Per-Click (CPC) down between €0.24 and €0.46.",
      "Structured ad groups around specific model launches (ID. Series, Tayron, Kodiaq)."
    ],
    fullDetails: "Rigorous negative keyword management and local geo-targeting ensured ad spend was concentrated exclusively within high-conversion radius zones around Westmeath, maximizing lead quality while minimizing wasteful broad-match spend.",
    screenshotProofLabel: "Google Ads Manager CPC & Conversion Attribution Screenshot",
    highlights: [
      { label: "Search Impressions", value: "141,700" },
      { label: "Total Clicks", value: "4,980" },
      { label: "Avg. CPC", value: "€0.24 - €0.46" },
      { label: "Targeting", value: "Geo-Regional" }
    ]
  },
  {
    id: "ga4-analytics",
    category: "Web Analytics & Attribution",
    title: "Google Analytics 4 Tracking",
    subtitle: "Traffic Attribution & User Engagement Mapping",
    metricBadge: "40K+ Active Users",
    description: "Comprehensive tracking of user journeys, event funnels, and channel attribution across organic and paid touchpoints.",
    strategyPoints: [
      "Monitored 40,000+ active users and 640,000+ total site interactions.",
      "Maintained a strong 3m 07s average engagement time per session.",
      "Tracked 117,000+ views specifically on the `/used-cars/search/` inventory path.",
      "Evaluated traffic split: Organic Search (31k sessions) vs Paid Search (21k sessions)."
    ],
    fullDetails: "GA4 event tracking allowed us to isolate drop-off points in the vehicle finance calculator and enquiry forms, leading to UX adjustments that boosted mobile lead conversion rates.",
    screenshotProofLabel: "GA4 Audience Overview & Traffic Channel Breakdown Report",
    highlights: [
      { label: "Active Users", value: "40,000+" },
      { label: "Total Interactions", value: "640,000+" },
      { label: "Avg. Engagement", value: "3m 07s" },
      { label: "Used Car Views", value: "117k+" }
    ]
  },
  {
    id: "cms-seo",
    category: "CMS & On-Page SEO",
    title: "SEO Architecture & Dynamic CMS",
    subtitle: "Dynamic Meta Tags & Model Launch Landing Pages",
    metricBadge: "Top Regional Rankings",
    description: "Built high-performance model launch landing pages and automated dynamic meta tags for local search dominance.",
    strategyPoints: [
      "Implemented dynamic meta tag architecture (`%pagetitle%`, `%town%`) across inventory.",
      "Designed custom HTML landing pages for major launches like Tayron Edition 75 and ID. Series.",
      "Authored keyword-dense meta descriptions targeting Mullingar, Athlone, and Longford buyers.",
      "Optimized Core Web Vitals for mobile shoppers browsing on 4G/5G connections."
    ],
    fullDetails: "Technical SEO enhancements ensured rapid indexing of newly arrived approved used vehicles, capturing high-intent long-tail search queries ahead of competing independent dealers.",
    screenshotProofLabel: "CMS Landing Page Editor & Dynamic Meta Tag Configuration Proof",
    highlights: [
      { label: "Meta Architecture", value: "Dynamic `%town%`" },
      { label: "Key Launches", value: "Tayron & ID. Series" },
      { label: "Mobile Optimization", value: "100% Responsive" },
      { label: "Search Intent", value: "Local Capture" }
    ]
  },
  {
    id: "local-seo",
    category: "Local SEO & Lead Capture",
    title: "Google Business Profile Optimization",
    subtitle: "Map Visibility, Direct Calls & Showroom Footfall",
    metricBadge: "11.3K+ Interactions",
    description: "Maximized local map pack visibility and streamlined customer touchpoints to drive phone calls and showroom visits.",
    strategyPoints: [
      "11,387 total customer interactions recorded on Google Business Profile.",
      "5,863 direct website visits generated from map listings.",
      "3,143 map direction requests and 2,381 direct phone calls logged.",
      "Maintained a stellar 4.4★ rating across 295 verified customer reviews."
    ],
    fullDetails: "Active reputation management, weekly Google Posts highlighting current finance offers, and prompt response times to customer Q&A converted casual searchers into high-intent showroom visitors.",
    screenshotProofLabel: "Google Business Profile Insights & Call Volume Analytics",
    highlights: [
      { label: "Total Interactions", value: "11,387" },
      { label: "Website Visits", value: "5,863" },
      { label: "Direction Requests", value: "3,143" },
      { label: "Review Rating", value: "4.4★ (295 Reviews)" }
    ]
  },
  {
    id: "social-video",
    category: "Short-Form Video & Social",
    title: "Instagram Reels & Meta Growth",
    subtitle: "Walk-Arounds, Creator Benchmarking & View Retention",
    metricBadge: "1.4M+ Video Views",
    description: "Scripted, filmed, and edited dynamic short-form walk-arounds featuring dealership personalities that outperformed static posts 2x.",
    strategyPoints: [
      "1.4M total video views achieved across Meta suite campaigns.",
      "11.5K Reels views generated with 9h 48m total watch time.",
      "Achieved a strong 10-second average watch retention rate on vehicle highlights.",
      "Benchmarked competitor content formats to establish a signature local presenter style."
    ],
    fullDetails: "Humanizing the dealership experience through personable, high-energy walkthroughs built immediate trust with younger car buyers and first-time EV adopters across the Midlands.",
    screenshotProofLabel: "Meta Business Suite Insights & Reels Performance Proof",
    highlights: [
      { label: "Total Views", value: "1.4M+" },
      { label: "Reels Watch Time", value: "9h 48m" },
      { label: "Avg Retention", value: "10 Seconds" },
      { label: "Format", value: "Mobile Vertical" }
    ]
  },
  {
    id: "linktree-conversion",
    category: "Social Conversion Architecture",
    title: "Bio Link Conversion Engine",
    subtitle: "Instagram Linktree Optimization & Traffic Routing",
    metricBadge: "72.6% Lifetime CTR",
    description: "Engineered a high-conversion social bio hub routing Instagram traffic directly to active vehicle stock and finance calculators.",
    strategyPoints: [
      "965 total profile views converted into 701 high-intent link clicks.",
      "Achieved an exceptional 72.6% lifetime Click-Through Rate (CTR).",
      "502 direct clicks routed specifically to the Approved Used Cars inventory.",
      "Streamlined user journeys from social feeds to conversion pages in 1 click."
    ],
    fullDetails: "By aligning social media content hooks with dedicated landing links in Bio, social media browsing was successfully converted into qualified sales pipeline opportunities.",
    screenshotProofLabel: "Linktree Analytics & Traffic Click-Through Conversion Proof",
    highlights: [
      { label: "Profile Views", value: "965" },
      { label: "Total Link Clicks", value: "701" },
      { label: "Lifetime CTR", value: "72.6%" },
      { label: "Used Car Routing", value: "502 Clicks" }
    ]
  }
];