import type { Job } from "./types";

// Rebuilt from John_Resume_Mar_2026.pdf. Two kinds of items need John's eyes before publishing:
//   * `period` is filled only where a date range was known; recent roles are left blank.
//   * bullets tagged `// verify` were partially truncated during PDF text extraction.
export const jobs: Job[] = [
  {
    company: "Adyen",
    title: "Engineering Manager",
    location: "Amsterdam, NL",
    period: "Present",
    highlights: [
      "Designed and drove the end-to-end deprecation of the Balance Platform Customer Area, partnering with Product, Design, and Ops to migrate every user with zero incremental operational or support burden.",
      "Led a confidential, high-stakes task force (2 Data, 1 Staff, 3 backend, 1 frontend) to implement stronger platform-wide privacy controls under a one-week compliance deadline — owning technical execution while liaising with the C-suite, SVPs, Legal, Commercial, Security, and Comms.",
      "Managed two multidisciplinary teams totaling 12+ people (6 backend, 5 frontend, 4 PMs, 1 designer) across merchant-facing Customer Area products. Recruited and onboarded a Senior Engineer and three L2 engineers while proactively managing underperformance and long-term sick-leave cases.",
      "Orchestrated a large-scale data-service migration from Postgres to Elasticsearch and Kafka, coaching and empowering a Senior Engineer to own execution and cutting critical SLO slips from 12+ to zero.",
      "Re-engineered delivery practices for two teams: drove User Guidance feature cycle time from 14 days to 3, stabilized Key Journeys to under 10 open bugs, and took ownership of the critical payments pages while maintaining +70% on product-goal KPIs.",
      "Organized a cross-organizational squad to roll out Gemini CLI across Adyen, and negotiated with Platform Engineering to onboard Sentry Cloud for frontend monitoring flows.",
    ],
  },
  {
    company: "Adyen",
    title: "Senior Software Engineer",
    location: "Amsterdam, NL",
    highlights: [
      "Backend Java/Spring engineer on the Balance Platform Customer Area — the platform, marketplace, and bank customer-management portal.",
      "Interviewed pilot customers and incorporated their feedback into a new KYC performance-insights tool.",
      "Mentored teammates on engineering excellence: monitoring, testing, and documentation.",
      "Grew from individual contributor toward a leadership role on the team.", // verify
    ],
  },
  {
    company: "Stripe",
    title: "Senior Software Engineer / Project Lead",
    location: "Seattle, WA",
    highlights: [
      "Spent a year on a money-movement team ensuring cash lands in the right account, in the right currency, at the right time — primarily with Java, Spark, Flink, and Kafka.",
      "Led a crew of 3 engineers building a service processing ~500 QPS.",
      "Designed a 2-year release roadmap, coordinating 3 engineering teams, product, and data science.",
      "Developed Stripe's Brazilian Anticipations offering, collaborating with Legal, Product, Accounting, and 10+ other cross-functional teams — from product scoping and service architecture to individual coding and leading other engineers.",
      "Drove a team quality effort that took the weekly bug backlog from ~80 to under 10.", // verify
      "Worked on the design of new core, user-facing Stripe APIs.",
    ],
  },
  {
    company: "Microsoft",
    title: "Senior Software Engineer / Squad Lead",
    location: "Redmond, WA",
    highlights: [
      "Led a squad of 5 engineers writing a compiler for Office test-spec validation — mentoring, project management, and architecture, while keeping up personal software contributions.", // verify
      "Redesigned a C# build tool, shaving 44% off build times.",
      "Improved caching, tripling system capacity ($3m+ savings) and eliminating the most common errors.",
      "Worked on a C# automation platform used by 1,700 engineers to run 10m jobs daily.",
    ],
  },
  {
    company: "Qualtrics",
    title: "Software Engineer",
    location: "Seattle, WA",
    period: "Jun 2017 – Apr 2018",
    link: "https://www.qualtrics.com/eng/typescript-refactor",
    highlights: [
      "Converted an organization of 30+ engineers to TypeScript (and wrote about the process on the Qualtrics engineering blog).",
      "Automated code-coverage reporting with TypeScript for 10 teams, saving 120 dev-days/yr.",
      "Used JavaScript, TypeScript, and Python to write an Angular E2E framework serving 800 engineers.",
      "Implemented CI/CD pipelines with Maven, Docker, Jenkins, and Rundeck.",
    ],
  },
  {
    company: "Acadian Ambulance",
    title: "Software Engineer",
    location: "Lafayette, LA",
    period: "Jan 2016 – Jun 2017",
    highlights: [
      "Used Clojure to build a team debugging portal and automate the deployment of new instances.",
      "Taught my team F# and used it to create a 125-form medical billing application.",
    ],
  },
  {
    company: "Golfballs.com",
    title: "Software Engineer Intern",
    location: "Lafayette, LA",
    period: "May 2014 – Jan 2016",
    highlights: [
      "Used VB.NET and MS-SQL on a core business ASP.NET website backed by AWS.",
      "Built a new product end-to-end, with work across the website, warehouse, and production.",
    ],
  },
  {
    company: "University of Louisiana at Lafayette",
    title: "Software Engineer Intern",
    location: "Lafayette, LA",
    period: "May 2014 – Jul 2014",
    highlights: [
      "Developed software and coursework for teaching Python to students using robotics.",
    ],
  },
];
