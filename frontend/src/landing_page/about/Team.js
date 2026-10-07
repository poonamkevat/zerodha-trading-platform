import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top ">
        <h1 className=" text-center mt-5 ">People</h1>
      </div>

      <div
        className="row p-3  text-muted "
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/punam.png"
            style={{
              borderRadius: "100%",
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "top center",
              background: "#fff",
            }}
          />
          <h4 className="mt-5">Poonam Kevat</h4>
          <h6>Student</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Hello, I’m Poonam Kevat, a B.Tech Computer Science Engineering
            student with a strong interest in web development and software
            engineering
          </p>
          <p>
            I enjoy building practical and user-friendly web applications using
            technologies like React, Node.js, Express.js, and MongoDB. I am
            always interested in learning new technologies and improving my
            problem-solving skills.
          </p>
          <p>
            My goal is to start my career as a software developer where I can
            apply my technical skills, learn from experienced professionals, and
            contribute to meaningful projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
