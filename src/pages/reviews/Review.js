import React, { forwardRef } from "react";
import "./Review.css";
import { reviews } from "../../portfolio";
const Reviews = forwardRef(({ theme }, ref) => {
  return (
    <div style={{ marginTop: "3rem" }} id="myreviews" ref={ref}>
      <h1 style={{ textAlign: "center" }}> My Reviews</h1>
      <div className="repo-cards-div-main">
        <div>
          {reviews.map((review, index) => {
            return (
              index % 3 === 0 && (
                <div key={index} style={{ marginBottom: "2rem" }}>
                  <div
                    className={`reviewbox ${theme.name}`}
                    style={{ backgroundColor: theme.projectCard }}
                  >
                    <div>
                      ⭐️⭐️⭐️⭐️⭐️
                      <br />
                      {review.feedback}
                    </div>
                  </div>
                  <div
                    className="flex"
                    style={{
                      marginBottom: "15px",
                      alignItems: "center",
                      gap: ".2rem",
                    }}
                  >
                    <img
                      className="avatar"
                      src={require(`../../assests/images/avatar/${review.image}`)}
                    />
                    <p>
                      <strong>{review.name} </strong> <br />
                      {review.location}
                    </p>
                  </div>
                </div>
              )
            );
          })}
        </div>
        <div>
          {reviews.map((review, index) => {
            return (
              index % 3 === 1 && (
                <div key={index} style={{ marginBottom: "2rem" }}>
                  <div
                    className={`reviewbox ${theme.name}`}
                    style={{ backgroundColor: theme.projectCard }}
                  >
                    <div>
                      ⭐️⭐️⭐️⭐️⭐️
                      <br />
                      {review.feedback}
                    </div>
                  </div>
                  <div
                    className="flex"
                    style={{
                      marginBottom: "15px",
                      alignItems: "center",
                      gap: ".2rem",
                    }}
                  >
                    <img
                      className="avatar"
                      src={require(`../../assests/images/avatar/${review.image}`)}
                    />
                    <p>
                      <strong>{review.name} </strong> <br />
                      {review.location}
                    </p>
                  </div>
                </div>
              )
            );
          })}
        </div>
        <div>
          {reviews.map((review, index) => {
            return (
              index % 3 === 2 && (
                <div key={index} style={{ marginBottom: "2rem" }}>
                  <div
                    className={`reviewbox ${theme.name}`}
                    style={{ backgroundColor: theme.projectCard }}
                  >
                    <div>
                      ⭐️⭐️⭐️⭐️⭐️
                      <br />
                      {review.feedback}
                    </div>
                  </div>
                  <div
                    className="flex"
                    style={{
                      marginBottom: "15px",
                      alignItems: "center",
                      gap: ".2rem",
                    }}
                  >
                    <img
                      className="avatar"
                      src={require(`../../assests/images/avatar/${review.image}`)}
                    />
                    <p>
                      <strong>{review.name} </strong> <br />
                      {review.location}
                    </p>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default Reviews;
