import React, { useEffect, useState } from "react";

const Hero = () => {
  const roles = ["Flutter Developer", "React Native Developer", "Mobile App Expert"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < roles[index].length) {
      setTimeout(() => {
        setText(text + roles[index][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
    } else {
      setTimeout(() => {
        setCharIndex(0);
        setText("");
        setIndex((index + 1) % roles.length);
      }, 1500);
    }
  }, [charIndex, index, roles, text]);

  return (
    <header className="hero">
      <h1 className="hero-title">Manu Sankar R G</h1>
      <p className="typing">{text}|</p>
      <a href="https://manuresume-dbf3c6.tiiny.site" className="resume-btn" download>
        Download Resume
      </a>
    </header>
  );
};

export default Hero;