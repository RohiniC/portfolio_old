import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { theme, setTheme } = useTheme(); // Destructuring theme and setTheme

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleTheme = () => {
    if (theme === 'light1') {
      setTheme('light2');
    } else if (theme === 'light2') {
      setTheme('darkA');
    } else if (theme === 'darkA') {
      setTheme('darkB');
    } else {
      setTheme('light1');
    }
  };

  return (
    <nav className={`navbar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="navbar-menu">
        <Link to="/" className="navbar-item" title="Home">
          <i className="fa fa-home"></i>
          <span className="navbar-item-text">Home</span>
        </Link>
        <Link to="/about" className="navbar-item" title="About">
          <i className="fa fa-user"></i>
          <span className="navbar-item-text">About</span>
        </Link>
        <Link to="/skills" className="navbar-item" title="Skills">
          <i className="fa fa-cogs"></i>
          <span className="navbar-item-text">Skills</span>
        </Link>
        <Link to="/experience" className="navbar-item" title="Experience">
          <i className="fa fa-briefcase"></i>
          <span className="navbar-item-text">Experience</span>
        </Link>
        <Link to="/projects" className="navbar-item" title="Projects">
          <i className="fa fa-folder"></i>
          <span className="navbar-item-text">Projects</span>
        </Link>
        <Link to="/contact" className="navbar-item" title="Contact">
          <i className="fa fa-envelope"></i>
          <span className="navbar-item-text">Contact</span>
        </Link>
      </div>
      <div className="navbar-controls">
        <button className="navbar-toggle" onClick={toggleCollapse}>
          <i className={`fa-solid fa-circle-chevron-${isCollapsed ? 'right' : 'left'} chevron-icon`}></i>
        </button>
        <button className="theme-toggle" onClick={toggleTheme}>
          <i className={`fa ${theme === 'light1' || theme === 'light2' ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
