import type { Job } from "./types";

export const jobs: Job[] = [
  {
    company: "Adyen",
    title: "Engineering Manager",
    location: "Amsterdam, NL",
    period: "Oct 2024 – Present",
    highlights: [
      "Built and lead two multidisciplinary teams — 12+ engineers, PMs, and a designer — owning Adyen's merchant-facing Customer Area products.",
      "Coached a Senior Engineer to own a data-service migration to Elasticsearch and Kafka end to end, taking critical SLO slips from 12+ to zero.",
      "Took ownership of the critical payments pages and drove +70% on their product-goal KPIs.",
      "Rallied a cross-functional task force to ship platform-wide privacy controls under a one-week compliance deadline, aligning stakeholders across Legal, Commercial, Security, and Comms behind one execution plan.",
      "Led the end-to-end consolidation of two customer portals into one — the initiative detailed in the case study above.",
    ],
  },
  {
    company: "Adyen",
    title: "Senior Software Engineer",
    location: "Amsterdam, NL",
    period: "Jan 2024 – Oct 2024",
    highlights: [
      "Shaped a new KYC performance-insights tool, interviewing pilot customers and folding their feedback directly into the product.",
      "Backend Java/Spring engineer on a customer-management portal serving platform, marketplace, and banking customers.",
    ],
  },
  {
    company: "Stripe",
    title: "Senior Software Engineer / Project Lead",
    location: "Seattle, WA",
    period: "Jun 2021 – Oct 2023",
    highlights: [
      "Designed a 2-year release roadmap that united three engineering teams, product, and data science behind a shared plan.",
      "Led Stripe's Brazilian Anticipations offering end to end — product scoping, service architecture, and hands-on delivery — across Legal, Product, Accounting, and 10+ teams.",
      "Drove a team quality effort that took the weekly bug backlog from ~80 to under 10.",
    ],
  },
  {
    company: "Microsoft",
    title: "Senior Software Engineer / Squad Lead",
    location: "Redmond, WA",
    period: "Apr 2018 – Jun 2021",
    highlights: [
      "Led a squad of 5 engineers building a compiler for Office test-spec validation, setting technical direction and architecture while staying hands-on in the code.",
      "Reworked system caching to triple capacity, saving $3m+ and eliminating the most common class of errors.",
    ],
  },
  {
    company: "Qualtrics",
    title: "Software Engineer",
    location: "Seattle, WA",
    period: "2017 – 2018",
    link: "https://www.qualtrics.com/eng/typescript-refactor",
    condensed: true,
    highlights: [
      "Converted an organization of 30+ engineers to TypeScript, and wrote about the process on the Qualtrics engineering blog.",
    ],
  },
  {
    company: "Earlier roles",
    title: "Software Engineer",
    location: "Louisiana",
    period: "2014 – 2017",
    condensed: true,
    highlights: [
      "Engineering roles at Acadian Ambulance, Golfballs.com, and UL Lafayette — where I first taught teams new languages and shipped products end to end.",
    ],
  },
];
