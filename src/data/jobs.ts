import type { Job } from "./types";

export const jobs: Job[] = [
  {
    company: "Adyen",
    title: "Engineering Manager",
    location: "Amsterdam, NL",
    period: "Oct 2024 – Present",
    highlights: [
      "Took ownership of the critical payments pages and drove +70% on product-goal KPIs, while re-engineering delivery for two teams — cutting User Guidance feature cycle time from 14 days to 3 and stabilizing Key Journeys to under 10 open bugs.",
      "Rallied a cross-functional task force (2 Data, 1 Staff, 3 backend, 1 frontend) to ship stronger platform-wide privacy controls under a one-week compliance deadline — aligning the C-suite, SVPs, Legal, Commercial, Security, and Comms behind a single execution plan.",
      "Organized a cross-organizational squad to roll out Gemini CLI across Adyen, negotiating with Platform Engineering to onboard Sentry Cloud for frontend monitoring flows.",
      "Built and grew two multidisciplinary teams totaling 12+ people (6 backend, 5 frontend, 4 PMs, 1 designer) across merchant-facing Customer Area products, recruiting and onboarding a Senior Engineer and three L2 engineers.",
      "Led the end-to-end deprecation of the Balance Platform Customer Area, aligning Product, Design, and Ops to migrate every user with zero incremental operational or support burden.",
      "Guided a large-scale data-service migration to Elasticsearch and Kafka by coaching a Senior Engineer to own execution, cutting critical SLO slips from 12+ to zero.",
    ],
  },
  {
    company: "Adyen",
    title: "Senior Software Engineer",
    location: "Amsterdam, NL",
    period: "Jan 2024 – Oct 2024",
    highlights: [
      "Shaped a new KYC performance-insights tool — interviewing pilot customers and folding their feedback directly into the product.",
      "Backend Java/Spring engineer on the Balance Platform Customer Area — the platform, marketplace, and bank customer-management portal.",
      "Mentored teammates on engineering excellence: monitoring, testing, and documentation.",
      "Grew from individual contributor toward a leadership role on the team.",
    ],
  },
  {
    company: "Stripe",
    title: "Senior Software Engineer / Project Lead",
    location: "Seattle, WA",
    period: "Jun 2021 – Oct 2023",
    highlights: [
      "Designed a 2-year release roadmap, uniting 3 engineering teams, product, and data science behind a shared plan.",
      "Led Stripe's Brazilian Anticipations offering end to end — product scoping, service architecture, hands-on coding, and leading other engineers — collaborating with Legal, Product, Accounting, and 10+ cross-functional teams.",
      "Helped design new core, user-facing Stripe APIs.",
      "Led a crew of 3 engineers building a money-movement service processing ~500 QPS (Java, Spark, Flink, Kafka), ensuring cash lands in the right account, currency, and time.",
      "Drove a team quality effort that took the weekly bug backlog from ~80 to under 10.",
    ],
  },
  {
    company: "Microsoft",
    title: "Senior Software Engineer / Squad Lead",
    location: "Redmond, WA",
    period: "Apr 2018 – Jun 2021",
    highlights: [
      "Led a squad of 5 engineers building a compiler for Office test-spec validation — setting technical direction and architecture, mentoring, and staying hands-on in the code.",
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
