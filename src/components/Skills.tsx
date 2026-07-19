import { skills } from "../data";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section__title">Skills</h2>
        <div className="skills">
          {skills.map((group) => (
            <div key={group.label} className="skills__group">
              <h3 className="skills__label">{group.label}</h3>
              <ul className="skills__tags">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
