import { jobs } from "../data";

export function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Experience</h2>
        <ol className="timeline">
          {jobs.map((job, i) => (
            <li key={`${job.company}-${i}`} className="timeline__item">
              <div className="timeline__head">
                <h3 className="timeline__title">
                  {job.title} <span className="timeline__at">·</span>{" "}
                  {job.link ? (
                    <a href={job.link} target="_blank" rel="noreferrer">
                      {job.company}
                    </a>
                  ) : (
                    <span className="timeline__company">{job.company}</span>
                  )}
                </h3>
                <div className="timeline__meta">
                  <span>{job.location}</span>
                  {job.period && <span className="timeline__period">{job.period}</span>}
                </div>
              </div>
              <ul className="timeline__points">
                {job.highlights.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
