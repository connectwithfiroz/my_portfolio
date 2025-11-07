import React from "react";

export default function Projects() {
  const projects = [
    {
      name: "QuizSagar",
      desc: "Online quiz platform",
      link: "https://quizsagar.com",
    },
    {
      name: "Qnote",
      desc: "Note-taking app with YouTube sync",
      link: "https://notes.quizsagar.com",
    },
    {
      name: "TadkaZone",
      desc: "Digital menu and restaurant ordering system",
      link: "https://tadkazone.com",
    },
  ];

  //for returing dynamic project
  return (
    <div className="container my-5">
      <h2>Projects</h2>
      <div className="row">
        {projects.map((proj, index) => (
          <div className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5>{proj.name}</h5>
                <p>{proj.desc}</p>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-primary"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
