// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => (
  <section className="projects-section fade-in">
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="project-item">
        <h3>Project #1: Localization</h3>
        <p className="role">Role: Team Lead / Full-stack Developer</p>
        <p className="technologies">Technologies: React, Backbone, Gatsby, Bootstrap, HTML5, CSS3, REST web service, Node.js, MongoDB</p>
        <p className="description">Description: Localize offers powerful solutions for automating the translation of web, backend, mobile, and file-based content, saving development time and money with tools and libraries.</p>
      </div>
      <div className="project-item">
        <h3>Project #2: Networking Application (Name Confidential)</h3>
        <p className="role">Role: Team Lead / Developer</p>
        <p className="technologies">Technologies: Angular, Underscore, HTML5, CSS3, REST web service, jQuery</p>
        <p className="description">Description: This is a web-based application to manage networking switches and WiFi.</p>
      </div>
    </div>
  </section>
);

export default Projects;
