import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    label: "Leadership",
    items: [
      "Engineering management",
      "Team building & hiring",
      "Delivery & agile practices",
      "Cross-functional partnership",
      "Mentoring & coaching",
    ],
  },
  {
    label: "Languages",
    items: ["Java", "C#", "TypeScript", "JavaScript", "Python", "Clojure", "F#", "C++"],
  },
  {
    label: "Platforms & data",
    items: ["Spring", "Kafka", "Flink", "Spark", "Elasticsearch", "PostgreSQL", "MSSQL"],
  },
  {
    label: "Tooling",
    items: ["Docker", "CI/CD", "Jenkins", "Sentry", "Git"],
  },
];
