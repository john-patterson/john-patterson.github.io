export interface Job {
  company: string;
  location: string;
  title: string;
  from: string;
  to: string;
  description: string[];
}

export interface Project {
  name: string;
  openSource: boolean;
  description: string;
  productionLink?: string;
  sourceLink?: string;
  technologies: string[];
}

export interface Education {
  degrees: string[];
  university: string;
  location: string;
  from: string;
  to: string;
  gpa: number;
  talkingPoints: string[];
}

export enum SkillProficiency {
  VERY,
  NOT_VERY,
}

export enum SkillCategory {
  LANGUAGE,
  FRAMEWORK,
  TOOL
}

export interface Skill {
  name: string;
  proficiency: SkillProficiency;
  category: SkillCategory;
}
