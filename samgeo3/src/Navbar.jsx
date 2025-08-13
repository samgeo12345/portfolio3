import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCircleQuestion, faFolder, faGem, faHome, faIdBadge } from '@fortawesome/free-regular-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import logo from './assets/Untitled.png'
import './Navbar.css'

function Navbar() {
  const location=useLocation();

  return (
    <>
    <nav >
      <div className="imgdiv">
        <br />
      <img src={logo} alt="Logo" />
      </div>
      <div className="sectionlinkdiv">
        <Link to="/"  className='i' style={{ color: location.pathname === "/" ? "blueviolet" : "dimgray",fontSize: location.pathname=== "/" ? "xx-large" : "" }}><FontAwesomeIcon icon={faHome}/></Link>
        <Link to="/about" className='i' style={{ color: location.pathname === "/about" ? "blueviolet" : "dimgray",fontSize: location.pathname=== "/about" ? "xx-large" : "" }}><FontAwesomeIcon icon={faCircleQuestion}/></Link>
        <Link to="/skill" className='i' style={{ color: location.pathname === "/skill" ? "blueviolet" : "dimgray",fontSize: location.pathname=== "/skill" ? "xx-large" : "" }}><FontAwesomeIcon icon={faGem}/></Link>
        <Link to="/service" className='i' style={{ color: location.pathname === "/service" ? "blueviolet" : "dimgray",fontSize: location.pathname=== "/service" ? "xx-large" : "" }}><FontAwesomeIcon icon={faBell}/></Link>
        <Link to="/project" className='i' style={{ color: location.pathname === "/project" ? "blueviolet" : "dimgray",fontSize: location.pathname=== "/project" ? "xx-large" : "" }}><FontAwesomeIcon icon={faFolder}/></Link>
        <Link to="/contact" className='i' style={{ color: location.pathname === "/contact" ? "blueviolet" : "dimgray",fontSize: location.pathname=== "/contact" ? "xx-large" : "" }}><FontAwesomeIcon icon={faIdBadge}/></Link>
      </div>
      <div className="copyrightdiv">
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </nav>
    </>
  )
}

export default Navbar