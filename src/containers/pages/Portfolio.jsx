import About from "components/portfolio/about/About";
import Contact from "components/portfolio/contact/Contact";
import Home from "components/portfolio/home/Home";
import Navbar from "components/portfolio/navbar/Navbar";
import Projects from "components/portfolio/projects/Projects";
import Skills from "components/portfolio/skills/Skills";
import "assets/styles/port.css";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";

function Portfolio() {
  return (
    <FullWidthLayout>
      <div className="body-port">
        <div className="dark:bg-transparent bg-white">
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          {/* <Contact/> */}
        </div>
      </div>
    </FullWidthLayout>
  );
}

export default Portfolio;
