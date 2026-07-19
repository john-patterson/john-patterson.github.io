import { profile } from "../data";

export function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer__inner">
        <h2 className="section__title">Get in touch</h2>
        <p className="footer__lead">
          The best way to reach me is email. I'm always happy to talk engineering, teams, or
          Amsterdam.
        </p>
        <div className="footer__links">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <p className="footer__fine">
          © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript, and Vite.
        </p>
      </div>
    </footer>
  );
}
