import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import LoadingScreen from "./components/ui/LoadingScreen";
import ScrollProgress from "./components/ui/ScrollProgress";
import BackToTop from "./components/ui/BackToTop";
import GitHubStats from "./components/github/GitHubStats";

export default function Home() {
  return (
    <main className="relative bg-slate-950 text-white">
      <LoadingScreen />
      <ScrollProgress />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHubStats />
      <Experience />
      <Education />
      <Contact />
      <Footer />

      <BackToTop />
    </main>
  );
}