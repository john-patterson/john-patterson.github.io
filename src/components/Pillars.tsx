import { pillars } from "../data";

export function Pillars() {
  return (
    <section className="pillars-section" aria-label="What I do">
      <div className="container pillars">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="pillar">
            <h2 className="pillar__title">{pillar.title}</h2>
            <p className="pillar__body">{pillar.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
