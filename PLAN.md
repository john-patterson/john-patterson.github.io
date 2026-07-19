# Executive Portfolio Plan — Positioning John for the M1 → M2 Transition

**Audience for this document:** John (site owner) and anyone implementing the next site revision.
**Goal of the site:** Convince a Director/VP-level hiring audience that John is ready to manage
managers (M2), while quietly laying the narrative foundation for executive roles later.

---

## 1. The positioning problem

The current site tells the story of an **excellent M1** — a strong line manager with impressive
delivery stats. It does not yet tell the story of an **emerging M2**, and it completely omits
John's single most differentiating asset: **he is a product engineering leader, renowned for his
partnership with Product and Design.** That word — *product* — appears almost nowhere in the
positioning copy. The pillars ("Strategy & framing", "Scaling teams", "Cross-org execution")
are strong but generic; any ambitious EM could claim them.

Three audiences will read this site, in this order of importance:

1. **Directors/VPs hiring an M2** — they ask: *Can this person build and run an organization,
   develop managers, and own a product area's outcomes without being in every room?*
2. **Senior peers and internal sponsors** — they ask: *Is this person's narrative consistent
   with the scope I'd sponsor them for?*
3. **Future executive-search readers** — they ask: *Is there a trajectory here?*

**The reframe:** John is not "an engineering manager who ships hard initiatives." He is a
**product-minded engineering leader who builds teams — and increasingly, leaders — that own
business outcomes.** Every section of the site should serve that sentence.

### What M2 readers look for (and how John's record maps to it)

| M2 signal | Evidence John already has |
|---|---|
| Develops leaders, not just engineers | Coached a Senior Engineer to *own* the Elasticsearch/Kafka migration; onboarded a Senior + three L2s |
| Scales through others / delegation | "Scaled through enablement" case-study move; enabling Financial Products to hire and onboard 4 FE engineers |
| Runs multiple teams as a portfolio | 2 multidisciplinary teams, 12+ people, distinct charters (User Guidance, Key Journeys) |
| Owns business outcomes, not features | +70% product-goal KPIs, 200% YoY usage growth, NPS/CSAT-framed business case |
| Org-level influence without authority | Sentry Cloud coalition; privacy task force across Legal/Commercial/Security |
| Product & design partnership | Currently **implicit only** — must be made explicit (see §2) |

The raw material is genuinely there. The work is **curation and framing**, not invention.

### One honesty guardrail

With ~2 years of management experience, the site must never *overclaim* scope — savvy readers
calibrate instantly and discount everything else if one line smells inflated. The strategy is:
**show trajectory, don't declare ambition.** Concretely:

- Remove "Long term, I'm building toward executive leadership" from the summary. Ambition
  stated on a portfolio reads as junior; scope trajectory *shown* reads as senior. (CTO/CEO
  aspirations belong in conversations, not on the homepage.)
- Remove "Promoted to EM within nine months of joining Adyen." It's a genuine credential, but
  leading with speed-of-promotion emphasizes *recency* of management experience — the exact
  thing an M2 screen probes. Let the scope (2 teams, 12+ people, org-wide initiatives) carry it.
- Keep every metric that survives editing verifiable and conservative in tone
  ("aligned stakeholders including Legal, Commercial, and Security" rather than
  "aligning the C-suite" — the second invites a follow-up question the first doesn't).

---

## 2. Content plan, section by section

### 2.1 Hero (`src/data/profile.ts`)

- **Role line:** keep "Engineering Manager @ Adyen" — accurate titles build trust.
- **Tagline:** replace the current one ("operates like an owner… ship hard cross-org
  initiatives") with a product-leadership identity. Direction:
  > *"Product-minded engineering leader. I build teams — and leaders — that turn ambiguous
  > problems into shipped business outcomes, in deep partnership with Product and Design."*
- **Summary:** rewrite around three beats, in this order:
  1. **Scope today** — leads two multidisciplinary teams (12+ engineers, PMs, a designer)
     owning Adyen's merchant-facing Customer Area.
  2. **How he leads** — through enablement and leader development: coaching seniors into
     ownership, building capability in partner teams, and treating Product/Design as
     co-owners of strategy rather than downstream consumers.
  3. **Foundation** — years of hands-on engineering at Stripe and Microsoft keep him credible
     on the *how*. (One clause, not a paragraph.)
  - Cut: the promotion-speed line, the "building toward executive leadership" line.

### 2.2 Pillars (`src/data/profile.ts`)

Replace the three generic pillars with three that only *this* candidate can claim:

1. **Product partnership** — "I lead engineering as a product discipline: Product and Design
   are co-authors of strategy on my teams, and it shows in the outcomes we pick and hit."
   *(This is the flagship pillar — his reputation, currently invisible on the site.)*
2. **Growing leaders** — reframe "Scaling teams" from hiring/playbooks to *developing
   ownership in others*: coaching senior engineers into leads, onboarding leaders, building
   teams that run without him in the room. This is the M2 audition pillar.
3. **Cross-org execution** — keep, it's strong and evidenced. Tighten wording.

### 2.3 Case study (`src/data/caseStudy.ts`) — keep, it's the best asset

The BPCA deprecation case study is the strongest M2 evidence on the site: strategy framing,
reversible decisions, enablement, influence without authority. Edits only:

- Add an explicit **product/design partnership beat** — the migration was done *with* IAM
  Product as a co-owner ("user-controlled migration with IAM Product" is already there;
  elevate it from a mechanism detail to a named move).
- Tighten each "move" body by ~30% — currently each is a dense paragraph; one idea per move.
- Metrics: keep 200% YoY and ~0 support-ticket growth. "138 hrs of merchant admin time saved"
  is oddly precise and small-sounding next to the others — cut it or convert to a
  customer-experience statement.

### 2.4 Experience (`src/data/jobs.ts`) — the biggest cut

**Principle:** recent roles show *leadership altitude*; older roles show *pedigree in one line
each*. An M2 reader spends 30 seconds here. Rules:

- **One idea per bullet, one metric per bullet.** Several current bullets pack 2–3
  accomplishments and 2–3 numbers each (e.g. the first Adyen bullet has a KPI, a cycle-time
  stat, and a bug-count stat). Split or cut — a bullet the reader can't repeat back is wasted.
- **Adyen — EM (keep 4–5 bullets, reordered for M2 signal):**
  1. Team building: built and led two multidisciplinary teams (12+ people) — lead with this.
  2. Leader development: coached a Senior Engineer to own the Elasticsearch/Kafka migration
     end-to-end (SLO slips 12+ → 0). This is delegation evidence — promote it up the list.
  3. Business outcomes: payments pages ownership, +70% on product-goal KPIs (drop the
     secondary cycle-time/bug numbers or move one into the same story, not the same bullet).
  4. Cross-org: privacy task force under a one-week deadline (soften "C-suite" phrasing).
  5. The BPCA deprecation bullet can shrink to one line that points at the case study.
  - **Cut:** the Gemini CLI / Sentry onboarding bullet as a standalone item (it reads as
    tooling advocacy; the Sentry story already lives, better told, in the case study).
- **Adyen — Senior SWE (compress to 2 bullets):** keep the KYC insights tool (customer
  interviews → product decisions: *product-mindedness evidence*) and one line on the platform.
  Cut "grew from IC toward leadership" (the promotion itself says this) and the generic
  mentoring bullet.
- **Stripe (keep 3 bullets):** 2-year roadmap uniting 3 teams + product + data science;
  Brazilian Anticipations end-to-end leadership; bug backlog 80 → <10 as a quality-culture
  story. Cut the "500 QPS (Java, Spark, Flink, Kafka)" tech enumeration — keep the
  money-movement responsibility, drop the stack.
- **Microsoft (keep 2 bullets):** squad lead of 5 with technical direction; the $3m capacity
  win. Cut build-time and platform-usage bullets.
- **Qualtrics (1 bullet):** the org-wide TypeScript conversion + published engineering-blog
  post (external validation — keep the link). Cut the rest.
- **Acadian, Golfballs.com, ULL internships: remove entirely.** A decade-old F# billing app
  and a VB.NET internship actively dilute an executive narrative. If pedigree completeness
  matters, collapse to a single line: *"Earlier: engineering roles in Louisiana (2014–2017)"*
  — or rely on the résumé PDF for the long tail.

### 2.5 Skills (`src/data/skills.ts`) — invert the emphasis

Eight programming languages listed on a leadership portfolio is an IC signal. Restructure:

- **Lead group — "Leadership":** expand and sharpen: org & team design, developing engineering
  leaders, product & design partnership, delivery operations, cross-functional strategy.
- **Second group — "Technical foundation" (one compact line):** Java/Spring, TypeScript,
  data platforms (Kafka, Elasticsearch), cloud/CI-CD. Enough to say "still technical,"
  not enough to say "hire me to code." Cut Clojure, F#, C++, VB-era tooling, Jenkins, Git
  (listing Git is a junior tell).

### 2.6 Education (`src/data/education.ts`) — one line

Degrees stay (CS + Math double major is a nice signal). **Cut GPA, Math Society presidency,
and the coursework list** — these are new-grad résumé artifacts and the single clearest
"distracting detail" on the page. Also remove `public/assets/documents/fsharp_asg.pdf` from
the repo if nothing links to it.

### 2.7 About (`src/components/About.tsx`) — keep, lightly trim

The human section is an asset (executive presence includes being a person). Keep Amsterdam,
run club, languages, the Dutch flourish. Trim the "compilers, functional programming" nostalgia
sentence to a clause, and cut the novel-manuscripts detail ("wrote two, still editing" reads
as unfinished projects; "I'm a lifelong reader and writer" carries the same warmth).

---

## 3. Look & feel plan

The current design (Inter, white/soft-grey, deep teal accent, 860px column) is already clean
and appropriate — evolve, don't rebuild. Focused refinements:

1. **Reduce section count above the fold of attention.** Target flow:
   `Hero → Pillars → Case study → Experience → About → Footer`, with Skills folded into a
   compact strip (inside Experience or the Footer area) and Education reduced to one line in
   the Footer/About region. Fewer full sections = more executive, less "résumé website."
2. **Typographic hierarchy over decoration.** Slightly larger hero name and tagline; section
   titles with more whitespace above; consider a serif (e.g. a classic display serif) for
   headings only, keeping Inter for body — a common, cheap "executive polish" move. No new
   colors, no animations.
3. **Experience as a scannable timeline.** With the bullet diet in §2.4, each role becomes
   title + one-line scope + 2–5 crisp bullets. Older roles (Qualtrics and earlier) can render
   in a visually lighter "earlier roles" style — smaller type, no bullet lists.
4. **Metrics restraint.** Keep the case-study metric cards (they earn their ink); avoid
   sprinkling bold numbers elsewhere so the ones that remain stand out.
5. **Photo placement.** Keep the About photo; ensure it's a professional-quality headshot
   (if the current one is casual, upgrading it is the highest ROI visual change on the site).
6. **Consistency details:** one email domain everywhere, résumé PDF regenerated to match the
   site's edited narrative (the PDF and site currently risk divergence — see §4), and the
   stray root-level `John_Resume_Mar_2026.pdf` removed in favor of the single copy under
   `public/assets/documents/`.

---

## 4. Implementation phases

- **Phase 1 — Content (highest impact, lowest effort).** All edits are in `src/data/*.ts`:
  rewrite `profile.ts` (tagline, summary, pillars), prune `jobs.ts`, restructure `skills.ts`,
  strip `education.ts`, tighten `caseStudy.ts`. No component changes required.
- **Phase 2 — Structure & polish.** Reorder sections in `App.tsx`, fold Skills/Education into
  compact presentations, typography refinements in `index.css`, "earlier roles" treatment.
- **Phase 3 — Supporting assets.** Regenerate the résumé PDF to mirror the new narrative,
  remove `fsharp_asg.pdf` and the duplicate root résumé, verify the headshot, and do a final
  read-aloud pass of every sentence asking one question: *"Does this line make me look like
  someone who runs an organization, or someone who does tasks?"* Cut anything in the second
  category.

## 5. What deliberately stays out

- Any explicit mention of CTO/CEO ambition, promotion velocity, or "readiness" language.
- Programming-language breadth, internships, GPA, coursework, club leadership from college.
- Tool-rollout bullets (Gemini CLI) and tech-stack enumerations inside leadership bullets.
- New visual identity work (rebrands, dark mode, animation) — the design is not the problem;
  focus is.
