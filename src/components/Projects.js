import React from "react";

import sofitelImg from "../assets/sofitel.jpeg";
import nppd from "../assets/nppd.jpeg";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <img src={sofitelImg} alt="Sofitel Manila App" />
          <h3>Sofitel Manila (Hotel Management App)</h3>
          <p>
            Developed using <strong>Flutter</strong>. I handled the SPA module, including home pages and similar pages.
            Implemented responsive design, smooth navigation, and functional layouts for hotel booking and management.
          </p>
        </div>

      <div className="project-card">
           <img src={nppd} alt="" />
  <h3>Health Consultancy App</h3>
  <p>
    Developed for <strong>NPPD Tech</strong> using <strong>React Native</strong>.  
    This application focuses mainly on health consultancy services, enabling 
    users to connect with medical professionals, book consultations, and 
    manage appointments efficiently. Designed with a clean UI and smooth navigation.
  </p>
</div>
<div className="project-card">
  <h3>Dating App – Flutter</h3>
  <p>
    Developed single-handedly using <strong>Flutter</strong>. 
    Implemented swipe-based matching system, user profile management, 
    and real-time chat functionality.
  </p>

  <p>
    Used <strong>Provider</strong> for state management to ensure scalable 
    and maintainable architecture. Integrated Firebase for authentication 
    and real-time database operations.
  </p>

  <p>
    Also developed a <strong>Hangout feature</strong> allowing users to create 
    and join social meetups, enhancing user engagement and interaction.
  </p>
</div>
      </div>
    </section>
  );
};

export default Projects;