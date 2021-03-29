import React from 'react';
import * as data from '../data';
import './ResumePage.css';

export function ResumePage(): JSX.Element {
  return (
    <>
      <p><em><a href="/assets/documents/john_patterson_resume.pdf">Download a PDF copy by clicking here.</a></em></p>
      <ResumeSection title="Work History">
        {
          data.jobs.map((entry, index) => (
            <WorkEntry job={entry} key={index} />
          ))
        }
      </ResumeSection>
      <ResumeSection title="Education History">
        {
          data.education.map((entry, index) => (
            <EducationEntry education={entry} key={index} />
          ))
        }
      </ResumeSection>
      <ResumeSection title="Projects">
        {
          data.projects.map((entry, index) => (
            <ProjectEntry project={entry} key={index} />
          ))
        }
      </ResumeSection>
      <ResumeSection title="Skills">
        <SkillsTable skills={data.skills} />
      </ResumeSection>
    </>
  );
}

function SkillsTable(props: { skills: data.Skill[]}): JSX.Element {
  const { skills } = props;
  return (
    <>
    </>
  );
}

function ProjectEntry(props: { project: data.Project }): JSX.Element {
  const { project } = props;
  return (
    <div>
      <div className="entry-row">{project.name}</div>
    </div>
  );
}

function WorkEntry(props: { job: data.Job }): JSX.Element {
  const { job } = props;
  return (
    <div>
      <div className="entry-row job-header">
        <span>{job.company}</span>
        <span>{job.from} – {job.to}</span>
      </div>
      <div className="entry-row job-title">
        <span>{job.title}</span>
        <span>{job.location}</span>
      </div>
      <div className="entry-row">
        <ul>
          {job.description.map((descr, index) => (
            <li key={index}>
              {descr}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


function EducationEntry(props: { education: data.Education }): JSX.Element {
  const { education } = props;
  return (
    <div>
      <div className="entry-row education-header">
        <span>{education.university}</span>
        <span>{education.from} – {education.to}</span>
      </div>
      <div className="entry-row job-title">
        <span>
          <div>{education.degrees[0]}</div>
          <div>{education.degrees[1]}</div>
        </span>
        <span>{education.location}</span>
      </div>
      <div className="entry-row">
        <ul>
          {education.talkingPoints.map((point, index) => (
            <li key={index}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


interface ResumeSectionProps {
  title: string;
  children: React.ReactNode[] | React.ReactNode;
}

function ResumeSection(props: ResumeSectionProps): JSX.Element {
  return (
    <div className="resume-section">
      <h1>{ props.title }</h1>
      {
        React.Children.map(props.children, (child, index) => {
          return (
            <div className="resume-section-item" key={index}>{child}</div>
          );
        })
      }
    </div>
  );
}