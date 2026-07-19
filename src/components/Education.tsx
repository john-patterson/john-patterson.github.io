import { education } from "../data";

export function Education() {
  return (
    <section id="education" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Education</h2>
        {education.map((entry) => (
          <div key={entry.university} className="education">
            <div className="education__head">
              <h3 className="education__school">{entry.university}</h3>
              <div className="timeline__meta">
                <span>{entry.location}</span>
                {entry.gpa && <span className="timeline__period">GPA {entry.gpa}</span>}
              </div>
            </div>
            <p className="education__degrees">{entry.degrees.join(" · ")}</p>
            <ul className="timeline__points">
              {entry.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
