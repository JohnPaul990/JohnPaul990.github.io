import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";
import { Card } from "react-bootstrap";
import { Fade } from "react-reveal";

function ExperienceAccordion(props) {
  const theme = props.theme;

  return (
    <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
      <div
        style={{
          margin: "5rem",
          padding: "5rem",
        }}
      >
        {props.sections.map((section) => {
          return (
            <Card>
              <div
                style={{ display: "grid", gridTemplateColumns: "auto auto" }}
              >
                {section["experiences"].map((experience, index) => {
                  return !(index % 2) ? (
                    <>
                      <div
                        style={{ borderRight: "3px solid grey" }}
                        className="index-r"
                      >
                        <div style={{ paddingRight: 30 }}>
                          <Fade
                            right={index % 2}
                            left={!(index % 2)}
                            duration={1000}
                            distance="200px"
                          >
                            <ExperienceCard
                              experience={experience}
                              theme={theme}
                              direction={"ltr"}
                            />
                          </Fade>
                        </div>
                      </div>
                      <div></div>
                    </>
                  ) : (
                    <>
                      <div div style={{ borderRight: "3px solid grey" }}></div>
                      <div style={{ paddingLeft: 30 }} className="index-l">
                        <Fade
                          right={index % 2}
                          left={!(index % 2)}
                          duration={1000}
                          distance="200px"
                        >
                          <ExperienceCard
                            experience={experience}
                            theme={theme}
                            direction={"rtl"}
                          />
                        </Fade>
                      </div>
                    </>
                  );
                })}
              </div>
            </Card>
          );
        })}
      </div>
    </ThemeProvider>
  );
}

export default ExperienceAccordion;
