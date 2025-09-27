// src/components/Experience.js
import React from 'react';
import './Experience.css';

const experiences = [
  {
    title: "Technical Architect",
    company: "Payoda Technologies, Coimbatore",
    duration: "April 2024 - Present",
    details: "Leading the architecture of complex projects, mentoring junior developers, and ensuring the technical quality of all deliverables."
  },
  {
    title: "Project Partner",
    company: "Payoda Technologies, Coimbatore",
    duration: "October 2022 - March 2024",
    details: "Managed project teams, coordinated with clients, and oversaw the successful delivery of numerous projects."
  },
  {
    title: "Associate Project Partner I",
    company: "Payoda Technologies, Coimbatore",
    duration: "September 2020 - October 2022",
    details: "Managed project teams, coordinated with clients, and oversaw the successful delivery of numerous projects."
  },
  {
    title: "Senior Project Specialist",
    company: "Payoda Technologies, Coimbatore",
    duration: "August 2014 - September 2020",
    details: "Developed high-quality software solutions, performed code reviews, and collaborated with cross-functional teams."
  },
  {
    title: "Senior Software Engineer",
    company: "Aspire Systems Pvt Ltd, Chennai",
    duration: "June 2011 – August 2014",
    details: "Built and maintained web applications, optimized performance, and contributed to the design of new features."
  }
];

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="container">
        <h1>Experience</h1>
        <div className="timeline">
          <div className="climber"><i className="fa-solid fa-person-running"></i></div>
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <h2>{exp.title}</h2>
                <h3>{exp.company}</h3>
                <span>{exp.duration}</span>
                <p>{exp.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
