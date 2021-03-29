import { Job } from "./types";

export const jobs: Job[] = [
  {
    company: "Microsoft",
    location: "Seattle, WA",
    title: "Senior Software Engineer / Team Lead",
    from: "Apr 2018",
    to: "Present",
    description: [
      "Led team of 5 engineers. Held regular 1:1’s, did project management, architected features, developed team agile practices, provided technical guidance through code reviews and pair programming, and liaised with partner teams and customers. Emphasized TDD, documentation, and peer demos.",
      "Refactored C# build tool to leverage an incremental build system, shaving 44% off build times.",
      "Improved caching, tripling system capacity ($3m+ savings), and eliminating most common errors.",
      "Developed an automation platform in C# which 1,700 engineers used to run 10m jobs per day.",
    ]
  },
  {
    company: "Qualtrics",
    location: "Seattle, WA",
    title: "Software Engineer",
    from: "Jun 2017",
    to: "Apr 2018",
    description: [
      "Converted an organization of 30+ engineers to use TypeScript. (My article on this process.)",
      "Automated code coverage reporting with TypeScript for 10 teams, saving 120 dev-days/yr.",
      "Used JavaScript, TypeScript, and Python to write an Angular E2E framework serving 800 engineers.",
      "Implemented CI/CD pipelines with Maven, Docker, Jenkins, and Rundeck.",
    ]
  },
  {
    company: "Acadian Ambulance",
    location: "Lafayette, LA",
    title: "Software Engineer",
    from: "Jan 2016",
    to: "Jun 2017",
    description: [
      "Created Clojure website with Ring & Compojure to debug and explore large-scale database diffs.",
      "Automated provisioning of new versions of the website also in Clojure.",
      "Introduced F# into a C# MVC project and mentored 3 FTEs in its adoption.",
      "Completed migration from 20 year old VB5 codebase to new C# codebase (16k inserted/ 25k deleted LOC).",
      "Established a centralized logging system using Elasticsearch and Docker Compose.",
      "Rewrote interview process and on-boarded two part-time engineers.",
    ]
  },
  {
    company: "Golfballs.com",
    location: "Lafayette, LA",
    title: "Software Engineer Intern",
    from: "May 2014",
    to: "Jan 2016",
    description: [
      "Wrote multi-threaded SMTP relay to log e-mails for an in-house CRM system.",
      "Created GDI+ image customization library later licensed to Kingston.",
      "Automated AWS deployment and implemented smoke screen testing decreasing number production bugs.",
      "Full-stack development for VB.NET e-commerce site.",
      "Administered A/B testing to study new feature efficacy.",
    ]
  },
  {
    company: "UL Lafayette Computer Science Department",
    location: "Lafayette, LA",
    title: "Software Engineer Intern",
    from: "May 2014",
    to: "Jul 2014",
    description: [
      "Created drivers for Arduino to control pair of stepper motors and various sensors and to communicate with an on-board Raspberry Pi",
      "Wrote Python server to receive commands from a remote computer and dispatch them to the Arduino",
      "Created a Python client to relay an on-board video to the user and allow for easy control of robot",
      "Developed library for controlling the robot through RC allowing for automatic calibration of an arbitrary remote to the robot",
    ]
  },
];