import React from 'react';
import './Bottom.css'; // Import the CSS file for styling
import home from '../../assets/home.svg'
import about from '../../assets/about.svg'
import project from '../../assets/project.svg'
import contact from '../../assets/contact.svg'


const BottomNavbar = () => {
  return (
    <div className="bottom-navbar">
      <a href="#home" className="nav-link">
        <i className="fas fa-home"></i> <img src={home} alt='home' className='bottom-img'></img>
        <span>Home</span>
      </a>
      <a href="#about" className="nav-link">
        <i className="fas fa-user"></i> <img src={about} alt='about' className='bottom-img'></img>
        <span>About</span>
      </a>
      <a href="#project" className="nav-link">
        <i className="fas fa-briefcase"></i> <img src={project} alt='projects' className='bottom-img'></img>
        <span>Projects</span>
      </a>
      <a href="#contact" className="nav-link">
        <i className="fas fa-envelope"></i> <img src={contact} alt='contact' className='bottom-img'></img>
        <span>Contact</span>
      </a>
    </div>
  );
};

export default BottomNavbar;
