import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCircleQuestion, faFolder, faGem, faHome, faIdBadge } from '@fortawesome/free-regular-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import logo from './assets/Untitled-removebg-preview (1).png'
import './Navbar.css'

function Navbar() {
  const location=useLocation();
  const secoptions= (path) => ({
     fontSize: location.pathname=== path ? "xx-large" : "",
     color: location.pathname === path ? "orchid" : "dimgray",
     transition:".3s"
  });

  return (
    <>
    <nav>
      <div className="imgdiv">
        <br />
      <img src={logo} alt="Logo" />
      </div>
      <div className="sectionlinkdiv">
        <Link to="/" className='i' style={secoptions("/")}><FontAwesomeIcon icon={faHome}/></Link>
        <Link to="/about" className='i' style={secoptions("/about")}><FontAwesomeIcon icon={faCircleQuestion}/></Link>
        <Link to="/skill" className='i' style={secoptions("/skill")}><FontAwesomeIcon icon={faGem}/></Link>
        <Link to="/service" className='i' style={secoptions("/service")}><FontAwesomeIcon icon={faBell}/></Link>
        <Link to="/project" className='i' style={secoptions("/project")}><FontAwesomeIcon icon={faFolder}/></Link>
        <Link to="/contact" className='i' style={secoptions("/contact")}><FontAwesomeIcon icon={faIdBadge}/></Link>
      </div>
      <div className="copyrightdiv">
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </nav>
    </>
  )
}

export default Navbar