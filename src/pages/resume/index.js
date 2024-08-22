import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";

function ResumePage(props) {
  const theme = props.theme;
  return (
    <div style={{width: '100vw'}}>
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-experience">
        <Fade bottom duration={2000} distance="40px">
          <iframe src="/resume.pdf" style={{width: '100%', height: 800, border: "none"}}/>
        </Fade>
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default ResumePage;
