import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Achievements from "./components/Achievements";
import Recommendations from "./components/Recommendations";
import Education from "./components/Education";
import Writing from "./components/Writing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Achievements />
        <Recommendations />
        <Education />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
