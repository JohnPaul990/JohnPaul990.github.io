import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";

function SkillSection(props) {
  const theme = props.theme;
  return (
    <div className="repo-cards-div-main">
      {skills.data.map((skill, index) => {
        return (
          <div key={skill.title} className="skills-main-div">
            <div
              className="skills-text-div"
              style={{ paddingTop: 0, marginTop: 0 }}
            >
              <Fade bottom duration={1000}>
                <h4 style={{ color: theme.text, textAlign: "center" }}>
                  {skill.title}
                </h4>
              </Fade>
              <Fade bottom duration={1500}>
                <SoftwareSkill logos={skill.softwareSkills} />
              </Fade>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SkillSection;
