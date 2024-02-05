import React, { useState } from 'react'
import { FaTimes  } from 'react-icons/fa';
import photo from "../assets/photo_2024-02-01_16-04-20.jpg"
import Skill from './skill';

function About() {
  const [isOpen,setIsOpen ] = useState(false);
  const skills =[
    {
      name: "HTML",
      percentage : "90%"
    },
    {
      name: "CSS",
      percentage : "90%"
    },
        {
      name: "Javascript",
      percentage : "80%"
    },
    {
      name: "JQuery",
      percentage : "80%"
    },
    {
      name: "Bootstrap",
      percentage : "90%"
    },
        {
      name: "React.js",
      percentage : "80%"
    },
        {
      name: "Redux",
      percentage : "85%"
    },
    {
      name: "Python",
      percentage : "30%"
    },
        {
      name: "Flask",
      percentage : "25%"
    },
  ]
  return (
    <div className='about-container' id="About">
        <div className="my-photo">
            <img src={photo} alt="my-photo" />
        </div>
        <div className="about-me">
            Hey there! I'm a skilled front-end developer with a year of professional experience under my belt. I'm all about crafting visually stunning and user-friendly interfaces. I'm always up for a challenge. Let's team up and create some truly remarkable digital experiences together!
            <button className='about-btn' onClick={()=>setIsOpen(true)}>More About Me</button>
        {isOpen && 
          <div className={isOpen ? "more-modal active-modal" : "more-modal"}>
            <button className='closeBtn' onClick={()=>setIsOpen(false)}> <FaTimes /> </button>
            <h2>My Skills</h2>
            {skills.map((skill) => {return <Skill {...skill}/>})}
          </div>
        }
        </div>

        <div class="custom-shape-divider-bottom-1706869305">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" class="shape-fill"></path>
            </svg>
        </div>
      
    </div>
  )
}

export default About
