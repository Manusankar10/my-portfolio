import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills</h2>

      <div className="skills-container">

        <div className="skill-card">
          <h3>Mobile Development</h3>
          <ul>
            <li>Flutter (1+ Year Experience)</li>
            <li>React Native</li>
            <li>Dart</li>
            <li>Android & iOS App Development</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Backend & Database</h3>
          <ul>
            <li>Firebase (Auth, Firestore, Storage)</li>
            <li>REST API Integration</li>
            <li>Node.js (Basics)</li>
            <li>MySQL</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Tools & Others</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Postman</li>
            <li>UI/UX Design Principles</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;