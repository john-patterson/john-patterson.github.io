import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import * as data from '../data';
import { Education, Job, Project, Skill, SkillCategory, SkillProficiency  } from '../data/types';
import './ResumePage.css';

export function ResumePage(): JSX.Element {
  return (
    <Container fluid>
      <Row>
        <Col>
          <em><a href="/assets/documents/john_patterson_resume.pdf">Download a PDF copy by clicking here.</a></em>
        </Col>
      </Row>
      <Row>
        <WorkHistorySection jobs={data.jobs} />
      </Row>
      <Row>
        <EducationHistorySection education={data.education[0]} />
      </Row>
      <Row>
        <ProjectsSection projects={data.projects} />
      </Row>
      <Row>
        <SkillsSection skills={data.skills} />
      </Row>
    </Container>
  );
}

function WorkHistorySection(props: { jobs: Job[] }): JSX.Element {
  const jobs = props.jobs;
    return (
      <>
      <h2>Work History</h2>
      {
        jobs.map((job, idx) => (
          <Container fluid key={idx}>
            <Row>
              <Col>{job.company}</Col>
              <Col className="text-right">{job.from} to {job.to}</Col>
            </Row>
            <Row>
              <Col>{job.title}</Col>
              <Col className="text-right">{job.location}</Col>
            </Row>
            <Row>
              <ul>
                {
                  job.description.map((line, idx) => (
                    <li key={`ul-${idx}`}>{line}</li>
                  ))
                }
              </ul>
            </Row>
          </Container>
        ))
      }
      </>
    );
}

function EducationHistorySection(props: { education: Education }): JSX.Element {
  const education = props.education;
  return (
    <>
    <h2>Education</h2>
    <Container fluid>
      <Row>
        <Col>{education.university}</Col>
        <Col className="text-right">{education.from} to {education.to}</Col>
      </Row>
      <Row>
        <Col>{education.degrees[0]}</Col>
        <Col className="text-right">{education.location}</Col>
      </Row>
      <Row>
        <Col>{education.degrees[1]}</Col>
      </Row>
      <Row>
        <ul>
          {
            education.talkingPoints.map((point, idx) => (
              <li key={`ul-${idx}`}>{point}</li>
            ))
          }
        </ul>
      </Row>
    </Container>
    </>
  );
}

function ProjectsSection(props: { projects: Project[] }): JSX.Element {
  const projects = props.projects;
  return (
    <>
    <h2>Projects</h2>
    {
      projects.map((project, idx) => (
        <Container fluid key={idx}>
          <Row>
            <Col>{project.name}</Col>
            <Col className="text-right">
              { project.sourceLink && (<a href={project.sourceLink}>Source</a>) }
              { project.productionLink && (<a href={project.productionLink}>Live Site</a>) }
            </Col>
          </Row>
          <Row>
            { project.technologies.map((tech, idx) => <Col key={`tech-${idx}`}>{tech}</Col>)}
          </Row>
          <Row>
            <p>{ project.description }</p>
          </Row>
        </Container>
      ))
    }
    </>
  );
}

type SkillsByCategory = Record<string, Record<string, Skill[]>>;
function GroupSkillsByCategory(skills: Skill[]): SkillsByCategory {
  const categoryNames = {
    [SkillCategory.FRAMEWORK]: "Framework",
    [SkillCategory.LANGUAGE]: "Language",
    [SkillCategory.TOOL]: "Tool"
  };
  const skillProficiencies = {
    [SkillProficiency.VERY]: "Very",
    [SkillProficiency.NOT_VERY]: "Not Very"
  };
  let byCategory: SkillsByCategory = {};
  for (const skill of skills) {
    const categoryName = categoryNames[skill.category];
    const skillLevel = skillProficiencies[skill.proficiency];
    if (!(categoryName in byCategory)) {
      byCategory[categoryName] = {};
    }
    if (!(skillLevel in byCategory[categoryName])) {
      byCategory[categoryName][skillLevel] = [];
    }
    byCategory[categoryName][skillLevel].push(skill);
  }
  return byCategory;
}

function SkillsSection(props: { skills: Skill[] }): JSX.Element {
  const categories = GroupSkillsByCategory(props.skills);

  return (
    <>
    <h2>Skills</h2>
    {
      Object.keys(categories).map((categoryName, idx) => (
        <Container fluid key={idx}>
          <Row><Col>{categoryName}s</Col></Row>
          { Object.keys(categories[categoryName]).sort().reverse().map((adeptness, idx) => (
            <Row key={`adeptness-${idx}`}>
              <Col>{adeptness}</Col>
              { categories[categoryName][adeptness].map((skill, idx) => (
                <Col key={`skill-${idx}`}>{skill.name}</Col>
              ))}
            </Row>
          ))}
        </Container>
      ))
    }
    </>
  );
}