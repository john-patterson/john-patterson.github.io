import { profile } from "../data";

const links = [
  { href: "#case-study", label: "Case study" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function NavBar() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__brand" href="#top">
          {profile.name}
        </a>
        <nav className="nav__links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
