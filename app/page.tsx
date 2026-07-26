"use client";

import { useEffect, useState } from "react";

// Components
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Certifications from "./components/certifications/Certifications";
import GitHubStats from "./components/github/GitHubStats";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import SupportSection from "./components/SupportSection"; // ✅ Added

// UI
import ScrollProgress from "./components/ui/ScrollProgress";
import BackToTop from "./components/ui/BackToTop";
import LoadingScreen from "./components/loading/LoadingScreen";

// 3D Universe
import Universe from "./components/universe/Universe";
import AIChat from "./components/AIChat";


export default function Home() {

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);


    return () => clearTimeout(timer);

  }, []);



  if (loading) {
    return <LoadingScreen />;
  }



  return (

    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">


      {/* 🌌 3D Universe Background */}
      <div className="fixed inset-0 z-0">
        <Universe />
      </div>



      {/* Website Content */}
      <div className="relative z-10">


        <ScrollProgress />


        <Navbar />


        <Hero />


        <About />


        <AIChat />


        <Skills />


        <Projects />


        <Experience />


        <Education />


        <Certifications />


        <GitHubStats />


        {/* ⭐ Support My Journey Payment Section */}
        <SupportSection />


        <Contact />


        <Footer />


        <BackToTop />


      </div>


    </main>

  );
}