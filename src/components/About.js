// src/components/About.js
import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    aboutRef.current.classList.add('fade-in');
  }, []);

  return (
    <section ref={aboutRef} className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <p>
            Hi, I'm Rohini Chellapandian, a Technical Architect with over 13 years of experience in the software industry. My journey began as a developer, and since then, I've been passionate about crafting robust and scalable solutions.
          </p>
          <p>
            My expertise spans HTML, CSS, JavaScript (ES6+), and frameworks like React, Angular, and Bootstrap. I specialize in creating intuitive user interfaces and designing backend systems with Node.js and MongoDB.
          </p>
          <p>
            Currently, I lead technical initiatives at Payoda Technologies, focusing on delivering impactful solutions and mentoring junior developers. I enjoy exploring new technologies to stay ahead in this ever-evolving field.
          </p>
          <p>
            Beyond work, I'm an avid reader, enjoy exploring new cuisines, and love spending time with my family. Let's connect and discuss how we can collaborate on your next project!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
