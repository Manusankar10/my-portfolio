import React from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>

      <div className="contact-container">

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>
            <a href="mailto:manusankarrg@gmail.com">
              manusankarrg@gmail.com
            </a>
          </p>
        </div>

        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h3>Phone</h3>
          <p>
            <a href="tel:+917539986664">
              +91 7539986664
            </a>
          </p>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <h3>LinkedIn</h3>
          <p>
            <a 
              href="https://www.linkedin.com/in/manusankar10/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Manusankar10
            </a>
          </p>
        </div>

        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <h3>GitHub</h3>
          <p>
            <a 
              href="https://github.com/Manusankar10" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Manusankar10
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;