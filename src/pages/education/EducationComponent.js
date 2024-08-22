import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
// import Certifications from "../../containers/certifications/Certifications";

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div" style={{ width: "80vw" }}>
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            {/* <div className="heading-text-div">
            </div> */}
          </div>
        </Fade>
        <Educations theme={props.theme} />
        {/* <Certifications theme={props.theme} /> */}
      </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Education;
