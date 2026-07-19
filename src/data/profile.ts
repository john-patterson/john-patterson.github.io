import type { Pillar, Profile } from "./types";

export const profile: Profile = {
  name: "John Patterson",
  role: "Engineering Manager @ Adyen",
  location: "Amsterdam, Netherlands",
  tagline:
    "Product-minded engineering leader. I build teams — and the leaders inside them — that turn " +
    "ambiguous problems into shipped business outcomes, in close partnership with Product and Design.",
  summary:
    "I lead two multidisciplinary teams — 12+ engineers, PMs, and a designer — that own Adyen's " +
    "merchant-facing Customer Area. I lead through enablement and leader development: coaching " +
    "senior engineers into ownership, building capability in partner teams, and treating Product " +
    "and Design as co-authors of strategy rather than downstream consumers. Years hands-on at " +
    "Stripe and Microsoft keep me credible on the how, not just the what.",
  email: "john@johnppatterson.com",
  github: "https://github.com/john-patterson",
  linkedin: "https://linkedin.com/in/john-patterson",
  resumePdf: "/assets/documents/john_patterson_resume.pdf",
};

export const pillars: Pillar[] = [
  {
    title: "Product partnership",
    body: "I lead engineering as a product discipline. Product and Design are co-authors of strategy on my teams — and it shows in the outcomes we choose and the ones we hit.",
  },
  {
    title: "Growing leaders",
    body: "I scale by developing ownership in others: coaching senior engineers into leads, onboarding new leaders, and building teams that run well when I'm not in the room.",
  },
  {
    title: "Cross-org execution",
    body: "I ship hard initiatives across a federated org, building coalitions and influence where I don't hold authority — and holding the line on outcomes.",
  },
];
