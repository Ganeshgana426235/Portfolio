import React from 'react'
import './About.css'
import aboutpic from '../../assets/aboutpic.jpg'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className='about-head'>
            <h1>About Me</h1>
            
        </div>
        <div className='about-body'>
            <div> 
                <img src={aboutpic} alt='My Profile'></img>
            </div>
            <div className='aboutdetails'>
                <p className='para'> I am Ganesh, a passionate software developer based in india and i am currently pusrsuing a B.Tech degree. I specialize in Java, Python, Web development, and data stuctures and algorithm.<br></br> My journey into tech has been fueled by my curiosity and a drive to build impactful solutions. I enjoy tackling challenges head-on, from creating efficient algorithms to developing user-friendly web applications </p>
                <div className='skills'>
                    <div className='skill'><p>Html</p><hr style={{width:'80%'}}></hr></div>
                    <div className='skill'><p>Css</p><hr style={{width:'70%'}}></hr></div>
                    <div className='skill'><p>Java Script</p><hr style={{width:'70%'}}></hr></div>
                    <div className='skill'><p>React Js</p><hr style={{width:'50%'}}></hr></div>
                    <div className='skill'><p>Java</p><hr style={{width:'80%'}}></hr></div>
                    <div className='skill'><p>Python</p><hr style={{width:'80%'}}></hr></div>
                    <div className='skill'><p>C</p><hr style={{width:'60%'}}></hr></div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About
