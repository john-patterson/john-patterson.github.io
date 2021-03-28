import { Project } from "./types";

export const projects: Project[] = [
  {
    name: "The Bartender’s Manual",
    openSource: false,
    description: "Making building your own home cocktail bar easy and affordable. Made with my friends with plans to monetize through affiliate marketing.",
    productionLink: "http://bartendersmanual.com/",
    technologies: [
      "TypeScript",
      "React",
      "GraphQL",
    ]
  },
  {
    name: "Plaid Jobs",
    openSource: true,
    description: "Plaid as an API-first company, requires that you apply to their jobs through a POST to an API. I made a site to make applying easier for myself.",
    productionLink: "http://www.johnppatterson.com/plaid-job-client/",
    sourceLink: "https://github.com/john-patterson/plaid-job-client",
    technologies: [
      "TypeScript",
      "React",
    ]
  },
  {
    name: "KLisp IDE",
    openSource: true,
    description: "Toy Lisp implementation, language server, and IDE built in Kotlin. This was a solo project meant to teach myself Kotlin. Includes architecture and user documentation.",
    sourceLink: "https://github.com/john-patterson/KLispIDE",
    technologies: [
    ]
  },
];