import type { CaseStudy } from "./types";

export const caseStudy: CaseStudy = {
  eyebrow: "Featured work · Adyen",
  title: "Consolidating two customer portals into one",
  situation:
    "Some of Adyen's customers had to run their business across two separate portals. The split " +
    "meant duplicate configuration, missing features like SSO and support ticketing, and an " +
    "innovation tax where every feature had to be built twice. I led the cross-organizational " +
    "initiative to retire the secondary portal and consolidate every customer workflow into one.",
  moves: [
    {
      label: "Framed it as strategy, not cleanup",
      body:
        "Instead of pitching a technical migration, I built the business case around three customer " +
        "impacts: duplicate configuration hurting satisfaction, critical features missing for some " +
        "users, and dual implementation causing incidents. That framing aligned product, operations, " +
        "commercial, and support around one shared urgency.",
    },
    {
      label: "Made Product a co-owner",
      body:
        "Rather than treat this as an engineering job, I made Product a co-owner of the approach. " +
        "Together we bet on user-controlled migration over a faster bulk cutover — reversible, so we " +
        "could launch, listen, and iterate instead of making a trapdoor decision. Self-migrating users " +
        "arrived with intent, raising adoption quality while keeping support burden low.",
    },
    {
      label: "Scaled through enablement",
      body:
        "When a partner team's roadmap was consuming my team's bandwidth, I didn't just say no — I " +
        "helped make the case for growing their own engineering capacity, then used my team to onboard " +
        "them. They now ship meaningfully faster. You scale by helping teams build capability, not by " +
        "absorbing their work.",
    },
    {
      label: "Built influence without authority",
      body:
        "The consolidated portal lacked the frontend error monitoring the old one had. Rather than " +
        "escalate, I built a coalition across engineering and the original maintainers — which led to a " +
        "lasting investment in production monitoring for every frontend team, not just my migration.",
    },
  ],
  metrics: [
    { value: "2 → 1", label: "customer portals consolidated into one" },
    { value: "SSO + support", label: "capabilities unified for platform customers" },
    { value: "~0", label: "net support-ticket growth during migration" },
  ],
  closing:
    "Where dependencies couldn't be prioritized away, I ran a repeatable playbook: co-design " +
    "in-house when there's capacity and urgency, flex scope when a piece can slip without " +
    "compromising the goal, and embed my engineers as accelerants when knowledge is the bottleneck. " +
    "Consolidating onto the mature portal affirmed a single-platform vision, removed the duplication " +
    "tax, and raised reliability — with minimal disruption to customers or support.",
};
