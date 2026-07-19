import type { CaseStudy } from "./types";

export const caseStudy: CaseStudy = {
  eyebrow: "Featured work · Adyen",
  title: "Deprecating the Balance Platform Customer Area",
  situation:
    "Adyen's Balance Platform customers had to run their business across two portals — the main " +
    "Customer Area and a standalone Balance Platform Customer Area. The split meant duplicate " +
    "configuration, missing features like SSO and support ticketing, and an innovation tax where " +
    "every feature had to be built twice. I led the cross-organizational initiative to deprecate " +
    "the second portal and consolidate every merchant workflow into one.",
  moves: [
    {
      label: "Framed it as strategy, not cleanup",
      body:
        "Instead of pitching a technical migration, I built the business case around three customer " +
        "impacts: double configuration hurting NPS/CSAT, critical features missing for platform " +
        "users, and dual implementation causing incidents. That framing aligned product, operations, " +
        "commercial, and support around one shared urgency.",
    },
    {
      label: "Made Product a co-owner",
      body:
        "Rather than treat this as an engineering job, I made IAM Product a co-owner of the approach. " +
        "Together we bet on user-controlled migration over a faster bulk cutover — reversible, so we " +
        "could launch, listen, and iterate instead of making a trapdoor decision. Self-migrating users " +
        "arrived with intent, raising adoption quality while keeping support burden low.",
    },
    {
      label: "Scaled through enablement",
      body:
        "When Financial Products was consuming my team's bandwidth chasing product-market fit, I " +
        "didn't just say no — I helped justify hiring four frontend engineers, then used my team to " +
        "onboard them. Their features now ship six months to a year faster. You scale by helping teams " +
        "build capability, not by absorbing their work.",
    },
    {
      label: "Built influence without authority",
      body:
        "The Customer Area lacked the frontend error monitoring the old portal had. Rather than " +
        "escalate, I built a coalition across Platform Engineering, the resilience task force, and the " +
        "original maintainers — which led PE to invest two quarters in Sentry Cloud, giving every Adyen " +
        "frontend team production monitoring, not just my migration.",
    },
  ],
  metrics: [
    { value: "2 → 1", label: "portals consolidated into a single Customer Area" },
    { value: "200%", label: "YoY growth in platform usage of the Customer Area" },
    { value: "~0", label: "net support-ticket growth during migration" },
  ],
  closing:
    "Where dependencies couldn't be prioritized away, I ran a repeatable playbook: co-design " +
    "in-house when there's capacity and urgency, flex scope when a piece can slip without " +
    "compromising the goal, and embed my engineers as accelerants when knowledge is the bottleneck. " +
    "Consolidating on the mature portal affirmed Adyen's One Platform vision, removed the duplication " +
    "tax, and raised reliability — with minimal disruption to merchants or support.",
};
