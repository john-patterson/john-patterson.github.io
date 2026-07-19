import { profile } from "../data";

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <p className="hero__eyebrow">{profile.role}</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__tagline">{profile.tagline}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href={profile.resumePdf}>
            Download résumé (PDF)
          </a>
          <a className="btn" href="#experience">
            View experience
          </a>
        </div>
        <div className="hero__meta">
          <span>{profile.location}</span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
