import React from 'react'
import hero from '../../assets/hero.jpg'
import { Link } from 'react-scroll'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import leetcode from '../../assets/leetcode.svg'
import './Home.css'
import resume from '../../assets/Ganesh-Resume.pdf'

const Home = () => {
    return(
        <div className='Hero-body' id='home'>
            <div>
                <img className='profile-pic' src={hero} alt='Hero'></img>
            </div>
            
            <div className='social-media'>
                <a href="https://www.linkedin.com/in/yerranagula-ganesh-22b362263" target='_blank' rel="noopener noreferrer">
                            <img src={linkedin} alt="Linked In"></img>
                            </a>
                <a href="https://github.com/Ganeshgana426235" target='_blank' rel="noopener noreferrer">
                <img src={github} alt="GitHub"></img></a>
                <a href="https://leetcode.com/u/Ganeshgana4262/" target='_blank' rel="noopener noreferrer">
                <img src={leetcode} alt="Leetcode"></img></a>
            </div>
            
            <h1><span>I am Y Ganesh,</span> Software Developer based in India</h1>
            <p>I am a software developer from Hyderabad, India, and a fresher looking for an opportunity to contribute </p>
            <div className='contact-hero'>
    <div className='connect-me'>
        <button className='connect-btn'>
            <Link to="contact" smooth={true} duration={500}>
                Connect with me
            </Link>
        </button>
    </div>
    
    <div className='my-resume'>
        <button className='resume-btn' onClick={() => window.open(resume, '_blank', 'noopener,noreferrer')}>
            My Resume
        </button>
    </div>
</div>

        </div>
    )
}

export default Home