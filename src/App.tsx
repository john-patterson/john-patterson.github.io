import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Pillars } from "./components/Pillars";
import { About } from "./components/About";
import { CaseStudy } from "./components/CaseStudy";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Pillars />
        <About />
        <CaseStudy />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Footer />
    </>
  );
}
