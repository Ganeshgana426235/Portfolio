import React from 'react'
import './Project.css'
import Project_data from '../../assets/Project_data'

const Project = () => {
  return (
    <div className='project' id='project'>
      <div>
        <h1>My Projects</h1>
      </div>
      <div className='myprojects'> 
  {Project_data.map((project, index) => {
    return (
      <div className='project-div' key={index}>
        <h3>{project.p_name}</h3>
        <img src={project.p_img} alt=""/>  
        <p> {project.p_info}</p> 
        <div className='plinks'>
        {project.p_live && <div className='plive' ><a href={project.p_live_link}>Live</a> </div>}
        {project.p_github && <div className='pgit'><a href={project.p_github_link}>GitHub</a></div>} 
        <div className='pdetails'><a href={project.p_details}>Details</a></div>            
      </div>
      </div>
    );
  })}
</div>

      <div className='project-showmore'>
        <p>Show More </p>
      </div>
    </div>
  )
}
/* <img key={index} src={project.p_img} alt=""/> */
export default Project
