import { caseStudy } from "../data";

export function CaseStudy() {
  return (
    <section id="case-study" className="section">
      <div className="container casestudy">
        <p className="casestudy__eyebrow">{caseStudy.eyebrow}</p>
        <h2 className="section__title casestudy__title">{caseStudy.title}</h2>
        <p className="casestudy__situation">{caseStudy.situation}</p>

        <div className="casestudy__metrics">
          {caseStudy.metrics.map((metric) => (
            <div key={metric.label} className="metric">
              <span className="metric__value">{metric.value}</span>
              <span className="metric__label">{metric.label}</span>
            </div>
          ))}
        </div>

        <div className="casestudy__moves">
          {caseStudy.moves.map((move) => (
            <div key={move.label} className="move">
              <h3 className="move__label">{move.label}</h3>
              <p className="move__body">{move.body}</p>
            </div>
          ))}
        </div>

        <p className="casestudy__closing">{caseStudy.closing}</p>
      </div>
    </section>
  );
}
