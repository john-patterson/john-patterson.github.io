import React, { FunctionComponent, ReactChildren, ReactPropTypes } from 'react';
import * as data from '../data';



// Skills
// Very skilled	C#, MSSQL, Python, TypeScript, JavaScript
// Proficient in	Clojure, F#, C++, Visual Basic
// Frameworks/etc	Git, NUnit, SimpleInjector, 
export function ResumePage(): JSX.Element {
  return (
    <>
      <p><em><a href="/assets/documents/john_patterson_resume.pdf">Download a PDF copy by clicking here.</a></em></p>
      <ResumeSection title="Test section">
        <p>test</p>
      </ResumeSection>
    </>
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

function EducationEntry() {

}