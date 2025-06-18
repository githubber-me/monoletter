
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import Hackathons from "@/components/Hackathons";
import Awards from "@/components/Awards";
import Extracurriculars from "@/components/Extracurriculars";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Hackathons />
      <Awards />
      <Extracurriculars />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
