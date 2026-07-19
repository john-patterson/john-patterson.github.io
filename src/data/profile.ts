import type { Pillar, Profile } from "./types";

export const profile: Profile = {
  name: "John Patterson",
  role: "Engineering Manager @ Adyen",
  location: "Amsterdam, Netherlands",
  tagline:
    "Engineering leader who operates like an owner — I frame the strategy, scale the teams, " +
    "and ship hard cross-org initiatives to measurable outcomes.",
  summary:
    "I'm an engineering manager who thinks in business outcomes and organizational leverage. " +
    "Promoted to EM within nine months of joining Adyen, I lead 12+ people across the Balance " +
    "Platform — but I'm at my best turning ambiguous, high-stakes problems into a shared strategy " +
    "and executing it across a federated org. I scale by enabling teams rather than absorbing work, " +
    "build coalitions where I don't hold authority, and stay technical enough — after years " +
    "hands-on at Adyen, Stripe, and Microsoft — to lead the how, not just the what. Long term, " +
    "I'm building toward executive leadership.",
  email: "john@johnppatterson.com",
  github: "https://github.com/john-patterson",
  linkedin: "https://linkedin.com/in/john-patterson",
  resumePdf: "/assets/documents/john_patterson_resume.pdf",
};

export const pillars: Pillar[] = [
  {
    title: "Strategy & framing",
    body: "I turn ambiguous, high-stakes problems into a business case that aligns an organization — and a plan it will actually execute.",
  },
  {
    title: "Scaling teams",
    body: "I scale through enablement, not central absorption: hiring, coaching, and repeatable playbooks that let other teams build their own capability.",
  },
  {
    title: "Cross-org execution",
    body: "I ship hard initiatives across a federated org, building coalitions and influence where I don't hold authority, and holding the line on outcomes.",
  },
];
