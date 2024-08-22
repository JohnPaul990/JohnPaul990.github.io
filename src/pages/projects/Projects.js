import React, { forwardRef } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Fade } from "react-reveal";
import {
  blockchain_projects,
  socialMediaLinks,
  web_projects,
  mobile_projects,
} from "../../portfolio.js";
import "./Projects.css";
import { style } from "glamor";
import { useState } from "react";

const Projects = forwardRef((props, ref) => {
  const theme = props.theme;
  console.log(ref, "props");

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  const [tab, setTab] = useState("wordpress");

  const onclickTab = (tabName) => {
    setTab(tabName);
  };

  const tabstyle = (tabName) => {
    const _style = {
      textAlign: "left",
      padding: "1rem",
      borderRadius: "5px",
      cursor: "pointer",
    };

    return tabName === tab ? { ..._style, backgroundColor: "#FC1056" } : _style;
  };
  return (
    <div ref={ref} className="projects-main" id="projects">
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <h1>My Products</h1>
        </Fade>
      </div>
      <div style={{ display: "flex", marginLeft: "50px" }}>
        <h3
          style={tabstyle("wordpress")}
          onClick={() => {
            onclickTab("wordpress");
          }}
        >
          Websites
        </h3>
        
        <h3
          style={tabstyle("blockchain")}
          onClick={() => {
            onclickTab("blockchain");
          }}
        >
          Blockchain Dapps
        </h3>
      </div>
      <div className="repo-cards-div-main">
        {tab === "blockchain" &&
          blockchain_projects.data.map((repo) => {
            return <ProjectCard repo={repo} theme={theme} />;
          })}
        {tab === "wordpress" &&
          web_projects.data.map((repo) => {
            return <ProjectCard repo={repo} theme={theme} />;
          })}
      
      </div>

      <br />
      <br />
      <br />
      <a
        {...styles}
        style={{ marginTop: "40px" }}
        className="general-btn"
        href={socialMediaLinks.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        More Projects (Github)
      </a>
      <br />
      <br />
      <br />
    </div>
  );
});

export default Projects;
