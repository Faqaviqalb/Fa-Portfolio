import React from 'react'
import { FaLinkedinIn,FaInstagram,FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer-container'>
        <button className='contact-link'><a href="https://www.linkedin.com/in/farnaz-qaviqalb-636b2a291/" target="_blank"><span><FaLinkedinIn /></span></a></button>
        <button className='contact-link'><a href="https://github.com/Faqaviqalb" target="_blank"><span><FaGithub /></span></a></button>
        <button className='contact-link'><a href="https://www.instagram.com/farnaz.qaviqalb/" target="_blank"><span><FaInstagram /></span></a></button>
      
    </div>
  )
}

export default Footer
