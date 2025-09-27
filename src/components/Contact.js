import React from 'react';
import './Contact.css';

const Contact = () => (
  <section className="contact-section fade-in">
    <div className="contact-card">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-envelope contact-icon"></i>
          <p><a href="mailto:crohini90@gmail.com">crohini90@gmail.com</a></p>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone contact-icon"></i>
          <p>+919500897151</p>
        </div>
        <div className="contact-item">
          <i className="fab fa-linkedin contact-icon"></i>
          <p>
            <a href="https://linkedin.com/in/rohini-chellapandian" target="_blank" rel="noopener noreferrer">
              Rohini Chellapandian
            </a>
          </p>
        </div>
        <div className="contact-item">
          <i className="fab fa-github contact-icon"></i>
          <p>
            <a href="/" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </div>
        <div className="contact-item">
          <i className="fas fa-globe contact-icon"></i>
          <p>
            <a href="/" target="_blank" rel="noopener noreferrer">
              Portfolio
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
