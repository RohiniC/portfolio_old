// Skills.js

import React from 'react';
import './Skills.css';

const Skills = () => (
  <section className="skills-section fade-in">
    <div className="skills-container">
      <h2>Technical Skills</h2>
      <div className="card">
        <h3>Technologies</h3>
        <ul>
          <li>JavaScript</li>
          <li>Object Oriented Javascript</li>
          <li>ES6</li>
          <li>TypeScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Less</li>
          <li>NodeJS</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div className="card">
        <h3>Tools</h3>
        <ul>
          <li>Eclipse</li>
          <li>Sublime</li>
          <li>Visual Studio Code</li>
          <li>SVN</li>
          <li>GIT</li>
          <li>Grunt</li>
        </ul>
      </div>
      <div className="card">
        <h3>Frameworks</h3>
        <ul>
          <li>Angular</li>
        </ul>
      </div>
      <div className="card">
        <h3>Libraries</h3>
        <ul>
          <li>React</li>
          <li>Backbone</li>
          <li>D3JS</li>
          <li>UnderscoreJS</li>
          <li>Bootstrap</li>
          <li>jQuery</li>
          <li>Jasmine Unit Testing</li>
          <li>Protractor</li>
          <li>REST web services</li>
          <li>React Testing Library</li>
          <li>Express</li>
        </ul>
      </div>
      <div className="card">
        <h3>Operating Systems</h3>
        <ul>
          <li>Linux</li>
          <li>MacOS</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
