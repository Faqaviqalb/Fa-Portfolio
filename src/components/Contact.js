import React from 'react'
import { FaPhone,FaWhatsapp,FaMapMarkerAlt ,FaPhoneVolume,FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div className='contact-container' id="Contact">
      <div className="more-info">
        <div className="information">
            <div className="info-icon">
                <FaMapMarkerAlt />
            </div>
            <h2>Location</h2>
            <p>127.0.0.1</p>
            <p>Freelancer</p>
        </div>
        <div className="information">
            <div className="info-icon">
                <FaEnvelope />
            </div>
            <h2>Email Me</h2>
            <p>fqaviqalb@gmail.com</p>
        </div>
        <div className="information">
            <div className="info-icon">
                <FaPhoneVolume />
            </div>
            <h2>Call Now</h2>
            <p><FaPhone /> <span>09910815849</span></p>
            <p><FaWhatsapp /> <span>9910815849</span></p>
        </div>
      </div>
    </div>
  )
}

export default Contact
