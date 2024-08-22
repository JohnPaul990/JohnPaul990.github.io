import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

export default function ProjectCard({ repo: project, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "5px",
    height: "100%",
    position: "relative",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: "0px 2px 9px 5px #930650",
    },
    display: "flex",
    flexDirection: "column",
  });
  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={project.name}
          onClick={() => openRepoinNewTab(project.url)}
          style={{ backgroundColor: theme.projectCard }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {project.name}
            </p>
          </div>
          <div style={{ padding: "1rem" }}>
            <img
              width={"100%"}
              {...style({
                borderRadius: "10px",
                ":hover": {
                  transition: "all 0.2s ease-in-out",
                  padding: "10px",
                  outline: "3px solid black",
                },
              })}
              height={"200px"}
              src={require(`../../assests/images/projects/${project.image}`)}
              alt=""
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              flexGrow: 1,
            }}
          >
            <p className="repo-description" style={{ color: theme.text }}>
              {project.description}
            </p>
            <div className="repo-details">
              <ProjectLanguages logos={project.languages} />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
