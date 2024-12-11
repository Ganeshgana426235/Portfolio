import React, { Component } from 'react'
import './Navbar.css'
import signature from '../../assets/Signature GaNeSh.png'
import { Link } from 'react-scroll';

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <img src={signature} alt='Signature'></img>
        <ul className='nav-menu'>
        <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="project" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact Me
            </Link>
          </li>
        </ul>
        <div className='connect'><Link to="contact" smooth={true} duration={500}>Connect with me </Link></div>
      </div>
    )
  }
}
