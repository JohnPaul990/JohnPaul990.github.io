import React from "react";
import "./ExperienceCard.css";

function ExperienceCard(props) {
  const experience = props.experience;
  const theme = props.theme;
  const direction = props.direction;
  return (
    <div
      style={{
        border: `1px solid ${experience["color"]}`,
        opacity: "0.9",
        boxShadow: "1px 1px 5px 5px grey",
        padding: "3rem",
        marginTop: "1rem",
      }}
      className="experience-card hover-shadow"
    >
      {direction === "rtl" && experience["logo_path"] && (
        <div className="experience-card-logo-div">
          <img
            className="experience-card-logo"
            src={require(`../../assests/images/${experience["logo_path"]}`)}
            alt=""
          />
        </div>
      )}
      <div className="experience-card-body-div">
        <div className="experience-card-header-div">
          <div className="experience-card-heading-left">
            <h3 className="experience-card-title" style={{ color: theme.text }}>
              {experience["title"]}
            </h3>
            <p
              className="experience-card-company"
              style={{ color: theme.secondaryText }}
            >
              <a
                href={experience["company_url"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience["company"]}
              </a>
            </p>
          </div>
          <div className="experience-card-heading-right">
            <p
              className="experience-card-duration"
              style={{ color: theme.secondaryText }}
            >
              {experience["duration"]}
            </p>
            <p
              className="experience-card-location"
              style={{ color: theme.secondaryText }}
            >
              {experience["location"]}
            </p>
          </div>
        </div>
        <p
          className="experience-card-description"
          style={{ color: theme.text }}
        >
          {experience["description"].split("\n").map((e, key) => (
            <p key={key}>{e}</p>
          ))}
        </p>
      </div>
      {direction === "ltr" && experience["logo_path"] && (
        <div className="experience-card-logo-div">
          <img
            className="experience-card-logo"
            src={require(`../../assests/images/${experience["logo_path"]}`)}
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default ExperienceCard;
