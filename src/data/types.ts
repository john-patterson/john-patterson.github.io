export interface Job {
  company: string;
  title: string;
  location: string;
  /** Display date range, e.g. "Jun 2017 – Apr 2018" or "Present". Omit if unknown. */
  period?: string;
  /** Optional external link related to the role (e.g. a writeup). */
  link?: string;
  /** Render compactly as a single muted line (used for earlier-career roles). */
  condensed?: boolean;
  highlights: string[];
}

export interface EducationEntry {
  university: string;
  location: string;
  degrees: string[];
  gpa?: string;
  points: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Pillar {
  title: string;
  body: string;
}

export interface CaseMove {
  label: string;
  body: string;
}

export interface CaseMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  eyebrow: string;
  title: string;
  situation: string;
  moves: CaseMove[];
  metrics: CaseMetric[];
  closing: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  tagline: string;
  summary: string;
  email: string;
  github: string;
  linkedin: string;
  resumePdf: string;
}
