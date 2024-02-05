import React , {useState} from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaBars,FaTimes  } from 'react-icons/fa';
import photo from "../assets/photo_2024-02-01_16-53-37.jpg"
import { BigHead } from '@bigheads/core'

function Navbar() {
    const [open,setOpen] = useState(false);
  return (
    <div className='nav-container'>
        <div className="left-nav">
            <img src={photo} alt="" />
            
  {/* <BigHead
    accessory="shades"
    body="chest"
    circleColor="blue"
    clothing="dressShirt"
    clothingColor="green"
    eyebrows="concerned"
    eyes="happy"
    faceMask={false}
    faceMaskColor="black"
    facialHair="none2"
    graphic="gatsby"
    hair="long"
    hairColor="black"
    hat="none5"
    hatColor="white"
    lashes
    lipColor="pink"
    mask
    mouth="sad"
    skinTone="light"
  /> */}
        </div>
        <div className="right-nav">
            <div className="hamburger-icon" onClick={()=>setOpen(true)}>
                <FaBars />  
            </div>
        </div>
        {open && <div className="sideBar">
            <button className='closeBtn' onClick={()=>setOpen(false)}> <FaTimes /> </button>
                  <ul>
                    <li>
                    <Link
                        activeClass="active"
                        className='sideLink'
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={500}
                        onClick={()=>setOpen(false)}
                    >
                        About
                    </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            className='sideLink'
                            to="AllProjects"
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration={500}
                            onClick={()=>setOpen(false)}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                    <Link
                        activeClass="active"
                        className='sideLink'
                        to="Contact"
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={500}
                        onClick={()=>setOpen(false)}
                    >
                        Contact
                    </Link>
                    </li>
                </ul>
        </div>
        }     
    </div>
  )
}

export default Navbar
