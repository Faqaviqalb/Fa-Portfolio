import React from 'react'
import photo from "../assets/img-1 (1).png"
import photo2 from "../assets/Untitled.png"

function AllProjects() {
  return (
    <div className='projects-container' id="AllProjects">
      <h1>Latest Projects</h1>
      <div className="projects">
        <div className="project">
          <div className="project-img">
            <img src={photo} className='w-100' />
          </div>
          <div className="project-text">
            <h2>Green Plant Store</h2>
            <span className='technologies'>Technologies: HTML, CSS, Bootstrap, React, Redux</span>
            <button><a href="https://greenplantstore.netlify.app/" target='_blank'><span>View Work</span></a></button>
          </div>
        </div>
        <div className="project">
          <div className="project-img">
            <img src={photo2} className='w-100' />
          </div>
          <div className="project-text">
            <h2>A Simple Form With Authentication</h2>
            <span className='technologies'>Technologies: HTML, CSS, Bootstrap, JQuery</span>
            <button><a href="https://3stepsform.netlify.app/" target='_blank'><span>View Work</span></a></button>
          </div>
        </div>
      </div>

      
      
    </div>
  )
}

export default AllProjects
