import React, { useRef } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import Education from "../education/EducationComponent";
import Educations from "../../containers/education/Educations";
import Projects from "../projects/Projects";
import Reviews from "../reviews/Review";

function Home(props) {
  const projectRef = useRef();
  const reviewRef = useRef();
  const homeRef = useRef();
  const navRef = useRef();
  const handleNavigation = (link) => {
    console.log("link", link);
    if (link === "home") {
    } else if (link === "reviews") {
      reviewRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (link === "projects") {
      console.log(projectRef);
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollUp = () => {
    navRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Header
        ref={navRef}
        theme={props.theme}
        setTheme={props.setTheme}
        handleNavigation={handleNavigation}
      />
      <Greeting ref={homeRef} id="home" theme={props.theme} />
      <Skills theme={props.theme} />
      <Projects ref={projectRef} id="projects" theme={props.theme}></Projects>
      <Reviews ref={reviewRef} id="reviews" theme={props.theme}></Reviews>
      <Footer theme={props.theme} />
      <div
        style={{
          padding: 10,
          fontSize: 25,
          borderRadius: 10,
          position: "fixed",
          zIndex: 30,
          background: "rgba(0,0,0,0.3)",
          bottom: 15,
          right: 15,
          cursor: "pointer",
        }}
        onClick={handleScrollUp}
      >
        ^
      </div>
    </div>
  );
}

export default Home;
