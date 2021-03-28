import { Skill, SkillCategory, SkillProficiency } from "./types";

export const skills: Skill[] = [
  { name: "C#", category: SkillCategory.LANGUAGE, proficiency: SkillProficiency.VERY },
  { name: "F#", category: SkillCategory.LANGUAGE, proficiency: SkillProficiency.VERY },
  { name: "Python", category: SkillCategory.LANGUAGE, proficiency: SkillProficiency.VERY },
  { name: "TypeScript", category: SkillCategory.LANGUAGE, proficiency: SkillProficiency.VERY },
  { name: "JavaScript", category: SkillCategory.LANGUAGE, proficiency: SkillProficiency.VERY },
  { name: "MsSql", category: SkillCategory.LANGUAGE, proficiency: SkillProficiency.NOT_VERY },
  { name: "Clojure", category: SkillCategory.LANGUAGE, proficiency: SkillProficiency.NOT_VERY },
  { name: "Kotlin", category: SkillCategory.LANGUAGE, proficiency: SkillProficiency.NOT_VERY },
  { name: "Visual Basic", category: SkillCategory.LANGUAGE, proficiency: SkillProficiency.NOT_VERY },

  { name: "Git", category: SkillCategory.TOOL, proficiency: SkillProficiency.VERY },
  { name: "NUnit", category: SkillCategory.FRAMEWORK, proficiency: SkillProficiency.VERY },
  { name: "React", category: SkillCategory.FRAMEWORK, proficiency: SkillProficiency.VERY },
  { name: "SimpleInjector", category: SkillCategory.FRAMEWORK, proficiency: SkillProficiency.VERY },
  { name: "D3", category: SkillCategory.FRAMEWORK, proficiency: SkillProficiency.NOT_VERY },
  { name: "GraphQL", category: SkillCategory.FRAMEWORK, proficiency: SkillProficiency.NOT_VERY },
  { name: "Dapper", category: SkillCategory.FRAMEWORK, proficiency: SkillProficiency.NOT_VERY },
  { name: "Ring", category: SkillCategory.FRAMEWORK, proficiency: SkillProficiency.NOT_VERY },
  { name: "Compojure", category: SkillCategory.FRAMEWORK, proficiency: SkillProficiency.NOT_VERY },
  { name: "Flask", category: SkillCategory.FRAMEWORK, proficiency: SkillProficiency.NOT_VERY },
  { name: "SQLAlchemy", category: SkillCategory.FRAMEWORK, proficiency: SkillProficiency.NOT_VERY },
];