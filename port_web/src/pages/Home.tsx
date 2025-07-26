
import { useState } from "react";
import VantaBackground from "@/components/VantaBackground";
import AnimatedNavbar from "@/components/AnimatedNavbar";
import HeroWithName from "@/components/HeroWithName";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Loader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-black">
      <VantaBackground />
      <div className="relative z-10">
        <AnimatedNavbar />
        <div id="home">
          <HeroWithName />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="achievements">
          <Achievements />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
