import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
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
        <About />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Footer />
    </>
  );
}
