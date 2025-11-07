import React from "react";

export default function Skills() {
  const skills = [
    "Laravel",
    "React",
    "Node.js",
    "MySQL",
    "Bootstrap",
    "GitHub",
    "AI/ML (Basics)",
  ];
  return (
    <div className="container my-5">
      <h2>Skills</h2>
      <ul className="list-inline">
        {skills.map((skill, index) => (
          <li key={index} className="list-inline-item badge bg-primary m-2 p-2">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
