import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Pillars } from "./components/Pillars";
import { CaseStudy } from "./components/CaseStudy";
import { Experience } from "./components/Experience";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Pillars />
        <CaseStudy />
        <Experience />
        <About />
      </main>
      <Footer />
    </>
  );
}
