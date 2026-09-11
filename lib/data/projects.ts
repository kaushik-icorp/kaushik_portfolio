export type ProjectCategory =
  | "Case Studies"
  | "Landing Pages"
  | "Dashboards";

export type Project = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  category: ProjectCategory;
  /** PDF documentation path — required for Additional Work visibility */
  file?: string;
  href?: string;
  /** Auto-generated from PDF page 1 via `npm run thumbnails` */
  image?: string;
  featured?: boolean;
};

function thumb(id: string) {
  return `/thumbnails/${id}.jpg`;
}

/** Flagship case studies — Selected Work rows */
export const flagshipProjects: Project[] = [
  {
    id: "kids-tracker",
    title: "Kids Tracker",
    summary:
      "Case study for a kids safety tracking app — parent peace of mind, live location flows, and clear mobile UI.",
    tags: ["UX Research", "Product Design", "Mobile", "Case Study"],
    category: "Case Studies",
    file: "/case_studies/kids_tracker_case_study.pdf",
    image: thumb("kids-tracker"),
    featured: true,
  },
  {
    id: "crypto-app",
    title: "Crypto App",
    summary:
      "End-to-end product case study for a crypto trading experience — research, flows, and a cohesive UI system ready for handoff.",
    tags: ["UX Research", "Product Design", "Mobile", "Prototyping"],
    category: "Case Studies",
    file: "/case_studies/crypto_app.pdf",
    image: thumb("crypto-app"),
    featured: true,
  },
  {
    id: "e-learning",
    title: "E-Learning",
    summary:
      "Learning product case study focused on clarity of navigation, progress feedback, and content discoverability.",
    tags: ["UX Design", "UI Design", "Education", "Figma"],
    category: "Case Studies",
    file: "/case_studies/e_learning.pdf",
    image: thumb("e-learning"),
    featured: true,
  },
  {
    id: "event-booking",
    title: "Event Booking",
    summary:
      "Booking journey redesign that reduces friction from discovery to confirmation across web and mobile breakpoints.",
    tags: ["UX Flows", "UI Design", "Conversion", "Responsive"],
    category: "Case Studies",
    file: "/case_studies/event_booking.pdf",
    image: thumb("event-booking"),
    featured: true,
  },
  {
    id: "cafeteria-pre-order",
    title: "Cafeteria Pre-Order System",
    summary:
      "Operational UX for pre-ordering meals — queue reduction, clear status states, and staff-friendly admin patterns.",
    tags: ["Service Design", "UI Design", "Systems", "Research"],
    category: "Case Studies",
    file: "/case_studies/Cafeteria Pre-Order System.pdf",
    image: thumb("cafeteria-pre-order"),
    featured: true,
  },
  {
    id: "temp-wifi",
    title: "Temporary WiFi",
    summary:
      "Guest connectivity UX case study balancing security constraints with a fast, low-friction onboarding path.",
    tags: ["UX Case Study", "Onboarding", "Utility", "Wireframing"],
    category: "Case Studies",
    file: "/case_studies/temp_wifi.pdf",
    image: thumb("temp-wifi"),
    featured: true,
  },
];

/** Additional Work — all PDF-backed projects from public folders */
const explorationProjectsAll: Project[] = [
  // Case studies (kids tracker first, then remaining)
  ...flagshipProjects.map(({ featured, ...p }) => {
    void featured;
    return p;
  }),

  // Landing pages (costume first, then remaining)
  {
    id: "costume-landing",
    title: "Costume Landing Page",
    summary:
      "Fashion e-commerce landing with collage imagery, best-seller storytelling, and shop-focused CTAs.",
    tags: ["Landing Page", "Fashion"],
    category: "Landing Pages",
    file: "/landing_page/costume_landing_page.pdf",
    image: thumb("costume-landing"),
  },
  {
    id: "banner",
    title: "Banner Landing Page",
    summary: "Bold promotional landing layout with strong visual hierarchy and CTA focus.",
    tags: ["Landing Page"],
    category: "Landing Pages",
    file: "/landing_page/banner.pdf",
    image: thumb("banner"),
  },
  {
    id: "beauty-landing",
    title: "Beauty Landing Page",
    summary: "Editorial landing layout for a beauty brand with refined visual pacing.",
    tags: ["Landing Page"],
    category: "Landing Pages",
    file: "/landing_page/beauty_landing_page.pdf",
    image: thumb("beauty-landing"),
  },
  {
    id: "ai-landing",
    title: "AI Landing Page",
    summary: "Product marketing page for an AI offering with crisp hierarchy and feature storytelling.",
    tags: ["Landing Page"],
    category: "Landing Pages",
    file: "/landing_page/ai_landing_page.pdf",
    image: thumb("ai-landing"),
  },
  {
    id: "education-landing",
    title: "Education Landing Page",
    summary: "Learning-focused marketing page with clear program storytelling and enrollment CTAs.",
    tags: ["Landing Page", "Education"],
    category: "Landing Pages",
    file: "/landing_page/education_landing_page.pdf",
    image: thumb("education-landing"),
  },
  {
    id: "metaverse-ventures",
    title: "Metaverse Ventures",
    summary: "Immersive brand landing experience for a metaverse venture narrative.",
    tags: ["Landing Page"],
    category: "Landing Pages",
    file: "/landing_page/metaverse_ventures.pdf",
    image: thumb("metaverse-ventures"),
  },
  {
    id: "it-company",
    title: "IT Company",
    summary: "Corporate IT services landing page with service clarity and trust-building layout.",
    tags: ["Landing Page"],
    category: "Landing Pages",
    file: "/landing_page/it_company.pdf",
    image: thumb("it-company"),
  },
  {
    id: "travel-landing",
    title: "Travel Landing Page",
    summary: "Destination-led travel landing page with vivid imagery and booking-oriented hierarchy.",
    tags: ["Landing Page", "Travel"],
    category: "Landing Pages",
    file: "/landing_page/travel_landing_page.pdf",
    image: thumb("travel-landing"),
  },

  // Dashboards (all 6)
  {
    id: "chat-bot",
    title: "Chat Bot Dashboard",
    summary: "Conversation ops dashboard for monitoring agents, intents, and response quality.",
    tags: ["Dashboard", "AI"],
    category: "Dashboards",
    file: "/dashboard/chat_bot.pdf",
    image: thumb("chat-bot"),
  },
  {
    id: "education-dashboard",
    title: "Education Dashboard",
    summary: "Admin and learner dashboard patterns for education workflows.",
    tags: ["Dashboard", "Data UI"],
    category: "Dashboards",
    file: "/dashboard/Education_dashboard.pdf",
    image: thumb("education-dashboard"),
  },
  {
    id: "order-inventory",
    title: "Order & Inventory",
    summary: "Operations dashboard for orders, stock levels, and fulfillment status.",
    tags: ["Dashboard", "Ops UI"],
    category: "Dashboards",
    file: "/dashboard/order_inventory.pdf",
    image: thumb("order-inventory"),
  },
  {
    id: "performance-overview",
    title: "Performance Overview",
    summary: "KPI overview dashboard with scannable metrics and trend visualization.",
    tags: ["Dashboard", "Analytics"],
    category: "Dashboards",
    file: "/dashboard/Performance overview.pdf",
    image: thumb("performance-overview"),
  },
  {
    id: "stock-management",
    title: "Stock Management",
    summary: "Inventory-focused dashboard with scannable tables and status clarity.",
    tags: ["Dashboard", "Ops UI"],
    category: "Dashboards",
    file: "/dashboard/stock_management.pdf",
    image: thumb("stock-management"),
  },
  {
    id: "voice-agent",
    title: "Voice Agent Dashboard",
    summary: "Voice AI operations dashboard for call flows, outcomes, and agent performance.",
    tags: ["Dashboard", "AI"],
    category: "Dashboards",
    file: "/dashboard/Voice_agent.pdf",
    image: thumb("voice-agent"),
  },
];

/** Permanent rule: Additional Work only shows projects with a PDF */
export const explorationProjects: Project[] = explorationProjectsAll.filter((p) => Boolean(p.file));

export const explorationFilters = [
  "All",
  "Case Studies",
  "Landing Pages",
  "Dashboards",
] as const;

export type ExplorationFilter = (typeof explorationFilters)[number];
