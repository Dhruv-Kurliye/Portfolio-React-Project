import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div
        className="container mb-3 about_container"
        style={{ minHeight: "100%" }}
      >
        <div className="conatainer main_conatainer d-flex justify-contain-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 600 }}>
            <h2>Meet Dhruv Kurliye</h2> <hr />
            <p style={{ letterSpacing: ".5px", lineHeight: 2, fontSize:18 }}>
              A budding computer engineering student with a
              strong passion for web development. With a knack for coding and an
              eye for design, Dhruv is on a mission to create innovative and
              user-friendly web experiences.
            </p> <hr />
          </div>
          <div className="right_container">
            <img src="DRK.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
